import React from 'react'

const AnimatedButton = (props) => {
  return (
    <button className="glow-on-hover text-md text-red-700">{props.name}</button>
  );
}

export default AnimatedButton