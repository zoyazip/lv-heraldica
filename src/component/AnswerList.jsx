import Answer from './Answer'
import "./AnswerList.css"
import { shuffle } from './util'

const AnswerList = ({data, correct, scoreUpdate}) => {

    const shuffeledData = shuffle(data)
    const correctAnswer = correct

    const clickHandler = () => {
        const correct = document.querySelector(`.answer-${correctAnswer.id}`)
        correct.classList.add("correctAnswer")
        setTimeout(() => {
            correct.classList.remove("correctAnswer")
         }, 1000);
    }

    return (
        <div className='AnswerList'>
            {shuffeledData.map((answer, i) => (
                <div key={i} className={`answer-${answer.id}`} onClick={() => {clickHandler()}}>
                    <Answer name={answer.name} correct={correctAnswer} scoreUpdate={scoreUpdate}/>
                </div>
            ))}
        </div>
    );
}

export default AnswerList;
