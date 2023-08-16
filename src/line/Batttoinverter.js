import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../App.css';


function Batttoinverter(props) {

  const styles = useSpring({
    from: { transform: 'translateY(70px)' },
    to: { transform: 'translateY(-70px)' },
    config: { duration: 3000 },
    loop: true
  });

  if (props.inverter === 0) {
    return ( 
      <div className='around4'>
      <animated.div style={{ ...styles, borderRadius: '50%', width: '0px', height: '0px', backgroundColor: '#5ab7ea', }} />
      </div>
    );
  }

  return (
    <div className='around4'>
      <animated.div style={{ ...styles, borderRadius: '50%', width: '17px', height: '17px', backgroundColor: '#5ab7ea', }} />
    </div>

  );
}

export default Batttoinverter;
