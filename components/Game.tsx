import React, { useEffect, useState } from 'react';
import CardMultiple from './CardMultiple';

import db from '../db.json'
import ExplanatoryCard from './ExplanatoryCard';



interface Props{
  sequence: Array<number>
  explainCards: Array<number>
}

type Card = {
            id: number,
            type:string,
            question:string,
            alternatives:Array<string>,
            correct:string,
            explainId: number
}

type Explain = {
  id:number,
            referenceId: number,
            explain: string,
            image: string
}

interface DBtype{
  Cards:Array<Card>,
  ExplainCards: Array<Explain>
}

const Game: React.FC<Props> = ({sequence, explainCards}) => {

  useEffect(()=>{
    console.log('aaaaaaaaaaaaaaaaaaaa')
    setSequence(sequence)
  },[sequence])

  const [sequenceIds, setSequence] = useState([] as Array<number>)
  const [currentCard, SetCurrentCard] = useState(0)
  const [renderTime, setRenderTime] = useState('card')
  console.log('sequenciaa',sequenceIds)
  function controller(render :string){
    if(render == 'card'){
      const nowCard = db.Cards[sequence[currentCard] -1]
      console.log(nowCard.type)
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
      console.log('explains',db.ExplainCards[currentCard])
      return(
        <ExplanatoryCard
          img={nowExplain.image}
        >{nowExplain.explain}</ExplanatoryCard>
      )
    }
  }

  const [rigths, setRigths] = useState([] as Array<string>)
  function saveAndReplace(selected : string){
    const rigthResponse = 'c'
    if(selected == rigthResponse){
      setRigths([...rigths,selected])
    }
    setRenderTime('explain')
  }   

  console.log(rigths)

  return (
    <div>
        {controller(renderTime)}
        {/* <CardMultiple onCheck={saveAndReplace} alternatives={['sim','nao','isoo é um teste pra q responder', 'alternativa 4']} question={'Isto é apenas um teste, mas pense que não seja um teste e clique em algum botão ai:)'}/> */}
    </div>
  );
}

export default Game;