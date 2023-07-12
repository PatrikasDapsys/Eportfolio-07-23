import React from "react";
import NorthIcon from "@mui/icons-material/North";

function Footer() {
  return (
    <footer
      id="footer"
      className="h-[300px] text-primary-300 bg-primary-900 z-[3] relative border-t-[1px] border-t-zinc-900"
    >
      <div className="h-full flex flex-col items-center justify-center gap-11">
        <a
          href="#landing"
          className="relative animate-glow border p-4 rounded-full transition shadow-primary-500 hover:scale-110 active:bg-primary-300"
        >
          <span className="absolute left-[-10px] bottom-[-28px] whitespace-nowrap opacity-0 hover:opacity-100 z-10 pt-[70px] transition-opacity">Back To Top</span>
          <NorthIcon />
        </a>

        <ul className="flex gap-4 xs:gap-6">
          <a target="_blank" href="https://github.com/PatrikasDapsys/">
            GitHub
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/patrikas-dapsys/"
          >
            LinkedIn
          </a>
          <a target="_blank" href="">
            Resume
          </a>
          <a href="#contact">Contact</a>
        </ul>
        <div className="">Copyright © Patrikas Dapšys 2023</div>
      </div>
    </footer>
  );
}

export default Footer;
