import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import LandingPage from "./components/LandingPage";
import MouseTracker from "./components/MouseTracker";
import ChangingShape from "./components/ChangingShape";

function App() {


  return (
    <>
      <div className="relative overflow-hidden min-h-screen">
        <MouseTracker />
        <LandingPage />
      </div>
    </>
  );
}

export default App;
