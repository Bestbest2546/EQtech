import React from 'react';
import { Bar } from 'react-chartjs-2';

const PercentBarChart = () => {
    // สมมติว่าข้อมูลที่คุณมีอยู่คือ
    const dataValues1 = [10, 20, 30, 40];
    const dataValues2 = [20, 15, 40, 30];

    // แปลงค่าเป็นเปอร์เซ็นต์
    const percentData1 = dataValues1.map((val, index) => (val / (val + dataValues2[index])) * 100);
    const percentData2 = dataValues2.map((val, index) => (val / (val + dataValues1[index])) * 100);

    const data = {
        labels: ['January',],
        datasets: [
            {
                label: 'Dataset 1',
                data: percentData1,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
            },
            {
                label: 'Dataset 2',
                data: percentData2,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        indexAxis: 'y',
        scales: {
            x: {
                stacked: true,
                beginAtZero: true,
                max: 100
            },
            y: {
                stacked: true,
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 150,
                bottom: 150,   
            }
        }
    };
    

    return (
        <div>
            <Bar data={data} options={options}/>
        </div>
    );
};

export default PercentBarChart;
