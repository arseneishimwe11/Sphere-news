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
import { useState, useEffect } from 'react';

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
    scales: {
        y:
        {
            min: 0,
            max: 70,
            stepSize: 10,
        },
        x:
        {

        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
    },
};

const labels = ['July 23', 'Aug 23', 'Sep 23'];

export const data = {
    labels,
    datasets: [
        {
            label: 'FAR LEFT',
            data: [30, 40, 20],
            borderColor: '#475E7D',
            backgroundColor: '#475E7D',
        },
        {
            label: 'LEFT',
            data: [24, 30, 26],
            borderColor: '#E3893D',
            backgroundColor: '#E3893D',
        },
        {
            label: 'LEAN LEFT',
            data: [35, 45, 40],
            borderColor: '#39BA94',
            backgroundColor: '#39BA94',
        },
        {
            label: 'CENTER',
            data: [55, 65, 60],
            borderColor: '#E9BB20',
            backgroundColor: '#E9BB20',
        },
        {
            label: 'LEAN RIGHT',
            data: [40, 43, 40],
            borderColor: '#30B4C9',
            backgroundColor: '#30B4C9',
        },
        {
            label: 'RIGHT',
            data: [30, 36, 33],
            borderColor: '#4AB4CC',
            backgroundColor: '#4AB4CC',
        },
        {
            label: 'FAR RIGHT',
            data: [16, 20, 23],
            borderColor: '#24A9CC',
            backgroundColor: '#24A9CC',
        },
    ]
};

export function BiasChart() {
    return (
        <div className='m-4' id="biasChart">
            <Line options={options} data={data} redraw={true} />
        </div>
    );
}