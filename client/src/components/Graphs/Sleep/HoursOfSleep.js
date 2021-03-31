import React from 'react';
import CanvasJSReact from '../../../canvasjs.react';
import '../../../pages/Graph/Graph.css'
import { Grid } from '@material-ui/core';

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

function LineGraph({ dates }) {

  CanvasJS.addColorSet("customColorSet1", ["#ffa372", "#a6dcef", "#ea9a96"])


  const options = {
    // backgroundColor: "#eaf6f6",
    colorSet: "customColorSet1",
    theme: "light2",

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
    <div className="hoursSleepContainer">
      <Grid item xs={12}>
        <CanvasJSChart margin="10px" options={options} />
      </Grid>
    </div>
  )

}

export default LineGraph;