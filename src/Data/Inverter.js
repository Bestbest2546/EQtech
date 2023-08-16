import React, { useState, useEffect } from 'react';
import '../Inverter.css';
import Solaricon from '../icon/solar-inverter (1).png';
import Mode from '../influxdata/Mode';

function Inverter() {

  const [datainverter, setinverter] = useState([]);

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

  const inverter = datainverter.length > 0 ? datainverter[datainverter.length - 1]._value : 0;

  return (
    <div className='inverter '>
      <div className="circleinverter">
        <div>
          <img src={Solaricon} alt="inverter" className="iconinverter" />
        </div>
        <div>
          <p>{inverter === 66 ? 'Battery Mode' : (inverter === 76 ? 'Grid mode' : '???')}</p>
        </div>
      </div>
    </div>
  );
}

export default Inverter;
