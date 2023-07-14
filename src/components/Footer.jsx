import React, { useState } from "react";
import NorthIcon from "@mui/icons-material/North";

function Footer({ isDarkMode }) {

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
      <footer
        id="footer"
        className="h-[300px] text-light-700 dark:text-dark-300 bg-light-900 dark:bg-dark-900 z-[3] relative border-t-[1px] border-t-zinc-900"
      >
        <div className="h-full flex flex-col items-center justify-center gap-11">
          <button
            onClick={scrollToTop}
            className="relative animate-glow border p-4 rounded-full transition shadow-dark-500 hover:scale-110 active:bg-dark-300"
          >
            <span className="absolute left-[-10px] bottom-[-28px] whitespace-nowrap opacity-0 hover:opacity-100 z-10 pt-[70px] transition-opacity">
              Back To Top
            </span>
            <NorthIcon />
          </button>

          <ul className="flex gap-4 xs:gap-6">
            <li className="relative">
              <a
                target="_blank"
                href="https://github.com/PatrikasDapsys/"
                className="link__hover-effect"
              >
                GitHub
              </a>
            </li>
            <li className="relative">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/patrikas-dapsys/"
                className="link__hover-effect"
              >
                LinkedIn
              </a>
            </li>
            <li className="relative">
              <a target="_blank" href="" className="link__hover-effect">
                Resume
              </a>
            </li>
            <li className="relative">
              <a href="#contact" className="link__hover-effect">
                Contact
              </a>
            </li>
          </ul>

          <div className="">Copyright © Patrikas Dapšys 2023</div>
        </div>
      </footer>
  );
}

export default Footer;
