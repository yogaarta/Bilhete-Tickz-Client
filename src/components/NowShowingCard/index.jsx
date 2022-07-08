//Import from package
import { useRouter } from "next/router";
//components Next
import Image from "next/image";
// Assets

// Css Module
import styles from "../../styles/Home.module.css";

const NowShowingCard = ({ image, id }) => {
  const router = useRouter();
  return (
    <>
      <div
        className={`col-md-2 col-5 text-center ${styles.cardShowing} ${styles.clickAble}`}
        onClick={() => {
          router.push(`/movies/${id}`);
        }}
      >
        <Image src={image} alt="card" />
      </div>
    </>
  );
};

export default NowShowingCard;
