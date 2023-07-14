import React, { useState } from "react";

function InputField({ children, type, width, value, name, onChange }) {
  const [isActive, setIsActive] = useState(false);
  const inputId = `input-${Math.random().toString(36).substring(2)}`;

  function handleActive() {
    setIsActive(true);
  }

  function handleBlur(event) {
    const { value } = event.target;
    setIsActive(value !== "");
  }

  const labelClass = `absolute ${
    isActive
      ? "-top-5 transition-all duration-300 text-black dark:text-white"
      : "top-0 transition-all duration-300 text-dark-500 dark:text-dark-300"
  }`;
  const underlineClass = `absolute bottom-[-1px] h-[2px] w-full z-[2]${
    isActive
      ? " transition-all duration-500 scale-x-100 bg-black dark:bg-white"
      : " transition-all duration-500 scale-x-0"
  }`;

  return (
    <div
      className={`relative mt-12 mb-6 h-[24px] border-b-[1px] border-dark-500 z-[1]`}
      style={{ width: width }}
    >
      {/* input-container */}
      <input
        type={type}
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        required
        autoComplete="off"
        className={`absolute w-full mt-0 border-b-0 text-black dark:text-white`}
        onFocus={handleActive}
        onBlur={handleBlur}
      />
      <label
        htmlFor={inputId}
        className={
          labelClass + " uppercase w-full text-center pl-[10px] tracking-[10px] xs:pl-[20px] xs:tracking-[20px]"
        }
      >
        {children}
      </label>
      <div className={underlineClass}></div>
    </div>
  );
}

export default InputField;
