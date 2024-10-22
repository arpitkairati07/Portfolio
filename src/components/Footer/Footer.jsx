import React from 'react'
import './Footer.css'
import footer from '../../assets/footer_logo.svg';
import icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                {/* <img src={footer} alt="" /> */}
                <p>I'm frontend developer, from India.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={icon} alt="" />
                    <input type="email" name="email" placeholder='Enter your mail-id' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
      <hr />
      <div className="footer-boottom">
            <p className="footer-bottom-left">© 2024 Arpit Kairati. All rights are reserved</p> 
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
