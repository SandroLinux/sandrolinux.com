import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import layout from '../components/layout.js'

export default function Header() {
  return (
    <html lang="en">
    <div className={layout.container}>
      <Head>
        <title>Sandro Linux</title>
        <meta name="description" content="The official site of Sandro Linux" />
        <link rel="icon" href="/favicon.png" />
        <meta name="msvalidate.01" content="3649A606B35320B079D9EFB34001AAC3" />
        <meta name="wot-verification" content="788fa3777db13ec60fab"/>
      </Head>
      <div className={styles.navbar}>
       <Link href="../../">
       <a class="active">Home</a>
       </Link>
       <Link href="news">
       <a>News</a>
       </Link>
       <Link href="videos">
       <a>Videos</a>
       </Link>
       <Link href="contactme">
       <a>Contact</a>
       </Link>
       <Link href="otherstuff">
       <a>Other Stuff</a>
       </Link>
       <Link href="aboutthiswebsite">
       <a>About</a>
       </Link>
       </div>
    </div>
    </html>
  )
}
