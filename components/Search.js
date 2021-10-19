import Image from "next/dist/client/image";
import sicon from "../public/search.svg";
import styles from "../styles/Home.module.css";
const Search = () => {
    return (
        <div className={styles.searchicon}>
            <Image className={styles.simage} src={sicon} alt="sorry-no-image-found" width="5px" height="5px"/> 
        </div>
    )
}

export default Search
