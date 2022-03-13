import React from "react";
import { Link } from "react-router-dom";
import './HomeAbout_us.css'
const HomeAbout_Us = () => {
  return (
    <div className="Home_about">
      
        <img src="https://www.globalplacements.ind.in/wp-content/uploads/2020/11/iStock-1125873339-1024x683.jpg" alt="" />
      
      <div className="about_right">
        <p className="about_heading">About Us</p>
        <p className="about_para">
        A platform where we will integrate data from different educational institutions of India where we will  analyse the trends in the recruiting process. Moreover, an interactive dashboard will provide the Policy makers a key insight into what measures should be taken in order to reduce the unemployment rate in the country and it will also provide the projection of unemployment in the country in coming years using Artificial Intelligence.

        </p>
        <Link to="/about">Learn more</Link>
      </div>
    </div>
  );
};

export default HomeAbout_Us;
