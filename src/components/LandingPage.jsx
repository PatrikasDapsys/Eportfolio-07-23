import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";

function LandingPage() {
  const mask = "absolute z-[2] bg-primary-900 ";
  const outsideText =
    "text-primary-500 whitespace-nowrap absolute tracking-widest z-[3]";

  return (
    <section
      id="landing"
      className="w-screen h-screen bg-primary-900 flex justify-center p-[30px] relative"
    >
      {/* MASK  */}
      <div className={mask + "h-[30px] w-screen top-0"}></div>
      <div className={mask + "h-[46px] w-screen bottom-0"}></div>
      <div
        className={mask + "w-[30px] left-0"}
        style={{ height: "calc(100vh - 30px)" }}
      ></div>
      <div
        className={mask + "w-[30px] right-0"}
        style={{ height: "calc(100vh - 30px)" }}
      ></div>

      {/* OUSIDE TEXT */}
      <span
        className={outsideText + " left-[-45px] top-[80px] rotate-[270deg] "}
      >
        Patrikas Dapsys
      </span>
      <span
        className={outsideText + " right-[-45px] bottom-[98px] rotate-[90deg] "}
      >
        Patrikas Dapsys
      </span>
      <a
        href="#projects"
        className="animate-glow w-[20px] h-8 border rounded-full flex justify-center absolute bottom-2 left-1/2 transform -translate-x-1/2 z-[2]"
      >
        <div className="w-[6px] h-[7px] border rounded-full absolute animate-bouncing animate-glowingBounce"></div>
      </a>
      {/* INNER TEXT */}
      <div className="w-full border-2 flex flex-col justify-between mb-4">
        <div className="flex justify-between text-white text-3xl p-4 xs:p-8">
          <div className="">
            <div className="mb-3 text-5xl md:text-6xl xl:text-7xl">
              Patrikas Dapsys
            </div>
            <div className="text-xs w-[80%] sm:w-[60%] text-gray-200 md:text-base xl:text-lg">
              I'm a{" "}
              <span className="keyword"> Frontend software engineer </span> with
              a strong <span className="keyword">passion</span> for building web
              applications with{" "}
              <span className="keyword">great user experiences.</span>
            </div>
          </div>
          <ul className="flex flex-col text-primary-300 gap-2">
            <a
              className="link-wrapper"
              href="https://github.com/PatrikasDapsys/"
              target="_blank"
            >
              <span className="popup">GitHub Profile</span>
              <GitHubIcon />
            </a>
            <a
              className="link-wrapper"
              href="https://www.linkedin.com/in/patrikas-dapsys/"
              target="_blank"
            >
              <span className="popup">LinkedIn Profile</span>
              <LinkedInIcon />
            </a>
            <a className="link-wrapper" href="" target="_blank">
              <span className="popup">Resume</span>
              <DescriptionIcon />
            </a>
          </ul>
        </div>
        <div className="w-full flex justify-between p-4 xs:p-8">
          <ul className="text-primary-300 flex flex-col-reverse list-disc">
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
          <div className="text-primary-300 uppercase text-right text-2xl sm:text-4xl md:text-6xl xl:text-8xl">
            Frontend <br /> <span className=""> software engineer</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
