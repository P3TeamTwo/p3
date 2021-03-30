import React from 'react';
import CanvasJSReact from '../../../canvasjs.react';
import '../../../pages/Graph/Graph.css'

import { Box, Grid } from '@material-ui/core';

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

function Veggies({ servings }) {

    CanvasJS.addColorSet("customColorSet1", ["#ffa372", "#a6dcef", "#ea9a96"])


    const options = {
        // backgroundColor: "#eaf6f6",
        colorSet: "customColorSet1",
        theme: "light2",

        title: {
            text: "Veggies Servings"
        },
        data: [{
            type: "spline",
            dataPoints: [
                ...servings.map(({ date, point }) => ({ x: new Date(date), y: point }))
            ]
        }
        ]
    }
    return (
        <div className="veggiesContainer">
            <Grid item xs={12}>
                <CanvasJSChart margin="10px" options={options} />
            </Grid>
        </div>
    )

}

export default Veggies;