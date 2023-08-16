import React from 'react';
import '../App.css';
import { useSpring, animated } from 'react-spring';



function Girdtoinverter(props) {
  const styles = useSpring({
    from: { transform: 'translateY(-70px)' },
    to: { transform: 'translateY(70px)' },
    config: { duration: 3000 },
    loop: true
  });

 

  if (props.grid === 0) {
    return ( 
      <div className='around3'>
      <animated.div style={{ ...styles, borderRadius: '50%', width: '0px', height: '0px', backgroundColor: '#d91943', }} />
      </div>
    );
  }

  return (
    <div className='around3'>
      <animated.div style={{ ...styles, borderRadius: '50%', width: '17px', height: '17px', backgroundColor: '#d91943', }} />
    </div>

  );
  
}

export default Girdtoinverter;
