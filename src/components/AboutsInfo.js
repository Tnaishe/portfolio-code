import { Component } from "react";
import Tinashe2 from "../pictures/2.JPEG";
import Tinashe3 from "../pictures/3.JPEG";
import Tinashe4 from "../pictures/4.JPEG";
import Tinashe5 from "../pictures/5.jpg";
import "./AboutStyles.css";

class AboutInfo extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="body-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default AboutInfo;
