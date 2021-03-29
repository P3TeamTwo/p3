import React from 'react';
import CanvasJSReact from '../../canvasjs.react';
import { Box } from '@material-ui/core';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function DblAxisLine({ datesAndSleep, datesAndCoffee }) {

	CanvasJS.addColorSet("customColorSet1", ["#ffa372", "#a6dcef", "#ea9a96"])

	const options = {
		colorSet: "customColorSet1",
		theme: "light2",
		animationEnabled: true,
		title: {
			text: "Hours of Sleep vs Time of coffee consumption"
		},
		subtitles: [{
			text: "Click Legend to Hide or Unhide Data Series"
		}],
		axisX: {
			title: "States"
		},
		axisY: {
			title: "Hours of Sleep",
			titleFontColor: "#6D78AD",
			lineColor: "#6D78AD",
			labelFontColor: "#6D78AD",
			tickColor: "#6D78AD"
		},
		axisY2: {
			title: "Time of drinking coffee",
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
			name: "Hours of Sleep",
			showInLegend: true,
			xValueFormatString: "MMM YYYY",
			yValueFormatString: "#,##0 minutes",
			dataPoints: [
				...datesAndSleep.map(({ date, point }) => ({ x: new Date(date), y: point }))
			]
		},
		{
			name: "Time of drinking coffee",
			axisYType: "secondary",
			showInLegend: true,
			fillOpacity: .5,
			xValueFormatString: "MMM YYYY",
			yValueFormatString: "#,##0.# hours",
			dataPoints: [
				...datesAndCoffee.map(({ date, point }) => ({ x: new Date(date), y: point }))
			]
		}]
	}

	return (
		<div className="coffeeVsSleep">
			<Box >
				<CanvasJSChart options={options} />
			</Box>
		</div>

	);
}

export default DblAxisLine;