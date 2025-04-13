import "./Score.css"
import { useState, useEffect } from 'react';

const Score = ({score, total}) => {

    const [scoreAnimation, setScoreAnimation] = useState(false)

    useEffect(() => {
        if (score > 0) {
            setScoreAnimation(true)

            const timer = setTimeout(() => {
                setScoreAnimation(false)
            }, 1000)
            return () => clearTimeout(timer)
        }
    }, [score])

    return (
        <div className='Score'>
            <div className={`increment ${scoreAnimation ? 'animate' : ''}`}><span>+1</span></div>
            <span>Score: {score}/{total}</span>
        </div>
    )
}

export default Score