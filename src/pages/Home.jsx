import React from "react";
import HomeAbout_Us from "../components/Home/HomeAbout_Us";
import HomeWinning from "../components/Home/HomeWinning/HomeWinning";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home_first_before"></div>
      <div className="home">
        <div className="home_first">
          <div className="home_first_heading">
            <span className="c1">Framing </span>
            <span className="c2">solution for tackling </span>
            <span className="c1"> the </span>
            <span className="c2">unemployability </span>
            <span className="c1">in </span>
            <span className="c2">the </span>
            <span className="c1">country</span>{" "}
          </div>
          {/* <div className="home_first_about">
            As on today, in our country we are not having any master data base
            regarding campus placement in technical institute and Universities
            throughout the country. By mapping the entire placement details
            throughout the county, the percentage of un-employability can be
            identified in various fields of education. This will help the policy
            makers to come out with appropriate solution through framing of
            policies for tackling the unemployability in the country.
          </div> */}
        </div>
        <HomeAbout_Us />
        <HomeWinning />
      </div>
    </>
  );
};

export default Home;
