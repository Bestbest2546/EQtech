import React from 'react'
import Batt from '../../Data/Batt';
import Grid from '../../Data/Grid';
import Inverter from '../../Data/Inverter';
import Load from '../../Data/Load';
import Pv from '../../Data/Pv';
import './Dashboard.css';
import Linechart from './Linechart';
import PieChart from './PieChart';
import BarChart from './BarChart';

const Dashboard = () => {
    return (
        <div className='contain-flex'>

            <div className='flex-box'>
                <div className='flex-box-below'>
                    <h1>Load:</h1>
                </div>
                <div className='flex-box-below-left'>
                    <h1>PV:</h1>
                </div>
                <div className='flex-box-below-right'>
                    <h1>BATT:</h1>
                </div>
                <div className='flex-box-below-right'>
                    <h1>GRID:</h1>
                </div>
            </div>
            <div className='flex-box'>
                <div className='flex-box-monitor'>
                    <div className='flex-box1'>
                        <Pv />
                        <div className='flex-box-monit-svg'>
                            <svg width="221" height="221" viewBox="0 0 221 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M98.5 0L98.5 75.5C98.5 88.2025 88.2025 98.5 75.5 98.5L3.32382e-06 98.5" stroke="#F8CD5E" />
                                <path d="M122.5 221L122.5 145.5C122.5 132.797 132.797 122.5 145.5 122.5L221 122.5" stroke="#EB9494" />
                                <path d="M0 122.5L75.5 122.5C88.2025 122.5 98.5 132.797 98.5 145.5L98.5 221" stroke="#EB9494" />
                                <path d="M221 98.5L145.5 98.5C132.797 98.5 122.5 88.2026 122.5 75.5L122.5 7.62939e-06" stroke="#F8CD5E" />
                                <line y1="110.5" x2="221" y2="110.5" stroke="#51BBCA" />
                            </svg>
                        </div>
                    </div>
                    <div className='flex-box2'>
                        <Batt />
                        <Load />
                    </div>
                    <div className='flex-box3'>
                        <Grid />
                    </div>
                </div>
                <div className='flex-box-basic'>
                    <div className='topic-data'>
                        <h1>Basic info</h1>
                    </div>
                    <p>Grid Volt: --</p>
                    <p>Grid Fre: --</p>
                    <p>BAT Volt: --</p>
                    <p>BAT Cap: --</p>
                    <p>Charge current: --</p>
                    <p>Output Volt: --</p>
                    <p>Output Fre: --</p>
                    <p>Output apparent power: --</p>
                    <p>Output active power: --</p>
                    <p>Output load percent: --</p>
                    <p>PV Volt: --</p>
                    <p>PV current: --</p>
                    <p>PV Charging power: --</p>
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
                    <BarChart />
                </div>
                <div className='flex-box-graph-right'>
                    <PieChart />
                </div>
            </div>

        </div>
    )
}
export default Dashboard    
