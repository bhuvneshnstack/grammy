import styles from "../styles/Home.module.css";
import dropd from "../public/dropdown.png";
import Image from "next/dist/client/image";

export const Dropdown = () => {
    return (
        <div className={styles.dropimg}>
            <Image className={styles.dimg} src={dropd} alt="no-image" width="20px" height="20px"/>
        </div>
    )
}
