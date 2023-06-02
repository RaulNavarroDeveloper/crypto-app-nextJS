import React, {useEffect, useRef} from "react"
import { createChart, ColorType } from "lightweight-charts"
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import {Chart as ChartJS} from "chart.js/auto";
// import { Line } from "react-chartjs-2"
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

export default function LinearChart ({chartData}) {
  const {
		data,
		colors: {
			backgroundColor = 'white',
			lineColor = '#2962FF',
			textColor = 'black',
			areaTopColor = '#2962FF',
			areaBottomColor = 'rgba(41, 98, 255, 0.28)',
		} = {},
	} = chartData;

  const chartContainerRef = useRef();

  useEffect( () => {
			const handleResize = () => {
				chart.applyOptions({ width: chartContainerRef.current.clientWidth });
			};

			const chart = createChart(chartContainerRef.current, {
				layout: {
					background: { type: ColorType.Solid, color: backgroundColor },
					textColor,
				},
				width: chartContainerRef.current.clientWidth,
				height: 360,
			});
			chart.timeScale().fitContent();

			const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
			newSeries.setData(chartData);

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);

				chart.remove();
			};
		},[chartData, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]);

 const handleTemporalityChart = (e) => {
  // if(e.currentTarget.classList.contains("active-switcher-item")) {
  //   return;
  // }
  e.currentTarget.classList.toggle("active-switcher-item")
  //  console.log(e.currentTarget.className)
}


// console.log(chartData);
  return (
    <>
    <div className="chart-container"
      ref={chartContainerRef}
    >
      {/* {console.log(chartData.labels)} */}
      {/* { chartData && (
            <Line
              data={chartData}
            />
      )}      */}
    </div>
    </>
  )
};
