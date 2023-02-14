import React from "react";

import axios from "axios";
import { Jumbotron } from "./migration";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const Story = ({heading, message, link, imgRatio, imgSize, pic_left, pic_right}) => {
const bg_color = pic_left ? "" : "bg-light"


  return (
    <Jumbotron id="aboutme" className={"m-0 " + bg_color}>
      { pic_left && (
        <div className="container row">
          <div className="col-5 d-none d-lg-block align-self-center">
            <img
              className="border border-secondary rounded"
              src={link}
              alt="profilepicture"
              width={imgSize}
              height={imgSize * imgRatio}
            />
          </div>
          <div className={`col-lg-7`}>
            <h2 className="display-4 mb-5 text-center">{heading}</h2>
            <p className="lead ">{message}</p>
          </div>
        </div>
      )}
      { pic_right && (
        <div className="container row">
          <div className={`col-lg-7`}>
            <h2 className="display-4 mb-5 text-center">{heading}</h2>
            <p className="lead ">{message}</p>
          </div>
          <div className="col-5 d-none d-lg-block align-self-center">
            <img
              className="border border-secondary rounded float-end"
              src={link}
              alt="profilepicture"
              width={imgSize}
              height={imgSize * imgRatio}
            />
          </div>
        </div>
      )}
    </Jumbotron>
  );
};

export default Story;
