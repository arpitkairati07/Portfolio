import React from 'react';
import './Hero.css';
// import myPhoto from './../assets/my_photo.jpg'; // Import your profile image
import top from '././../assets/top.png';
import AnchorLink from 'react-anchor-link-smooth-scroll'; 

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={top} alt="Top Image" className='circular-image' /> {/* Use imported variable */}
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
