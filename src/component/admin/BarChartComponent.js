import { InfluxDB, Point } from '@influxdata/influxdb-client';
import { Bar } from 'react-chartjs-2'; // แก้ไขที่นี่
import React, { useState, useEffect } from 'react';
import './Button.css';
import Button from '@mui/material/Button';
import BarCounter from './BarCounter';



const BarChartComponent = () => {
    const [data, setData] = useState(null);
    const [timeRange, setTimeRange] = useState('-1d');

    const fetchData = () => {
        const queryApi = new InfluxDB({ url: 'http://119.59.99.194:8086', token: 'eMcuZw7jmVPBgxBLMYRiJAcxu38AXHnSSZhRpEOxrKE1i_AjZkYuC9w0xMqv-EP8bLA6CyM-zKZj-4dDLEo51Q==' }).getQueryApi('TTTA');

        const fluxQuery = `
            from(bucket: "TTTA ENERGY")
                |> range(start: ${timeRange})
                |> filter(fn: (r) => r._measurement == "Inverter1")
                |> filter(fn: (r) => r._field == "Battery Voltage")
        `;
        const fluxQuerybattery_capacity = `
            from(bucket: "TTTA ENERGY")
                |> range(start: ${timeRange})
                |> filter(fn: (r) => r._measurement == "Inverter1")
                |> filter(fn: (r) => r._field == "battery_capacity")
        `;
        Promise.all([
            queryApi.collectRows(fluxQuery),
            queryApi.collectRows(fluxQuerybattery_capacity)
        ]).then(([batteryData, battery_capacity]) => {
            let filteredBattery = batteryData.filter((_, index) => index % 200 === 0);
            let filteredbattery_capacity = battery_capacity.filter((_, index) => index % 200 === 0);

            let chartData = {
                labels: filteredBattery.map(row => row._time.slice(0, -11)),
                datasets: [
                    {
                        data: filteredBattery.map(row => row._value),
                        label: "Battery Voltage",
                        backgroundColor: "rgb(255, 99, 132)",
                        borderColor: "rgb(255, 99, 132)",
                    },
                    {
                        data: filteredbattery_capacity.map(row => row._value),
                        label: "battery_capacity",
                        backgroundColor: "rgb(75, 192, 192)",
                        borderColor: "rgb(75, 192, 192)",
                    }
                ]
            };
            setData(chartData);
        });
    };

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 1000 * 60 * 60); 
        return () => clearInterval(intervalId);
    }, [timeRange]);

    const options = {
        maintainAspectRatio: false,
        responsive: true,
    };

    return (
        <div style={{ width: '100vw', height: '90%' }}>
            <div>
                <Button variant="outlined"
                    onClick={() => setTimeRange('-1d')}
                    className={timeRange === '-1d' ? 'active' : 'hold'}
                >
                    Day
                </Button>
                <Button variant="outlined"
                    onClick={() => setTimeRange('-30d')}
                    className={timeRange === '-30d' ? 'active' : 'hold'}
                >
                    Month
                </Button>
                <Button variant="outlined"
                    onClick={() => setTimeRange('-365d')}
                    className={timeRange === '-365d' ? 'active' : 'hold'}
                >
                    Year
                </Button>
            </div>
            {/* <BarCounter/> */}
            {data ? <Bar data={data} options={options} /> : <p>Loading...</p>}
        </div>
    );
};

export default BarChartComponent;
