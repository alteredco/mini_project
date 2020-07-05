import React from 'react';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialIcons.scss';

const IgIcon = (props) => {
  return(
    <div className="social__container">
    <a href="https://www.instagram.com/swytchbike/?hl=en" className="social__link" alt="instagram link">
    <FontAwesomeIcon 
    icon={faInstagram}
    style={{height:"3em", width: "3em", color:"#171938"}}
     />
    </a>
    </div>
  );
}

export default IgIcon;