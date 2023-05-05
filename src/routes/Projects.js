import Body from "../components/Body";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Project from "../components/Projects";
import Tina from "../components/Tina";
import Tinashe1 from "../pictures/3.JPEG";

function Projects() {
  return (
    <>
      <Navbar />
      <Tina cName="tina-smaller" tinaImg={Tinashe1} title="Projects" />
      <Project />
      <Footer />
    </>
  );
}

export default Projects;
