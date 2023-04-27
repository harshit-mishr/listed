import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import style from './PieChart.module.css'

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
 
  datasets: [
    {
      label: '# of Votes',
      data: [14, 31, 55],
      backgroundColor: [
        'rgba(238, 132, 132, 1)',
        'rgba(246, 220, 125, 1)',
        'rgba(152, 216, 158, 1)',
      ],
      borderColor: [
         'rgba(238, 132, 132, 1)',
        'rgba(246, 220, 125, 1)',
        'rgba(152, 216, 158, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export  function PieChart({className}) {
  return <Pie className={className} data={data} />;
}
