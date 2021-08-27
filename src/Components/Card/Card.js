import React from 'react';
import './Card.css';

const Card = (props) => {
    return(
        <div onClick={props.clicked} className='Card' style={{
            backgroundColor: props.selected ? 'rgba(0, 0, 0, 0.5)' : 'rgb(180, 180, 180)',
        }}>
            PICTURE
            <div className='name'>{props.name}</div>
        </div>
    )
}

export default Card;