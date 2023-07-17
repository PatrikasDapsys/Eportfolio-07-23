import GitHubIcon from "@mui/icons-material/GitHub";
import { ecomPhotos } from "./Pictures";
import { evoPhotos } from "./Pictures";
import { ultraPhotos } from "./Pictures";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

const settings = {
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function ProjectsPage() {
  return (
    <section id="projects" className="section pt-16">
      <div className={"mask h-[200px] w-full top-0"}></div>
      <div
        className={"mask w-[10%] left-0 top-0"}
        style={{ height: "calc(100% - 24px)" }}
      ></div>
      <div
        className={"mask w-[10%] right-0 top-0"}
        style={{ height: "calc(100% - 24px)" }}
      ></div>
      <h1 className="title">Projects</h1>

      {/* PROJECTS */}
      {/* PROJECT 1 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          hidden: { y: 200 },
          visible: { y: 0 },
        }}
        className="border-2 w-4/5 grid"
      >
        {/* TEXT */}
        <div className="text-center">
          <div className="p-3 xs:p-6">
            <h2 className="font-normal tracking-widest uppercase text-2xl xs:text-4xl text-dark-900 dark:text-gray-100 ">
              Fullstack Ecommerce website
            </h2>
            <hr className="my-4" />
            <p className="w-full text-lg tracking-wider text-light-700 dark:text-gray-200">
              I've developed a <span className="keyword">feature-rich</span>{" "}
              ecommerce site using <span className="keyword">JavaScript</span>,{" "}
              <span className="keyword"> Next.js</span>,{" "}
              <span className="keyword">MongoDB</span>, and{" "}
              <span className="keyword">styled components.</span> <br />
              Users can create accounts, save items to their wishlist, manage
              account information, and fulfill orders seamlessly. It showcases
              my <span className="keyword">expertise</span> in cutting-edge
              <span className="keyword"> front-end</span> development.
            </p>
          </div>
        </div>
        {/* IMG */}
        <div className="p-6 flex items-center justify-center flex-col z-[2] w-full h-full">
          <Slider {...settings} className="w-[60vw]">
            {ecomPhotos.map((photo) => (
              <a
                key={photo}
                target="_blank"
                href={"https://next-ecommerce-front-nu.vercel.app/"}
              >
                <img className="aspect-2/1" src={photo} alt="" />
              </a>
            ))}
          </Slider>
          <div className="flex pt-3 gap-4 text-dark-900 dark:text-white">
            <a
              href={"https://next-ecommerce-front-nu.vercel.app/"}
              target="_blank"
              className="hover:scale-110"
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
            </a>
            <a
              href="https://github.com/PatrikasDapsys/next-ecommerce-front"
              target="_blank"
              className="hover:scale-110"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </motion.div>
      <div className={"mask !relative w-full h-[40px]"}></div>

      {/* PROJECT 2 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          hidden: { y: 200 },
          visible: { y: 0 },
        }}
        className="border-2 w-4/5 grid"
      >
        {/* TEXT */}
        <div className="text-center">
          <div className="p-3 xs:p-6">
            <h2 className="font-normal tracking-widest uppercase text-2xl xs:text-4xl text-dark-900 dark:text-gray-100">
              evogym
            </h2>
            <hr className="my-4" />
            <p className="w-full text-lg tracking-wider text-light-700 dark:text-gray-200">
              I've built a captivating gym website for my portfolio using{" "}
              <span className="keyword">Typescript, React, Tailwind, </span>
              and <span className="keyword">Framer animations.</span>
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
        <div className=" p-6 flex items-center justify-center flex-col z-[2]">
          <Slider {...settings} className="w-[60vw]">
            {evoPhotos.map((photo) => (
              <a
                key={photo}
                target="_blank"
                href={"https://gym-react-ts-xi.vercel.app/"}
              >
                <img className="aspect-2/1" src={photo} alt="" />
              </a>
            ))}
          </Slider>
          <div className="flex pt-3 gap-4 text-dark-900 dark:text-white">
            <a
              href={"https://gym-react-ts-xi.vercel.app/"}
              target="_blank"
              className="hover:scale-110"
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
            </a>
            <a
              href="https://github.com/PatrikasDapsys/gym-react-ts"
              className="hover:scale-110"
              target="_blank"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </motion.div>
      <div className={"mask !relative w-full h-[40px]"}></div>

      {/* PROJECT 3 */}
      <motion.div
        className="border-2 w-4/5 grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          hidden: { y: 200 },
          visible: { y: 0 },
        }}
      >
        {/* TEXT */}
        <div className="text-center">
          <div className="p-3 xs:p-6">
            <h2 className="font-normal tracking-widest uppercase text-2xl xs:text-4xl text-dark-900 dark:text-gray-100">
              Ultraverse
            </h2>
            <hr className="my-4" />
            <p className="w-full text-lg tracking-wider text-light-700 dark:text-gray-200">
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
          <Slider {...settings} className="w-[60vw]">
            {ultraPhotos.map((photo) => (
              <a
                key={photo}
                target="_blank"
                href={"https://patrikas-intership.vercel.app/"}
              >
                <img className="aspect-2/1" src={photo} alt="" />
              </a>
            ))}
          </Slider>
          <div className="flex pt-3 gap-4 text-dark-900 dark:text-white">
            <a
              href={"https://patrikas-intership.vercel.app/"}
              target="_blank"
              className="hover:scale-110"
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
            </a>
            <a
              href="https://github.com/PatrikasDapsys/patrikas-intership/"
              className="hover:scale-110"
              target="_blank"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </motion.div>
      <div className={"mask !relative w-full h-[40px]"}></div>
    </section>
  );
}

export default ProjectsPage;
