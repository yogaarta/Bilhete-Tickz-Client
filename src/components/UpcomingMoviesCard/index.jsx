//Import from package
import {useRouter} from "next/router"
//components Next
import Image from "next/image";
// Assets

// Css Module
import styles from "../../styles/Home.module.css";

const UpcomingCard = ({ image, id, name, category }) => {
  const router = useRouter();

  return (
    <>
      <div className={`col-md-2 col-5 text-center ${styles.cardShowing}`}>
        <Image src={image} width={160} height={245} alt="card" />
        <p className="mt-2">{name}</p>
        <p>{category}</p>
        <button
          onClick={() => {
            router.push(`/movies/${id}`);
          }}
          className={styles.buttonCard}
        >
          Details
        </button>
      </div>
    </>
  );
};

export default UpcomingCard;
