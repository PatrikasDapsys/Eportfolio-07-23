import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import ChangingShape from "./ChangingShape";

function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({});

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
  const shapeSize = 600;
  const shapeOffset = shapeSize / 2;

  const laggedPosition = useSpring({
    left: `${mousePosition.x - shapeOffset}px`,
    top: `${mousePosition.y - shapeOffset}px`,
    config: { tension: 40, friction: 20 },
  });

  const trackerStyles = `absolute z-[1] pointer-events-none`;

  return (
    <animated.div className={trackerStyles} style={laggedPosition}>
      <ChangingShape />
    </animated.div>
  );
}

export default MouseTracker;
