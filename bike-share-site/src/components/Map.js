/*
    Map.js

    Map that holds the agent-based simulation
*/

import React from 'react';
import {connect} from 'react-redux';
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

const mapEnvironment = compose(
    withProps({
        containerElement: <div style={{height: `500px`, width: `100%`}}/>,
        mapElement: <div style={{height: `100%`}}/>
    }),
    withGoogleMap
);

const MapLayout = (props) => {
    // creates the station markers to display on map
    let stationMarkers = stations.map((station, i) => (
        <StationMarker 
            key={station.id}
            position={station.position}
        />
    ));

    // creates bike markers to display on map
    let bikeMarkers = props.bikes.map((bike, i) => (
        <BikeMarker 
            key={i}
            position={bike.position}
        />
    ));

    console.log(bikeMarkers)

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

const mapStateToProps = (state) => {
    return {
        bikes: state.bikes
    }
};

export default connect(mapStateToProps, undefined)(Map);