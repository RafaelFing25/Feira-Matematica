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
                    <Link href="/estudo">
                <div>
                        <a>Estudo</a>
                </div>
                    </Link>
                    <Link href="/breve">
                <div>
                        <a>Competitivo (Em breve)</a>
                </div>
                    </Link>
                    <Link href="/breve">
                <div>
                        <a>Casual (Em breve)</a>
                </div>
                    </Link>
            </div>
        </div>
    );
}

export default Play;