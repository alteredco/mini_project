import React from 'react';
import MainImg from '../../assets/universal-ebike-kit-1.jpg';
import './LandingImage.scss';
import Headline from '../Headline/Headline';

const LandingImage = ()=> {
  return (
      <div className="section--main__imgBox">
        <img src={MainImg} alt="Swytch ebike" className="section--main__img" /> 
      </div>
  );
}

export default LandingImage;