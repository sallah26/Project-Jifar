import React from 'react'

const AnimatedButton = (props) => {

  return (
    <button className="glow-on-hover text-md text-red-700" style={{width : `${props.myWidth}`}}>{props.name}</button>
  );
}

export default AnimatedButton