// window.onload = function () {
// 	var chart = new CanvasJS.Chart('chartContainer', {
// 		animationEnabled: true,
// 		theme: 'light2',
// 		title: {
// 			text: 'Daily Visitors',
// 		},
// 		data: [
// 			{
// 				type: 'line',
// 				indexLabelFontSize: 16,
// 				dataPoints: [
// 					{ y: 450 },
// 					{ y: 414 },
// 					{ y: 520, indexLabel: '\u2191 highest', markerColor: 'red', markerType: 'triangle' },
// 					{ y: 460 },
// 					{ y: 450 },
// 					{ y: 500 },
// 					{ y: 480 },
// 					{ y: 480 },
// 					{
// 						y: 410,
// 						indexLabel: '\u2193 lowest',
// 						markerColor: 'DarkSlateGrey',
// 						markerType: 'cross',
// 					},
// 					{ y: 500 },
// 					{ y: 480 },
// 					{ y: 510 },
// 				],
// 			},
// 		],
// 	});
// 	setTimeout(() => {
// 		chart.render();
// 	}, 1000);
// };

// -----------------------
window.onload = function () {
	var dps = [];
	var chart = new CanvasJS.Chart('chartContainer', {
		exportEnabled: true,
		title: {
			text: 'Dynamic Spline Chart',
		},
		data: [
			{
				type: 'spline',
				markerSize: 0,
				dataPoints: dps,
			},
		],
	});

	var xVal = 0;
	var yVal = 100;
	var updateInterval = 3000;
	var dataLength = 50; // number of dataPoints visible at any point

	var updateChart = function (count) {
		count = count || 1;
		// count is number of times loop runs to generate random dataPoints.
		for (var j = 0; j < count; j++) {
			yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
			dps.push({
				x: xVal,
				y: yVal,
			});
			xVal++;
		}
		if (dps.length > dataLength) {
			dps.shift();
		}
		chart.render();
	};

	updateChart(dataLength);
	setInterval(function () {
		updateChart();
	}, updateInterval);
};
