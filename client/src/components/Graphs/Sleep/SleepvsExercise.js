import React from 'react';
import CanvasJSReact from '../../../canvasjs.react';
import '../../../pages/Graph/Graph.css'

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function SleepvsExercise({ datesAndSleep, datesAndExercise }) {

	CanvasJS.addColorSet("customColorSet1", ["#6eb6ff", "#7098da", "#bae8e8"])


	const options = {
		colorSet: "customColorSet1",
		theme: "light2",
		animationEnabled: true,
		title: {
			text: "Hours Slept vs Minutes of Exercise"
		},
		axisX: {
			title: "States"
		},
		axisY: {
			title: "Hours Slept",
			titleFontColor: "#6D78AD",
			lineColor: "#6D78AD",
			labelFontColor: "#6D78AD",
			tickColor: "#6D78AD"
		},
		axisY2: {
			title: "Minutes of Exercise",
			titleFontColor: "#7098da",
			lineColor: "#6eb6ff",
			labelFontColor: "#6eb6ff",
			tickColor: "#6eb6ff"
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor: "pointer",
		},
		data: [{
			type: "spline",
			name: "Hours of Sleep",
			showInLegend: true,
			xValueFormatString: "MMM YYYY",
			yValueFormatString: "#,##0",
			dataPoints: [
				...datesAndSleep.map(({ date, point }) => ({ x: new Date(date), y: point }))
			]
		},
		{
			type: "spline",
			name: "Minutes of Exercise",
			axisYType: "secondary",
			showInLegend: true,
			xValueFormatString: "MMM YYYY",
			yValueFormatString: "#,##0.#",
			dataPoints: [
				...datesAndExercise.map(({ date, point }) => ({ x: new Date(date), y: point }))
			]
		}]
	}

	return (
		<div className="SleepvsExercise">
			<CanvasJSChart options={options}
			/>
		</div>
	);
}



export default SleepvsExercise;