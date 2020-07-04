import React from 'react';
import './PaidPage.scss';
import Nav from './components/NavTop/NavTop';

function PaidPage() {
  return(
    <div className="paid__container">
    <header className="header--paid__hero">
    <Nav />
      Thank you for your purchase.
    </header>
    </div>
  );
}

export default PaidPage;