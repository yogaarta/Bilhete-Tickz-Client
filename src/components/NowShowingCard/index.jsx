//Import from package
import { useRouter } from "next/router";
//components Next
import Image from "next/image";
// Assets

// Css Module
import styles from "../../styles/Home.module.css";

const NowShowingCard = ({ image, id, name }) => {
  const router = useRouter();
  return (
    <>
      <div
        className={`col-md-2 col-5 text-center ${styles.cardShowing} ${styles.clickAble}`}
        onClick={() => {
          router.push(`/movies/${id}`);
        }}
      >
        <Image src={image} width={160} height={245} alt="card" />
        <p className="fw-bold text-center">{name}</p>
      </div>
    </>
  );
};

export default NowShowingCard;
