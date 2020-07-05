import React from 'react';
import './Iframe.scss';

const Iframe = (props) => {
  return (
    <div className="iframe__container">
    <iframe 
    width="560" 
    height="315" 
    src={props.url} 
    frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
    title="swytch video"></iframe>
      </div>
  );
}

export default Iframe;