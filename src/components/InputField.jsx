import React, { useState } from "react";

function InputField({ children, width }) {
  const [isActive, setIsActive] = useState(false);
  const inputId = `input-${Math.random().toString(36).substring(2)}`;


  function handleActive() {
    setIsActive(true);
  }

  function handleBlur(event) {
    const { value } = event.target;
    setIsActive(value !== "");
  }

  const labelClass = `absolute top-0 ${
    isActive
      ? "-top-5 transition-all duration-300 text-white"
      : "transition-all duration-300 text-primary-300"
  }`;
  const underlineClass = `absolute bottom-[-1px] h-[2px] w-full z-[2]${
    isActive
      ? " bg-white transition-all duration-500 scale-x-100"
      : " transition-all duration-500 scale-x-0"
  }`;

  return (
    <div className={`relative mt-12 mb-6 h-[24px] w-[${width}] border-b-[1px] border-primary-500 z-[1]`}>
      {/* input-container */}
      <input
        type="text"
        id={inputId}
        required
        autoComplete="off"
        className={`absolute w-full mt-0 border-b-0`}
        onFocus={handleActive}
        onBlur={handleBlur}
      />
      <label htmlFor={inputId} className={labelClass + " uppercase w-full text-center pl-[20px] tracking-[20px]"}>
        {children}
      </label>
      <div className={underlineClass}></div> {/* underline */}
    </div>
  );
}

export default InputField;
