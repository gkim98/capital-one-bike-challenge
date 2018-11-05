import React, { Component } from 'react';

import './HomePage.scss';
import MapContainer from '../components/MapContainer';
import GraphContainer from '../components/GraphContainer';

import monthImg from '../assets/months.png';
import tripImg from '../assets/triproute.png';
import top from '../assets/top.png';
import bottom from '../assets/bottom.png';
import timeImg from '../assets/time_day.png';

class HomePage extends Component {
   
    
    

    render() {
        let p_style = {
            fontSize: '20px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '20px 20px'
    
        }

        let p_style_2 = {
            fontSize: '24px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '20px 20px'
    
        }

        let img_style = {
            display: 'block',
            margin: '0 auto',
            maxWidth: '700px',
            width: '100%'
        }

        return (
            <div className='home-page'>
                <h1>Bike Movement Simulation</h1>
                <MapContainer />
                <p style={p_style}>The above simulation models the movement of bikes over the course of a day, using two machine 
                learning models hosted on a Flask API. One model estimates how many bikes are rented at a given station at a given time.
                And once a bike is rented, another model predicts the destination. The simulation aims to help interested parties understand
                how to best position bikes for optimal service and also display flow patterns under different conditions.</p>
                <h1 className='trends_header'>Interesting Trends</h1>
                <img src={monthImg} style={img_style}/>
                <p style={p_style}>
                    The data covers bike transactions from July 2016 - March 2017.
                    One way to interpret this graph is that biking reaches its prime in the peak of summer, then falls off.
                    But maybe there could've been more activity simply because the bike system was new.
                </p>
                <img src={tripImg} style={img_style} />
                <p style={p_style}>Walk-ups have a higher ratio of Round Trips, perhaps showing that Walk-ups rent bikes with a purpose. They go to a destination, complete the task they are there for, then come back.
                </p>
                <img src={timeImg} style={img_style} />
                <p style={p_style}>Activity peaks around rush hour, showing that many riders may use the bike-share for commuting.</p>
                <img src={top} style={img_style} />
                <img src={bottom} style={img_style} />
                <p style={p_style}>The difference in activity between the most active stations and the least active stations is huge. Maybe smaller stations could be candidates for merging.</p>
                <h1>Miscellaneous Questions</h1>
                <p style={p_style_2}>Average Distance Traveled: <span style={{fontSize: '32px', fontWeight: '600'}}>1.762 km</span> (using the Haversine formula)</p>
                <p style={p_style_2}><span style={{fontSize: '32px', fontWeight: '600'}}>68.87%</span> of riders include bike sharing as a regular part of their commute (found by comparing Walk-up Riders to Passholders)</p>

            </div>
        )
    }
}

export default HomePage;