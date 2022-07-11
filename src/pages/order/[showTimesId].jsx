// Import
import { useEffect, useState } from "react";
import moment from "moment";
// Components Next
import Image from "next/image";
// Assets
import Cine from "../../assets/icon/cine.png";
import Hi from "../../assets/icon/hi.png";
import Ebu from "../../assets/icon/ebu.png";
// Component Local
import LayoutLoggedIn from "../../components/LayoutLoggedIn/LayoutLoggedIn";
// Css Module
import styles from "../../styles/Order.module.css";
//Dummy
import { dummy, dummy1 } from "../../modules/dummy";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { currencyFormatter } from "../../helper/formatter";
import Loading from "../../components/Loading";
import { addOrder } from "../../redux/actionCreator/order";

const Order = () => {
  const [selectSeat, setSelectSeat] = useState([]);
  const [soldSeat, setSoldSeat] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showTimes, setShowTimes] = useState([]);
  const [showTimesInfo, setShowTimesInfo] = useState([]);
  const [msg, setMsg] = useState("");
  const [order, setOrder] = useState({
    name: "",
    cinema: "",
    date: "",
    time: "",
    price: 0,
    showTimesId: "",
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const { showTimesId } = router.query;

  const { token } = useSelector((state) => state.auth.loginData);

  const getShowTimeDetail = async () => {
    try {
      setIsLoading(true);
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_BE_HOST}/showtimes/detail/${showTimesId}`,
        config
      );
      setShowTimes(result.data.data.data);
      setShowTimesInfo(result.data.data.data[0]);
      setOrder({
        ...order,
        name: showTimesInfo.name,
        cinema: showTimesInfo.cinema_name,
        date: showTimesInfo.show_date,
        time: showTimesInfo.time,
        price: showTimesInfo.price,
        showTimesId,
      });
      let newSoldSeat = [];
      showTimes.map((item) => newSoldSeat.push(item.seat));
      setSoldSeat([...newSoldSeat]);
      setMsg("success");
      console.log(result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setMsg("error");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getShowTimeDetail();
  }, [msg]);

  useEffect(() => {
    if (!token) {
      router.push(
        {
          pathname: "/auth/login",
          query: { msg: "You need to login first!" },
        },
        "/auth/login"
      );
    }
  }, []);

  const checkOutHandler = () => {
    dispatch(
      addOrder(order, selectSeat, selectSeat.length * showTimesInfo.price)
    );
    router.push("/payment");
  };

  return (
    <>
      {isLoading && <Loading />}
      <LayoutLoggedIn title="Order">
        <div className={styles.orderContainer}>
          <div className="container">
            <div className="d-flex flex-column flex-md-row gap-4 p-4 justify-content-between">
              <div className={`col-md-8`}>
                <h5 className="fw-bold">Movie Selected</h5>
                <div className={`${styles.cardOrderPage} p-4 my-4`}>
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <h5 className="fw-bold">
                      {showTimesInfo && showTimesInfo.name}
                    </h5>
                    <button
                      className={styles.buttonChange}
                      onClick={() => router.push("/movies/nowshowing")}
                    >
                      Change Movie
                    </button>
                  </div>
                </div>
                <h5 className="fw-bold">Choose Your Seat</h5>
                <div className={`${styles.cardScreen} my-4`}>
                  <h6 className={`text-center ${styles.title}`}>Screen</h6>
                  <div
                    className={`d-flex justify-content-center ${styles.screen}`}
                  >
                    <div className={styles.exScreen}></div>
                  </div>
                  <div className={styles.seatContainer}>
                    <div className={styles.seatName}>
                      <div>A</div>
                      <div>B</div>
                      <div>C</div>
                      <div>D</div>
                      <div>E</div>
                      <div>F</div>
                      <div>G</div>
                    </div>
                    <div className={styles.seat}>
                      {dummy.map((item) => (
                        <button
                          key={item.id}
                          className={
                            soldSeat.includes(item.id)
                              ? styles.sold
                              : selectSeat.includes(item.id)
                              ? styles.selected
                              : styles.avalaible
                          }
                          onClick={() => {
                            let newSelectSeat = [...selectSeat];
                            if (
                              !soldSeat.includes(item.id) &&
                              newSelectSeat.includes(item.id)
                            ) {
                              setSelectSeat(
                                newSelectSeat.filter((seat) => seat !== item.id)
                              );
                            }
                            if (
                              !soldSeat.includes(item.id) &&
                              !newSelectSeat.includes(item.id)
                            ) {
                              newSelectSeat.push(item.id);
                              setSelectSeat(newSelectSeat);
                            }
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.seat}>
                      {dummy1.map((item) => (
                        <button
                          key={item.id}
                          className={
                            soldSeat.includes(item.id)
                              ? styles.sold
                              : selectSeat.includes(item.id)
                              ? styles.selected
                              : styles.avalaible
                          }
                          onClick={() => {
                            let newSelectSeat = [...selectSeat];
                            if (
                              !soldSeat.includes(item.id) &&
                              newSelectSeat.includes(item.id)
                            ) {
                              setSelectSeat(
                                newSelectSeat.filter((seat) => seat !== item.id)
                              );
                            }
                            if (
                              !soldSeat.includes(item.id) &&
                              !newSelectSeat.includes(item.id)
                            ) {
                              newSelectSeat.push(item.id);
                              setSelectSeat(newSelectSeat);
                            }
                          }}
                        />
                      ))}
                    </div>
                    <section>
                      <div className={styles.seatNumber}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                      </div>
                      <div className={styles.seatNumber}>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                        <div>11</div>
                        <div>12</div>
                        <div>13</div>
                        <div>14</div>
                      </div>
                    </section>
                  </div>
                  <h6 className={`mt-4 fw-bold ${styles.title}`}>
                    Seating Key
                  </h6>
                  <div
                    className={`d-flex justify-content-center mt-4 ${styles.legend}`}
                  >
                    <div className="col-md-3 d-flex gap-2">
                      <div className={`${styles.availableSeat}`}></div>
                      <h6>Available</h6>
                    </div>
                    <div className="col-md-3 d-flex gap-2">
                      <div className={`${styles.selectedSeat}`}></div>
                      <h6>Selected</h6>
                    </div>
                    <div className="col-md-3 d-flex gap-2">
                      <div className={`${styles.soldSeat}`}></div>
                      <h6>Sold</h6>
                    </div>
                  </div>
                </div>
                <div
                  className={`d-flex justify-content-between ${styles.buttonOrder}`}
                >
                  <button
                    className={styles.buttonChangev2}
                    onClick={() => router.push("/movies/nowshowing")}
                  >
                    Change your movie
                  </button>
                  {selectSeat.length === 0 ? (
                    <button className={styles.disbuttonCheckout}>
                      Checkout now
                    </button>
                  ) : (
                    <button
                      className={styles.buttonCheckout}
                      onClick={checkOutHandler}
                    >
                      Checkout now
                    </button>
                  )}
                </div>
              </div>
              <div className={`col-md-4`}>
                <h5 className="fw-bold">Order Info</h5>
                <div className={`${styles.cardOrderPage} text-center p-4 my-4`}>
                  <Image
                    src={
                      showTimesInfo && showTimesInfo.cinema_name === "CineOne21"
                        ? Cine
                        : showTimesInfo &&
                          showTimesInfo.cinema_name === "hiflix"
                        ? Hi
                        : Ebu
                    }
                  />
                  <h4 className="mt-2">
                    {showTimesInfo && showTimesInfo.cinema_name === "CineOne21"
                      ? "CineOne21 Cinema"
                      : showTimesInfo && showTimesInfo.cinema_name === "hiflix"
                      ? "Hiflix Cinema"
                      : "Ebu.id Cinema"}
                  </h4>
                  <div
                    className={`d-flex mt-4 justify-content-between ${styles.orderInfo}`}
                  >
                    <p>Movie selected</p>
                    <p className="fw-bold">
                      {showTimesInfo && showTimesInfo.name}
                    </p>
                  </div>
                  <div
                    className={`d-flex justify-content-between ${styles.orderInfo}`}
                  >
                    <p>
                      {moment(showTimesInfo && showTimesInfo.show_date).format(
                        "dddd, DD MMM YYYY"
                      )}
                    </p>
                    <p className="fw-bold">
                      {showTimesInfo && showTimesInfo.time}
                    </p>
                  </div>
                  <div
                    className={`d-flex justify-content-between ${styles.orderInfo}`}
                  >
                    <p>One ticket price</p>
                    <p className="fw-bold">
                      {currencyFormatter.format(
                        showTimesInfo && showTimesInfo.price
                      )}
                    </p>
                  </div>
                  <div
                    className={`d-flex justify-content-between ${styles.orderInfo} border-bottom`}
                  >
                    <p>Seat choosed</p>
                    <p className="fw-bold">
                      {selectSeat.length === 0
                        ? "Please select a seat"
                        : selectSeat.join(", ")}
                    </p>
                  </div>
                  <div
                    className={`d-flex mt-4 justify-content-between ${styles.orderInfo}`}
                  >
                    <h5>Total Payment</h5>
                    <h5 className="fw-bold">
                      {currencyFormatter.format(
                        showTimesInfo && selectSeat.length * showTimesInfo.price
                      )}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutLoggedIn>
    </>
  );
};

export default Order;
