import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

const BarChart = () => {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Data Series 1',
        backgroundColor: 'rgb(22 101 52)',
        data: [12, 9, 7, 5, 2],
      },
    ],
  };

  const options = {
    layout: {
        padding: {
          left: 5,
          right: 5,
          top: -15,
          bottom: 5,
        },
        margin: {
            left: 5,
            right: 5,
            top: 5,
            bottom: 5
          }},
    
    scales: {
        y: {
            beginAtZero: true,
            grid: {
            },
            ticks: {
                stepSize: 1, // Will create ticks at every whole number
                padding: 15
            }
        },
        x: {
            beginAtZero: true,
            grid: {
            display: false // No display of grid lines for the x-axis
            },
            ticks: {
            padding: 7
            }
        }
    }
  };
  

  return (
    <div className="w-fit h-fit border-2 border-emerald-800 rounded py-5" >
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;