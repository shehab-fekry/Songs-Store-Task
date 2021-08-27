import React from 'react';
import './Dash.css';
import {connect} from 'react-redux';

const Dash = (props) => {
    return(
        <div className='Dash'>
            <center>
                <div className='count'>
                    <div>Price</div>
                    <div className='num'>{props.price} EGP</div>
                </div>
                <div className='amou'>
                    <div>Amount</div>
                    <div className='num'>{props.amount} Songs</div>
                </div>
            </center>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        price: state.dash.price,
        amount: state.dash.amount,
    }
}

export default connect(mapStateToProps)(Dash);