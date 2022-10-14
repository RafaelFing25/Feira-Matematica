import React from 'react';

import styles from '../styles/components/worng.module.css'

interface props{
  onClick?: (event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void,
  correct: string
}

const Wrong: React.FC<props> = ({onClick, correct}) => {
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.h1}>
                    Resposta errada!
                </h1>
                <p>Resposta certa seria: {correct}</p>
                <button onClick={onClick} className={styles.btn}>Continuar</button>
            </div>
        </div>
    );
}

export default Wrong;