import React from "react";
import './LftButton.scss';

const LftButton=(props)=> {
  return (
    <div className="sideButton">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 333 55"
    >
      <path
        fill="#8192BA"
        fillRule="evenodd"
        d="M306.137 54.823H-8V0h314.137C320.973 0 333 12.273 333 27.412s-12.027 27.411-26.863 27.411z"
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
          Only {props.amount} left at this price!
        </text>
    </svg>
    </div>
  );
}

export default LftButton;
