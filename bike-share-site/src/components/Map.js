/*
    Map.js

    Map that holds the agent-based simulation
*/

import React from 'react';
import {connect} from 'react-redux';
import {
    withGoogleMap,
    GoogleMap
} from 'react-google-maps';
import {compose, withProps} from 'recompose';

import stations from '../assets/stations';
import mapStyles from '../assets/mapStyles.json';
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
            count={props.counts[station.id]}
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