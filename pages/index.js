import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navigation } from '../components/Navigation'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The GRAMMYs|GRAMMY.com</title>
        <meta name="description" content="This is GRAMMY Website" />
        <link rel="icon" href="/headicon.png" />
      </Head>
      <div>
        <Navigation/>
      </div>
    </div>
  )
}
