/*
    StationMarker.js

    Station marker that signifies a bike station on the map
*/

import React from 'react';
import { OverlayView } from 'react-google-maps';

import stationImg from '../assets/stationImg.png'

const StationMarker = (props) => {
    return (
        <OverlayView
            position={props.position}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
            <div style={{
                'backgroundColor':'#3f72af',
                'color': '#f9f7f7',
                'padding': '3px',
                'borderRadius': '3px',
                'font-size': '12px'
            }}>
                {props.count}
            </div>
        </OverlayView>
    )
}

export default StationMarker;
