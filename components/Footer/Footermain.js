import styles from "../../styles/Footer.module.css"
import Footer from "./Footer"
import FooterContent from "./FooterContent"
import Footerl from "./Footerl"
const Footermain = () => {
    return (
        <div className={styles.footr}>

        <div>
            <Footer/>
        </div>
        <div className={styles.fl}>
            <Footerl/>
        </div>
        <div className={styles.cntent}>
            <FooterContent/>
        </div>
        </div>
    )
}

export default Footermain
