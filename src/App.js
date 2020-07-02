import React from 'react';
import Logo from './assets/blue_logo_pad.png';
import './App.scss';

function App() {
  return (
    <div className="App">
    <nav>
      <img src={Logo} alt="Swytch logo"/>
    </nav>
      <header className="App-header">
      <main>
        <h1>I am the landing page.</h1>
      </main>
      </header>
    </div>
  );
}

export default App;
