import React, { useState } from 'react';
import './Navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => {
  return(
    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#whatAI">What is GPT3</a></p>
      <p><a href="#possibility">Open AI</a></p>
      <p><a href="#features">Case Studies</a></p>
      <p><a href="#blog">Library</a></p>
    </>
  )
}

const Navbar = () => {
  const [ toggleMenu, setToggleMenu ] = useState(false);
  return (
    <div className='ai__navbar'>
      <div className="ai__navbar-links">
        <div className="ai__navbar-links_logo">
          <img src={logo} alt='Ai Gen Logo' />
        </div>
        <div className="ai__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="ai__navbar_sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className="ai__navbar_menu">
        { toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        { toggleMenu &&
        <div className="ai__navbar_menu-container scale-in-center">
          <div className="ai__navbar-menu-links">
            <Menu />
            <div className="ai__navbar-menu-container-links-sign">
              <p>Sign in</p>
              <button type='button' className='ai__button-cta'>Sign up</button>
            </div>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default Navbar;
