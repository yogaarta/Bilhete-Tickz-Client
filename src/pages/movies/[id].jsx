//Module
import { GeoAlt, ChevronDown } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
//Components Next
import Image from "next/image";
//Components Local
import LayoutLoggedIn from "../../components/LayoutLoggedIn/LayoutLoggedIn";
//Assets
import ImageDetail from "../../assets/img/ImageDetail.png";
import Loading from "../../assets/icon/loading.png";
//CssModule
import styles from "../../styles/Movies.module.css";
import CardCinema from "../../components/CardCinemas";
import { getMoviesDetailAxios } from "../../modules/movies";


const MovieDetail = () => {
  const [dropdown, setDropdown] = useState();
  const [movies, setMovies] = useState([])
  const router = useRouter()
  useEffect(() => {
    const {id} = router.query
    getMoviesDetailAxios(id)
    .then((res) => {
      console.log(res)
      setMovies(res.data?.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[router])
  return (
    <LayoutLoggedIn title="Movies Detail">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="col-md-3 col-3 text-center">
            <div className={styles.cardDetail}>
              <Image src={movies.img ? movies.img : Loading} width={movies.img ? "236px" : "100px"} height={movies.img ? "362px" : "100px"} alt="MovieDetail" />
            </div>
          </div>
          <div className={`col-md-8 col-8 ${styles.descDetail}`}>
            <h1>{movies.name? movies.name : ""}</h1>
            <p>{movies.category ? movies.category : ""}</p>
            <div className="mt-2 mt-md-4">
              Release date
              <section className="text-dark">{movies.release_date ? movies.release_date : ""}</section>
            </div>
            <div className="mt-2 mt-md-4">
              Duration
              <section className="text-dark">{movies.duration ? movies.duration : ""}</section>
            </div>
            <div className="mt-2 mt-md-4">
              Directed by
              <section className="text-dark">{""}</section>
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
        <div className={`${styles.showTimes}`}>
          <h4 className="text-center fw-bold mb-3">Showtimes and Tickets</h4>
          <div className="d-flex justify-content-center gap-3">
            <div className={`${styles.dropDate}`}>
              <input type="date" className={styles.unBlockable} />
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
                  <div className="my-2">Jogja</div>
                  <div className="my-2">Purwokerto</div>
                  <div className="my-2">Purwokerto</div>
                  <div className="my-2">Purwokerto</div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="d-flex justify-content-center gap-3 flex-wrap mt-5">
            <CardCinema/>
            <CardCinema/>
            <CardCinema/>
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
