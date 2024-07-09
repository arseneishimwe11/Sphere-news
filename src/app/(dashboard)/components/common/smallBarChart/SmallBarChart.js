'use client'

import './SmallBarChart.css';

export default function SmallBarChart() {
    return (
        <div className="bar-chart">
            <div className="bar" style={{ height: '80%', backgroundColor: '#425993' }}></div>
            <div className="bar" style={{ height: '60%', backgroundColor: '#4BBBEB' }}></div>
            <div className="bar" style={{ height: '40%', backgroundColor: '#F7881C' }}></div>
        </div>
    );
}