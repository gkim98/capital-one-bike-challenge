import React from 'react';
import { Marker } from 'react-google-maps';

const BikeMarker = (props) => {

    return (
        <Marker
            position={props.position}
        >
        </Marker>
    )
}

export default BikeMarker;