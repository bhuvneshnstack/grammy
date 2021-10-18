import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navigation } from '../components/Navigation'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Nxt App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navigation/>
      </div>
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
    </div>
  )
}
