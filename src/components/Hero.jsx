import React from 'react';
import './Hero.css';
import my_photo from '././../assets/my_photo.png';
import {TypeAnimation } from "react-type-animation"
import AnchorLink from 'react-anchor-link-smooth-scroll'; 

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={my_photo} alt="Top Image" className='circular-image' />
      <h1 className="text-white text-4xl sm:text-4xl lg:text-6xl font-extrabold">
          <span className="primary-color py-4">
            I am a 
            </span>
              <br />
              <TypeAnimation 
              sequence={["Programmer" ,1000 ,"Web Developer",1000 , "MERN Stack Developer" ,1000 ,"Aspiring SDE" ,1000 , "ML Enthusiast" , 1000, "CSE(AIML)'26 Student" , 1000]} wrapper="span" speed={50} repeat={Infinity}/>
        </h1>
      <p>A versatile software developer skilled in React JS, Node JS, Python, and Java with a passion for building dynamic and efficient applications.</p>
      <div className="hero-section">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href="#contact">
            Connect with Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;
