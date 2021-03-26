import React from 'react';
import CanvasJSReact from '../../canvasjs.react';
import './DblAxisLine'

var Component = React.Component;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DblAxisLine extends Component {

	 constructor () {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}

  toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	
	render() {
        
		const options = {
			theme: "light2",
			animationEnabled: true,
			title:{
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
				titleFontColor: "#51CDA0",
				lineColor: "#51CDA0",
				labelFontColor: "#51CDA0",
				tickColor: "#51CDA0"
			},
			toolTip: {
				shared: true
			},
			legend: {
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: [{
				type: "spline",
				name: "Hours of Sleep",
				showInLegend: true,
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "#,##0 minutes",
                dataPoints:  [
					// How do i pass this data into a class??
        // ...dates.map(({date, point}) => ({x:new Date(date), y: point}))
      ]
			},
			{
				name: "Time of drinking coffee",
				axisYType: "secondary",
				showInLegend: true,
                fillOpacity: .4,
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "#,##0.# hours",
                dataPoints: [
                    { x: new Date(2021, 1, 1), y: 8 },
                    { x: new Date(2021, 1, 2), y: 6 },
                    { x: new Date(2021, 1, 3), y: 8 },
                    { x: new Date(2021, 1, 4), y: 4 },
                    { x: new Date(2021, 1, 5), y: 5 },
                    { x: new Date(2021, 1, 6), y: 8 },
                    { x: new Date(2021, 1, 7), y: 7 },
            
                  ]
			}]
		}
		
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
 

export default DblAxisLine;