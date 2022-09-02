import React from 'react';
import siteData from '../siteData.js';
import "../styles/MainStyleSheet.css";


const About = () => {

    return (
      <section id="about">
         <div className="row">
            <div className="about_img_cont">
               <img className="about-pic"  src="images/main.jpg" alt="" />
            </div>
            <div className="about_text_container">
               <h2>About Us</h2>
               <p>{siteData.about}</p>
            </div>
            </div>
            <br></br>
            <br></br>
            <div className="row">
            <div className="about_text_container">
               <h2>What are the northern lights?</h2>
               <p>{siteData.about_info}</p>
               <br></br>
               <p><a href={siteData.website} target="_blank" rel='noopener noreferrer'>{siteData.website}</a></p>
            </div>
            <div className="about_img_cont">
               <img className="about-pic"  src="images/about_2.jpg" alt="" />
            </div>

            </div>
      </section>
    );
  }

export default About