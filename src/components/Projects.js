import Tinashe2 from "../pictures/robotcar.png";
import Tinashe3 from "../pictures/2.JPEG";
import Tinashe4 from "../pictures/Android Studio1.png";
import Tinashe5 from "../pictures/Visual Studio2.png";
import Tinashe6 from "../pictures/4.JPEG";
import Tinashe7 from "../pictures/mosquito.jpg";
import ProjectInfo from "./ProjectsInfo";
import "./ProjectStyles.css";

const Project = () => {
  return (
    <div className="body">
      <h1>Overview</h1>
      <p>
        I have had the opportunity of working on a few projects and the
        following are the recent ones that I have had the pleasure of working
        on.
      </p>

      <ProjectInfo
        className="first-body"
        heading="Robot Car"
        text="The robot care was a group project and I was the one in charge of the programming of the car. The robot car was designed to follow a black line. It was also capable of sensing the colours red and blue. The car would turn left when a blue colour is detected on the track and turn right when it detects a red colour. Besides programming the car, I was also involved in wiring the circuit and calibrating the sensors so that I know what RGB Colour values I was working with in the code."
        img1={Tinashe2}
        img2={Tinashe3}
      />

      <ProjectInfo
        className="first-body-switch"
        heading="Google Maps"
        text="This is more of a personalised project that am working on and I have been working on it since mid-2022 and its’s been slow in coming. Am hoping that this year I will be able to finish it and get it up in running."
        img1={Tinashe4}
        img2={Tinashe5}
      />
      <ProjectInfo
        className="first-body"
        heading="Mosquito Trapping Device"
        text="This was s group project and I was in charge of the programming subsystem. I was solely responsible for coding the whole device using Adriano. The device was supposed to lure mosquitoes into a trap for scientific research, hence we were tasked to create the device that was capable of luring and trapping. The luring required the use of a buzzer that was supposed to produce a specific frequency that attracts mosquitoes and an infrared sensor that is capable of detecting and counting the number of mosquitoes that are in the container."
        img1={Tinashe6}
        img2={Tinashe7}
      />
    </div>
  );
};

export default Project;
