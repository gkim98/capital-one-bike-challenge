import React, { Component } from 'react';

import './HomePage.scss';
import MapContainer from '../components/MapContainer';
import GraphContainer from '../components/GraphContainer';

class HomePage extends Component {
    render() {
        return (
            <div className='home-page'>
                <h1>Bike Movement Simulation</h1>
                <MapContainer />
                <h1 className='trends_header'>Interesting Trends</h1>
                <GraphContainer />
            </div>
        )
    }
}

export default HomePage;