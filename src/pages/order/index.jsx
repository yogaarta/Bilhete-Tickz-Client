// Import
import { useState } from "react";
// Components Next
import Image from "next/image";
// Assets
import Cine from "../../assets/icon/cine.png"
// Component Local
import LayoutLoggedIn from "../../components/LayoutLoggedIn/LayoutLoggedIn";
// Css Module
import styles from "../../styles/Order.module.css";
//Dummy
import dummy from "../../modules/dummy";

const Order = () => {
  const [select, selectedSeat] = useState("");
  console.log(select);
  return (
    <LayoutLoggedIn title="Order">
      <div className={styles.orderContainer}>
        <div className="container">
          <div className="d-flex flex-column flex-md-row gap-4 p-4 justify-content-between">
            <div className={`col-md-8`}>
              <h5 className="fw-bold">Movie Selected</h5>
              <div className={`${styles.cardOrderPage} p-4 my-4`}>
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                  <h5 className="fw-bold">Spider-Man: Homecoming</h5>
                  <button className={styles.buttonChange}>Change Movie</button>
                </div>
              </div>
              <h5 className="fw-bold">Choose Your Seat</h5>
              <div className={`${styles.cardScreen} my-4`}>
                {/* Edit mulai dari sini */}
                MULAI DARI SINI
                {/* Edit mulai sampe sini */}
              </div>
              <div className={`d-flex justify-content-between ${styles.buttonOrder}`}>
                <button className={styles.buttonChangev2}>Change your movie</button>
                <button className={styles.buttonCheckout}>Checkout now</button>
              </div>
            </div>
            <div className={`col-md-4`}>
              <h5 className="fw-bold">Order Info</h5>
              <div className={`${styles.cardOrderPage} text-center p-4 my-4`}>
                <Image src={Cine} />
                <h4 className="mt-2">CineOne21 Cinema</h4>
                <div className={`d-flex mt-4 justify-content-between ${styles.orderInfo}`}>
                  <p>Movie selected</p>
                  <p className="fw-bold">Spider-Man: Homecoming</p>
                </div>
                <div className={`d-flex justify-content-between ${styles.orderInfo}`}>
                  <p>Tuesday, 07 July 2020</p>
                  <p className="fw-bold">02:00pm</p>
                </div>
                <div className={`d-flex justify-content-between ${styles.orderInfo}`}>
                  <p>One ticket price</p>
                  <p className="fw-bold">$10</p>
                </div>
                <div className={`d-flex justify-content-between ${styles.orderInfo} border-bottom`}>
                  <p>Seat choosed</p>
                  <p className="fw-bold">C4, C5, C6</p>
                </div>
                <div className={`d-flex mt-4 justify-content-between ${styles.orderInfo}`}>
                  <h5>Total Payment</h5>
                  <h5 className="fw-bold">$30</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutLoggedIn>
  );
};

export default Order;
