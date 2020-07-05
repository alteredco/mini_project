import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialIcons.scss';

const FbIcon = (props) => {
  return(
    <div className="social__container">
    <a href="https://www.facebook.com/swytchbike/" className="social__link" alt="facebook link">
    <FontAwesomeIcon 
    icon={faFacebook}
    style={{height:"3em", width: "3em", color:"#171938"}}
     />
    </a>
    </div>
  );
}

export default FbIcon;