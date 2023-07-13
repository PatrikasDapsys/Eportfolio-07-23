import LandingPage from "./LandingPage";
import ProjectsPage from "./ProjectsPage";
import Contact from "./Contact";
import Footer from "./Footer";

function HomePage({ isDarkMode, setIsDarkMode }) {
  return (
    <>
      <LandingPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <ProjectsPage isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}

export default HomePage;
