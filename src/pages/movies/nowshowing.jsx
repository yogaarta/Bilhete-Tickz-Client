//Module
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ChevronDown } from "react-bootstrap-icons";
//Components Next
//Components Local
import LayoutLoggedIn from "../../components/LayoutLoggedIn/LayoutLoggedIn";
//Assets
import Card from "../../assets/img/Card.png";
//CssModule
import styles from "../../styles/Movies.module.css";
import NowShowingCard from "../../components/NowShowingCard";
import UpcomingMoviesCard from "../../components/UpcomingMoviesCard/index";
import { month } from "../../modules/dummy";
//Axios
import { getNowShowingMoviesAxios} from "../../modules/movies";

const Movies = () => {
  const [nowMovies, setNowMovies] = useState([]);
  const [sortDrop, setSortDrop] = useState(false);
  const [orderDrop, setOrderDrop] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    const { name="", sort="", order="", page=""} = router.query;
    getNowShowingMoviesAxios(name, sort, order, page)
      .then((res) => {
        setNowMovies(res.data?.data);
      })
      .catch((err) => {
        console.log(err);
        setErrMsg(err.response?.data.msg);
      })
  }, [router]);

  const handleSearcMovie = (e) => {
    e.preventDefault()
    router.push(`/movies?name=${search}&page=1`)
    const { name} = router.query;
    getNowShowingMoviesAxios(name, "", "", "")
    .then((res) => {
      setNowMovies(res.data?.data)
    })
    .catch((err) => {
      console.log(err)
    })
  };

  return (
    <LayoutLoggedIn title="Movies">
      <div className="container">
        <div className={`mt-4`}>
          <div className="d-flex align-items-center justify-content-between">
            <h4
              className={`fw-bold ${styles.headerCard} ${
                false ? styles.headerActive : null
              }`}
            >
              Now Showing
            </h4>
            <div className="d-flex gap-2">
              <form className={styles.formInput} onSubmit={handleSearcMovie}>
                <input
                  type="text"
                  name="name"
                  placeholder="Search movie"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </form>
              <div>
                <div
                  onClick={() => {
                    setOrderDrop(!orderDrop);
                  }}
                  className={styles.sortBy}
                >
                  Order <ChevronDown />
                </div>
                {orderDrop ? (
                  <div className={`${styles.menuOrder}`}>
                    <p
                      onClick={() => {
                        if (router.query.sort) {
                          router.push(
                            `/movies?sort=${router.query.sort}&order=asc`
                          );
                        }
                        setOrderDrop(!orderDrop);
                      }}
                    >
                      ASC
                    </p>
                    <p
                      onClick={() => {
                        if (router.query.sort) {
                          router.push(
                            `/movies?sort=${router.query.sort}&order=desc`
                          );
                        }
                        setOrderDrop(!orderDrop);
                      }}
                    >
                      DESC
                    </p>
                  </div>
                ) : null}
              </div>
              <div>
                <div
                  onClick={() => {
                    setSortDrop(!sortDrop);
                  }}
                  className={styles.sortBy}
                >
                  Sort By <ChevronDown />
                </div>
                {sortDrop ? (
                  <div className={`${styles.menuSort}`}>
                    <p
                      onClick={() => {
                        router.push(`/movies?sort=name&order=asc`);
                        setSortDrop(!sortDrop);
                      }}
                    >
                      Name
                    </p>
                    <p
                      onClick={() => {
                        router.push(`/movies?sort=release&order=asc`);
                        setSortDrop(!sortDrop);
                      }}
                    >
                      Relaese
                    </p>
                    <p
                      onClick={() => {
                        router.push(`/movies?page=1`);
                        setSortDrop(!sortDrop);
                      }}
                    >
                      All
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div
            className={`d-flex justify-content-evenly my-5 mx-5 gap-3 flex-md-row flex-wrap`}
          >
            {nowMovies.map((item) => (
              <NowShowingCard name={item.name} key={item.id} id={item.id} image={item.img} />
            ))}
          </div>
        </div>
      </div>
    </LayoutLoggedIn>
  );
};

export default Movies;