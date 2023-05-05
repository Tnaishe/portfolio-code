import Tinashe2 from "../pictures/robotcar.png";
import Tinashe3 from "../pictures/2.JPEG";
import Tinashe4 from "../pictures/Android Studio1.png";
import Tinashe5 from "../pictures/Visual Studio2.png";
import Tinashe6 from "../pictures/4.JPEG";
import Tinashe7 from "../pictures/mosquito.jpg";
import AboutInfo from "./AboutsInfo";
import "./AboutStyles.css";

const About = () => {
  return (
    <div className="body">
      <h1>The Fun Side</h1>
      <p></p>

      <AboutInfo
        className="first-body"
        heading="Paintballing"
        text=""
        img1={Tinashe2}
        img2={Tinashe3}
      />

      <AboutInfo
        className="first-body-switch"
        heading="The Nerd Crew"
        text=""
        img1={Tinashe4}
        img2={Tinashe5}
      />
      <AboutInfo
        className="first-body"
        heading="Values"
        text=""
        img1={Tinashe6}
        img2={Tinashe7}
      />
    </div>
  );
};

export default About;
