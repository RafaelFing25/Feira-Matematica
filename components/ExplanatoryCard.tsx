import Image from 'next/image';
import React from 'react';

import styles from '../styles/components/explanatory.module.css'


interface Props{
    img?: string,
    children: string,
    advance:()=>void
}

const ExplanatoryCard: React.FC<Props> = ({img, children , advance}) => {

    function moreAbout(){
        window.location.href = 'https://google.com'
    }


    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Entenda:</h1>
            </div>
            <div className={styles.explain}>
                <p dangerouslySetInnerHTML={ {__html: children }}></p>
                {img ?
                <Image src={img} width={600} height={600} alt="test" /> : ''
            }
                
            </div>
            <div className={styles.footer}>
                <button onClick={moreAbout}>Saiba Mais</button>
                <button onClick={advance}>Avançar</button>
            </div>
        </div>
    )
}

export default ExplanatoryCard;