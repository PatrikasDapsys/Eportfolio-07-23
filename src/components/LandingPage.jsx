import React from "react";

function LandingPage() {
  const mask = "absolute z-[2] bg-primary-900 ";
  const outsideText =
    "text-primary-500 whitespace-nowrap absolute tracking-widest z-[3]";

  return (
    <section className="w-screen h-screen bg-primary-900 flex justify-center p-[30px] relative">
      {/* MASK  */}
      <div className={mask + "h-[30px] w-screen top-0"}></div>
      <div className={mask + "h-[30px] w-screen bottom-0"}></div>
      <div className={mask + "h-screen w-[30px] left-0"}></div>
      <div className={mask + "h-screen w-[30px] right-0"}></div>

      {/* OUSIDE TEXT */}
      <span
        className={outsideText + " left-[-45px] top-[80px] rotate-[270deg] "}
      >
        Patrikas Dapsys
      </span>
      <span
        className={outsideText + " right-[-45px] bottom-[80px] rotate-[90deg] "}
      >
        Patrikas Dapsys
      </span>
      <button className="w-[16px] h-6 border rounded-full flex justify-center absolute bottom-1 left-1/2 transform -translate-x-1/2 z-[2]">
        <div className="w-1 h-1 border rounded-full absolute animate-bouncing"></div>
      </button>
      {/* INNER TEXT */}
      <div className="w-full border-2 border-primary-500 flex flex-col justify-between">
        <div className="text-white text-3xl w-[80%] sm:w-[50%] p-4 xs:p-8">
          <div className="mb-3 text-5xl md:text-6xl xl:text-7xl">
            Patrikas Dapsys
          </div>
          <div className="text-xs text-gray-200 md:text-base xl:text-lg">
            I'm a <span className="font-[450] italic">Frontend software engineer </span>
            with a strong passion for building web applications with great user
            experiences.
          </div>
        </div>
        <div className="w-full flex justify-end p-4 xs:p-8">
          <div className="text-primary-300 uppercase text-right text-2xl sm:text-4xl md:text-6xl xl:text-8xl">
            Frontend <br /> <span className=""> software engineer</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
