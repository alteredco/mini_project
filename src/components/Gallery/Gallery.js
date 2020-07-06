import React from 'react';
import Iframe from '../Iframe/Iframe';
import './Gallery.scss';

const Gallery = ()=>{
  return(
<div className="gallery__container">
         <h2>Swytch -Your bike, Electric. </h2>
         <div className="row">
           <div className="col-1-of-2">
            <Iframe url="https://www.youtube.com/embed/KEgxcv-NAzY"></Iframe>
           </div>
           <div className="col-1-of-2">
           <Iframe url="https://www.youtube.com/embed/RGCNW2KOtIE"></Iframe>
           </div>
           </div>
         </div>
  );
}

export default Gallery;