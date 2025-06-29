import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.scss";
function Card() {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.detail}>
        <span>Total uers</span>
        <span className={styles.span1}>10.273</span>
        <span className={styles.span2}>
          <span className={styles.span3}>12%</span> more than preveious week
        </span>
      </div>
    </div>
  );
}

export default Card;
