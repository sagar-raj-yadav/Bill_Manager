import  { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Chart as ChartJS, CategoryScale,LinearScale,PointElement,LineElement,
  Title,Tooltip, Legend, LineController  } from "chart.js";

ChartJS.register( CategoryScale, LinearScale, PointElement ,LineElement,
  Title, Tooltip,Legend,LineController );

const BillChart = () => {
  const { bills } = useSelector((state) => state.bills);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");
    
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (ctx) {
      chartInstance.current = new ChartJS(ctx, {
        type: "line",
        data: {
          labels: bills.map((bill) => bill.date),
          datasets: [{
            label: "Bill Amount",
            data: bills.map((bill) => bill.amount),
            borderColor: "rgb(239, 45, 229)",
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: { type: "category" },
            y: { beginAtZero: true }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [bills]);

  return (
    <div className="chart-container">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default BillChart;