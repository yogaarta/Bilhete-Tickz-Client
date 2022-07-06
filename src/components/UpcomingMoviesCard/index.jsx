//components Next
import Image from "next/image";
// Assets

// Css Module
import styles from "../../styles/Home.module.css";

const UpcomingCard = ({image}) => {
  return (
    <>
      <div className={`col-md-2 col-5 text-center ${styles.cardShowing}`}>
        <Image src={image} alt="card" />
        <h5 className="mt-2">Spiderman Homecoming</h5>
        <p>Action, Adventure, Sci-Fi</p>
        <button className={styles.buttonCard}>Details</button>
      </div>
    </>
  );
};

export default UpcomingCard;
