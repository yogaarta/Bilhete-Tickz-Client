//Module
import { GeoAlt, ChevronDown } from "react-bootstrap-icons";
import { useState } from "react";

//Components Next
import Image from "next/image";
//Components Local
import LayoutLoggedIn from "../../components/LayoutLoggedIn/LayoutLoggedIn";
//Assets
import ImageDetail from "../../assets/img/ImageDetail.png";
//CssModule
import styles from "../../styles/Movies.module.css";
import CardCinema from "../../components/CardCinemas";

const MovieDetail = () => {
  const [dropdown, setDropdown] = useState();
  return (
    <LayoutLoggedIn title="Movies Detail">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="col-md-3 text-center">
            <div className={styles.cardDetail}>
              <Image src={ImageDetail} alt="MovieDetail" />
            </div>
          </div>
          <div className={`col-md-8 ${styles.descDetail}`}>
            <h1>Spider-Man: Homecoming</h1>
            <p>Adventure, Action, Sci-Fi</p>
            <div className="mt-4">
              Release date
              <section className="text-dark">June 28, 2017</section>
            </div>
            <div className="mt-4">
              Duration
              <section className="text-dark">2 hours 13 minutes</section>
            </div>
            <div className="mt-4">
              Directed by
              <section className="text-dark">Jon Watss</section>
            </div>
            <div className="mt-4">
              Casts
              <section className="text-dark">
                Tom Holland, Michael Keaton, Robert Downey Jr.
              </section>
            </div>
          </div>
        </div>
        <div className={`mt-5 ${styles.synopsis}`}>
          Synopsis
          <section className="mt-4">
            Thrilled by his experience with the Avengers, Peter returns home,
            where he lives with his Aunt May, under the watchful eye of his new
            mentor Tony Stark, Peter tries to fall back into his normal daily
            routine - distracted by thoughts of proving himself to be more than
            just your friendly neighborhood Spider-Man - but when the Vulture
            emerges as a new villain, everything that Peter holds most important
            will be threatened.{" "}
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
          <div className="d-flex gap-3 justify-content-center flex-wrap mt-5">
          <CardCinema/>
          <CardCinema/>
          <CardCinema/>
          <CardCinema/>
          <CardCinema/>
          <CardCinema/>
          </div>
        </div>
      </div>
    </LayoutLoggedIn>
  );
};

export default MovieDetail;
