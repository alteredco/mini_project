import React from 'react';
import Logo from '../../assets/blue_logo_pad.png';
import './NavTop.scss';

const Nav = () => {
  return (
    <nav>
      <a href="https://www.swytchbike.com/">
      <img src={Logo} alt="Swytch logo" className="header--nav__logo" />
      </a>
      <p className="header--nav__unit">
        GB  
      </p>
    </nav>
  )
}

export default Nav;