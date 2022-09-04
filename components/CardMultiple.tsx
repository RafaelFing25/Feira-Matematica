import React, { useEffect, useState, MouseEvent, MouseEventHandler } from 'react';
import styles from '../styles/components/card.module.css'

// import { Container } from './styles';

interface InputProps {
  letter: string,
  selected: string,
  onClick?: (event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>)=>void,
  children: String
}

const selecteds: Array<string> = []

const CardMultiple: React.FC = () => {

  const [selectedLetter, setSelectedLetter] = useState('')

  function makeSelect(event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>){
    //console.log(event.currentTarget.name)
    setSelectedLetter(event.currentTarget.name)
  }
  useEffect(()=>{
    console.log(selectedLetter)
  },[selectedLetter])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Selecionar:</h1>
      <div className={styles.question}>
        <p>Alguma questão de problema exemplo,
          em que resposta seria de multipla esclha(alternativas)
          presentes abaixo:</p>
        <div className={styles.alternatives}>
          <Input onClick={makeSelect} selected={selectedLetter} letter='a'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante odio. Quisque vel sollicitudin magna. Vestibulum est ligula, facilisis sit amet turpis id, condimentum imperdiet felis. Duis est mauris.
          </Input>
          <Input onClick={makeSelect} selected={selectedLetter} letter='b'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante odio. Quisque vel sollicitudin magna. Vestibulum est ligula, facilisis sit amet turpis id, condimentum imperdiet felis. Duis est mauris.
          </Input>
          <Input onClick={makeSelect} selected={selectedLetter} letter='c'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante odio. Quisque vel sollicitudin magna. Vestibulum est ligula, facilisis sit amet turpis id, condimentum imperdiet felis. Duis est mauris.
          </Input>
          <Input onClick={makeSelect} selected={selectedLetter} letter='d'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante odio. Quisque vel sollicitudin magna. Vestibulum est ligula, facilisis sit amet turpis id, condimentum imperdiet felis. Duis est mauris.
          </Input>
        </div>
      </div>
      <button className={styles.btnContinue}>Continuar</button>
    </div>
  )
}





const Input: React.FC<InputProps> = ({ children, letter, selected, onClick}) => {
  console.log(selected)
  const [className, setClass] = useState(styles.btn)
  const [isSelected, setSelected] = useState(false)
  
  useEffect(()=>{
    if(selected == letter){
      setSelected(true)
    }else{
      setSelected(false)
    }
  })
  useEffect(()=>{
    if(isSelected){
      setClass(styles.btnSelected)
    }else if(selecteds){
      setClass(styles.btn)
    }
  },[isSelected])
  
  console.log('atualizei', letter)
  return (
    <div className={styles.alternative}>
      <button onClick={onClick} name={letter} id={letter} className={className}>{children}</button>
    </div>
  )
}



export default CardMultiple;