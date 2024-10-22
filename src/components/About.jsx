import React from 'react';
import './About.css';
import theme from '../assets/theme_pattern.svg'; 

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme} alt="Profile illustration" /> 
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src="src\assets\still-life-graphic-design-office.jpg" alt="Profile Photo" className='photo'/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I'm a dedicated software developer with expertise across multiple programming languages and frameworks, including React, Node.js, Python, Java, and C++. My diverse skill set allows me to tackle a wide range of challenges, from front-end development to back-end programming and algorithmic problem-solving. I enjoy learning new technologies and applying them to create innovative solutions.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>REACT JS</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>Java</p><hr style={{width:"50%"}} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        {/* <div className="about-achievement">
          <h1></h1>
          <p></p>
        </div>  We can use for adding your achievements with no. of years*/}
        <hr />
      </div>
    </div>
  );
}

export default About;
