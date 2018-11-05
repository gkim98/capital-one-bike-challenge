import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

class Graph extends Component {

    render() {
        return (
            <div>
                <VictoryChart
                    domainPadding={20}
                    animate={{duration: 500}}
                    theme={VictoryTheme.material}
                >
                    <VictoryBar

                    />
                </VictoryChart>
            </div>
        )
    }
}

export default Graph;