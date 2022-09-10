import React, { useEffect, useState } from 'react';
import CardMultiple from './CardMultiple';

import db from '../db.json'
import ExplanatoryCard from './ExplanatoryCard';
import Wrong from './Worng';
import Right from './Right';



interface Props{
  sequence: Array<number>
  explainCards: Array<number>
}



const Game: React.FC<Props> = ({sequence, explainCards}) => {

  useEffect(()=>{
    setSequence(sequence)
  },[sequence])

  const [sequenceIds, setSequence] = useState([] as Array<number>)
  const [currentCard, SetCurrentCard] = useState(0)
  const [renderTime, setRenderTime] = useState('card')
  function controller(render :string){
    if(render == 'card'){
      const nowCard = db.Cards[sequence[currentCard] -1]
      if(nowCard.type == 'select'){
        return(
        <CardMultiple
          onCheck={saveAndReplace}
          alternatives={nowCard.alternatives}
          question={nowCard.question}
        />
        )
      }else 
      return <div></div>
    }else if(render == 'explain'){
      const nowExplain = db.ExplainCards[currentCard]
      return(
        <ExplanatoryCard
          img={nowExplain.image}
        >{nowExplain.explain}</ExplanatoryCard>
      )
    }else if(render == 'wrong'){
      return(
        <Wrong
          onClick={()=>{setRenderTime('explain')}}
        />
      )
    }else if(render == 'right'){
      return(
        <Right
          onClick={()=>{setRenderTime('explain')}}
        />
      )
    }
  }

  const [rigths, setRigths] = useState([] as Array<string>)
  function saveAndReplace(selected : string){
    const rigthResponse = db.Cards[sequence[currentCard] -1].correct
    console.log('selected', rigthResponse == selected)
    if(selected == rigthResponse){
      setRenderTime('right')
      setRigths([...rigths,selected])
    }else{
      setRenderTime('wrong')
    }
  }   


  return (
    <div>
        {controller(renderTime)}
        {/* <CardMultiple onCheck={saveAndReplace} alternatives={['sim','nao','isoo é um teste pra q responder', 'alternativa 4']} question={'Isto é apenas um teste, mas pense que não seja um teste e clique em algum botão ai:)'}/> */}
    </div>
  );
}

export default Game;