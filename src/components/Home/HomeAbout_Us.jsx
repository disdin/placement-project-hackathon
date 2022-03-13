import React from "react";
import { Link } from "react-router-dom";
import "./HomeAbout_us.css";
const HomeAbout_Us = () => {
  return (
    <div className="Home_about">
      <div className="home--section">
        <div className="content">
          <p className="heading">Mission</p>
          <p className="para">
            As on today, in our country we are not having any master data base
            regarding campus placement in technical institute and Universities
            throughout the country. By mapping the entire placement details
            throughout the county, the percentage of un-employability can be
            identified in various fields of education. This will help the policy
            makers to come out with appropriate solution through framing of
            policies for tackling the unemployability in the country.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80"
          alt=""
          className="home_mission--img"
        />
      </div>
      <div className="home--section">
        <img
          src="https://www.globalplacements.ind.in/wp-content/uploads/2020/11/iStock-1125873339-1024x683.jpg"
          alt=""
          className="home_about--img"
        />
        <div className="content">
          <p className="heading">About Us</p>
          <p className="para">
            A platform where we will integrate data from different educational
            institutions of India where we will analyse the trends in the
            recruiting process. Moreover, an interactive dashboard will provide
            the Policy makers a key insight into what measures should be taken
            in order to reduce the unemployment rate in the country and it will
            also provide the projection of unemployment in the country in coming
            years using Artificial Intelligence.
          </p>
          <Link to="/about" className="home_about--link">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout_Us;
