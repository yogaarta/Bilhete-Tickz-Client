import styles from "../../styles/Movies.module.css";
import Ebu from "../../assets/icon/ebu.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { currencyFormatter } from "../../helper/formatter";


const CardCinema = ({ address, pictures, time, location, price, name, showTimesId, setShowTimesId, checkPayment }) => {
  const router = useRouter()
  return (
    <div className={`col-lg-3 col-md-4 col-10 ${styles.CardCinemas}`}>
      <div
        className={`d-flex p-md-3 p-3 gap-3 justify-content-start align-items-center ${styles.cardBorder}`}
      >
        <div className="col-md-5 text-center">
          <Image src={pictures} width={100} height={40} alt="cinemas" />
        </div>
        <div className={` ${styles.subTitle} col-md-7`}>
          <h5>{name}</h5>
          <p>{address}</p>
          <p>{location}</p>
        </div>
      </div>
      <div
        className={`d-flex gap-2 px-md-4 px-4 py-2 py-md-3 flex-wrap ${styles.Hours}`}
      >
        {time.length > 0 ? (
          <>
            {time.map((item) => (
              <p key={item.id}
                className={showTimesId === item.id ? styles.timeSelected : styles.time}
                onClick={() => { setShowTimesId(item.id) }}
              >{item.time}</p>
            ))}
          </>
        ) : null}
      </div>
      <div className="d-flex px-md-4 px-4 py-2 py-md-2 justify-content-between">
        <h5>Price</h5>
        <h5>{currencyFormatter.format(price)}</h5>
      </div>
      <div className="d-flex px-md-4 px-4 py-2 py-md-2 justify-content-between align-items-center">
        <button className={styles.buttonBook}
          onClick={checkPayment}
        >Book now</button>
        <div>Add to cart</div>
      </div>
    </div>
  );
};

export default CardCinema;
