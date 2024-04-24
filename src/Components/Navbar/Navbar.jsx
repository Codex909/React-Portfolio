import React, { useState, useRef } from 'react';
import { Link as AnchorLink, animateScroll as scroll } from 'react-scroll'; // Import AnchorLink from react-scroll
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import logo from '../../assets/logo.svg';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  // Close the menu after selecting an option
  const handleMenuSelection = (menuItem) => {
    setMenu(menuItem);
    closeMenu(); // Close the menu after selecting an option
  }

  return (
    <div className='navbar'>
      <img src={logo} alt='no img' className='logo' />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li>
          <AnchorLink className='anchor-link' to='home' smooth onClick={() => handleMenuSelection('home')}>Home</AnchorLink>
          {menu === 'home' ? <img src={underline} alt='not found' /> : null}
        </li>
        <li>
          <AnchorLink className='anchor-link' to='about' smooth onClick={() => handleMenuSelection('about')}>About Me</AnchorLink>
          {menu === 'about' ? <img src={underline} alt='not found' /> : null}
        </li>
        <li>
          <AnchorLink className='anchor-link' to='services' smooth onClick={() => handleMenuSelection('services')}>Services</AnchorLink>
          {menu === 'services' ? <img src={underline} alt='not found' /> : null}
        </li>
        <li>
          <AnchorLink className='anchor-link' to='work' smooth onClick={() => handleMenuSelection('work')}>Portfolio</AnchorLink>
          {menu === 'work' ? <img src={underline} alt='not found' /> : null}
        </li>
        <li>
          <AnchorLink className='anchor-link' to='contact' smooth onClick={() => handleMenuSelection('contact')}>Contact</AnchorLink>
          {menu === 'contact' ? <img src={underline} alt='not found' /> : null}
        </li>
      </ul>
      <div>
        <AnchorLink to="contact" smooth className="nav-connect">Connect with me</AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;