import React from "react";
import logo from "../../assets/theme_pattern.svg";
import "./Mywork.css";
import Mywork_data from '../../assets/mywork_data'
import mywork_data from "../../assets/mywork_data";
import arrow from '../../assets/arrow_icon.svg'

function Mywork() {
  return (
    <div id="mywork" className="Mywork">
      <div className="work-title">
        <h1>My latest Work</h1>
        <img src={logo} alt="" />
      </div>
      <div className="mywork-container">
        {
          mywork_data.map((work , index)=>{
            return <img key = {index} src= {work.w_img} alt="image" />
          }) 
        }

      </div>
      <div className="mywork-showmore">
        <p>Show more</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
}

export default Mywork;
