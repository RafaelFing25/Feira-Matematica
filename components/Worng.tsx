import React from 'react';

import styles from '../styles/components/worng.module.css'

interface props{
  onClick?: (event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
}

const Wrong: React.FC<props> = ({onClick}) => {
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.h1}>
                    Resposta errada!
                </h1>
                <button onClick={onClick} className={styles.btn}>Continuar</button>
            </div>
        </div>
    );
}

export default Wrong;