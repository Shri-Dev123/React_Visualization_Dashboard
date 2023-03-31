import React from 'react';
import { Line, Bar} from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

function Chart(props) {
  const { data } = props;

  const chartData = {
    labels: data.map((d) => d.end_year),
    datasets: [
      {
        label: 'Intensity',
        data: data.map((d) => d.intensity),
        fill: false,
        borderColor: '#f44336',
        tension: 0.1,
      },
      {
        label: 'Likelihood',
        data: data.map((d) => d.likelihood),
        fill: false,
        borderColor: '#2196f3',
        tension: 0.1
      },
      {
        label: 'Relevance',
        data: data.map((d) => d.relevance),
        fill: false,
        borderColor: '#4caf50',
        tension: 0.1
      }
    ]
  };

  const barChartData = {
    labels: data.map((d) => d.end_year),
    datasets: [
      {
        label: 'Intensity',
        data: data.map((d) => d.intensity),
        backgroundColor: 'rgba(244, 67, 54, 0.5)',
        borderColor: '#f44336',
        borderWidth: 1,
      },
      {
        label: 'Likelihood',
        data: data.map((d) => d.likelihood),
        backgroundColor: 'rgba(33, 150, 243, 0.5)',
        borderColor: '#2196f3',
        borderWidth: 1,
      },
      {
        label: 'Relevance',
        data: data.map((d) => d.relevance),
        backgroundColor: 'rgba(76, 175, 80, 0.5)',
        borderColor: '#4caf50',
        borderWidth: 1,
      }
    ]
  };

  return (
    <>
    <Bar data={barChartData} />
    <Line data={chartData} />
    </>
    );
}

export default Chart;
