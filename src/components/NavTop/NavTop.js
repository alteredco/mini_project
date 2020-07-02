import React from 'react';
import Logo from '../../assets/blue_logo_pad.png';
import './NavTop.scss';

const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="Swytch logo" className="logo" />
    </nav>
  )
}

export default Nav;