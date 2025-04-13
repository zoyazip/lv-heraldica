import "./Hint.css"

const Hint = ({count, hint}) => {
    return (
        <div className='Hint'>
            <div><p><span>{count + 1}.</span>{hint}</p></div>
        </div>
    )
}

export default Hint