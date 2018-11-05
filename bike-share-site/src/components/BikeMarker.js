/*
    BikeMarker.js

    Bike marker on map that signifies one bike at a station
*/

import React from 'react';
import { Marker } from 'react-google-maps';

import bikeImg from '../assets/bikeImg.png'

const BikeMarker = (props) => {

    return (
        <Marker
            
        >
        </Marker>
    )
}

export default BikeMarker;


// position={props.position}
//             icon={{
//                 url: bikeImg,
//                 size: {width:2000, height:2000},
//                 anchor: {x:8.5, y:15},
//                 scaledSize: {width:10, height:10}
//             }}
//             zIndex={1}