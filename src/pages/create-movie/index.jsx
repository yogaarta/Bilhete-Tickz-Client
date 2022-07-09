//Import from Package
import { Modal } from "react-bootstrap";
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
import { getCinemasBandungAxios, getCinemasJakartaAxios } from "../../modules/cinemas";
import { createMoviesAxios } from "../../modules/movies";

const CreateMovie = () => {
  const [showModal, setShowModal] = useState(false)
  const [drop, setDrop] = useState(false);
  const [location, setLocation] = useState([]);
  const [time, setTime] = useState([]);
  const [cinemaId, setCinemaId] = useState([]);
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
    price: "",
    director: "",
    show_date: "",
  });
  const inputFile = useRef()
  const getCinemasBandung = () => {
    getCinemasBandungAxios()
      .then((res) => {
        console.log(res);
        setLocation(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setDrop(!drop);
  };
  const getCinemasJakarta = () => {
    getCinemasJakartaAxios()
      .then((res) => {
        console.log(res);
        setLocation(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setDrop(!drop);
  };

  const handleInputFile = (e) => {
    const file = e.target.files[0]
    setForm({...form, img: file})
  }
  const formCreateMovie = () => {
    const body = new FormData()
    body.append("name", form.name)
    body.append("category", form.category)
    body.append("release_date", form.release_date)
    body.append("duration", form.hours+":"+form.minute)
    body.append("synopsis", form.synopsis)
    body.append("img", form.img)
    body.append("img", form.img)
    body.append("price", form.price)
    body.append("director", form.director)
    body.append("show_date", form.show_date)
    body.append("time", time)
    body.append("cinema_id", cinemaId)
    return body
  }

  const handleCreateMovies = (e) => {
    e.preventDefault()
    const body = formCreateMovie()
    createMoviesAxios(body, token).then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <LayoutLoggedIn title="Create Movie">
      <div className={`${styles.containerCreateMovie}`}>
        <div className="container d-flex flex-column flex-md-row gap-4">
          <div className="col-md-8">
            <h5 className="fw-bold">Movie Description</h5>
            <div className={`${styles.cardDescription}`}>
              <div className="d-flex p-4 gap-4">
                <div onClick={(e) => {
                  inputFile.current.click()
                  e.preventDefault()
                }} className="btn col-md-4 p-4 border border-1 rounded-3">
                  <Image src={ImageCreate} />
                </div>
                <input type="file" hidden ref={inputFile} onChange={handleInputFile}/>
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
                      onClick={getCinemasJakarta}
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
                    onClick={() => {
                      setCinemaId([...cinemaId, item.id]);
                    }}
                    className={`btn col-md-3 mt-4`}
                  >
                    <Image
                      key={item.id}
                      src={item.pictures ? item.pictures : <></>}
                      width={100}
                      height={30}
                      alt="cine"
                    />
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
              <div className="d-flex flex-wrap gap-1 py-4">
                <button onClick={() => {
                  setShowModal(true)
                }} className="btn btn-outline-primary ">+</button>
                {time.map((item) => (
                  <button className="btn">{item}</button>
                ))}
              </div>
            </div>
            <button onClick={handleCreateMovies} className={`mt-5 ${styles.btnCreate}`}>Create Movie</button>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={() => {setShowModal(false)}}>
        <Modal.Header closeButton>Choose time</Modal.Header>
        <Modal.Body>
          <div className="d-flex gap-2">
          <button onClick={() => {
            setTime([...time, "08:30am"])
          }} className="btn btn-outline-primary">08:30am</button>
          <button onClick={() => {
            setTime([...time, "10:30am"])
          }} className="btn btn-outline-primary">10:30am</button>
          <button onClick={() => {
            setTime([...time, "12:00am"])
          }} className="btn btn-outline-primary">12:00am</button>
          <button onClick={() => {
            setTime([...time, "04:30am"])
          }} className="btn btn-outline-primary">04:30am</button>
          <button onClick={() => {
            setTime([...time, "07:30pm"])
          }} className="btn btn-outline-primary">07:30pm</button>
          </div>
        </Modal.Body>
      </Modal>
    </LayoutLoggedIn>
  );
};

export default CreateMovie;
