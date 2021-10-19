import { Dropdown } from "./Dropdown";
import Image from "next/dist/client/image";
import glogo from "../public/grammylogo.png";
import Search from "./search";
import styles from "../styles/Home.module.css";
import Navlinks from "./navlinks";
import Link from "next/dist/client/link";
export const Navigation = () => {
  return (
    <>
      <div className={styles.nav}>
        <div className="menu-logo">
            <ul className={styles.menu}>
          <li><Dropdown /></li>
          <li className={styles.gram}><Image
            className={styles.grlogo}
            src={glogo}
            alt="agin-no-image"
            width="130px"
            height="50px"
          /></li>
          </ul>
        </div>
        <div className={styles.liq}>
          <ul className={styles.linumber}>
          <li>
              <Link href="/Awards">
                <a>AWARDS</a>
              </Link>
            </li>
            <li>
              <Link href="/News">
                <a>NEWS</a>
              </Link>
            </li>

            <li>
              <Link href="/MusicGenres">
                <a>MUSIC GENRES</a>
              </Link>
            </li>

            <li>
              <Link href="/RecordingAcademy">
                <a>RECORDING ACADEMY</a>
              </Link>
            </li>

            <li>
              <Link href="/Videos">
                <a>VIDEOS</a>
              </Link>
            </li>

            <li>
              <Link href="/Subscribe">
                <a>SUBSCRIBE</a>
              </Link>
            </li>

            <li className={styles.simg}>
            <Link href="/Search">
                <a><Search/></a>
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
