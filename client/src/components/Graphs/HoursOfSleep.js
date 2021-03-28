import React from 'react';
import CanvasJSReact from '../../canvasjs.react';

import { Box } from '@material-ui/core';

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function LineGraph({ dates }) {

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
    <div className="hoursSleepContainer">
      <Box >
        <CanvasJSChart margin="10px" options={options} />
      </Box>
    </div>
  )

}

export default LineGraph;