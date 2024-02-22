import React, { useState } from 'react';
import { InlineWidget } from 'react-calendly';

const AnimatedButton = (props) => {
  const [showCalendly, setShowCalendly] = useState(false);

  const handleButtonClick = () => {
    setShowCalendly(true);
  };

  return (
    <div>
      <button
        className="glow-on-hover text-md text-red-700"
        style={{ width: `${props.myWidth}` }}
        onClick={handleButtonClick}
      >
        {props.name}
      </button>

      {showCalendly && (
        <div className="calendly-container">
          <div className="calendly-close" onClick={() => setShowCalendly(false)}>
            Close
          </div>
          <InlineWidget
            url="https://calendly.com/nesredin/welcome-to-jifar-agency-booking"
            text="Schedule a Meeting"
            style={{
              minWidth: '200px', // Adjust the button width as needed
              color: '#ffffff',
              background: '#3498db',
              borderRadius: '5px',
              padding: '10px 20px',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AnimatedButton;

// import React from 'react'
// import Form from "./Form"

// const AnimatedButton = (props) => {

//   return (
//     <button className="glow-on-hover text-md text-red-700" style={{width : `${props.myWidth}`}}><Form /></button>
//   );
// }

// export default AnimatedButton