import LandingPage from "./LandingPage";
import ProjectsPage from "./ProjectsPage";
import Contact from "./Contact";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";

function HomePage({}) {
  const [showMainPage, setShowMainPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMainPage(true);
    }, 1800);
  }, []);

  return (
    <>
      {/* {!showMainPage && <LoadingPage />}
      {showMainPage && ( */}
        <>
          <LandingPage />
          <ProjectsPage />
          <Contact />
          <Footer />
        </>
      {/* )} */}
    </>
  );
}

export default HomePage;
