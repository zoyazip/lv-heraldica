import "./Answer.css"
import { useState } from 'react'

const Answer = (props) => {

    const [hover, setHover] = useState("")
    const [correct, setCorrect] = useState("")


    const isCorrect = () => {
         setTimeout(() => {
            if (props.correct.name === props.name) {
                props.scoreUpdate(true)
            } else {
                props.scoreUpdate(false)
                setCorrect("")
            }
         }, 1000);
    }

    const isHover = () => {
        hover === "" ? setHover("appear") : setHover("") 
    }

    return (
        <div className={`Answer ${correct}`} onClick={isCorrect} onMouseEnter={isHover} onMouseLeave={isHover}>
            <span>{props.name}</span>
            <div className={`circle left`}></div>
            <div className={`circle right`}></div>
            <div className={`bg ${hover}`}></div>
        </div>
    )
}

export default Answer;