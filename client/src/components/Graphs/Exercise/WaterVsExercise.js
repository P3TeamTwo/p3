import React from 'react';
import CanvasJSReact from '../../../canvasjs.react';
import '../../../pages/Graph/Graph.css'

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function WaterVsExercise({ datesAndWater, datesAndCalories }) {

	CanvasJS.addColorSet("customColorSet1", ["#6eb6ff", "#7098da", "#bae8e8"])


	const options = {
		colorSet: "customColorSet1",
		theme: "light2",
		animationEnabled: true,
		title: {
			text: "Water Consumed vs Minutes of Exercise"
		},
		subtitles: [{
			text: "Click Legend to Hide or Unhide Data Series"
		}],
		axisX: {
			title: "States"
		},
		axisY: {
			title: "Water Consumed Oz",
			titleFontColor: "#6D78AD",
			lineColor: "#6D78AD",
			labelFontColor: "#6D78AD",
			tickColor: "#6D78AD"
		},
		axisY2: {
			title: "Minutes of exercise",
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
			name: "Water Consumed Oz",
			showInLegend: true,
			xValueFormatString: "MMM YYYY",
			yValueFormatString: "#,##0 Units",
			dataPoints: [
				...datesAndWater.map(({ date, point }) => ({ x: new Date(date), y: point }))
			]
		},
		{
			type: "spline",
			name: "Calories Burned",
			axisYType: "secondary",
			showInLegend: true,
			xValueFormatString: "MMM YYYY",
			yValueFormatString: "#,##0.# hours",
			dataPoints: [
				...datesAndCalories.map(({ date, point }) => ({ x: new Date(date), y: point }))
			]
		}]
	}

	return (
		<div className="WaterVsExercise">
			<CanvasJSChart options={options}
			/>
		</div>
	);
}



export default WaterVsExercise;