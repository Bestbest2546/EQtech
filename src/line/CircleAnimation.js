import React from 'react';
import {useSpring, animated} from 'react-spring';

function CircleAnimation() {
  const props = useSpring({
    from: {cx: '0%'},
    to: {cx: '100%'},
    config: {duration: 3000},
    reset: true
  });

  return (
    <svg width="100%" height="100" viewBox="0 0 100 100">
      <path
        d="M 10 50 Q 50 10 90 50 Q 50 90 10 50"
        fill="none"
        stroke="black"
      />
      <animated.circle
        cx={props.cx}
        cy="50"
        r="5"
        fill="red"
      />
    </svg>
  );
}

export default CircleAnimation;
