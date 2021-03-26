import React from 'react';
import CanvasJSReact from '../../canvasjs.react';
import './CoffeeVsSleep'

var Component = React.Component;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DoughnutScreenTime extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "How many nights of screentime in the past 7 days"
			},
			subtitles: [{
				text: " % of nights ",
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
					{ name: "Yes", y: 31 },
					{ name: "No", y: 5 },
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default DoughnutScreenTime;