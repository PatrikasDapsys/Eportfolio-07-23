import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import LandingPage from "./components/LandingPage";

function App() {
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

  const laggedPosition = useSpring({ 
    left: `${mousePosition.x}px`, 
    top: `${mousePosition.y}px`, 
    config: { tension: 120, friction: 14 } 
  });

  const trackerStyles = `absolute bg-white block z-10 w-16 h-16 inset-1/2 -translate-x-1/2 -translate-y-1/2`;

  return (
    <>
      <div className="relative overflow-hidden">
        <animated.div
          className={trackerStyles}
          style={laggedPosition}
        ></animated.div>
        <LandingPage />
      </div>
    </>
  );
}

export default App;
