import "./Heraldic.css"

const Heraldic = ( {currentHeraldic} ) => {
    console.log(currentHeraldic)
    return (
        <div className='Heraldic'>
            <img src={currentHeraldic.path} alt={currentHeraldic}/>
        </div>
    )
}

export default Heraldic