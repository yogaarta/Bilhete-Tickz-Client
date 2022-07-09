//Import from Package
import { ChevronDown } from "react-bootstrap-icons";
import { useState, useRef } from "react";
//ComponentsLocal
import LayoutLoggedIn from "../../components/LayoutLoggedIn/LayoutLoggedIn";
//Compenents Next
import Image from "next/image";
//CssModule
import styles from "../../styles/CreateMovies.module.css";
//Assets
import ImageCreate from "../../assets/img/Card.png";
import Cine from "../../assets/icon/cine.png";
import Location from "../../assets/icon/location.png";
//Axios
import { getCinemasBandungAxios } from "../../modules/cinemas";

const CreateMovie = () => {
  const [drop, setDrop] = useState(false);
  const [location, setLocation] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "",
    release_date: "",
    cast: "",
    hours: "",
    minute: "",
    duration: "",
    synopsis: "",
    img: "",
    time: "",
    price: "",
    director: "",
    show_date: "",
  });
  const getCinemasBandung = () => {
    getCinemasBandungAxios()
      .then((res) => {
        console.log(res);
        setLocation(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
    setDrop(!drop);
  };
  console.log(location)
  return (
    <LayoutLoggedIn title="Create Movie">
      <div className={`${styles.containerCreateMovie}`}>
        <div className="container d-flex flex-column flex-md-row gap-4">
          <div className="col-md-8">
            <h5 className="fw-bold">Movie Description</h5>
            <div className={`${styles.cardDescription}`}>
              <div className="d-flex p-4 gap-4">
                <div className="col-md-4 p-4 border border-1 rounded-3">
                  <Image src={ImageCreate} />
                </div>
                <div className="col-md-7">
                  <div className="form-group">
                    <label
                      htmlFor="nameMovie"
                      className={`fw-light ${styles.labelFont}`}
                    >
                      Name Movie
                    </label>
                    <input
                      type="text"
                      className={`form-control mt-2 bg-light ${styles.inputForm}`}
                      id="nameMovie"
                      aria-describedby="emailHelp"
                      placeholder="Enter Title Film"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group my-3">
                    <label
                      htmlFor="category"
                      className={`fw-light ${styles.labelFont}`}
                    >
                      Category
                    </label>
                    <input
                      type="text"
                      className={`form-control mt-2 bg-light ${styles.inputForm}`}
                      id="category"
                      aria-describedby="emailHelp"
                      placeholder="Enter category Film"
                      value={form.category}
                      onChange={(e) => {
                        setForm({ ...form, category: e.target.value });
                      }}
                    />
                  </div>
                  <div className="d-flex gap-2">
                    <div className="col-md-6">
                      <div className="form-group my-3">
                        <label
                          htmlFor="category"
                          className={`fw-light ${styles.labelFont}`}
                        >
                          Realease Date
                        </label>
                        <input
                          type="date"
                          className={`form-control mt-2 bg-light ${styles.inputForm}`}
                          id="category"
                          aria-describedby="emailHelp"
                          placeholder="Enter category Film"
                          value={form.release_date}
                          onChange={(e) => {
                            setForm({ ...form, release_date: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group my-3">
                        <label
                          htmlFor="category"
                          className={`fw-light ${styles.labelFont}`}
                        >
                          Duration (hour / minute)
                        </label>
                        <div className="d-flex gap-2">
                          <input
                            type="text"
                            className={`form-control mt-2 bg-light ${styles.inputForm}`}
                            id="category"
                            aria-describedby="emailHelp"
                            placeholder="Hours"
                            value={form.hours}
                            onChange={(e) => {
                              setForm({ ...form, hours: e.target.value });
                            }}
                          />
                          <input
                            type="text"
                            className={`form-control mt-2 bg-light ${styles.inputForm}`}
                            id="category"
                            aria-describedby="emailHelp"
                            placeholder="Minutes"
                            value={form.minute}
                            onChange={(e) => {
                              setForm({ ...form, minute: e.target.value });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex px-4 gap-4">
                <div className="col-md-4">
                  <div className="form-group my-3">
                    <label
                      htmlFor="category"
                      className={`fw-light ${styles.labelFont}`}
                    >
                      Director
                    </label>
                    <input
                      type="text"
                      className={`form-control mt-2 bg-light ${styles.inputForm}`}
                      id="category"
                      aria-describedby="emailHelp"
                      placeholder="Enter Director Name"
                      value={form.director}
                      onChange={(e) => {
                        setForm({ ...form, director: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="form-group my-3">
                    <label
                      htmlFor="casts"
                      className={`fw-light ${styles.labelFont}`}
                    >
                      Casts
                    </label>
                    <input
                      type="text"
                      className={`form-control mt-2 bg-light ${styles.inputForm}`}
                      id="casts"
                      aria-describedby="emailHelp"
                      placeholder="Enter Casts Name"
                      value={form.cast}
                      onChange={(e) => {
                        setForm({ ...form, cast: e.target.value });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group my-3 px-4">
                <label
                  htmlFor="synopsis"
                  className={`fw-light ${styles.labelFont}`}
                >
                  Synopsis
                </label>
                <div>
                  <textarea
                    name="synopsis"
                    id="synopsis"
                    cols="30"
                    rows="10"
                    placeholder="Enter synopsis"
                    className={`form-control mt-2 bg-light ${styles.inputForm}`}
                    value={form.synopsis}
                    onChange={(e) => {
                      setForm({ ...form, synopsis: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Premiere Location</h5>
            <div className={`${styles.cardDescription}`}>
              <div className={`${styles.dropMenu}`}>
                <div
                  onClick={() => {
                    setDrop(!drop);
                  }}
                  className={`d-flex justify-content-between align-items-center ${styles.cardDrop}`}
                >
                  <div className="d-flex align-center-center gap-2 pt-3 col-md-7">
                    <div className="ms-4">
                      <Image src={Location} />
                    </div>
                    <p>Location</p>
                  </div>
                  <div className="col-md-2">
                    <ChevronDown />
                  </div>
                </div>
                {drop ? (
                  <div className={`${styles.menuLoc} d-flex flex-column`}>
                    <button
                      onClick={() => {}}
                      className={`btn my-2 ${styles.btnLoc}`}
                    >
                      Jakarta
                    </button>
                    <button
                      onClick={getCinemasBandung}
                      className={`btn my-2 ${styles.btnLoc}`}
                    >
                      Bandung
                    </button>
                  </div>
                ) : null}
              </div>
              <div className="d-flex flex-wrap gap-3 justify-content-between py-4">
                {location.map((item) => (
                  <div
                  className={`col-md-3 mt-4 ${
                    false ? styles.chooseCinema : null
                  }`}
                >
                  <Image key={item.id} src={item.pictures ? item.pictures : <></>} width={100} height={30} alt="cine" />
                </div>
                ))}
              </div>
            </div>
            <h5 className="fw-bold my-3">Showtimes</h5>
            <div className={`${styles.cardDescription}`}>
              <input
                type="date"
                name="shotimes"
                id="showtimes"
                className={styles.dateShowtimes}
                value={form.show_date}
                onChange={(e) => {
                  setForm({ ...form, show_date: e.target.value });
                }}
              />
              <div className="d-flex flex-wrap gap-3 justify-content-evenly py-4">
                <p>08:30am</p>
                <p>08:30am</p>
                <p>08:30am</p>
                <p>08:30am</p>
                <p>08:30am</p>
                <p>08:30am</p>
                <p>08:30am</p>
                <p>08:30am</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutLoggedIn>
  );
};

export default CreateMovie;
