import React, { Component } from 'react';

import './MapContainer.scss'
import Map from './Map';
import Options from './Options';

class MapContainer extends Component {

    render() {
        return (
            <div className='map-container'>

                <Options />
                <Map />
            </div>
        )
    }
}

export default MapContainer;