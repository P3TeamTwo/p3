import React from 'react';
import CanvasJSReact from '../../../canvasjs.react';
import { Box } from '@material-ui/core';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function ActiveDoughnut({active}) {
// console.log(active)
	const options = {
		theme: "light2",

		animationEnabled: true,
		title: {
			text: "How active were you in the past 7 days"
		},
		subtitles: [{
			text: " % of days ",
			verticalAlign: "center",
			fontSize: 24,
			dockInsidePlotArea: true
		}],
		data: [{
			type: "doughnut",
			showInLegend: true,
			indexLabel: "{name}: {y}",
			yValueFormatString: "#,###'%'",
			dataPoints: [
				{ name: "Yes", y: 21 },
				{ name: "No", y: 5 },
				{ name: "It's a rest day!", y: 10 },
			]
		}]
	}
	return (
		<Box >
			<CanvasJSChart options={options}/>
		</Box>
	);
}

export default ActiveDoughnut;