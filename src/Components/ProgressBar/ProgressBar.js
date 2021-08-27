import React from 'react';
import './ProgressBar.css';

const ProgressBar = (props) => {
    let title;
    switch(props.step)
    {
        case 2:
            title = 'Select An Album';
            break;
        case 3:
            title = 'Select A Songs';
            break;
        case 4:
            title = 'Info';
            break;
        default:
            title = 'Select A Singer';
    }

    return(
        <div className='bar'>
            <section className='progress'>
                <div className='prog1' style={{backgroundColor: props.step >= 1 ? 'rgb(80, 80, 80)' : '#cacaca'}}>1</div>
                <div className='prog2' style={{backgroundColor: props.step >= 2 ? 'rgb(80, 80, 80)' : '#cacaca'}}>2</div>
                <div className='prog3' style={{backgroundColor: props.step >= 3 ? 'rgb(80, 80, 80)' : '#cacaca'}}>3</div>
                <div className='prog4' style={{backgroundColor: props.step >= 4 ? 'rgb(80, 80, 80)' : '#cacaca'}}>4</div>
            </section>
            <section className='title'>{title}</section>
        </div>
    )
}

export default ProgressBar;