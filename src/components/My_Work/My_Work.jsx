import React from 'react'
import './My_Work.css'
import theme from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data.js'; 
import arrow from '../../assets/arrow_icon.svg';

const My_Work = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme} alt="Theme" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer">
              <img src={work.w_img} alt="Project Thumbnail" />
            </a>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  )
}

export default My_Work;
