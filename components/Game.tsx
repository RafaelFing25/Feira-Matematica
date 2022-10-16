import React, { useEffect, useState } from 'react';
import CardMultiple from './CardMultiple';

import db from '../db.json'
import ExplanatoryCard from './ExplanatoryCard';
import Wrong from './Worng';
import Right from './Right';
import Router from 'next/router';




interface Card {
  id: number;
  type: string;
  question: string;
  alternatives: string[];
  correct: string;

}

interface ExplainCards {
  id: number;
  referenceId: number;
  explain: string;
  image: string;
  link: string;
}

interface Props {
  cards: Array<Card>,
  explainCard: ExplainCards
}




const Game: React.FC<Props> = ({ cards, explainCard }) => {

  useEffect(() => {
    setSequence(cards)
  }, [cards])

  const [sequenceIds, setSequence] = useState([] as Props["cards"])
  const [currentCard, SetCurrentCard] = useState(0)
  const [renderTime, setRenderTime] = useState('card')

  function advance(){
    if(currentCard +1 >= cards.length){
      setRenderTime('explain')
    }else{
      SetCurrentCard(currentCard + 1)
      setRenderTime('card')
    }
  }

  function controller(render: string) {
    if (render == 'card') {
      const nowCard = cards[currentCard]
      if (nowCard.type == 'select') {
        return (
          <CardMultiple
            onCheck={saveAndReplace}
            alternatives={nowCard.alternatives}
            question={nowCard.question}
          />
        )
      } else
        return <div></div>
    } else if (render == 'explain') {
      const nowExplain = explainCard
      return (
        <ExplanatoryCard
          img={explainCard.image}
          advance={()=>{Router.push('/estudo')}}
          link={explainCard.link}
        >{explainCard.explain}</ExplanatoryCard>
      )
    } else if (render == 'wrong') {
      const letter = cards[currentCard].correct
      const alphabet = ['a','b','c','d']
      const index = alphabet.indexOf(letter)
      return (
        <Wrong
          correct={cards[currentCard].alternatives[index]}
          onClick={() => { advance() }}
        />
      )
    } else if (render == 'right') {
      return (
        <Right
          onClick={() => {advance()}}
        />
      )
    }
  }

  const [rigths, setRigths] = useState([] as Array<string>)
  function saveAndReplace(selected: string) {
    const rigthResponse = cards[currentCard].correct
    console.log('selected', rigthResponse == selected)
    if (selected == rigthResponse) {
      setRenderTime('right')
      setRigths([...rigths, selected])
    } else {
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