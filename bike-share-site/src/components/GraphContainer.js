/*
    GraphContainer.js

    Container for graphs and information to explore various trend
*/

import React, { Component } from 'react';

import Graph from './Graph';

class GraphContainer extends Component {


    render() {
        return (
            <div className='graph-container'>
                <Graph />
            </div>
        )
    }
}

export default GraphContainer;

