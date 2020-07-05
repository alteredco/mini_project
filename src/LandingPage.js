import React from 'react';
import Nav from './components/NavTop/NavTop';
import LandingImage from './components/LandingImage/LandingImage';
import RtButton from './components/RtButton/RtButton';
import Footer from './components/Footer/Footer';
import Accordion from './components/Accordion/Accordion';
import {faCheckCircle} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Headline from './components/Headline/Headline';

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
        <table>
          <tr>
            <td>
            <FontAwesomeIcon icon={faCheckCircle}/> Rim AND Disc brake compatible</td>
            <td>
            <FontAwesomeIcon icon={faCheckCircle}/> 15 or 20 Mph Top Speed</td>
            <td>
            <FontAwesomeIcon icon={faCheckCircle}/> Up to 50km Range</td>
          </tr>
        </table>
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