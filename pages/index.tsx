import type { NextPage } from 'next'
import Head from 'next/head'
import CardMultiple from '../components/CardMultiple'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Feirinha</title>
        <meta name="description" content="app feira" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,900;1,900&display=swap" rel="stylesheet" />
      </Head>

      <CardMultiple
      alternatives={["Sim", "Não","Talvez","Não Sei"]}
      question={"Pensando na vida, você considera que está vivendo?"}
      />
    </div>
  )
}

export default Home
