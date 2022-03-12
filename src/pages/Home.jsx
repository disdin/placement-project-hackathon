import React from 'react'
import HomeAbout_Us from '../components/HomeAbout_Us'
import './Home.css'
const Home = () => {
  return (
    <div>
      <div className='home_first'>
        <div className='home_first_heading'>
        Framing solution for tackling the unemployability in the country
        </div>
        <div className='home_first_about'>
        As on today, in our country we are not having any master data base regarding campus placement in technical institute and Universities throughout the country. 
        By mapping the entire placement details throughout the county, the percentage of un-employability can be identified in various fields of education. This will help the policy makers to come out with appropriate solution through framing of policies for tackling the unemployability in the country.
        </div>
      </div>
      <HomeAbout_Us/>
    </div>
  )
}

export default Home