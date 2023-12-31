import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import ChangingShape from "./ChangingShape";

function MouseTracker({ isDarkMode }) {
  const [shapeSize, setShapeSize] = useState(400);
  const [isIncreasing, setIsIncreasing] = useState(true);
  
  useEffect(() => {
    const animateSize = () => {
      if (isIncreasing) {
        if (shapeSize < 1000) {
          setShapeSize((prevSize) => prevSize + 1);
        } else {
          setIsIncreasing(false);
        }
      } else {
        if (shapeSize > 200) {
          setShapeSize((prevSize) => prevSize - 1);
        } else {
          setIsIncreasing(true);
        }
      }
    };
    
    const animationId = requestAnimationFrame(animateSize);
    
    return () => cancelAnimationFrame(animationId);
  }, [shapeSize, isIncreasing]);
  
  const [mousePosition, setMousePosition] = useState({});
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { pageX, pageY } = event;
      setMousePosition({ x: pageX, y: pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const shapeOffset = shapeSize / 2;

  const laggedPosition = useSpring({
    left: mousePosition.x ? mousePosition.x - shapeOffset : 0,
    top: mousePosition.y ? mousePosition.y - shapeOffset : 0,
    config: { tension: 40, friction: 20 },
  });
  
  

  const trackerStyles = `absolute z-[1] pointer-events-none`;

  return (
    <animated.div className={trackerStyles} style={laggedPosition}>
      <ChangingShape shapeSize={shapeSize} isDarkMode={isDarkMode}/>
    </animated.div>
  );
}

export default MouseTracker;