import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tina from "../components/Tina";
import Tinashe1 from "../pictures/6.jpg";
import About from "../components/Abouts";

function Abouts() {
  return (
    <>
      <Navbar />
      <Tina cName="tina-smaller" tinaImg={Tinashe1} title="About Tinashe" />
      <About />
      <Footer />
    </>
  );
}

export default Abouts;
