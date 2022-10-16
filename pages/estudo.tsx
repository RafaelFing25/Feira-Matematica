import { NextPage } from 'next'
import { useEffect, useState } from 'react';
import MiniCard from '../components/MiniCard';

import styles from '../styles/Estudo.module.css'
import db from '../db.json'
import Head from 'next/head';

interface Contents{
    id: number;
    description: string;
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

const Estudo:NextPage = () => {

    const [contents, setContents] = useState([] as Array<Contents>)
    useEffect(()=>{
       return setContents(db.Contents);
    })

  return (
    <><Head>
          <title>Matematiquizando - Estudo</title>
      </Head><div className={styles.container}>
              <div className={styles.top}>
                  <h1>Modo estudo</h1>
              </div>
              <div className={styles.content}>
                  {contents.map((content, index) => (<MiniCard key={index} content={content} />))}
              </div>
          </div></>
    )}

export default Estudo;