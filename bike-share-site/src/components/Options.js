import React, { Component } from 'react';
import axios from 'axios';

import './Options.scss';

class Options extends Component {
    state = {
        simulationRunning: false,
        numBikes: '',
        month: 1
    }

    // sends call to API for simulation build based on inputted values
    callSimulation = (e) => {
        e.preventDefault();

        axios.post('http://localhost:4000/simulation', {
            test: 'testvalue'
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        });
    }

    // updates state for given num of bikes
    handleInputChange = (e) => {
        this.setState({
            numBikes: e.target.value
        })
    }

    // updates state for selected month
    handleMonthChange = (e) => {
        this.setState({
            month: e.target.value
        })
    }

    render() {
        return (
            <div className='options'>
                <button 
                    className='options__button'
                    onClick={this.callSimulation}
                >
                    Run Simulation
                </button>

                {
                    // only shows configuration options if simulation not running
                    !this.state.simulationRunning &&
                    <div>
                        <p>Month</p>
                        <select 
                            className='options__months'
                            onChange={this.handleMonthChange}
                        >
                            <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option value="3">Mar</option>
                            <option value="4">Apr</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">Aug</option>
                            <option value="9">Sept</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
                        </select>
                        <p>Bikes per Station</p>
                        <input 
                            onChange={e => this.handleInputChange(e)} 
                            className='options__num-bikes'
                        />
                    </div>
                }
                
            </div>
        )
    }
}

export default Options;