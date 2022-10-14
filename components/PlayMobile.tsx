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
                    <Link href="/estudo">
                <div>
                        <a>Estudo</a>
                </div>
                    </Link>
                    <Link href="/game">
                <div>
                        <a>Competitivo (Em breve)</a>
                </div>
                    </Link>
                    <Link href="/game">
                <div>
                        <a>Casual (Em breve)</a>
                </div>
                    </Link>
            </div>
        </div>
    );
}

export default PlayMobile;