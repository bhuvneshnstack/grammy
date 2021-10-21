import Head from 'next/head'

import styles from '../styles/Home.module.css'
import { Navigation } from '../components/Navigation'
import Gallery from '../components/Gallery'
import Footermain from '../components/Footer/Footermain'


export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>The GRAMMYs|GRAMMY.com</title>
        <meta name="description" content="This is GRAMMY Website" />
        <link rel="icon" href="/headicon.png" />
      </Head>
      <div className={styles.mainnav}>
        <Navigation/>
      </div>
    </div>
    <Gallery/>
    <Footermain/>
    </>
  )
}
