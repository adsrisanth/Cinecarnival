import React from 'react';
import {GiCineCarnival} from 'react-icons/gi';
import { MdOutlineCineCarnival } from 'react-icons/md';

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.klcc} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#home">About</a></li>
        <li className="p__opensans"><a href="#home">Gallery</a></li>
        <li className="p__opensans"><a href="#home">Team</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Register/Login</a>
        <div/>
        <a href="#login" className="p__opensans">Payment</a>
      </div>
  </nav>
);

export default Navbar;
