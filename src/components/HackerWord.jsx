import React, { useEffect, useRef } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()";

const HackerWord = ({ children }) => {
  const h1Ref = useRef(null);
  let interval = null;

  const runTextAnimation = () => {
    let iteration = 0;

    interval = setInterval(() => {
      h1Ref.current.innerText = h1Ref.current.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return h1Ref.current.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= h1Ref.current.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  const handleMouseOver = () => {
    clearInterval(interval);
    runTextAnimation();
  };

  useEffect(() => {
    runTextAnimation();
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <h1 ref={h1Ref} data-value={children} onMouseOver={handleMouseOver}>
      {children}
    </h1>
  );
};

export default HackerWord;
