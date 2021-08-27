import React, { Component } from 'react';
import './Home.css';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import SelectArea from '../../Components/SelectArea/SelectArea';
import Buttons from '../../Components/Buttons/Buttons';
import Dash from '../../Components/Dash/Dash';
import * as Data from '../../API-DATA/API-DATA';

class Layout extends Component {
    state = {
        data:{},
        step: 1,
        count: 0,
        amount: 0,
    }

    componentWillMount(){
        const {singers, albums, songs} = Data;
        this.setState({
            data: {
                singers: singers,
                albums: albums,
                songs: songs,
            }
        })
    }

    nextStepHandler = () => {
        let currentStep = this.state.step;

        if (currentStep === 4) currentStep = 1
        else currentStep += 1;

        this.setState({step: currentStep})
    }

    prevStepHandler = () => {
        let currentStep = this.state.step;
        currentStep -= 1;

        this.setState({step: currentStep})
    }

    submitHandler = () => {
        this.props.history.push('/Receipt');
    }

    render()
    {
        return (
            <div className='Home'>
                <section className="selecting">
                    <ProgressBar step={this.state.step}/>
                    <SelectArea 
                    data={this.state.data}
                    step={this.state.step}/>
                    <Buttons
                    next={this.state.step === 4 ? this.submitHandler : this.nextStepHandler}
                    prev={this.prevStepHandler}
                    step={this.state.step}/>
                </section>
    
                <section className='Dashboard'>
                    <Dash/> 
                </section>
            </div>
        )
    }
}

export default Layout;