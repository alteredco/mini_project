import React from  'react';
import {faCheckCircle} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './CircleCheck.scss';

const CircleCheck = () => {
  return (
    <div className="icon__container">
    <FontAwesomeIcon icon={faCheckCircle}/>
    </div>
  );
}

export default CircleCheck;