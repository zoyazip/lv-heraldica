import Score from './Score'
import "./Footer.css"
import { useEffect, useState } from 'react'

const Footer = ( {hasFinished, getTime, userScore, total} ) => {
    const [timer, setTimer] = useState("00:00:00")

    useEffect(() => {
        let intervalId;
        let s = 0
        let m = 0
        let h = 0
        intervalId = setInterval(() => {
            if (s === 60) {
                m++
                s = 0
            }
            if (m === 60) {
                h++
                m = 0
            }
            setTimer(`
                ${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}
                `)
            s++
        }, 1000);
        if (hasFinished) {
            getTime(timer)
            clearInterval(intervalId)
        }
        return () => clearInterval(intervalId)
    }, [hasFinished])

    return (
        <div className='Footer'>
            <div className='timer'>{timer}</div>
            <Score score={userScore} total={total}/>
        </div>
    )
}

export default Footer