import React, { useState, useEffect } from 'react';
import Iconpv from '../icon/solar-panel.png';
import '../Pv.css';
import Getpv_volt from '../influxdata/Getpv_volt';
import Getpv_watt from '../influxdata/Getpv_watt';

function Pv(props) {

  const [datapv, setpv] = useState([]);
  const [datapvvolt, setpvvolt] = useState([]);

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

  const pvvolt = datapvvolt.length > 0 ? datapvvolt[datapvvolt.length - 1]._value : 0;
  const pv = datapv.length > 0 ? datapv[datapv.length - 1]._value : 0;

  return (
    <div className='pvbatt'>
      <div className='circlepvbackground'>
        <div className="circlepv">
          <div>
            <img src={Iconpv} alt="Pv" className="iconpv" />
          </div>
          <div>
            <p>{pv} Watt</p>
            <p>{pvvolt} Volt</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Pv;
