//Module
import { useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";
//Components Next
//Components Local
import LayoutLoggedIn from "../../components/LayoutLoggedIn/LayoutLoggedIn";
//Assets
import Card from "../../assets/img/Card.png";
//CssModule
import styles from "../../styles/Movies.module.css";
import NowShowingCard from "../../components/NowShowingCard";

const Movies = () => {
  const [sortDrop, setSortDrop] = useState(false);
  const [orderDrop, setOrderDrop] = useState(false);
  const [filterDrop, setFilterDrop] = useState(false);
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
                    setSortDrop(!sortDrop);
                  }}
                  className={styles.sortBy}
                >
                  Order <ChevronDown />
                </div>
                {sortDrop ? (
                  <div className={`${styles.menuOrder}`}>
                    <p>Name</p>
                    <p>Time</p>
                  </div>
                ) : null}
              </div>
              <div>
                <div
                  onClick={() => {
                    setOrderDrop(!orderDrop);
                  }}
                  className={styles.sortBy}
                >
                  Sort By <ChevronDown />
                </div>
                {orderDrop ? (
                  <div className={`${styles.menuSort}`}>
                    <p>Name</p>
                    <p>Time</p>
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
                  <p>Month</p>
                  <p>Time</p>
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
