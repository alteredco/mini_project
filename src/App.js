import React from 'react';
import Nav from './components/NavTop/NavTop';
import LandingImage from './components/LandingImage/LandingImage';
import RtButton from './components/RtButton/RtButton';
import './App.scss';
import './index.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <LandingImage />
      <a href="">
      <RtButton width="575" height="85" fontSize="42" />
      </a>
      <header className="landing__header">
        <h1>Universal eBike Conversion Kit</h1>
        <table>
          <tr>
            <td>• Rim AND Disc brake compatible</td>
            <td>• 15 or 20 Mph Top Speed</td>
            <td>• Up to 50km Range</td>
          </tr>
        </table>
        <h2>Order today for 50% off price</h2>
        <h1>£399</h1>
      </header>
    </div>
  );
}

export default App;
