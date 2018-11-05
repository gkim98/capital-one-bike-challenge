/*
    Options.js

    Pane for configuring simulation and for display simulation progress
*/

import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import stations from '../assets/stations';

import './Options.scss';
import { addBikes } from '../actions/bikes';
import stationsObject from '../assets/stationsObject';

class Options extends Component {
    state = {
        simulationRunning: false,
        numBikes: '',
        month: 1,
        buttonMessage: 'Run Simulation'
    }

    // sends call to API for simulation build based on inputted values
    callSimulation = (e) => {
        e.preventDefault();

        Object.keys(stationsObject).forEach((station) => {
            this.props.addBikes(station, parseInt(this.state.numBikes))
        })

        this.setState({
            // set simulation to loading on API call
            buttonMessage: 'Loading...'
        });

        axios.post('http://localhost:4000/simulation', {
            test: 'testvalue'
        }).then((response) => {
            this.setState({
                buttonMessage: 'Playing'
            });
            console.log(response)
        }).catch((error) => {
            this.setState({
                buttonMessage: 'Error'
            })
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
                    {this.state.buttonMessage}
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
                            <option value="7">July</option>
                            <option value="8">Aug</option>
                            <option value="9">Sept</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
                            <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option value="3">Mar</option>
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

const mapDispatchToProps = (dispatch) => {
    return {
        addBikes: (location, number) => dispatch(addBikes(location, number))
    };
}

export default connect(undefined, mapDispatchToProps)(Options);