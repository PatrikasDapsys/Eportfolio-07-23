import React from "react";
import pic from "../assets/ecom-front-thumb.png";
import pic2 from "../assets/Gym-thumb.png";
import pic3 from "../assets/nft-thumb.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Fullstack Ecommerce website",
    description:
      "An ecommerce site that has a has alot of different functionality. For the user site, you can create an account, save to wishlist, save account information,",
    img: { pic },
    link: "tess",
    github: "tess",
  },
];

function ProjectsPage() {
  return (
    <section
      id="projects"
      className="min-h-screen pt-16  bg-primary-900 text-white flex flex-col items-center gap-10"
    >
      <h1 className=" text-center flex pb-16 pl-0 uppercase tracking-normal sm:pl-[20px] sm:tracking-[20px] md:pl-[60px] md:tracking-[60px] text-6xl xl:text-7xl">
        Projects
      </h1>

      {/* PROJECTS */}
      {/* PROJECT 1 */}
      <div className="border-2 w-4/5 grid md:grid-cols-[0.8fr,1.2fr]">
        {/* TEXT */}
        <div className="text-center md:text-left md:border-r-2">
          <div className="p-3 xs:p-6">
            <h2 className="text-4xl font-normal tracking-widest uppercase text-gray-100">
              Fullstack Ecommerce website
            </h2>
            <hr className="my-4" />
            <p className="w-full text-lg tracking-wider text-gray-200 md:w-4/5">
              I've developed a feature-rich ecommerce site using{" "}
              <span className="keyword"> Next.js</span>,{" "}
              <span className="keyword">MongoDB</span>, and{" "}
              <span className="keyword">styled components.</span> <br />
              Users can create accounts, save items to their wishlist, manage
              account information, and fulfill orders seamlessly. It showcases
              my <span className="keyword">expertise</span> in cutting-edge
              front-end development.
            </p>
          </div>
        </div>
        {/* IMG */}
        <div className=" p-6 flex items-center justify-center flex-col z-[2]">
          <Link to={"/project/ecom"}>
            <img
              src={pic}
              alt=""
              className="rounded-lg overflow-hidden transition ease-linear w-full hover:scale-[1.03]"
            />
          </Link>
          <div className="flex pt-3 gap-4">
            <Link
              to={"https://next-ecommerce-front-nu.vercel.app/"}
              target="_blank"
            >
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
            </Link>
            <a
              href="https://github.com/PatrikasDapsys/next-ecommerce-front"
              target="_blank"
              className=""
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>

      {/* PROJECT 2 */}
      <div className="border-2 w-4/5 grid grid-cols-[1.2fr,0.8fr]">
        {/* TEXT */}
        <div className="order-1">
          <div className="p-3 xs:p-6">
            <h2 className="text-4xl font-normal tracking-widest uppercase text-gray-100">
              evogym
            </h2>
            <hr className="my-4" />
            <p className="w-4/5 text-lg tracking-wider text-gray-200">
              I've built a captivating gym website for my portfolio using{" "}
              <span className="keyword">Typescript, React, Tailwind, </span>
              and <span className="keyword">motion animations.</span>
              <br />
              It offers an{" "}
              <span className="keyword"> interactive user experience</span>,
              showcasing fitness programs, class schedules, and trainer
              information. With robustness and scalability in mind, the website
              combines <span className="keyword">modern design</span> aesthetics
              and captivating <span className="keyword">motion effects</span>.
            </p>
          </div>
        </div>
        {/* IMG */}
        <div className=" p-6 flex items-center justify-center flex-col z-[2] border-r-2 ">
          <Link to={"/project/ecom"}>
            <img
              src={pic2}
              alt=""
              className="rounded-lg overflow-hidden transition ease-linear w-full hover:scale-[1.03]"
            />
          </Link>
          <div className="flex pt-3 gap-4">
            <Link to={"https://gym-react-ts-xi.vercel.app/"} target="_blank">
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
            </Link>
            <a
              href="https://github.com/PatrikasDapsys/gym-react-ts"
              className=""
              target="_blank"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>

      {/* PROJECT 3 */}
      <div className="border-2 w-4/5 grid grid-cols-[0.8fr,1.2fr]">
        {/* TEXT */}
        <div className="border-r-2">
          <div className="p-3 xs:p-6">
            <h2 className="text-4xl font-normal tracking-widest uppercase text-gray-100">
              Ultraverse
            </h2>
            <hr className="my-4" />
            <p className="w-4/5 text-lg tracking-wider text-gray-200">
              I've worked on an impressive NFT trading website utilizing{" "}
              <span className="keyword">
                {" "}
                JS, Bootstrap, React, AOS (Animate on Scroll), API integration,
              </span>{" "}
              and <span className="keyword">
                {" "}
                Git version control.
              </span> <br /> This platform offers seamless trading with
              <span className="keyword"> responsive design,</span> captivating
              <span className="keyword"> animations</span>, real-time data
              updates, and efficient{" "}
              <span className="keyword"> collaboration </span>through version
              control.
            </p>
          </div>
        </div>
        {/* IMG */}
        <div className=" p-6 flex items-center justify-center flex-col z-[2]">
          <Link to={"/project/ecom"}>
            <img
              src={pic3}
              alt=""
              className="rounded-lg overflow-hidden transition ease-linear w-full hover:scale-[1.03]"
            />
          </Link>
          <div className="flex pt-3 gap-4">
            <Link to={"https://patrikas-intership.vercel.app/"} target="_blank">
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
            </Link>
            <a href="https://github.com/PatrikasDapsys/patrikas-intership/" className="" target="_blank">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
