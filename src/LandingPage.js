import React from 'react';
import Nav from './components/NavTop/NavTop';
import LandingImage from './components/LandingImage/LandingImage';
import RtButton from './components/RtButton/RtButton';
import Headline from './components/Headline/Headline';
import Iframe from './components/Iframe/Iframe';
import MainText from './components/MainText/MainText';
import Accordion from './components/Accordion/Accordion';
import Footer from './components/Footer/Footer';

function LandingPage() {
  return(
    <div className="landing__container">
    <header className="header--nav__container">
      <Nav />
      </header>
      <main className="main__container row">
      <div className="col-1-of-2">
      <LandingImage />
      </div>
      <div className="col-1-of-2">
      <div>
      <RtButton 
      width="90vw" 
      height="auto" 
      fontSize="42"
       />
      </div>
        <div className="item3">
        <Headline />
        <Iframe url="https://www.youtube.com/embed/KEgxcv-NAzY" /> 
        <MainText />
        </div>
        <div className="item4">
        <h2>Order today for 50% off price</h2>
        <h1>£399</h1>
        </div>
        <div className="item5">
        <Accordion title=" PAYMENT " />
         </div>
         </div>
         </main>
        <footer>
          <Footer amount="100"/>
        </footer>
        </div>
  );
}

export default LandingPage;