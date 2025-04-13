import "./Info.css"
import InfoIcon from "./assets/info.svg"
import { useState } from 'react'

const Info = ({count}) => {
    const [hidden, setHidden] = useState("hide")

    const title = "Laipni lūdzam spēlē 'Latvijas Heraldika'"
    const description = `Kvīzu spēlē par Latvijas pilsētu heraldiku! Pārbaudi savas zināšanas par Latvijas pilsētu simboliem. Spēlē ir ${count} pilsētas. Ja vēlies sākt no jauna, vienkārši atsvaidzini lapu! Uz priekšu, izpēti Latvijas heraldiku!`

    const showInfo = () => {
        hidden === "appear" ? setHidden("hide") : setHidden("appear")
    }

    return (
        <div className='Info'>
            <img src={InfoIcon} alt='i' onMouseEnter={showInfo} onMouseLeave={showInfo} onTouchStart={showInfo}/>
            <div className={`infoModal ${hidden}`}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Info