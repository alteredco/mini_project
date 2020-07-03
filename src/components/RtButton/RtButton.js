import React from 'react';
import './RtButton.scss';

const RtButton = (props) => {
  return (
    <div className="rtBtnWrapper">
     <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 622 100"
      className="rtBtn"
    >
      <path
        fill="#FFBD37"
        fillRule="evenodd"
        d="M49 0h573v100H49C21.938 100 0 77.614 0 50S21.938 0 49 0z"
        clipRule="evenodd"
      ></path>
       <text
          x="40%" 
          y="50%"
          fontSize={props.fontSize}
          fill="#000"
          textAnchor="middle"
          dominantBaseline= "middle"
        >
          PREORDER
        </text>
    </svg>
    </div>
  );
}

export default RtButton;