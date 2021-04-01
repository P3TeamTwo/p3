import React from 'react';
import CanvasJSReact from '../../../canvasjs.react';
import '../../../pages/Graph/Graph.css'

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function WaterVsExercise({ datesAndWater, datesAndExercise }) {

	CanvasJS.addColorSet("customColorSet1", ["#6eb6ff", "#7098da", "#bae8e8"])


	const options = {
		colorSet: "customColorSet1",
		theme: "light2",
		animationEnabled: true,
		title: {
			text: "Minutes of Exercise vs Water Consumed"
		},
		axisX: {
			title: "States"
		},
		axisY: {
			title: "Minutes of Exercise",
			titleFontColor: "#6D78AD",
			lineColor: "#6D78AD",
			labelFontColor: "#6D78AD",
			tickColor: "#6D78AD"
		},
		axisY2: {
			title: "Water Consumed",
			titleFontColor: "#79a3b1",
			lineColor: "#79a3b1",
			labelFontColor: "#79a3b1",
			tickColor: "#79a3b1"
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor: "pointer",
		},
		data: [{
			type: "spline",
			name: "Minutes of Exercise",
			showInLegend: true,
			xValueFormatString: "MMM YYYY",
			yValueFormatString: "#,##0.#",
			dataPoints: [
				...datesAndExercise.map(({ date, point }) => ({ x: new Date(date), y: point }))
			]
		},
		{
			name: "Water Consumed",
			axisYType: "secondary",
			showInLegend: true,
			fillOpacity: .5,
			xValueFormatString: "MMM YYYY",
			yValueFormatString: "#,##0oz",
			dataPoints: [
				...datesAndWater.map(({ date, point }) => ({ x: new Date(date), y: point }))
			]
		}]
	}

	return (
		<div className="WaterVsExercise">
				<CanvasJSChart options={options}/>
		</div>
	);
}



export default WaterVsExercise;