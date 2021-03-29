import React from 'react';
import CanvasJSReact from '../../canvasjs.react';
import { Box } from '@material-ui/core';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function ActivevsInactive({ activeTime }) {
    // console.log(screenTimeNights)

    const options = {
        theme: "light2",

        animationEnabled: true,
        title: {
            text: "Active Vs Inactive Time"
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
                { name: "It's a rest day!", y: 5 },
            ]
        }]
    }
    return (
        <Box >
            <CanvasJSChart options={options} />
        </Box>
    );
}

export default ActivevsInactive;