
import './Application.css'

function Application({ number, type, button }) {
    return (
        <div className='application-container'>
            {number} {type} {button}
        </div>
    )
}

export default Application