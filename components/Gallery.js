import Image from 'next/dist/client/image'
import mgk from "../public/mgkelly.jpeg"
import sing from "../public/awrd1.jpeg"
import awrd from "../public/santana.jpg"
import styles from "../styles/Home.module.css"
const Gallery = () => {
    return (
        <div className={styles.gallry}> 
        <div className={styles.fimage}>
         <div className={styles.parent1}> 
        <Image className={styles.img2} src={sing} alt="sing missing"></Image>
         <div className={styles.child1}>
            <h1>Everything You Need To Know About 2022 GRAMMYs</h1>
        </div>
        </div> 
        <div className={styles.parent2}>
        <Image className={styles.img3} src={awrd} alt="awrd missing"></Image>
        <div className={styles.child2}>
            <h1>For Carlos Santana,Joy is The Ultimate Medicine</h1>
        </div>
        </div>
        </div>
        <div className={styles.mgk2}>
        <Image className={styles.mgk1} src={mgk} alt="mgk missing" ></Image>
        <div className={styles.mgk12}></div>
        <div className={styles.child3}>
            <h1>Machine Gun Kelly On Working With Travis Barker</h1>
        </div>
        </div>
        </div>
    )
}

export default Gallery
