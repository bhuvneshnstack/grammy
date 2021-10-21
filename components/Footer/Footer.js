import styles from "../../styles/Footer.module.css"
const Footer = () => {
    
  return (
    <div>
      <ul className={styles.flist}>
        <li>
          <ul className={styles.slist}>
            <li><h1><b>Recording Academy</b></h1></li>
            <li>About</li>
            <li>Governance</li>
            <li>Press Room</li>
            <li>Jobs</li>
            <li>Events</li>
          </ul>
        </li>
        <li>
          <ul className={styles.slist}>
            <li><h1><b>GRAMMYs</b></h1></li>
            <li>Awards</li>
            <li>News</li>
            <li>Videos</li>
            <li>Events</li>
            <li>Store</li>
            <li>FAQ</li>
          </ul>
        </li>
        <li>
          <ul className={styles.slist}>
          <li><h1><b>Latin GRAMMYs</b></h1></li>
            <li>Awards</li>
            <li>News</li>
            <li>Photos</li>
            <li>Videos</li>
            <li>Cultural Foundation</li>
            <li>Press</li>
          </ul>
        </li>
        <li>
          <ul className={styles.slist}>
            <li><h1><b>GRAMMY Museum</b></h1></li>
            <li>COLLECTION:live</li>
            <li>Museum Tickets</li>
            <li>Exhibits</li>
            <li>Eductaion</li>
            <li>Support</li>
            <li>Programs</li>
            <li>Donate</li>
          </ul>
        </li>
        <li>
          <ul className={styles.slist}>
            <li><h1><b>Musi Cares</b></h1></li>
            <li>About</li>
            <li>Get Help</li>
            <li>Support</li>
            <li>News</li>
            <li>Videos</li>
            <li>Events</li>
          </ul>
        </li>
        <li>
            <ul className={styles.slist}>
                <li><h1><b>Advocacy</b></h1></li>
                <li>About</li>
                <li>News</li>
                <li>Learn</li>
                <li>Act</li>
            </ul>
        </li>
        <li>
            <ul className={styles.slist}>
                <li><h1><b>Membership</b></h1></li>
                <li>Chapters</li>
                <li>Producers & Engineers Wing</li>
                <li>Songwriters & Composers Wing</li>
                <li>GRAMMY U</li>
                <li>Events</li>
                <li>JOIN</li>
            </ul>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
