import React from 'react';
import MainImg from '../../assets/universal-ebike-kit-1.jpg';
import './LandingImage.scss';

const LandingImage = ()=> {
  return (
      <div className="landing__imgBox">
        <img src={MainImg} alt="Swytch ebike" className="landing__img" /> 
      </div>
  );
}

export default LandingImage;