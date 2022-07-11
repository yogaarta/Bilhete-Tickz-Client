//Module
import { GeoAlt, ChevronDown } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
//Components Next
import Image from "next/image";
//Components Local
import LayoutLoggedIn from "../../components/LayoutLoggedIn/LayoutLoggedIn";
//Assets
import Loading from "../../assets/icon/loading.gif";
//CssModule
import styles from "../../styles/Movies.module.css";
import CardCinema from "../../components/CardCinemas";
import { getMoviesDetailAxios, getShowTimesAxios } from "../../modules/movies";
import { paymentCheckAxios } from "../../modules/payment";
import { useSelector } from "react-redux";

const MovieDetail = () => {
  const [dropdown, setDropdown] = useState();
  const [movies, setMovies] = useState([]);
  const [cinemas, setCinemas] = useState([]);
  const [date, setDate] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showTimesId, setShowTimesId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [checkMsg, setCheckMsg] = useState('')

  const { token } = useSelector(state => state.auth.loginData)
  const router = useRouter();
  const {
    id = "",
    location = "",
    sort = "",
    order = "",
    page = "",
  } = router.query;

  useEffect(() => {
    getMoviesDetailAxios(id)
      .then((res) => {
        setMovies(res.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router]);

  useEffect(() => {
    getShowTimesAxios(id, location, date, sort, order, page)
      .then((res) => {
        console.log(res);
        setCinemas(res.data?.data);
      })
      .catch((err) => {
        setErrMsg(err.response?.data.message);
      });
    setDropdown(false);
  }, [router]);

  // useEffect(()=>{

  // },[checkMsg])

  const checkPayment = async () => {
    try {
      setIsLoading(true)
      const result = await paymentCheckAxios(token)
      console.log(result)
      // setCheckMsg(result.message)
      if (result.data.message === 'there are unpaid transactions') {
        router.push(`/payment/${result.data.data.id}`)
      }
      if (result.data.message === 'no unpaid transactions') {
        router.push(`/order/${showTimesId}`)
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <LayoutLoggedIn title="Movies Detail">
      <div className={`container`}>
        {movies.img ? (
          <>
            <div className="d-flex justify-content-between">
              <div className="col-md-3 col-3 text-center">
                <div className={styles.cardDetail}>
                  <Image
                    src={movies.img ? movies.img : Loading}
                    width={movies.img ? "236px" : "100px"}
                    height={movies.img ? "362px" : "100px"}
                    alt="MovieDetail" className={styles.image}
                  />
                </div>
              </div>
              <div className={`col-md-8 col-8 ${styles.descDetail}`}>
                <h1>{movies.name ? movies.name : ""}</h1>
                <p>{movies.category ? movies.category : ""}</p>
                <div className="mt-2 mt-md-4">
                  Release date
                  <section className="text-dark">
                    {movies.release_date
                      ? movies.release_date.slice(0, 10)
                      : ""}
                  </section>
                </div>
                <div className="mt-2 mt-md-4">
                  Duration
                  <section className="text-dark">
                    {movies.duration ? movies.duration : ""}
                  </section>
                </div>
                <div className="mt-2 mt-md-4">
                  Directed by
                  <section className="text-dark">
                    {movies.director ? movies.director : null}
                  </section>
                </div>
                <div className="mt-2 mt-md-4">
                  Casts
                  <section className="text-dark">
                    {movies.cast ? movies.cast : ""}
                  </section>
                </div>
              </div>
            </div>
            <div className={`mt-5 ${styles.synopsis}`}>
              Synopsis
              <section className="mt-4">
                {movies.synopsis ? movies.synopsis : ""}
              </section>
            </div>
          </>
        ) : (
          <div className="d-flex justify-content-center">
            <Image src={Loading} />
          </div>
        )}
        <div className={`${styles.showTimes}`}>
          <h4 className="text-center fw-bold mb-3">Showtimes and Tickets</h4>
          <div className="d-flex justify-content-center gap-3">
            <div className={`${styles.dropDate}`}>
              <input
                type="date"
                className={styles.unBlockable}
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  router.push(`/movies/${router.query.id}?date=${date}`);
                }}
              />
            </div>
            <div
              onClick={() => {
                setDropdown(!dropdown);
              }}
              className={`${styles.dropLoc} ${styles.unBlockable}`}
            >
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <GeoAlt />
                  <div>Location</div>
                </div>
                <div>
                  <ChevronDown />
                </div>
              </div>
              {dropdown ? (
                <div className={`position-absolute mt-3 ${styles.dropContent}`}>
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      if (router.asPath.includes("date")) {
                        router.push(
                          `/movies/${router.query.id}?location=jakarta&date=${router.query.date}`
                        );
                      }
                      router.push(
                        `/movies/${router.query.id}?location=jakarta`
                      );
                    }}
                    className="my-4"
                  >
                    Jakarta
                  </div>
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      if (router.asPath.includes("date")) {
                        router.push(
                          `/movies/${router.query.id}?location=bandung&date=${router.query.date}`
                        );
                      }
                      router.push(
                        `/movies/${router.query.id}?location=bandung`
                      );
                    }}
                    className="my-4"
                  >
                    Bandung
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="d-flex justify-content-center gap-3 flex-wrap mt-5">
            {cinemas.length > 0 ? (
              <>
                {cinemas.map((item) => (
                  <CardCinema
                    key={item.id}
                    address={item.address}
                    pictures={item.pictures}
                    time={item.list_time}
                    location={item.location}
                    price={item.price}
                    name={item.name}
                    showTimesId={showTimesId}
                    setShowTimesId={setShowTimesId}
                    checkPayment={checkPayment}
                  />
                ))}
              </>
            ) : (
              <>
                <h1>...</h1>
              </>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4 mt-md-5">
          <button className={styles.buttonPag}>1</button>
        </div>
      </div>
    </LayoutLoggedIn>
  );
};

export default MovieDetail;
