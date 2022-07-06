//components Next
import Image from "next/image";
// Assets

// Css Module
import styles from "../../styles/Home.module.css";

const NowShowingCard = ({image}) => {
  return (
    <>
      <div className={`col-md-2 col-5 text-center ${styles.cardShowing}`}>
        <Image src={image} alt="card" />
      </div>
    </>
  );
};

export default NowShowingCard;
