import React from 'react';
import CanvasJSReact from '../../../canvasjs.react';
import '../../../pages/Graph/Graph.css';
import { Grid } from '@material-ui/core';

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function LineGraph({ dates }) {

  const options = {
    colorSet: "customColorSet1",
    theme: "light2",
    
    title: {
      text: "Minutes of Exercise"
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
    <div className="hoursExerciseContainer">
      <Grid item xs={12}>
        <CanvasJSChart margin="10px" options={options} />
      </Grid>
    </div>
  )

}

export default LineGraph;