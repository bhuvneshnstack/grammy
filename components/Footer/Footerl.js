import Image from "next/dist/client/image"
import rec from "../../public/footerlogo.png"
import styles from "../../styles/Footer.module.css"
const Footerl = () => {
    return (
        <div className={styles.fimglist}>
        <div>
            <Image src={rec} alt="no_image"></Image>
        </div>
        <div>
            <ul className={styles.flists}>
                <li>2021-Recording Academy.All Rights Reserved</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Copyright Notice</li>
                <li>Contact Us</li>
            </ul>
        </div>
        </div>
    )
}

export default Footerl
