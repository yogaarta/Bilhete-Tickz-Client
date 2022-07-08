import styles from "../../styles/Movies.module.css";
import Ebu from "../../assets/icon/ebu.png";
import Image from "next/image";

const CardCinema = () => {
  return (
    <div className={`col-lg-3 col-md-4 col-10 ${styles.CardCinemas}`}>
      <div
        className={`d-flex p-md-3 p-3 gap-3 justify-content-around align-items-center ${styles.cardBorder}`}
      >
        <div className="col-md-5 text-center">
          <Image src={Ebu} alt="cinemas" />
        </div>
        <div className={` ${styles.subTitle} col-md-6`}>
          <h3>ebv.id</h3>
          <p>Whatever street No.12, South Purwokerto</p>
        </div>
      </div>
      <div className={`d-flex gap-2 px-md-4 px-4 py-2 py-md-3 flex-wrap ${styles.Hours}`}>
        <p>00.00am</p>
        <p>00.00am</p>
        <p>00.00am</p>
        <p>00.00am</p>
        <p>00.00am</p>
        <p>00.00am</p>
        <p>00.00am</p>
      </div>
      <div className="d-flex px-md-4 px-4 py-2 py-md-2 justify-content-between">
        <h5>Price</h5>
        <h5>$10.00/seat</h5>
      </div>
      <div className="d-flex px-md-4 px-4 py-2 py-md-2 justify-content-between align-items-center">
        <button className={styles.buttonBook}>Book now</button>
        <p>Add to cart</p>
      </div>
    </div>
  );
};

export default CardCinema;
