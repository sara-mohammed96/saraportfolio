import React from "react";
import './HelloText.css'
import colorSharp from "../../assets/img/color-sharp.png"

const NameTitle = () => {
  return (
    <div className="container1">
    <div className="center">
  <h1>
    <span>Hello World</span>
    <span>Hello World</span>
    <span>Hello World</span>
  </h1>
  
</div>
<img className="background-image-left1" src={colorSharp} alt="Image" />
</div>
  );
};
export default NameTitle;


