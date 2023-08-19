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
                    <div className='pvtobatt'></div>
                    <div className='pvtoload'></div>
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
                        <div className='batttoload'></div>
                        <Load />
                    </div>
                    <div className='flex-box3'>
                        <div className='gridtobatt'></div>                           
                        <Grid />
                        <div className='gridtoload'></div>
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
