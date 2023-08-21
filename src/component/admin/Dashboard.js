import React, { useState, useEffect } from 'react'
import Batt from '../../Data/Batt';
import Grid from '../../Data/Grid';
import Inverter from '../../Data/Inverter';
import Load from '../../Data/Load';
import Pv from '../../Data/Pv';
import './Dashboard.css';
import Linechart from './Linechart';
import BarChart from './BarChart';

import Getbattery from '../../influxdata/Getbattery';
import Getbatteryvolt from '../../influxdata/Getbatteryvolt';
import Get_grid from '../../influxdata/Get_grid';
import Getpv_watt from '../../influxdata/Getpv_watt';
import Loadpercent from '../../influxdata/Loadpercent'
import Mode from '../../influxdata/Mode';
import Get_output from '../../influxdata/Get_output';
import Get_charger from '../../influxdata/Get_charger';
import Getpv_volt from '../../influxdata/Getpv_volt';
import grid_frequency from '../../influxdata/Gridfrequency';
import batterychargingcurrent from '../../influxdata/batterychargingcurrent';
import Getloadpower from '../../influxdata/Get_load';
import Outputfre from '../../influxdata/Outputfre';
import Outputapparent from '../../influxdata/outputapparent';
import outputactive from '../../influxdata/outputactive';
import pvcurrent from '../../influxdata/pvcurrent';

import iconinverter from './inverter.png'

const Dashboard = () => {

    const [databatt, setbatt] = useState([]);
    const [databattvolt, setbattvolt] = useState([]);
    const [dataload, setload] = useState([]);
    const [datagrid, setgrid] = useState([]);
    const [datapv, setpv] = useState([]);
    const [dataloadpercent, setloadpercent] = useState([]);
    const [datainverter, setinverter] = useState([]);
    const [dataOutputpriority, setoutputpriority] = useState([]);
    const [datacharger, setcharger] = useState([]);
    const [datapvvolt, setpvvolt] = useState([]);
    const [datagridfrequency, setgridfrequency] = useState([]);
    const [databatterychargingcurrent, setbatterychargingcurrent] = useState([]);
    const [dataoutputfre, setoutputfre] = useState([]);
    const [dataoutputapparent, setoutputapparent] = useState([]);
    const [dataoutputactive, setoutputactive] = useState([]);
    const [datapvcurrent, setpvcurrent] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            pvcurrent().then((response) => {
                if (Array.isArray(response)) {
                    setpvcurrent(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            outputactive().then((response) => {
                if (Array.isArray(response)) {
                    setoutputactive(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            Outputapparent().then((response) => {
                if (Array.isArray(response)) {
                    setoutputapparent(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            Outputfre().then((response) => {
                if (Array.isArray(response)) {
                    setoutputfre(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            Getloadpower().then((response) => {
                if (Array.isArray(response)) {
                    setload(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            batterychargingcurrent().then((response) => {
                if (Array.isArray(response)) {
                    setbatterychargingcurrent(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            grid_frequency().then((response) => {
                if (Array.isArray(response)) {
                    setgridfrequency(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            Getpv_volt().then((response) => {
                if (Array.isArray(response)) {
                    setpvvolt(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            Get_charger().then((response) => {
                if (Array.isArray(response)) {
                    setcharger(response);
                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            Get_output().then((response) => {
                if (Array.isArray(response)) {
                    setoutputpriority(response);
                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            Mode().then((response) => {
                if (Array.isArray(response)) {
                    setinverter(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            Loadpercent().then((response) => {
                if (Array.isArray(response)) {
                    setloadpercent(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            Getpv_watt().then((response) => {
                if (Array.isArray(response)) {
                    setpv(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

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

    useEffect(() => {
        const interval = setInterval(() => {
            Get_grid().then((response) => {
                if (Array.isArray(response)) {
                    setgrid(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const batt = databatt.length > 0 ? databatt[databatt.length - 1]._value : 0;
    const battvolt = databattvolt.length > 0 ? databattvolt[databattvolt.length - 1]._value : 0;
    const grid = datagrid.length > 0 ? datagrid[datagrid.length - 1]._value : 0;
    const pv = datapv.length > 0 ? datapv[datapv.length - 1]._value : 0;
    const loadpercent = dataloadpercent.length > 0 ? dataloadpercent[dataloadpercent.length - 1]._value : 0;
    const inverter = datainverter.length > 0 ? datainverter[datainverter.length - 1]._value : 0;
    const outputpriority = dataOutputpriority.length > 0 ? dataOutputpriority[dataOutputpriority.length - 1]._value : 0;
    const charger = datacharger.length > 0 ? datacharger[datacharger.length - 1]._value : 0;
    const pvvolt = datapvvolt.length > 0 ? datapvvolt[datapvvolt.length - 1]._value : 0;
    const gridfrequency = datagridfrequency.length > 0 ? datagridfrequency[datagridfrequency.length - 1]._value : 0;
    const battchargecurrent = databatterychargingcurrent.length > 0 ? databatterychargingcurrent[databatterychargingcurrent.length - 1]._value : 0;
    const load = dataload.length > 0 ? dataload[dataload.length - 1]._value : 0;
    const outputfre = dataoutputfre.length > 0 ? dataoutputfre[dataoutputfre.length - 1]._value : 0;
    const outputapparent = dataoutputapparent.length > 0 ? dataoutputapparent[dataoutputapparent.length - 1]._value : 0;
    const active = dataoutputactive.length > 0 ? dataoutputactive[dataoutputactive.length - 1]._value : 0;
    const currentpv = datapvcurrent.length > 0 ? datapvcurrent[datapvcurrent.length - 1]._value : 0;


    return (
        <div className='contain-flex'>

            <div className='name-box'>
                <div>
                    <img src={iconinverter} />
                </div>
                <div>
                    <h1>INVERTER(1)</h1>
                </div>
            </div>
            <div className='flex-box-head'>
                <div className='flex-box-below'>
                    <h2>MODE: {inverter === 66 ? 'Battery' : (inverter === 76 ? 'Grid' : '???')}</h2>
                </div>
                <div className='flex-box-below-left'>
                    <h2>OUTPUT-PRIORITY: {outputpriority === 0 ? 'Utility first' : (outputpriority === 1 ? 'Solar first' : (outputpriority === 2 ? 'SBU' : '???'))}</h2>
                </div>
                <div className='flex-box-below-right'>
                    <h2>CHARGER-PRIORITY:
                        {
                            charger === 0 ? 'Utility first' :
                                charger === 1 ? 'Solar first' : // assuming this was intended
                                    charger === 2 ? 'Solar + Utility' :
                                        charger === 3 ? 'Only solar charging' :
                                            '???'
                        }
                    </h2>                </div>
            </div>
            <div className='flex-box'>
                <div className='flex-box-monitor'>
                    {pv !== 0 && <div className='pvtobatt'></div>}
                    {pv !== 0 && <div className='pvtoload'></div>}
                    <div className='flex-box1'>
                        <Pv />
                        <div className='flex-box-monit-svg'>
                            <svg width="221" height="222" viewBox="0 0 221 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M98.5 1L98.5 76.5C98.5 89.2025 88.2025 99.5 75.5 99.5L3.32382e-06 99.5" stroke="#F8CD5E" />
                                <path d="M122.5 222L122.5 146.5C122.5 133.797 132.797 123.5 145.5 123.5L221 123.5" stroke="#EB9494" />
                                <path d="M0 123.5L75.5 123.5C88.2025 123.5 98.5 133.797 98.5 146.5L98.5 222" stroke="#EB9494" />
                                <path d="M221 99.5L145.5 99.5C132.797 99.5 122.5 89.2026 122.5 76.5L122.5 1.00001" stroke="#F8CD5E" />
                                <line y1="111.5" x2="221" y2="111.5" stroke="#51BBCA" />
                                <line x1="110" y1="221.5" x2="110" y2="0.5" stroke="#F8CD5E" />
                            </svg>
                        </div>
                    </div>
                    <div className='flex-box2'>
                        <Batt />
                        {batt !== 0 && battvolt !== 0 ? <div className='batttoload'></div> : <div className='emty'></div>}
                        <Load />
                    </div>
                    <div className='flex-box3'>
                        {grid !== 0 && <div className='gridtobatt'></div>}
                        <Grid />
                        {grid !== 0 && <div className='gridtoload'></div>}
                    </div>
                </div>
                <div className='flex-box-basic'>
                    <div className='topic-data'>
                        <h1>Basic info</h1>
                    </div>
                    <p>Grid Volt: {grid} Volt</p>
                    <p>Grid Fre: {gridfrequency} Hz</p>
                    <p>BAT Volt: {battvolt} Volt</p>
                    <p>BAT Cap: {batt} %</p>
                    <p>Charge current: {battchargecurrent} A</p>
                    <p>Output Volt: {load} Volt</p>
                    <p>Output Fre: {outputfre} Hz</p>
                    <p>Output apparent power: {outputapparent} VA</p>
                    <p>Output active power: {active} Watt</p>
                    <p>Output load percent: {loadpercent} %</p>
                    <p>PV Volt: {pvvolt} Volt</p>
                    <p>PV current: {currentpv} A</p>
                    <p>PV Charging power: {pv} Watt</p>
                </div>

                <div className='flex-box-rate'>
                    <div>
                        <p>Ac rated Volt: --</p>
                        <p>Ac rated current: --</p>
                        <p>Rated BAT Volt: --</p>
                    </div>
                    <div>
                        <p>Rated output Volt: --</p>
                        <p>Rated output Fre: --</p>
                        <p>Rated output current: --</p>
                    </div>
                </div>
            </div>
            <div className='flex-box-2'>
                <div className='flex-box-graph'>
                    <Linechart />
                </div>
                <div className='flex-box-graph-right'>
                    <BarChart />
                </div>
            </div>

        </div>
    )
}
export default Dashboard    
