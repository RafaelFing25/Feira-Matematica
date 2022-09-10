import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'


import Play from '../components/Play'


import styles from '../styles/Home.module.css'

const Home: NextPage<Props> = () => {

  const [play, setPlay] = useState(false)
  const [instructions, setInstructions] = useState(false)
  const [about, setAbout] = useState(false)



  return (
    <div className={styles.container}>
      <Head>
        <title>Feirinha</title>
        <meta name="description" content="app feira" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <div className={styles.side}>
        <div className={styles.options}>
          <h1 className={styles.option} onClick={() => {setPlay(true);setInstructions(false);setAbout(false) } }>Jogar</h1>
          <h1 className={styles.option} onClick={() => {setPlay(false);setInstructions(true);setAbout(false) }}>Instruçoẽs</h1>
          <h1 className={styles.option} onClick={() => {setPlay(false);setInstructions(false);setAbout(true) }}>Sobre</h1>
        </div>
      </div>

      <div className={styles.content}>
        <h1>Seja bem vindo!</h1>
        {play ? <Play /> : ''}
      </div>

    </div>
  )
}

type Props = {
  host: string | null
}




export default Home
