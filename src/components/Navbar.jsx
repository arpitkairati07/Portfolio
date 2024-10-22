import React, { useState, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'; 
import './Navbar.css';
import logo from './../assets/arpit_name.svg';
import underline from './../assets/nav_underline.svg';
import menu_open from './../assets/menu_open.svg'; 
import menu_close from './../assets/menu_close.svg'; 

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.classList.add('open'); // Apply the 'open' class
  };
  
  const closeMenu = () => {
    menuRef.current.classList.remove('open'); // Remove the 'open' class
  };

  const NavLink = ({ section, label }) => (
    <AnchorLink 
      className='anchor-link' 
      offset={50} 
      href={`#${section}`} 
      onClick={() => { setMenu(section); closeMenu(); }}
    >
      <p>{label}</p>
      {menu === section ? <img src={underline} alt={`${label} underline`} /> : null}
    </AnchorLink>
  );

  return (
    <div className='navbar'>
      <img src={logo} alt="Arpit Kairati Logo" className='logo_img' />
      <img 
        src={menu_open} 
        alt="Open navigation menu" 
        className='nav-mob-open' 
        onClick={openMenu}
      />
      <ul ref={menuRef} className='nav-menu'>
        <img 
          src={menu_close} 
          alt="Close navigation menu" 
          className='nav-mob-close' 
          onClick={closeMenu}
        />
        <li>
          <NavLink section="home" label="Home" />
        </li>
        <li>
          <NavLink section="about" label="About Me" />
        </li>
        <li>
          <NavLink section="services" label="Services" />
        </li>
        <li>
          <NavLink section="work" label="Portfolio" />
        </li>
        <li>
          <NavLink section="contact" label="Contact" />
        </li>
      </ul>
      <div className='nav-connect'>
        <AnchorLink className='anchor-link' offset={50} href="#contact">
          Connect with Me
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
