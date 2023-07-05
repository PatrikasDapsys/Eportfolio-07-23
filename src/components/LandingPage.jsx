import React from "react";

function LandingPage() {
  const outsideText =
    "text-primary-500 whitespace-nowrap absolute tracking-widest";

  return (
    <section className="w-screen h-screen bg-primary-900 flex justify-center p-[30px] relative">
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
        <button className="w-[16px] h-6 border rounded-full block absolute bottom-1 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-1 border rounded-full absolute top-[5px] left-[5.5px] animate-bouncing"></div>
        </button>
      {/* INNER TEXT */}
      <div className="w-full border-2 border-primary-500 flex flex-col justify-between">
        <div className="text-white text-3xl p-8 w-[50%]">
          <div className="mb-3 text-5xl">Patrikas Dapsys</div>
          <div className="text-xs text-gray-200">
            I'm a Frontend software engineer with a strong passion for building
            web applications with great user experiences.
          </div>
        </div>
        <div className="w-full flex justify-end p-8">
        <div className="text-primary-300 uppercase text-6xl text-right">Frontend <br /> software engineer</div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
