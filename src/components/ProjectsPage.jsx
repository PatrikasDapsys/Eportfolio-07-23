import React from "react";
import pic from "../assets/ecom-front-thumb.png";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectsPage() {
  return (
    <section
      id="projects"
      className="h-screen pt-16  bg-primary-900 text-white flex flex-col items-center"
    >
      <h1 className="text-5xl md:text-6xl xl:text-7xl pb-16">Projects</h1>
      {/* PROJECTS */}
      <div className="border-2 border-white w-4/5 h-3/5 grid grid-cols-[0.8fr,1.2fr]">
        {/* TEXT */}
        <div className="border-r-2">
          <div className="p-3 xs:p-6">
            <h2 className="text-2xl font-normal">Title</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            molestiae a sapiente voluptatum et nemo, voluptatem, deleniti
            nesciunt beatae cumque officia blanditiis, veritatis expedita alias
            eveniet cum ut nisi quos tempore necessitatibus doloribus? Saepe
            placeat voluptas facilis iste ad? Impedit asperiores placeat
            aspernatur, quasi rerum atque sapiente perferendis in aliquid sit,
            incidunt sint obcaecati animi quo, blanditiis ipsam fugiat corporis.
          </div>
        </div>
        {/* IMG */}
        <div className=" p-4 flex items-center justify-center flex-col">
          <img src={pic} alt="" className="rounded-lg overflow-hidden" />
          <div className="flex pt-3 gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </a>
            <a className="">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
