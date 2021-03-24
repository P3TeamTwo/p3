import React from 'react';
import CanvasJSReact from '../../canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function LineGraph() {

  const options = {
    title: {
      text: "Hours of Sleep"
    },
    data: [{
      type: "spline",
      dataPoints: [
        { x: new Date(2021, 1, 1), y: 8 },
        { x: new Date(2021, 1, 2), y: 6 },
        { x: new Date(2021, 1, 3), y: 8 },
        { x: new Date(2021, 1, 4), y: 4 },
        { x: new Date(2021, 1, 5), y: 5 },
        { x: new Date(2021, 1, 6), y: 8 },
        { x: new Date(2021, 1, 7), y: 7 },

      ]
    }
  ]
  }

    return(
      <div>
        <CanvasJSChart options = {options} />
      </div>
    )

}

export default LineGraph;