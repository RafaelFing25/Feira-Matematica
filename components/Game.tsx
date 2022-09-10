import React, { useEffect, useState } from 'react';
import CardMultiple from './CardMultiple';

import db from '../db.json'
import ExplanatoryCard from './ExplanatoryCard';
import Wrong from './Worng';
import Right from './Right';



interface Card {
  id: number;
  type: string;
  question: string;
  alternatives: string[];
  correct: string;
  explainId: number;
}

interface ExplainCards {
  id: number;
  referenceId: number;
  explain: string;
  image: string;
}

interface Props {
  cards: Array<Card>
  explainCards: Array<ExplainCards>
}

db.Contents[0].ExplainCards


const Game: React.FC<Props> = ({ cards, explainCards }) => {

  useEffect(() => {
    setSequence(cards)
  }, [cards])

  const [sequenceIds, setSequence] = useState([] as Props["cards"])
  const [currentCard, SetCurrentCard] = useState(0)
  const [renderTime, setRenderTime] = useState('card')
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
      const nowExplain = explainCards[currentCard]
      return (
        <ExplanatoryCard
          img={nowExplain.image}
        >{nowExplain.explain}</ExplanatoryCard>
      )
    } else if (render == 'wrong') {
      return (
        <Wrong
          onClick={() => { setRenderTime('explain') }}
        />
      )
    } else if (render == 'right') {
      return (
        <Right
          onClick={() => { setRenderTime('explain') }}
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