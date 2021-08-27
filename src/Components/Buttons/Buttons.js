import React from 'react';
import './Buttons.css';

const Buttons = (props) => {
    return(
        <div className='Buttons'>
            <button onClick={props.prev} disabled={props.step === 1} className='prev'>PREV</button>
            <button onClick={props.next} className='next'>{props.step === 4 ? 'SUBMIT' : 'NEXT'}</button>
        </div>
    )
}

export default Buttons;


// type={props.step === 4 ? 'submit' : null} form='my-form'