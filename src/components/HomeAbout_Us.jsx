import React from "react";
import { Link } from "react-router-dom";

const HomeAbout_Us = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <div className="about_heading"></div>
        <div>
        A platform where we will integrate data from different educational institutions of India where we will  analyse the trends in the recruiting process. Moreover, an interactive dashboard will provide the Policy makers a key insight into what measures should be taken in order to reduce the unemployment rate in the country and it will also provide the projection of unemployment in the country in coming years using Artificial Intelligence.

        </div>
        <Link to="/about">Learn more</Link>
      </div>
    </div>
  );
};

export default HomeAbout_Us;
