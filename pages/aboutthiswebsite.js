import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <main className={styles.main}>
      <h2>Why I Created This Site</h2>
      <p>Because Bando Binux is funny</p>
      </main>
      <Footer></Footer>
    </div>
  )
}
