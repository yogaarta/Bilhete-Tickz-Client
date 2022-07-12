import React, { useEffect, useState } from "react";
import moment from "moment";
import Image from "next/image";

import LayoutLoggedIn from "../../components/LayoutLoggedIn/LayoutLoggedIn";
import CustomModal from "../../components/CustomModal/index";
import styles from "../../styles/Payment.module.css";

import Gpay from "../../assets/icon/gpay.png";
import Visa from "../../assets/icon/visa.png";
import Gopay from "../../assets/icon/gopay.png";
import Paypal from "../../assets/icon/paypal.png";
import Dana from "../../assets/icon/dana.png";
import Bca from "../../assets/icon/bca.png";
import Bri from "../../assets/icon/bri.png";
import Ovo from "../../assets/icon/ovo.png";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

//RequestAxios
import { postPaymentAxios } from "../../modules/payment";
import { currencyFormatter } from "../../helper/formatter";

export default function Payment() {
  const [show, setShow] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [method, setMethod] = useState("");
  const [buttonActive, setButtonActive] = useState(false)
  const router = useRouter();
  const orderInfo = useSelector((state) => state.order?.orderInfo);
  const seat = useSelector((state) => state.order?.seat);
  const total = useSelector((state) => state.order?.total);
  const { token } = useSelector((state) => state.auth?.loginData);
  const {
    userInfo: { id, firstname, lastname, email, phone_number },
  } = useSelector((state) => state.userInfo);
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
    setButtonActive(method)
  }, [token, method]);

  // const handlePayment = (e) => {
  //   e.preventDefault();
  //   const body = {
  //     quantity: seat.length,
  //     total,
  //     showtimes_id: orderInfo.showTimesId,
  //     seat: seat.join(","),
  //     users_id: id,
  //   };
  //   postPaymentAxios(body, token)
  //     .then((res) => {
  //       console.log(res);
  //       setIsError(false);
  //       setShow(true);
  //       setSuccessMsg("Payment checkout success");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setShow(true);
  //       setIsError(true);
  //       setErrMsg(err.response?.data.message.msg);
  //     });
  // };

  const primeButtonHandler = (e) => {
    e.preventDefault();
    const body = {
      quantity: seat.length,
      total,
      showtimes_id: orderInfo.showTimesId,
      seat: seat.join(","),
      users_id: id,
      payment_method: method
    };
    postPaymentAxios(body, token)
      .then((res) => {
        console.log(res);
        setIsError(false);
        router.push("/payment/confirm");
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setErrMsg(err.response?.data.message.msg);
      });
  };
  return (
    <>
      <LayoutLoggedIn title={"Payment"}>
        <main className={styles.mainContainer}>
          <div className={styles.leftPart}>
            <section className={styles.paymentInfo}>
              <div className={styles.title}>Payment Info</div>
              <div className={styles.card}>
                <div className={styles.cardItem}>
                  <div className={styles.key}>Date {"&"} time</div>
                  <div className={styles.value}>
                    {moment(orderInfo.date).format("dddd, DD MMM YYYY")}
                  </div>
                </div>
                <div className={styles.borderLine}></div>
                <div className={styles.cardItem}>
                  <div className={styles.key}>Movie title</div>
                  <div className={styles.value}>{orderInfo.name}</div>
                </div>
                <div className={styles.borderLine}></div>
                <div className={styles.cardItem}>
                  <div className={styles.key}>Cinema name</div>
                  <div className={styles.value}>{orderInfo.cinema}</div>
                </div>
                <div className={styles.borderLine}></div>
                <div className={styles.cardItem}>
                  <div className={styles.key}>Number of tickets</div>
                  <div className={styles.value}>{seat.length} pieces</div>
                </div>
                <div className={styles.borderLine}></div>
                <div className={styles.cardItem}>
                  <div className={styles.key}>Total payment</div>
                  <div className={styles.value}>{currencyFormatter.format(total)}</div>
                </div>
              </div>
            </section>
            <section className={styles.paymentMethod}>
              <div className={styles.title}>Choose a Payment Method</div>
              <div className={`${styles.card}`}>
                <div className={styles.cardRow}>
                  <div className={`${method === 'gpay' ? styles.paymentCardActive : styles.paymentCard}`}
                  onClick={()=> setMethod('gpay')}
                  >
                    <Image src={Gpay} className={styles.methodImg} />
                  </div>
                  <div className={`${method === 'visa' ? styles.paymentCardActive : styles.paymentCard}`}
                  onClick={()=> setMethod('visa')}
                  >
                    <Image src={Visa} className={styles.methodImg} />
                  </div>
                  <div className={`${method === 'gopay' ? styles.paymentCardActive : styles.paymentCard}`}
                  onClick={()=> setMethod('gopay')}
                  >
                    <Image src={Gopay} className={styles.methodImg} />
                  </div>
                  <div className={`${method === 'paypal' ? styles.paymentCardActive : styles.paymentCard}`}
                  onClick={()=> setMethod('paypal')}
                  >
                    <Image src={Paypal} className={styles.methodImg} />
                  </div>
                </div>
                <div className={styles.cardRow}>
                  <div className={`${method === 'dana' ? styles.paymentCardActive : styles.paymentCard}`}
                  onClick={()=> setMethod('dana')}
                  >
                    <Image src={Dana} className={styles.methodImg} />
                  </div>
                  <div className={`${method === 'bca' ? styles.paymentCardActive : styles.paymentCard}`}
                  onClick={()=> setMethod('bca')}
                  >
                    <Image src={Bca} className={styles.methodImg} />
                  </div>
                  <div className={`${method === 'bri' ? styles.paymentCardActive : styles.paymentCard}`}
                  onClick={()=> setMethod('bri')}
                  >
                    <Image src={Bri} className={styles.methodImg} />
                  </div>
                  <div className={`${method === 'ovo' ? styles.paymentCardActive : styles.paymentCard}`}
                  onClick={()=> setMethod('ovo')}
                  >
                    <Image src={Ovo} className={styles.methodImg} />
                  </div>
                </div>
                <div className={styles.or}>
                  <div className={styles.borderLine}></div>or
                  <div className={styles.borderLine}></div>
                </div>
                <div className={styles.payCash}>
                  Pay via cash.<span> See how it work</span>
                </div>
              </div>
            </section>
            <section className={styles.buttonContainer}>
              <div className={styles.prevStep}>Previous step</div>
              {buttonActive ? 
              <div onClick={() => {
                setShow(true)
              }} className={styles.payButton}>
                Pay your order
              </div>
              :
              <div  className={styles.prevStep}>
                Pay your order
              </div>
              }
            </section>
          </div>
          <div className={styles.rightPart}>
            <section className={styles.personalInfo}>
              <div className={styles.title}>Personal Info</div>
              <div className={styles.card}>
                <label htmlFor="name" className={styles.label}>
                  Full Name
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Input Full Name"
                    className={styles.input}
                    defaultValue={firstname + " " + lastname}
                  />
                </label>
                <label htmlFor="email" className={styles.label}>
                  Email
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Input Email"
                    className={styles.input}
                    defaultValue={email}
                  />
                </label>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number
                  <div className={styles.numberContainer}>
                    +62
                    <div className={styles.verBorder}></div>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Input Phone Number"
                      className={styles.inputNumber}
                      defaultValue={phone_number ? phone_number.slice(1) : ""}
                    />
                  </div>
                </label>
              </div>
            </section>
          </div>
        </main>
        <CustomModal
          show={show}
          setShow={setShow}
          title={"Payment"}
          body={isError ? errMsg : "Are you sure to pay your order?"}
          primeButtonHandler={primeButtonHandler}
        />
      </LayoutLoggedIn>
    </>
  );
}
