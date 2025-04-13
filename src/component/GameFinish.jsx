import "./GameFinish.css"
import Restart from "./assets/reset.svg"

const GameFinish = ({userScore, time}) => {

    const resetGame = () => {
        window.location.reload()
    }

    return (
        <div className='GameFinish'>
            <h1>Apsveicam, Jūs pabeidzat spēli!</h1>
            <div className='result'>
                <p>Jūsu balles: 
                    <span className='bold'> {userScore}</span>, 
                    un laiks: 
                    <span className='bold'>{time}</span>
                </p>
                <div onClick={resetGame}><img src={Restart} alt='Reset Game' /></div>
            </div>
        </div>
    )
}

export default GameFinish