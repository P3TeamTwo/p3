import React from 'react';
import CanvasJSReact from '../../canvasjs.react';
import { Box } from '@material-ui/core';
import '../../pages/Graph/Graph.css'

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function MinActive({ dates }) {

    const options = {
        title: {
            text: "Hours of Sleep"
        },
        data: [{
            type: "spline",
            dataPoints: [
                ...dates.map(({ date, point }) => ({ x: new Date(date), y: point }))
            ]
        }
        ]
    }
    return (
        <div className="MinActiveContainer">
            <Box width="100%">
                <CanvasJSChart margin="10px" options={options} />
            </Box>
        </div>
    )

}

export default MinActive;

