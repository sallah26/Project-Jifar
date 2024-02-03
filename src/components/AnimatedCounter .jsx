// AnimatedCounter.js
import React, { useLayoutEffect, useRef, useState } from "react";
import Odometer from "odometer";
import "odometer/themes/odometer-theme-default.css";

const AnimatedCounter = ({ value, className }) => {
  const odometerRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);

  const handleScroll = () => {
    const element = odometerRef.current;
    if (!element) return;

    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = elementTop + element.offsetHeight;

    const viewportTop = window.scrollY;
    const viewportBottom = viewportTop + window.innerHeight;

    setIsInViewport(elementBottom > viewportTop && elementTop < viewportBottom);
  };

  const initializeOdometer = () => {
    const odometerElement = odometerRef.current;
    if (!isInViewport || !odometerElement) return;

    // Create a new instance or use the existing one
    const odometerInstance =
      odometerElement.odometer ||
      new Odometer({
        el: odometerElement,
        value: 0,
        format: "(,ddd)",
        duration: 2000, // Set the animation duration in milliseconds (e.g., 2000 for 2 seconds)
      });

    odometerInstance.update(value);
    odometerElement.odometer = odometerInstance; // Store the instance for later reference
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on component mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [value]); // Only re-run the effect if the value prop changes

  useLayoutEffect(initializeOdometer, [isInViewport, value]); // Re-run when isInViewport or value changes

  return (
    <div className={`odometer-container ${className}`} ref={odometerRef}></div>
  );
};

export default AnimatedCounter;
