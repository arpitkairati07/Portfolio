import React from 'react';
import './About.css';
import theme from '../assets/theme_pattern.svg'; 
import about from '././../assets/still-life-graphic-design-office.jpg';
import bootstrap from "./Images/bootstrap.png";
import express from "./Images/express.png"
import github from "./Images/github.png";

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme} alt="Profile illustration" /> 
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about} alt="Profile Photo" className='photo'/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I'm a dedicated software developer with expertise across multiple programming languages and frameworks, including React, Node.js, Python, Java, and C++. My diverse skill set allows me to tackle a wide range of challenges, from front-end development to back-end programming and algorithmic problem-solving. I enjoy learning new technologies and applying them to create innovative solutions.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center p-6 sliding-animation">
        <a href="https://getbootstrap.com" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="50" height="50"/>
        </a>
        <a href="https://firebase.google.com/" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="50" height="50"/>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/>
        </a>
        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50"/>
        </a>
        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50"/>
        </a>
        <a href="https://www.java.com" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="50" height="50"/>
        </a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="50" height="50"/>
        </a>
        <a href="https://nodejs.org" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="50" height="50"/>
        </a>
        <a href="https://www.python.org" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="50" height="50"/>
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="50" height="50"/>
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="50" height="50"/>
        </a>
        <a href="https://getbootstrap.com" target="_blank" rel="noreferrer" className="p-2">
          <img src={bootstrap} alt="bootstrap" width="50" height="50"/>
        </a>
        <a href="https://www.postman.com/" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="50" height="50"/>
        </a>
        <a href="https://expressjs.com/" target="_blank" rel="noreferrer" className="p-2">
          <img src={express} alt="express" width="50" height="50"/>
        </a>
        <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="50" height="50"/>
        </a>
        <a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="50" height="50"/>
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2">
          <img src={github} alt="github" width="50" height="50"/>
        </a>
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
