import React from 'react';

import CanvasJSReact from '../../../canvasjs.react';
import '../../../pages/Graph/Graph.css';

import { Box } from '@material-ui/core';

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function LineGraph({ dates }) {

  const options = {
    title: {
      text: "Hours of Exercise"
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
      <Box width="100%">
        <CanvasJSChart margin="10px" options={options} />
      </Box>
    </div>
  )

}

export default LineGraph;