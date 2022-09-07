import Head from 'next/head';
import React from 'react';
import Game from '../components/Game';

import db from '../db.json'
import styles from '../styles/Home.module.css'

const game: React.FC = () => {



  return (
    <div className={styles.container}>
         <Head>
        <title>Feirinha</title>
        <meta name="description" content="app feira" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Game
      explainCards={[1]}
       sequence={[1]}/>
    </div>
  );
}

export default game;