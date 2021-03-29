import React from 'react';
import CanvasJSReact from '../../canvasjs.react';
import { Box } from '@material-ui/core';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function MinActive({ MinActive }) {
    // console.log(screenTimeNights)
    const options = {
        animationEnabled: true,
        title: {
            text: "How many minutes spent active in the past 7 days"
        },
        subtitles: [{
            text: " % of nights ",
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "Yes", y: 21 },
                { name: "No", y: 5 },
                { name: "maybe", y: 10 },
            ]
        }]
    }
    return (
        <Box >
            <CanvasJSChart options={options} />
        </Box>
    );
}

export default MinActive;