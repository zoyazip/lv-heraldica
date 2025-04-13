import Info from './Info'
import "./Title.css"

const Title = ({count}) => {
    return (
        <div className='Title'>
            <h1>Latvijas Heraldika</h1>
            <Info count={count}/>
        </div>
        ) 
}

export default Title