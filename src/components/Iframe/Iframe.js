import React from 'react';
import './Iframe.scss';

const Iframe = (props) => {
  return (
    <Iframe url = {props.url}
      className="iframe__embed"
      display="initial"
      position="relative"
      allowFullScreen />
  );
}

export default Iframe;