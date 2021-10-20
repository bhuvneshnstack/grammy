import styles from "../styles/Home.module.css";
import dropd from "../public/menu.png";
import Image from "next/dist/client/image";

export const Dropdown = () => {
    return (
        <div className={styles.dropimg}>
            <span className={styles.drspan}></span>
            <span className={styles.drspan}></span>
            <span className={styles.drspan1}></span>
            <Image className={styles.dimg} src={dropd} alt="no-image" width="25px" height="25px"/>
        </div>
    )
}
