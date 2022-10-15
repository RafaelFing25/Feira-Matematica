import Router from 'next/router';
import React from 'react';

import styles from '../styles/components/minicard.module.css';

interface Props {
  content: {
    description: string;
    id: number;
    name: string;
    Cards: {
      id: number;
      type: string;
      question: string;
      alternatives: string[];
      correct: string;
    }[];
    ExplainCard: {
      id: number;
      referenceId: number;
      explain: string;
      image: string;
    };
  }
}

const MiniCard: React.FC<Props> = ({ content }) => {

  function initGame() {
    Router.push('/game/explicar/'+ content.id)
  }

  return (
    <div onClick={initGame} className={styles.container}>
      <h1>{content.name}</h1>
      <p><div dangerouslySetInnerHTML={{ __html: content.description }} /></p>
    </div>
  )
}

export default MiniCard;