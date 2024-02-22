
import React from 'react'
// import Form from "./Form"

const Btn = (props) => {

  return (
    <button className="glow-on-hover text-md text-red-700" style={{width : `${props.myWidth}`}}>{props.name}</button>
  );
}

export default Btn