/*
    StationMarker.js

    Station marker that signifies a bike station on the map
*/

import React from 'react';
import { Marker } from 'react-google-maps';

import stationImg from '../assets/stationImg.png'

const StationMarker = (props) => {
    return (
        <Marker
            position={props.position}
            icon={{
                url: stationImg,
                size: {width:340, height:300},
                anchor: {x:8.5, y:15},
                scaledSize: {width:17, height:15}
            }}
            zIndex={-1}
        >
        </Marker>
    )
}

export default StationMarker;