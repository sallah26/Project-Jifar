import React from 'react'
import Form from "./Form"

const AnimatedButton = (props) => {

  return (
    <button className="glow-on-hover text-md text-red-700" style={{width : `${props.myWidth}`}}><Form /></button>
  );
}

export default AnimatedButton