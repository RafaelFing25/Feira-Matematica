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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,900;1,900&display=swap" rel="stylesheet" />
      </Head>

      <Game sequence={[1]}/>
    </div>
  );
}

export default game;