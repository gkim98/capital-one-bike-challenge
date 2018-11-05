/*
    MapContainer.js

    Holds the map and other simulation components, such as the options pane
*/

import React, { Component } from 'react';

import './MapContainer.scss'
import Map from './Map';
import Options from './Options';

class MapContainer extends Component {
    state= { 
        '3005': 0,
        '3006': 0,
        '3007': 0,
        '3008': 0,
        '3009': 0,
        '3010': 0,
        '3011': 0,
        '3014': 0,
        '3016': 0,
        '3018': 0,
        '3019': 0,
        '3020': 0,
        '3021': 0,
        '3022': 0,
        '3023': 0,
        '3024': 0,
        '3025': 0,
        '3026': 0,
        '3027': 0,
        '3028': 0,
        '3029': 0,
        '3030': 0,
        '3031': 0,
        '3032': 0,
        '3033': 0,
        '3034': 0,
        '3035': 0,
        '3036': 0,
        '3037': 0,
        '3038': 0,
        '3039': 0,
        '3040': 0,
        '3042': 0,
        '3045': 0,
        '3046': 0,
        '3047': 0,
        '3048': 0,
        '3049': 0,
        '3051': 0,
        '3052': 0,
        '3053': 0,
        '3054': 0,
        '3055': 0,
        '3056': 0,
        '3057': 0,
        '3058': 0,
        '3059': 0,
        '3060': 0,
        '3062': 0,
        '3063': 0,
        '3064': 0,
        '3065': 0,
        '3066': 0,
        '3067': 0,
        '3068': 0,
        '3069': 0,
        '3074': 0,
        '3075': 0,
        '3076': 0,
        '3077': 0,
        '3078': 0,
        '3079': 0,
        '3080': 0,
        '3081': 0,
        '3082': 0,
        '4108': 0 
    }

    render() {
        return (
            <div className='map-container'>
                <Options />
                <Map counts={this.state}/>
            </div>
        )
    }
}

export default MapContainer;