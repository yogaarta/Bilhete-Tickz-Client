//next Component
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
//localcomponent
import LayoutLoggedIn from "../components/LayoutLoggedIn/LayoutLoggedIn";
//cssmodule
import styles from "../styles/Home.module.css";
//assets
import Header from "../assets/img/headerImage.png";
import Card from "../assets/img/Card.png";
import NowShowingCard from "../components/NowShowingCard";
import UpcomingCard from "../components/UpcomingMoviesCard";
// Axios
import {getMoviesHomeAxios} from "../modules/movies"
// import { getUsersAction } from "../redux/actionCreator/users";

export default function Home() {
  // const { token } = useSelector((state) => state.auth.loginData);
  const [movies, setMovies] = useState([])
  const router = useRouter();
  // const dispatch = useDispatch();

  useEffect(() => {
    getMoviesHomeAxios()
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  const month = [
    { id: 1, month: "Januari" },
    { id: 2, month: "February" },
    { id: 3, month: "Maret" },
    { id: 4, month: "April" },
    { id: 5, month: "May" },
    { id: 6, month: "June" },
    { id: 7, month: "July" },
    { id: 8, month: "August" },
    { id: 9, month: "September" },
  ];

  return (
    <LayoutLoggedIn title="Home">
      <header className="d-flex flex-column flex-md-row justify-content-center py-5 align-items-center">
        <div
          className={`${styles.textHeader} ps-md-4 text-center text-md-start col-md-5 mb-5 mb-md-0`}
        >
          <p>Nearest Cinema, Newest Movie.</p>
          <h1>Find out now!</h1>
        </div>
        <div className="col-md-5 text-center">
          <Image src={Header} alt="header" />
        </div>
      </header>
      <main>
        <div className="d-flex justify-content-between px-5 align-items-center">
          <h4>Now Showing</h4>
          <p
            onClick={() => {
              router.push("/movies");
            }}
            className={`${styles.clickAble} text-primary`}
          >
            view all
          </p>
        </div>
        <div className={`d-flex justify-content-evenly my-5 mx-5 gap-4 flex-md-row`}>
          <NowShowingCard image={Card} />
          <NowShowingCard image={Card} />
          <NowShowingCard image={Card} />
          <NowShowingCard image={Card} />
          <NowShowingCard image={Card} />
        </div>
        <div
          className={`d-flex justify-content-between px-5 align-items-center ${styles.UpcomingRow}`}
        >
          <h4>Upcoming Movies</h4>
          <p
            onClick={() => {
              router.push("/movies");
            }}
            className={`${styles.clickAble} text-primary`}
          >
            view all
          </p>
        </div>
        <div className="d-flex justify-content-center gap-3 my-5 flex-md-row flex-wrap">
          {month.map((item) => (
            <button key={item.id} className={styles.buttonMonth}>
              {item.month}
            </button>
          ))}
        </div>
        <div className="d-flex justify-content-evenly my-5 mx-5 gap-4 flex-md-row flex-wrap">
          <UpcomingCard image={Card} />
          <UpcomingCard image={Card} />
          <UpcomingCard image={Card} />
          <UpcomingCard image={Card} />
          <UpcomingCard image={Card} />
        </div>
        <div className="container mt-5 text-center">
          <div className={styles.CardMember}>
            Be the vanguard of the <section>Moviegoers</section>{" "}
            <input
              type="text"
              className={`px-3 ${styles.inputMember}`}
              placeholder="Type your email"
            />
            <button className={styles.buttonMember}>Join now</button>
            <p className={styles.descMember}>
              By joining you as a Tickitz member, <br />
              we will always send you the latest updates via email .
            </p>
          </div>
        </div>
      </main>
    </LayoutLoggedIn>
  );
}
