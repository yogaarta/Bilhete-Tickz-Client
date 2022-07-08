//Module
import { useState } from "react";
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
import { month } from "../../modules/dummy";

const Movies = () => {
  const [sortDrop, setSortDrop] = useState(false);
  const [orderDrop, setOrderDrop] = useState(false);
  const [filterDrop, setFilterDrop] = useState(false);
  const router = useRouter();
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
              Now Playing
            </h4>
            <div className="d-flex gap-2">
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
                        router.push(`/movies?sort=name`);
                      }}
                    >
                      Name
                    </p>
                    <p
                      onClick={() => {
                        router.push(`/movies?sort=time`);
                      }}
                    >
                      Time
                    </p>
                    <p
                      onClick={() => {
                        router.push(`/movies`);
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
            <NowShowingCard image={Card} />
            <NowShowingCard image={Card} />
            <NowShowingCard image={Card} />
            <NowShowingCard image={Card} />
          </div>
        </div>
        <div className={`mt-4`}>
          <div className="d-flex justify-content-between">
            <h4
              className={`fw-bold ${styles.headerCard} ${
                false ? styles.headerActive : null
              }`}
            >
              Upcoming Movies
            </h4>
            <div>
              <div
                onClick={() => {
                  setFilterDrop(!filterDrop);
                }}
                className={styles.sortBy}
              >
                Filter <ChevronDown />
              </div>
              {filterDrop ? (
                <div className={`${styles.menuFilter}`}>
                  {month.map((item) => (
                    <p
                      key={item.name}
                      onClick={() => {
                        router.push(`/movies?month=${item.name}`);
                      }}
                    >
                      {item.name}
                    </p>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
          <div
            className={`d-flex justify-content-evenly my-5 mx-5 gap-3 flex-md-row flex-wrap`}
          >
            <NowShowingCard image={Card} />
            <NowShowingCard image={Card} />
            <NowShowingCard image={Card} />
            <NowShowingCard image={Card} />
          </div>
        </div>
      </div>
    </LayoutLoggedIn>
  );
};

export default Movies;
