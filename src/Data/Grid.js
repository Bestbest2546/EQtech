import React, { useState, useEffect } from 'react';
import '../Grid.css';
import Powericon from '../icon/power-line.png';
import Get_grid from '../influxdata/Get_grid';


function Grid() {

  const [datagrid, setgrid] = useState([]);

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

  const grid = datagrid.length > 0 ? datagrid[datagrid.length - 1]._value : 0;

  return (
    <div className='grid'>
      <div className='circlegridbackground'>
        <div className="circlegrid">
          <div>
            <img src={Powericon} alt="grid" className="icongrid" />
          </div>
          <div>
            <p>Volt: {grid} V</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
