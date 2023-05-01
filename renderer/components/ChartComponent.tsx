import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";


function ChartComponent({ datasets, labels, type, options, className = "" , style = {}}) {
  const chartRef = useRef();
  
  useEffect(() => {
    const chart = new Chart(chartRef.current, {
		type: type,
	
		data: {
			labels: labels,
			datasets: datasets
		},
		options: options
    });

    return () => {
      chart.destroy();
    };
  }, [datasets, labels, type, options]);

  return (
    <canvas className={className} style={style} ref={chartRef}/>
  );
}

export default ChartComponent;