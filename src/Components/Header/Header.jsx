import React from 'react';
import '../../css/reset.css';
import '../../css/style.css';
import logo from '../../assets/image/logo.svg'
import facebook from '../../assets/image/i-facebook.svg'
import instagram from '../../assets/image/i-instagram.svg'
import twitter from '../../assets/image/i-twitter.svg'
import youtube from '../../assets/image/i-youtube.svg'

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-items">
          <div>
            <li><img className="header__logo" src={logo} alt=""/></li>
          </div>
          <div className="header__nav-icons icons">
            <li><img className="icons" src={facebook} alt=""/></li>
            <li><img className="icons" src={instagram} alt=""/></li>
            <li><img className="icons" src={twitter} alt=""/></li>
            <li><img className="icons" src={youtube} alt=""/></li>
          </div>
          
        </ul>
      </nav>
    </header>
  )
}

export default Header
