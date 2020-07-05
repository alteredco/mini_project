import React from 'react';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialIcons.scss';

const TwIcon = (props) => {
  return(
    <div className="social__container">
    <a href="https://twitter.com/swytchbike/" className="social__link" alt="twitter link">
    <FontAwesomeIcon 
    icon={faTwitter}
    style={{height:"3em", width: "3em", color:"#171938"}}
     />
    </a>
    </div>
  );
}

export default TwIcon;