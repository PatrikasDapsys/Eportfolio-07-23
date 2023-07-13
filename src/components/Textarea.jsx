import React, { useState } from "react";

function Textarea({ children, width, value, name, onChange }) {
  const [isActive, setIsActive] = useState(false);
  const inputId = `input-${Math.random().toString(36).substring(2)}`;

  function handleActive() {
    setIsActive(true);
  }

  function handleBlur(event) {
    const { value } = event.target;
    setIsActive(value !== "");
  }

  const labelClass = `absolute  ${
    isActive
      ? "-top-5 transition-all duration-300 text-gray-300"
      : "top-0 transition-all duration-300 text-dark-300"
  }`;
  const underlineClass = `absolute bottom-[-1px] h-[2px] w-full z-[2]${
    isActive
      ? " bg-white transition-all duration-500 scale-x-100"
      : " transition-all duration-500 scale-x-0"
  }`;

  return (
    <div
      className={`relative mt-12 mb-6 h-[192px] w-[${width}] border-b-[1px] border-dark-500 z-[1]`}
    >
      {/* input-container */}
      <textarea
        type="text"
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        rows={6}
        required
        autoComplete="off"
        className={`absolute w-full border-b-0`}
        onFocus={handleActive}
        onBlur={handleBlur}
      />
      <label
        htmlFor={inputId}
        className={
          labelClass +
          " bold uppercase w-full text-center border-b-[1px] pl-[10px] tracking-[10px] xs:pl-[20px] xs:tracking-[20px]"
        }
      >
        {children}
        {/* <hr className={`absolute left-0 ${isActive ? 'border-white' : ''}`} style={{width: 'calc(100%)'}}/> */}
        <div className={underlineClass + " left-0"}></div> {/* underline */}
      </label>
      <div className={underlineClass}></div> {/* underline */}
    </div>
  );
}

export default Textarea;
