import React from 'react';
import Nav from './components/NavTop/NavTop';
import LandingImage from './components/LandingImage/LandingImage';
import RtButton from './components/RtButton/RtButton';
import Headline from './components/Headline/Headline';
import Iframe from './components/Iframe/Iframe';
import MainText from './components/MainText/MainText';
import Accordion from './components/Accordion/Accordion';
import Footer from './components/Footer/Footer';
import Countdown from './components/Countdown/Countdown';
import KitImg from './assets/kit_1.jpg';
import './LandingPage.scss';

function LandingPage() {
  return(
    <div className="landing__container">
    <header className="header--nav__container">
      <Nav />
      </header>
      <main className="main__container">
      <section className = "main--feature__container row">
      <div className="col-1-of-2">
      <LandingImage />
      </div>
      <div className="col-1-of-2">
      <RtButton 
      width="90vw" 
      height="auto" 
      fontSize="42"
       />
        <div className="main--headline__container">
        <Headline />
        <img src={KitImg} alt="swytch conversion kit"/>
        </div>
        </div>
        </section>
        <section className="main--purchase__container">
        <MainText />
        <h2>Order today for 50% off price</h2>
        <h1>£399</h1>
        <Countdown endDate="2020-08-01" />
        </section>
        <section className="main--payment__container" id="scrollTarget">
        <Accordion title=" PAYMENT "
         />
         </section>
         <section className="main--gallery__container row">
           <div className="col-1-of-2">
            <Iframe url="https://www.youtube.com/embed/KEgxcv-NAzY"></Iframe>
           </div>
           <div className="col-1-of-2">
           <Iframe url="https://www.youtube.com/embed/RGCNW2KOtIE"></Iframe>
           </div>
         </section>
         </main>
        <footer>
          <Footer amount="100"/>
        </footer>
        </div>
  );
}

export default LandingPage;