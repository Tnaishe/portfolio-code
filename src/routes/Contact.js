import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tina from "../components/Tina";
import Tinashe1 from "../pictures/1.JPG";

function Contact() {
  return (
    <>
      <Navbar />
      <Tina cName="tina-smaller" tinaImg={Tinashe1} title="" />
      <Footer />
    </>
  );
}

export default Contact;
