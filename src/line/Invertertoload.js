import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../App.css';



function Invertertoload(props) {
  const styles = useSpring({
    from: { transform: 'translateX(-130px)' },
    to: { transform: 'translateX(130px)' },
    config: { duration: 3000 },
    loop: true
  });

  if (props.pv === 0) {
    return ( 
      <div className='around'>
      <animated.div style={{ ...styles, borderRadius: '50%', width: '0px', height: '0px', backgroundColor: '#d91943', }} />
      </div>
    );
  }

  return (
    <div className='around'>
      <animated.div style={{ ...styles, borderRadius: '50%', width: '17px', height: '17px', backgroundColor: '#e5e83c', }} />
    </div>

  );
}

export default Invertertoload;
