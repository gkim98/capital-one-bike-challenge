import React from 'react';
import {
    withGoogleMap,
    GoogleMap,
} from 'react-google-maps';
import {compose, withProps} from 'recompose';

import stations from '../assets/stations';
import mapStyles from '../assets/mapStyles.json';
import BikeMarker from './BikeMarker';
import StationMarker from './StationMarker';

const defaultMapOptions = {
    styles: mapStyles,
    mapTypeControl: false
};

let dummy = [
    {
        position: {lat: 39.951544406619306, lng: -75.19083540348124}
    }
];

const mapEnvironment = compose(
    withProps({
        containerElement: <div style={{height: `500px`, width: `100%`}}/>,
        mapElement: <div style={{height: `100%`}}/>
    }),
    withGoogleMap
);

const MapLayout = (props) => {
    let bikeMarkers = dummy.map((bike, i) => (
        <BikeMarker 
            key={i}
            position={bike.position}
        />
    ));

    let stationMarkers = stations.map((station, i) => (
        <StationMarker 
            key={station.id}
            position={station.position}
        />
    ));

    return (
        <div>
            <GoogleMap
                defaultZoom={15.5}
                defaultCenter={{lat: 34.03421008272239, lng: -118.25459175916254}}
                defaultOptions={defaultMapOptions}
            >
                {stationMarkers}
                {bikeMarkers}
            </GoogleMap>
        </div>
    )
}

const Map = mapEnvironment(MapLayout);

export default Map;