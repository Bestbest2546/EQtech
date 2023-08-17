import React from 'react'
import Batt from '../../Data/Batt';
import Grid from '../../Data/Grid';
import Inverter from '../../Data/Inverter';
import Load from '../../Data/Load';
import Pv from '../../Data/Pv';
import './Dashboard.css';
import Linechart from './Linechart';
import Barchart from './Barchart'
import PieChart from './PieChart'

const Dashboard = () => {
    return (
        <div className='contain-flex'>

            <div className='flex-box'>
                <div className='flex-box-below'>
                    <p>Test</p>
                </div>
                <div className='flex-box-below-left'>
                    <p>Test</p>
                </div>
                <div className='flex-box-below-right'>
                    <p>Test</p>
                </div>
            </div>
            <div className='flex-box'>
                <div className='flex-box-monitor'>
                    <div className='flex-box1'>
                        <Pv />
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
                    <div>
                        <p>Grid Volt:</p>
                        <p>Grid Fre:</p>
                        <p>BAT Volt:</p>
                        <p>BAT Cap:</p>
                        <p>Charge current:</p>
                    </div>
                    <div>
                        <p>Output Volt:</p>
                        <p>Output Fre:</p>
                        <p>Output apparent power:</p>
                        <p>Output active power:</p>
                    </div>
                    <div>
                        <p>Output load percent:</p>
                        <p>PV Volt:</p>
                        <p>PV current:</p>
                        <p>PV Charging power:</p>
                    </div>
                </div>

                <div className='flex-box-rate'>
                    <div>
                        <p>Ac rated Volt:</p>
                        <p>Ac reated current:</p>
                        <p>Rated BAT Volt:</p>
                    </div>
                    <div>
                        <p>Rated output Volt:</p>
                        <p>Rated output Fre:</p>
                        <p>Rated output current:</p>
                    </div>
                </div>
            </div>
            <div className='flex-box-2'>
                <div className='flex-box-graph'>
                    <Linechart/>
                </div>
                <div className='flex-box-graph-right'>
                  <PieChart/>
                </div>
            </div>

        </div>
    )
}
export default Dashboard    
