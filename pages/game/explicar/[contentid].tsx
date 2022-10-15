import Head from 'next/head';
import React from 'react';
import Game from '../../../components/Game';
import { NextPage } from 'next'

import db from '../../../db.json'
import styles from '../../../styles/Game.module.css'
import { useRouter } from 'next/router';

interface props {
  mode: string;
}

const GamePage: NextPage<props> = ({ mode }) => {

  const props = {
    explainCard: db.Contents[0].ExplainCard,
    cards: db.Contents[0].Cards
  }

  const { query } = useRouter()
  if (query.contentid) {
    props.explainCard = db.Contents[query.contentid as unknown as number - 1].ExplainCard || undefined
    props.cards = db.Contents[query.contentid as unknown as number - 1].Cards || undefined
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Feirinha</title>
        <meta name="description" content="app feira" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        !query.contentid ? 'Caregando' :
          <Game

            explainCard={props.explainCard}
            cards={props.cards} />
      }
    </div>
  )
}
export default GamePage;