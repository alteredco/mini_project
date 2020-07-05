import React from 'react';
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Chevron.scss';

const Chevron = (props) => {
  return (
    <div className = "icon__container">
    <FontAwesomeIcon 
    icon={faChevronRight}
    className={props.className} 
    height={props.height} 
    width={props.width} 
    />
    </div>
  );
}

export default Chevron;