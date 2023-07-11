import React from "react";
import './AnimatedButton.css'

function AnimatedButton({ children, type }) {
  return (
    <button
      type={type}
      className="box p-4 my-8 bg-primary-900 z-[3] uppercase w-4/5 tracking-[5px] sm:w-3/5 sm:tracking-[10px] md:w-2/5 md:tracking-[20px]"
    >
      {children}
    </button>
  );
}

export default AnimatedButton;
