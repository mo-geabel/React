import React from "react";
import "./Title.css";
const Title = (props) => {
  return (
    <div className="title">
      <p>{props.p}</p>
      <h2>{props.h3}</h2>
    </div>
  );
};

export default Title;
