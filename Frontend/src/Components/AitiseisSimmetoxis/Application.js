import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { SiTicktick } from "react-icons/si";


import { Routes } from '../../routes'
import './Application.css'

function Application({ number, type, button }) { // type = 0 -> right, type = 1 -> not right, type = 2 -> on hold
    const navigate = useNavigate();

    const typeClassName =
        type === 0 ? 'type-icon-right' :
            type === 1 ? 'type-icon-not-right' :
                type === 2 ? 'type-icon-on-hold' : '';

    // label on unicode symbolism to be accepted the greek language
    const typeSymbol =
        type === 0 ? <SiTicktick /> :   
            type === 1 ? <IoMdClose /> : ''; 

    const typeLabel =
        type === 0 ? '\u0388\u03B3\u03BA\u03C5\u03C1\u03B7' :    // Έγκυρη
            type === 1 ? '\u039C\u03B7 \u0388\u03B3\u03BA\u03C5\u03C1\u03B7' : // Μη Έγκυρη
                type === 2 ? '\u03A3\u03B5 \u03B1\u03BD\u03B1\u03BC\u03BF\u03BD\u03AE' : ''; // Σε αναμονή

    return (
        <div className='application-container'>
            <p>#{number}</p>
            <p className={typeClassName}>{typeSymbol} <b>{typeLabel}</b></p>
            <Button label={button} onClick={() => navigate(`${Routes.AitisiSimmetoxis}/${number}`)} />
        </div>
    )
}

export default Application