import React from 'react';
import './Receipt.css';
import {connect} from 'react-redux';

const Receipt = (props) => {
    return (
        <center>
            <div className="receipt">
                <header className='header'>Songs Receipt</header>
                <div className='info'>
                    <div>Name: {props.name}</div>
                    <div>Email: {props.email}</div>
                    <div>Phone: {props.phone}</div>
                </div>
                <div className='list'>
                    {
                    props.songs.map(song => {
                        return <div key={song.id} className='listElement'>{song.name}</div>
                    })
                    }
                </div>
                <footer className='footer'>
                    <div className='amount'>
                        <div>Amount</div>
                        <div>{props.amount}</div>
                    </div>
                    <div className='price'>
                        <div>Price</div>
                        <div>{props.price}</div>
                    </div>
                </footer>
            </div>
        </center>
    )
}

const mapStateToProps = state => {
    return{
        songs:  state.dash.selectedSongs,
        price:  state.dash.price,
        amount: state.dash.amount,
        name:   state.form.formInfo.name,
        email:  state.form.formInfo.email,
        phone:  state.form.formInfo.phone,
    }
}

export default connect(mapStateToProps)(Receipt);