import React, { useState, useEffect } from 'react'
import Batt from '../../Data/Batt';
import Grid from '../../Data/Grid';
import Inverter from '../../Data/Inverter';
import Load from '../../Data/Load';
import Pv from '../../Data/Pv';
import './Dashboard.css';
import Linechart from './Linechart';
import BarChart from './BarChart';
import BarChartComponent from './BarChartComponent';
import LineChartComponenthart from './LineChartComponent';

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
import ac_rated_volt from '../../influxdata/ac_rated_volt';
import ac_rated_current from '../../influxdata/ac_rated_current';
import battery_rated_voltage from '../../influxdata/battery_rated_voltage';
import ac_rated_fre from '../../influxdata/ac_rated_fre';
import ac_output_rating_apparent_power from '../../influxdata/ac_output_rating_apparent_power';
import ac_output_rating_active_power from '../../influxdata/ac_output_rating_active_power';
import battery_recharge_voltage from '../../influxdata/battery_recharge_voltage';
import battery_under_voltage from '../../influxdata/battery_under_voltage';
import battery_bulk_voltage from '../../influxdata/battery_bulk_voltage';
import battery_float_voltage from '../../influxdata/battery_float_voltage';
import batt_type from '../../influxdata/batt_type';
import current_max_ac_charging_current from '../../influxdata/current_max_ac_charging_current';
import current_max_charging_current from '../../influxdata/current_max_charging_current';

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
    const [dataac_rated_volt, setac_rated_volt] = useState([]);
    const [dataac_rated_current, setac_rated_current] = useState([]);
    const [databattery_rated_voltage, setbattery_rated_voltage] = useState([]);
    const [dataac_rated_fre, setac_rated_fre] = useState([]);
    const [dataac_output_rating_apparent_power, setac_output_rating_apparent_power] = useState([]);
    const [dataac_output_rating_active_power, setac_output_rating_active_power] = useState([]);
    const [databattery_recharge_voltage, setbattery_recharge_voltage] = useState([]);
    const [databattery_under_voltage, setbattery_under_voltage] = useState([]);
    const [databattery_bulk_voltage, setbattery_bulk_voltage] = useState([]);
    const [databattery_float_voltage, setbattery_float_voltage] = useState([]);
    const [databatt_type, setbbatt_type] = useState([]);
    const [datacurrent_max_ac_charging_current, setcurrent_max_ac_charging_current] = useState([]);
    const [datacurrent_max_charging_current, setcurrent_max_charging_current] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            current_max_charging_current().then((response) => {
                if (Array.isArray(response)) {
                    setcurrent_max_charging_current(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            current_max_ac_charging_current().then((response) => {
                if (Array.isArray(response)) {
                    setcurrent_max_ac_charging_current(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            batt_type().then((response) => {
                if (Array.isArray(response)) {
                    setbbatt_type(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            battery_float_voltage().then((response) => {
                if (Array.isArray(response)) {
                    setbattery_float_voltage(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            battery_bulk_voltage().then((response) => {
                if (Array.isArray(response)) {
                    setbattery_bulk_voltage(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            battery_under_voltage().then((response) => {
                if (Array.isArray(response)) {
                    setbattery_under_voltage(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            battery_recharge_voltage().then((response) => {
                if (Array.isArray(response)) {
                    setbattery_recharge_voltage(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            ac_output_rating_active_power().then((response) => {
                if (Array.isArray(response)) {
                    setac_output_rating_active_power(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            ac_output_rating_apparent_power().then((response) => {
                if (Array.isArray(response)) {
                    setac_output_rating_apparent_power(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            ac_rated_fre().then((response) => {
                if (Array.isArray(response)) {
                    setac_rated_fre(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            battery_rated_voltage().then((response) => {
                if (Array.isArray(response)) {
                    setbattery_rated_voltage(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            ac_rated_current().then((response) => {
                if (Array.isArray(response)) {
                    setac_rated_current(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            ac_rated_volt().then((response) => {
                if (Array.isArray(response)) {
                    setac_rated_volt(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            pvcurrent().then((response) => {
                if (Array.isArray(response)) {
                    setpvcurrent(response);

                } else {
                    console.error('Invalid data format received from InfluxDB.');
                }
            });
        }, 2000);

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
        }, 2000);

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
        }, 2000);

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
        }, 2000);

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
        }, 2000);

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
        }, 2000);

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
        }, 2000);

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
        }, 2000);

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
        }, 2000);
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
        }, 2000);
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
        }, 2000);

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
        }, 2000);
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
        }, 2000);

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
        }, 2000);

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
        }, 2000);

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
        }, 2000);

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
    const acratevolt = dataac_rated_volt.length > 0 ? dataac_rated_volt[dataac_rated_volt.length - 1]._value : 0;
    const acratecurrent = dataac_rated_current.length > 0 ? dataac_rated_current[dataac_rated_current.length - 1]._value : 0;
    const battratevolt = databattery_rated_voltage.length > 0 ? databattery_rated_voltage[databattery_rated_voltage.length - 1]._value : 0;
    const acratefre = dataac_rated_fre.length > 0 ? dataac_rated_fre[dataac_rated_fre.length - 1]._value : 0;
    const acapparentpower = dataac_output_rating_apparent_power.length > 0 ? dataac_output_rating_apparent_power[dataac_output_rating_apparent_power.length - 1]._value : 0;
    const acactivepower = dataac_output_rating_active_power.length > 0 ? dataac_output_rating_active_power[dataac_output_rating_active_power.length - 1]._value : 0;
    const battrechargevoltage = databattery_recharge_voltage.length > 0 ? databattery_recharge_voltage[databattery_recharge_voltage.length - 1]._value : 0;
    const battundervoltage = databattery_under_voltage.length > 0 ? databattery_under_voltage[databattery_under_voltage.length - 1]._value : 0;
    const battbuklvoltage = databattery_bulk_voltage.length > 0 ? databattery_bulk_voltage[databattery_bulk_voltage.length - 1]._value : 0;
    const battfloatvoltage = databattery_float_voltage.length > 0 ? databattery_float_voltage[databattery_float_voltage.length - 1]._value : 0;
    const batttype = databatt_type.length > 0 ? databatt_type[databatt_type.length - 1]._value : 0;
    const currentmaxaccharge = datacurrent_max_ac_charging_current.length > 0 ? datacurrent_max_ac_charging_current[datacurrent_max_ac_charging_current.length - 1]._value : 0;
    const currentmaxcharging = datacurrent_max_charging_current.length > 0 ? datacurrent_max_charging_current[datacurrent_max_charging_current.length - 1]._value : 0;

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
                                charger === 1 ? 'Solar first' :
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

                <div className='flex-box-basic'>
                    <div className='topic-data'>
                        <h1>Rated info</h1>
                    </div>
                    <p>Ac rated Volt: {acratevolt} Volt</p>
                    <p>Ac rated current: {acratecurrent} A</p>
                    <p>Ac rated fre: {acratefre} Hz</p>
                    <p>Ac rated apparent power: {acapparentpower} VA</p>
                    <p>Ac rated active power: {acactivepower} Watt</p>
                    <p>Rated BAT Volt: {battratevolt} Volt</p>
                    <p>BAT rechrage Volt: {battrechargevoltage} Volt</p>
                    <p>BAT under Volt: {battundervoltage} Volt</p>
                    <p>BAT bulk Volt: {battbuklvoltage} Volt</p>
                    <p>BAT float Volt: {battfloatvoltage} Volt</p>
                    <p>BAT type:
                        {
                            batttype === 0 ? 'AGM' :
                            batttype === 1 ? 'Flooded' :
                            batttype === 2 ? 'User define' :
                            '???'
                        }
                    </p>
                        <p>Current max ac charging current: {currentmaxaccharge} A</p>
                        <p>Current max charging current: {currentmaxcharging} A</p>
                </div>
            </div>
            <div className='flex-box-2'>
                <div className='flex-box-graph'>
                    <LineChartComponenthart />
                </div>
                <div className='flex-box-graph-right'>
                    <BarChartComponent />
                </div>
            </div>

        </div>
    )
}
export default Dashboard    
