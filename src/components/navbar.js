import React, { useState } from 'react';
import '../styles/navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../assets/img/logo1.png';
import Menu from '../assets/img/menu.svg';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    console.log('Mobile Menu Toggled:', isMobileMenuOpen); 
  };

  return (
    <div>
      <nav className='nav-laptop'>
        <ul>
          <li><ScrollLink to="about-section" smooth={true} duration={500}>ABOUT US</ScrollLink></li>
          <li><ScrollLink to="news-section" smooth={true} duration={500}>SUPPORT</ScrollLink></li>
          <li><ScrollLink to="contact-section" smooth={true} duration={500}>CONTACT</ScrollLink></li>
        </ul>
        <a href="index.html"><img src={Logo} alt="" /></a>
      </nav>
      <nav className='nav-mobile' onClick={toggleMobileMenu}>
        <img src={Menu} alt="" />
      </nav>
      {isMobileMenuOpen && (
        <div className='nav-mobile-menu'>
          <ul>
            <li onClick={toggleMobileMenu}>X</li>
            <li><ScrollLink to="about-section" smooth={true} duration={500}>ABOUT US</ScrollLink></li>
            <li><ScrollLink to="news-section" smooth={true} duration={500}>SUPPORT</ScrollLink></li>
            <li><ScrollLink to="contact-section" smooth={true} duration={500}>CONTACT</ScrollLink></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
