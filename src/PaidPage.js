import React from 'react';
import './PaidPage.scss';
import Nav from './components/NavTop/NavTop';

function PaidPage() {
  return(
    <div className="paid__container">
    <header className="header--paid__hero">
    <Nav />
    <h1 className="header--heading__primary">
    <span className="header--heading__primary-main">Thank you </span>
    <span className="header--heading__primary-sub">for your purchase!</span>
    </h1>
    </header>
    </div>
  );
}

export default PaidPage;