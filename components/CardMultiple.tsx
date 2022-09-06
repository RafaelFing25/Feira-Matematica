import React, { useEffect, useState, MouseEvent, MouseEventHandler } from 'react';
import styles from '../styles/components/card.module.css'

// import { Container } from './styles';

interface InputProps {
  letter: string,
  selected: string,
  onClick?: (event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void,
  children: String
}

interface CardProps {
  alternatives: Array<string>,
  question: string
}

const selecteds: Array<string> = []

const CardMultiple: React.FC<CardProps> = ({question, alternatives}) => {

  const [selectedLetter, setSelectedLetter] = useState('')

  function makeSelect(event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    //console.log(event.currentTarget.name)
    setSelectedLetter(event.currentTarget.name)
  }
  useEffect(() => {
    console.log(selectedLetter)
  }, [selectedLetter])

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.title}>Selecionar:</h1>
      </div>
      <div className={styles.question}>
        <div className={styles.questionText}>
          <p>{question}</p>
        </div>
        <div className={styles.alternatives}>
          <Input onClick={makeSelect} selected={selectedLetter} letter='a'>
            {alternatives[0]} 
          </Input>
          <Input onClick={makeSelect} selected={selectedLetter} letter='b'>
            {alternatives[1]} 
          </Input>
          <Input onClick={makeSelect} selected={selectedLetter} letter='c'>
            {alternatives[2]}
          </Input>
          <Input onClick={makeSelect} selected={selectedLetter} letter='d'>
            {alternatives[3]} 
          </Input>
        </div>
      </div>
      <button className={styles.btnContinue}>Continuar</button>
    </div>
  )
}





const Input: React.FC<InputProps> = ({ children, letter, selected, onClick }) => {
  console.log(selected)
  const [className, setClass] = useState(styles.btn)
  const [isSelected, setSelected] = useState(false)

  useEffect(() => {
    if (selected == letter) {
      setSelected(true)
    } else {
      setSelected(false)
    }
  })
  useEffect(() => {
    if (isSelected) {
      setClass(styles.btnSelected)
    } else if (selecteds) {
      setClass(styles.btn)
    }
  }, [isSelected])

  console.log('atualizei', letter)
  return (
    <div className={styles.alternative}>
      <button onClick={onClick} name={letter} id={letter} className={className}>{children}</button>
    </div>
  )
}



export default CardMultiple;