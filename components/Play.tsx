import Link from 'next/link';
import React from 'react';

import styles from '../styles/components/play.module.css'

const Play: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h1>Jogar</h1>
                <p>Escolha um modo:</p>
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

export default Play;