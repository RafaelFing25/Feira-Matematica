import Image from 'next/image';
import React from 'react';

import styles from '../styles/components/explanatory.module.css'


interface Props{
    img?: string,
    children: string
}

const ExplanatoryCard: React.FC<Props> = ({img, children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Entenda:</h1>
            </div>
            <div className={styles.explain}>
                <p>{children}</p>
                {img ?
                <Image src={img} width={200} height={200} alt="test" /> : ''
            }
                
            </div>
            <div className={styles.footer}>
                <button>Saiba Mais</button>
                <button>Avançar</button>
            </div>
        </div>
    )
}

export default ExplanatoryCard;