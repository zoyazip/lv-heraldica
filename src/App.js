import React, { useState } from 'react';
import './App.css';
import AnswerList from './component/AnswerList';
import Footer from './component/Footer';
import Heraldic from './component/Heraldic';
import Hint from './component/Hint';
import Title from './component/Title.jsx';
import GameFinish from './component/GameFinish.jsx';
import { shuffle, getDataSet } from './component/util.jsx';
import { heraldics } from './component/Heraldics.jsx';

const shuffledData = shuffle(heraldics);

const App = () => {
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState(shuffledData);
  const [endOfGame, setEndOfGame] = useState(false);
  const [hideContent, setHideContent] = useState('')
  const [spentTime, setSpentTime] = useState('')

  const dataSet = getDataSet(data, current)

  const scoreUpdate = (isUpdated) => {
    if (isUpdated) {
      setScore(score + 1)
    }
    setCurrent(current + 1)

    if (current === data.length - 1) {
      setHideContent('disabled')
      setEndOfGame(true)
      console.log(score)
      setData(shuffledData)
      setCurrent(0)
    }
  }

  return (
    <div className="App">
      <img id="ornament" src="./Ornament/ornament.svg" alt="Ornaments" />
      <div className={`Content ${hideContent}`}>
        <Heraldic currentHeraldic={dataSet[0]} />
        <div className="ContentRightSide">
          <Title count={data.length} />
          <div className="ContentAnswers">
            <div className="hint">
              <Hint hint={dataSet[0].hint} count={current} />
            </div>
            <AnswerList data={dataSet} scoreUpdate={scoreUpdate} correct={dataSet[0]} />
          </div>
          <div className="footer">
            <Footer userScore={score} total={data.length} getTime={setSpentTime} hasFinished={endOfGame}/>
          </div>
        </div>
      </div>
      {endOfGame && <GameFinish userScore={score} time={spentTime} />}
      <img id="ornament" src="./Ornament/ornament.svg" alt="Ornaments" />
    </div>
  )
}

export default App;
