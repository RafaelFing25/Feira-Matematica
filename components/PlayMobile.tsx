import Link from 'next/link';
import React from 'react';

import styles from '../styles/components/playmobile.module.css'
import backbutton from '../public/backbutton.png'

interface Props{
    backFunc: ()=>void
}

const PlayMobile: React.FC<Props> = ({backFunc}) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.img} onClick={backFunc}>
                    <img src="https://cdn.icon-icons.com/icons2/1514/PNG/512/backbutton_104978.png" alt="" />
                </div>
                <div className={styles.text}>
                    <h1>Jogar</h1>
                    <p>Escolha um modo:</p>
                </div>
            </div>
            <div className={styles.content}>
                <div>
                    <Link href="/estudo">
                        <a>Estudo</a>
                    </Link>
                </div>
                <div>
                    <Link href="/game">
                        <a>Competitivo (Em breve)</a>
                    </Link>
                </div>
                <div>
                    <Link href="/game">
                        <a>Casual (Em breve)</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PlayMobile;