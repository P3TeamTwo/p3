import React from 'react';
import CanvasJSReact from '../../../canvasjs.react';
import { Box } from '@material-ui/core';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function DblAxisLine({ datesAndExercise, datesAndCalories }) {
	console.log(...datesAndCalories.map(({ date, point }) => ({ x: new Date(date), y: point }))
)
	CanvasJS.addColorSet("customColorSet1", ["#ffa372", "#a6dcef", "#ea9a96"])

	const options = {
		colorSet: "customColorSet1",
		theme: "light2",
		animationEnabled: true,
		title: {
			text: "Minutes of exercise vs Calories burned"
		},
		axisX: {
			title: "States"
		},
		axisY: {
			title: "Minutes of exercise",
			titleFontColor: "#6D78AD",
			lineColor: "#6D78AD",
			labelFontColor: "#6D78AD",
			tickColor: "#6D78AD"
		},
		axisY2: {
			title: "Calories Burned",
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
			name: "Minutes of exercise",
			showInLegend: true,
			xValueFormatString: "MMM YYYY",
			yValueFormatString: "#,##0 minutes",
			dataPoints: [
				...datesAndExercise.map(({ date, point }) => ({ x: new Date(date), y: point }))
			]
		},
		{ 
			name: "Calories Burned",
			axisYType: "secondary",
			showInLegend: true,
			fillOpacity: .5,
			xValueFormatString: "MMM YYYY",
			yValueFormatString: "###",
			dataPoints: [
				...datesAndCalories.map(({ date, point }) => ({ x: new Date(date), y: point }))
			]
		}]
	}

	return (
		<div className="exerciseVsCalories">
			<Box >
				<CanvasJSChart options={options} />
			</Box>
		</div>

	);
}

export default DblAxisLine;