import React from 'react';
import './Footer.scss';

const Footer = (props) => {
  return (
    <footer className="footer--text__container">
      <p className="footer--text">Only 
      <strong> {props.amount}</strong> left at 50% off!</p>
    </footer>
  )
}

export default Footer;