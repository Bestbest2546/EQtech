import React, { useState, useEffect } from 'react';
import '../Load.css';
import Solaricon from '../icon/buildings.png';
import Getloadpower from '../influxdata/Get_load';
import Loadpercent from '../influxdata/Loadpercent'


function Load() {

  const [dataload, setload] = useState([]);
  const [dataloadpercent, setloadpercent] = useState([]);

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

  const loadpercent = dataloadpercent.length > 0 ? dataloadpercent[dataloadpercent.length - 1]._value : 0;
  const load = dataload.length > 0 ? dataload[dataload.length - 1]._value : 0;

  return (
    <div className='Load'>
      <div className='circleloadbackground'>
        <div className="circleload">
          <div>
            <img src={Solaricon} alt="load" className="iconload" />
          </div>
          <div>
            <p>{load} V</p>
            <p>{loadpercent} %</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Load;
