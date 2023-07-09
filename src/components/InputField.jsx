import React, { useState } from "react";

function InputField({ children }) {
  const [isActive, setIsActive] = useState(false);

  function handleActive() {
    console.log("clicked");
    setIsActive(true);
  }
  function handleBlur() {
    const { value } = event.target;
    setIsActive(value !== "");
  }

  const active = "-top-5 absolute";
  const nonActive = "top-0 absolute";
  return (
    <div className="relative mt-20">
      {" "}
      {/* input-container */}
      <input
        type="text"
        id="input"
        required
        className=" absolute w-[200px] mt-0 border-b-0"
        onFocus={handleActive}
        onBlur={handleBlur}
      />
      <label htmlFor="input" className={isActive ? active : nonActive + " "}>
        {children}
      </label>
      <div className="absolute bottom-[-24px] border-b-2 w-[200px] border-white"></div> {/* underline */}
    </div>
  );
}

export default InputField;
