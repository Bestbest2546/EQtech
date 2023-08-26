import React, { useState, useEffect } from 'react';
import { InfluxDB } from '@influxdata/influxdb-client';
import './BarCounter.css'

const BarCounter = ({ Timeauto }) => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [timeRange, setTimeRange] = useState(Timeauto);
    console.log(Timeauto);

    useEffect(() => {
        setTimeRange(Timeauto);
    }, [Timeauto]);

    useEffect(() => {
        const fetchData = async () => {
            const queryApi = new InfluxDB({
                url: 'http://119.59.99.194:8086',
                token: 'eMcuZw7jmVPBgxBLMYRiJAcxu38AXHnSSZhRpEOxrKE1i_AjZkYuC9w0xMqv-EP8bLA6CyM-zKZj-4dDLEo51Q=='
            }).getQueryApi('TTTA');

            const fluxQuery1 = `
            from(bucket: "TTTA ENERGY")
                |> range(start: ${timeRange})
                |> filter(fn: (r) => r._measurement == "Inverter1")
                |> filter(fn: (r) => r._field == "Battery Voltage")
        `;
            const fluxQuery2 = `
            from(bucket: "TTTA ENERGY")
                |> range(start: ${timeRange})
                |> filter(fn: (r) => r._measurement == "Inverter1")
                |> filter(fn: (r) => r._field == "battery_capacity")
        `;
            const result1 = await queryApi.collectRows(fluxQuery1);
            const result2 = await queryApi.collectRows(fluxQuery2);

            setCount1(result1[0]._value);
            setCount2(result2[0]._value);
        };

        fetchData();
    }, [timeRange]);

    const totalCount = count1 + count2;
    const percentCount1 = (count1 / totalCount) * 100;

    return (
        <div className='containdoublebar'>
            <div className='barcontain'>
                <p>Head value</p>
                <div style={{
                    background: `linear-gradient(to right, #fa9200 ${percentCount1}%, #ffbe61 ${percentCount1}%, #ffbe61 100%)`,
                    height: '13px',
                    width: '100%',
                    transition: 'background 1s'
                }}>
                </div>
                <div className='valueleft'>
                    <p>Value 1: {count1} ({percentCount1.toFixed(2)}%)</p>
                    <p>Value 2: {count2} ({(100 - percentCount1).toFixed(2)}%)</p>
                </div>
            </div>
            <div className='linecenter'>

            </div>
            <div className='barcontain'>
                <p>Head value</p>
                <div style={{
                    background: `linear-gradient(to right, #326AAA ${percentCount1}%, #91C3EA ${percentCount1}%, #91C3EA 100%)`,
                    height: '13px',
                    width: '100%',
                    transition: 'background 1s'
                }}>
                </div>
                <div className='valueright'>
                    <p>Value 1: {count1} ({percentCount1.toFixed(2)}%)</p>
                    <p>Value 2: {count2} ({(100 - percentCount1).toFixed(2)}%)</p>
                </div>
            </div>
        </div>
    );
};

export default BarCounter;
