import React from 'react';
import './Hero.css';
// import profile_img from './../assets/profile_img.svg'; // Uncomment this and replace with the correct image path if needed
import AnchorLink from 'react-anchor-link-smooth-scroll'; 

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src="src/assets/2024-10-16.png" alt="Profile" className='circular-image'/>
      <h1>I'm Arpit Kairati</h1>
      <h2>Software Developer</h2>
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
