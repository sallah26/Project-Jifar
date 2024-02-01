// AnimatedCounter .js
import React, { useEffect, useRef } from "react";
import Odometer from "odometer";
import "odometer/themes/odometer-theme-default.css";
// import "./OdometerStyles.css"; // Import your custom styles

const AnimatedCounter  = ({ value, className }) => {
  const odometerRef = useRef(null);

  useEffect(() => {
    const odometerInstance = new Odometer({
      el: odometerRef.current,
      value: 0,
      format: "(,ddd)",
    });

    odometerInstance.update(value);

    return () => {
      if (odometerInstance.destroy) {
        odometerInstance.destroy();
      }
    };
  }, [value]);

  return (
    <div className={`odometer-container ${className}`} ref={odometerRef}></div>
  );
};

export default AnimatedCounter ;
