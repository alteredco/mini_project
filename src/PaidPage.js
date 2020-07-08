import React from 'react';
import './PaidPage.scss';
import Nav from './components/NavTop/NavTop';
import FbIcon from './components/SocialIcons/FbIcon';
import TwIcon from './components/SocialIcons/TwIcon';
import IgIcon from './components/SocialIcons/IgIcon';

function PaidPage() {
  return(
    <div className="paid__container">
    <header className="header--paid__hero">
    <Nav />
    <div className="header--centered__textbox">
    <h1 className="header--heading__primary">
    <span className="header--heading__primary-main">Thank you </span>
    <span className="header--heading__primary-sub">for your purchase!</span>
    </h1>
    </div>
    </header>
    <section className="social__container">
    <FbIcon 
    />
    <TwIcon 
    />
    <IgIcon 
    />
    </section>
    </div>
  );
}

export default PaidPage;