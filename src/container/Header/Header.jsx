import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Lorem" />
      <h1 className="app__header-h1">CineCarnival</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Lorem</p>
      <button type="button" className="custom__button">World of CineCarnival</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
