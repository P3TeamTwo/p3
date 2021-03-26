import React from 'react';
import CanvasJSReact from '../../canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function LineGraph({dates}) {
  console.log(dates.map(date => ({y:new Date(date)})))
  console.log({ x: new Date(2021, 1, 1), y: 8 })
  console.log(dates)
  const options = {
    title: {
      text: "Hours of Sleep"
    },
    data: [{
      type: "spline",
      dataPoints: [
        ...dates.map(({date, point}) => ({x:new Date(date), y: point}))
        // { x: new Date(2021, 1, 1), y: 8 },
        // { x: new Date(2021, 1, 2), y: 6 },
        // { x: new Date(2021, 1, 3), y: 8 },
        // { x: new Date(2021, 1, 4), y: 4 },
        // { x: new Date(2021, 1, 5), y: 5 },
        // { x: new Date(2021, 1, 6), y: 8 },
        // { x: new Date(2021, 1, 7), y: 7 },

      ]
    }
  ]
  }
console.log(options)
    return(
      <div >
        <CanvasJSChart options = {options} />
      </div>
    )

}

export default LineGraph;