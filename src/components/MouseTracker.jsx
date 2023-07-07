import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import ChangingShape from "./ChangingShape";

function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({});
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

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const shapeOffset = shapeSize / 2;

  const laggedPosition = useSpring({
    left: `${mousePosition.x - shapeOffset}px`,
    top: `${mousePosition.y - shapeOffset}px`,
    config: { tension: 40, friction: 20 },
  });

  const trackerStyles = `absolute z-[1] pointer-events-none`;

  return (
    <animated.div className={trackerStyles} style={laggedPosition}>
      <ChangingShape shapeSize={shapeSize} />
    </animated.div>
  );
}

export default MouseTracker;
