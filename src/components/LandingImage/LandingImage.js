import React from 'react';
import MainImg from '../../assets/Handlebar_GIF_3.gif';
import './LandingImage.scss';

const LandingImage = ()=> {
  return (
      <div className="section--main__imgBox">
        <img src={MainImg} alt="Swytch ebike" className="section--main__img" /> 
      </div>
  );
}

export default LandingImage;