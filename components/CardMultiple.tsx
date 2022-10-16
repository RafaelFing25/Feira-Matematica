import React, { useEffect, useState, MouseEvent, MouseEventHandler } from 'react';
import styles from '../styles/components/card.module.css'
import ProgressBar from '@ramonak/react-progress-bar'
import Router from 'next/router';
// import { Container } from './styles';

interface InputProps {
  letter: string,
  selected: string,
  onClick?: (event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void,
  children: String
}

interface CardProps {
  alternatives: Array<string>,
  question: string,
  onCheck: (selectedLetter: string) => void,
}

const selecteds: Array<string> = []

const CardMultiple: React.FC<CardProps> = ({ question, alternatives, onCheck }) => {

  const [selectedLetter, setSelectedLetter] = useState('')
  const [time, setTime] = useState(180)

  function makeSelect(event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    //console.log(event.currentTarget.name)
    setSelectedLetter(event.currentTarget.name)
  }
  useEffect(() => {
    console.log(selectedLetter)
  }, [selectedLetter])

  function handleSumbit(event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    onCheck(selectedLetter)
  }


  const dateObj = new Date(time * 1000);
  const minutes = dateObj.getUTCMinutes();
  const seconds = dateObj.getSeconds();

  const timeString = minutes.toString().padStart(2, '0') + ':' +
    seconds.toString().padStart(2, '0');


  useEffect(() => {
    if(time >= 0){
      const interval = setInterval(() => setTime(time - 1), 1000);
      return () => clearInterval(interval);
    }
    if(time <= 0){
      setSelectedLetter('o')
      onCheck(selectedLetter)
    }
  },);

  
  
  return (
    <div className={styles.container}>
      <ProgressBar
        completed={time}
        maxCompleted={180}
        customLabel={timeString}
        barContainerClassName={styles.barConteiner}
        className={styles.bar}
        labelClassName={styles.barlabel}
        labelAlignment="left"
      />
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
      <button onClick={handleSumbit} className={styles.btnContinue}>Confirmar</button>
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
  }, [selected, letter])
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