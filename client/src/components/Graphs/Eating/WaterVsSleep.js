import React from 'react';
import CanvasJSReact from '../../../canvasjs.react';
import '../../../pages/Graph/Graph.css'

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function WaterVsSleep({ datesAndSleep, datesAndWater }) {

	CanvasJS.addColorSet("customColorSet1", ["#6eb6ff", "#7098da", "#bae8e8"])


	const options = {
		colorSet: "customColorSet1",
		theme: "light2",
		animationEnabled: true,
		title: {
			text: "Water Consumed vs Hours Slept"
		},
		subtitles: [{
			text: "Click Legend to Hide or Unhide Data Series"
		}],
		axisX: {
			title: "States"
		},
		axisY: {
			title: "Water Consumed",
			titleFontColor: "#6D78AD",
			lineColor: "#6D78AD",
			labelFontColor: "#6D78AD",
			tickColor: "#6D78AD"
		},
		axisY2: {
			title: "Hours Slept",
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
			name: "Water Consumed",
			showInLegend: true,
			xValueFormatString: "MMM YYYY",
			yValueFormatString: "#,##0 Units",
			dataPoints: [
				...datesAndWater.map(({ date, point }) => ({ x: new Date(date), y: point }))
			]
		},
		{
			type: "spline",
			name: "Hours Slept",
			axisYType: "secondary",
			showInLegend: true,
			xValueFormatString: "MMM YYYY",
			yValueFormatString: "#,##0.# hours",
			dataPoints: [
				...datesAndSleep.map(({ date, point }) => ({ x: new Date(date), y: point }))
			]
		}]
	}

	return (
		<div className="WaterVsSleep">
			<CanvasJSChart options={options}/>
		</div>
	);
}



export default WaterVsSleep;