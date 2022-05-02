import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
export default function Otherstuff() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <main className={styles.main}>
        <h1><u>My Latest Video</u></h1>
        <h2><u>YouTube</u></h2>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/yZAT8oRxCEs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </main>
      <Footer></Footer>
    </div>
  )
}
