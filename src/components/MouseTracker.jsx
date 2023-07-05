import React, { useEffect, useState } from "react";

function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const trackerStyles =
    `absolute bg-black block z-10 w-16 h-16 top-[${mousePosition.y}px]`;

  return (
    <div className="h-screen w-screen bg-transparent flex relative ">
      <div
        id="tracker"
        className={
          trackerStyles
          ` left-[${mousePosition.x}px] top-[${mousePosition.y}px]`
        }
      ></div>
    </div>
  );
}

export default MouseTracker;
