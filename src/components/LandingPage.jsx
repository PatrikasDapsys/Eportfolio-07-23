import React, { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import HackerWord from "./HackerWord";
import CheckBoxOutlineBlankSharpIcon from "@mui/icons-material/CheckBoxOutlineBlankSharp";
import SquareSharpIcon from "@mui/icons-material/SquareSharp";

let themeValue = "dark";
function LandingPage() {
  const [theme, setTheme] = useState("dark");
  const element = document.documentElement;
  const outsideText = `whitespace-nowrap absolute font-bold tracking-widest z-[3] text-light-500 dark:text-dark-500`;

  useEffect(() => {
    themeValue = theme;
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        break;
      case "light":
        element.classList.remove("dark");
      default:
        break;
    }
  }, [theme]);

  return (
    <section
      id="landing"
      className={` w-screen h-screen bg-light-900 dark:bg-dark-900
      flex justify-center p-[30px] relative transition-colors duration-1000`}
    >
      {/* MASK  */}
      <div className={"mask h-[30px] w-screen top-0"}></div>
      <div className={"mask h-[46px] w-screen bottom-0"}></div>
      <div
        className={"mask w-[30px] left-0"}
        style={{ height: "calc(100vh - 30px)" }}
      ></div>
      <div
        className={"mask w-[30px] right-0"}
        style={{ height: "calc(100vh - 30px)" }}
      ></div>

      {/* OUSIDE TEXT */}
      <span
        className={outsideText + " left-[-52px] top-[90px] rotate-[270deg] "}
      >
        Patrikas Dapšys
      </span>
      <span
        className={outsideText + " right-[-52px] bottom-[105px] rotate-90 "}
      >
        Patrikas Dapšys
      </span>

      <div
        className={`text-black dark:text-white absolute flex gap-3 rotate-[270deg] bottom-[120px] left-[-55px] z-[3] blur-[.6px]`}
      >
        <button
          onClick={() => setTheme("light")}
          className={` uppercase flex items-center`}
        >
          {theme === "dark" ? (
            <CheckBoxOutlineBlankSharpIcon />
          ) : (
            <SquareSharpIcon />
          )}
          Light
        </button>
        <button
          onClick={() => setTheme("dark")}
          className="uppercase flex items-center"
        >
          {theme === "light" ? (
            <CheckBoxOutlineBlankSharpIcon />
          ) : (
            <SquareSharpIcon />
          )}
          Dark
        </button>
      </div>
      <a
        href="#projects"
        className="animate-glow w-[20px] h-8 border rounded-full flex justify-center absolute bottom-2 left-1/2 transform -translate-x-1/2 z-[2]"
      >
        <div className="w-[6px] h-[7px] border rounded-full absolute animate-bouncing animate-glowingBounce"></div>
      </a>
      {/* INNER TEXT */}
      <div className="w-full border-2 flex flex-col justify-between mb-4">
        <div className={`flex justify-between text-3xl p-4 xs:p-8`}>
          <div className="">
            <div
              className={`text-black dark:text-white mb-3 text-5xl md:text-6xl xl:text-7xl`}
            >
              <HackerWord>Patrikas Dapšys</HackerWord>
            </div>
            <div
              className={`text-light-300 dark:text-dark-300 text-xs w-[80%] sm:w-[60%]  md:text-base xl:text-lg`}
            >
              I'm a{" "}
              <span className="keyword"> Frontend software engineer </span> with
              a strong <span className="keyword">passion</span> for building web
              applications with{" "}
              <span className="keyword">great user experiences.</span>
            </div>
          </div>
          <ul
            className={`text-light-500 dark:text-gray-300 flex flex-col gap-2`}
          >
            <a href="mailto:patrikas.dapsys@gmail.com" className="link-wrapper">
              <span className="font-bold">@</span>
            <span className="popup">MyEmail@email.com</span>
            </a>
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
        <div
          className={`dark:text-dark-300
         text-light-300 w-full flex justify-between p-4 xs:p-8`}
        >
          <ul className="flex flex-col-reverse list-disc">
            <li>
              <a className="font-[530] link__hover-effect" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a className="font-[530] link__hover-effect" href="#projects">
                Projects
              </a>
            </li>
          </ul>
          <div className="uppercase text-right text-2xl sm:text-4xl md:text-6xl xl:text-8xl">
            Frontend <br /> <span className=""> software engineer</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
export { themeValue };
