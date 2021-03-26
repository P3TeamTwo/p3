import React from 'react';
import CanvasJSReact from '../../canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function LineGraph({dates}) {
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