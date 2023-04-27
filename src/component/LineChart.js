import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        // text: "Line Chart",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: false,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    elements: {
      line: {
        tension: 0.4, // Adjust this value to control the curve smoothness
      },
    },
  };


const labels = ['Week0','Week1', 'Week2', 'Week3', 'Week4','Week5' ];


export const data = {
  labels,
  datasets: [
    {
      label: 'User',
      data:  [100,450,150,450,180,250],
      borderColor: '#9BDD7C' ,
      backgroundColor:  '#9BDD7C',
     
    },
    
    {
      label: 'Guest',
      data:[200,395,200,300,220,450],
      borderColor: '#E9A0A0',
      backgroundColor: '#E9A0A0',
    },
  ],
};

export function LineChart({className}) {
  return <Line className={className} options={options} data={data} />;
}