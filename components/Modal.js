import Link from "next/dist/client/link";
import styles from "../styles/Modal.module.css";
import close from "../public/cancel.png";
import Image from "next/dist/client/image";

function Modal(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalcontent}>
        <div className={styles.modalheader}>
          <a className={styles.close}>
            <Image onClick={props.onClick}
              src={close}
              alt="close-button"
              width="10px"
              height="10px"
            ></Image>
          </a>
        </div>
        <div>
          <ul className={styles.modallist}>
            <li className={styles.lis}>
              <Link href="/RecordingAcademy">
                <a>Recording Academy</a>
              </Link>
            </li>
            <li className={styles.lis}>
              <Link href="/">
                <a>
                  GRAMMYs
                </a>
              </Link>
            </li>
            <li className={styles.lis}>
              <Link href="/Membership">
                <a>Membership</a>
              </Link>
            </li>
            <li className={styles.lis}>
              <Link href="/Advocacy">
                <a>Advocacy</a>
              </Link>
            </li>
            <li className={styles.lis}>
              <Link href="/MusicCares">
                <a>MusiCares</a>
              </Link>
            </li>
            <li className={styles.lis}>
              <Link href="/GrammyMuseum">
                <a>GRAMMY Museum</a>
              </Link>
            </li>
            <li className={styles.lis}>
              <Link href="/Latingrammys">
                <a>Latin GRAMMYs</a>
              </Link>
            </li>
          </ul>
          <div className={styles.botn}>
        <button className={styles.btn1} ><Link href="loginpage">LOGIN</Link></button>
        <button className={styles.btn2}><Link href="/joinpage">JOIN</Link></button>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Modal;
