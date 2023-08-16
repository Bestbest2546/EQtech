import React, { useState, useEffect } from 'react';
import BatteryIconlow from '../icon/battery-low.png';
import BatteryIconmeduim from '../icon/battery-meduim.png';
import BatteryIconfull from '../icon/battery-status-full.png';
import '../Batt.css';

import Getbattery from '../influxdata/Getbattery';
import Getbatteryvolt from '../influxdata/Getbatteryvolt';



function Batt() {
    const [databatt, setbatt] = useState([]);
    const [databattvolt, setbattvolt] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            Getbattery().then((response) => {
                if (Array.isArray(response)) {
                    setbatt(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            Getbatteryvolt().then((response) => {
                if (Array.isArray(response)) {
                    setbattvolt(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const batt = databatt.length > 0 ? databatt[databatt.length - 1]._value : 0;
    const battvolt = databattvolt.length > 0 ? databattvolt[databattvolt.length - 1]._value : 0;

    return (
        <div className='battcap'>
            <div className='battbackground'>
                <div className="Batt">
                    <div>
                        <img src={batt <= 30 ? BatteryIconlow : (batt <= 80 ? BatteryIconmeduim : BatteryIconfull)} alt="Battery" className="iconbatt" />
                    </div>
                    <div>
                        <p>{batt} %</p>
                        <p>{battvolt} V</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Batt;
