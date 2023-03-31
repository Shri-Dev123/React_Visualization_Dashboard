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
        tension: 0.1,
      },
      {
        label: 'Relevance',
        data: data.map((d) => d.relevance),
        fill: false,
        borderColor: '#4caf50',
        tension: 0.1,
      },
      {
        label: 'Year',
        data: data.map((d) => d.year),
        fill: false,
        borderColor: '#9c27b0',
        tension: 0.1,
      },
      {
        label: 'Country',
        data: data.map((d) => d.country),
        fill: false,
        borderColor: '#e91e63',
        tension: 0.1,
      },
      {
        label: 'Topics',
        data: data.map((d) => d.topic),
        fill: false,
        borderColor: '#607d8b',
        tension: 0.1,
      },
      {
        label: 'Region',
        data: data.map((d) => d.region),
        fill: false,
        borderColor: '#ff9800',
        tension: 0.1,
      },
      {
        label: 'City',
        data: data.map((d) => d.city),
        fill: false,
        borderColor: '#795548',
        tension: 0.1,
      },
    ],
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
    },
    {
      label: 'Year',
      data: data.map((d) => d.end_year),
      backgroundColor: 'rgba(255, 193, 7, 0.5)',
      borderColor: '#ffc107',
      borderWidth: 1,
    },
    {
      label: 'Country',
      data: data.map((d) => d.country),
      backgroundColor: 'rgba(156, 39, 176, 0.5)',
      borderColor: '#9c27b0',
      borderWidth: 1,
    },
    {
      label: 'Topics',
      data: data.map((d) => d.topics),
      backgroundColor: 'rgba(0, 150, 136, 0.5)',
      borderColor: '#009688',
      borderWidth: 1,
    },
    {
      label: 'Region',
      data: data.map((d) => d.region),
      backgroundColor: 'rgba(63, 81, 181, 0.5)',
      borderColor: '#3f51b5',
      borderWidth: 1,
    },
    {
      label: 'City',
      data: data.map((d) => d.city),
      backgroundColor: 'rgba(255, 152, 0, 0.5)',
      borderColor: '#ff9800',
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
