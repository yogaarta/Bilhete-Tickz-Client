import styles from "../../styles/Movies.module.css";
import Ebu from "../../assets/icon/ebu.png";
import Image from "next/image";

const CardCinema = () => {
  return (
    <div className={`pt-2 pb-3 ${styles.cardCinemas}`}>
      <div
        className={`d-flex p-3 align-items-center gap-5 ${styles.titleCard}`}
      >
        <div className="col-md-5 px-2">
          <Image src={Ebu} alt="cinemas" />
        </div>
        <div className={`col-md-5 ${styles.descStreet}`}>
          <h2>ebv.id</h2>
          <p>Whatever street No.12, South Purwokerto</p>
        </div>
      </div>
      <div className="d-flex flex-wrap gap-4 p-4 text-center">
        <div className="col-md-2">00:00am</div>
        <div className="col-md-2">00:00am</div>
        <div className="col-md-2">00:00am</div>
        <div className="col-md-2">00:00am</div>
        <div className="col-md-2">00:00am</div>
        <div className="col-md-2">00:00am</div>
      </div>
      <div className="d-flex justify-content-between px-4">
        <h5>Price</h5>
        <p>$10.00/seat</p>
      </div>
      <div className="d-flex justify-content-between px-4 pt-4 align-items-center">
        <button className={styles.buttonBook}>Book now</button>
        <p>Add to cart</p>
      </div>
    </div>
  );
};

export default CardCinema;
