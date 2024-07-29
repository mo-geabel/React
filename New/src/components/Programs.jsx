import React from "react";
import "./Programs.css";
import programImage from "../assets/program-1.png"; // Correctly import the image
import programImage2 from "../assets/program-2.png"; // Correctly import the image
import programImage3 from "../assets/program-3.png"; // Correctly import the image
import programImage4 from "../assets/program-icon-1.png"; // Correctly import the image
import programImage5 from "../assets/program-icon-2.png"; // Correctly import the image
import programImage6 from "../assets/program-icon-3.png"; // Correctly import the image

const Programs = () => {
  return (
    <div>
      <div className="programs">
        <div className="program">
          <img src={programImage} alt="" />
          <div className="caption">
            <img src={programImage4} alt="" />
            <p>Graduation Degree</p>
          </div>
        </div>
        <div className="program">
          <img src={programImage2} alt="" />
          <div className="caption">
            <img src={programImage5} alt="" />
            <p>Master Degree</p>
          </div>
        </div>
        <div className="program">
          <img src={programImage3} alt="" />
          <div className="caption">
            <img src={programImage6} alt="" />
            <p>Post Degree</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
