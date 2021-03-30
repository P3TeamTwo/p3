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
			name: "Water Consumed Oz",
			showInLegend: true,
			xValueFormatString: "MMM YYYY",
			yValueFormatString: "#,##0 Units",
			dataPoints: [
				...datesAndWater.map(({ date, point }) => ({ x: new Date(date), y: point }))
			]
		},
		{
			name: "Minutes of exercise",
			axisYType: "secondary",
			showInLegend: true,
			fillOpacity: .5,
			xValueFormatString: "MMM YYYY",
			yValueFormatString: "#,##0.# hours",
			dataPoints: [
				...datesAndCalories.map(({ date, point }) => ({ x: new Date(date), y: point }))
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