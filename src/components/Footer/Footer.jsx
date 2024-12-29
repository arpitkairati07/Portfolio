import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                {/* <img src={footer} alt="" /> */}
                <p>I'm a frontend developer, from India.</p>
            </div>
        </div>
      <hr />
      <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Arpit Kairati. All rights are reserved</p> 
        <div className="footer-bottom-right">
            <p>Terms of Service</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
