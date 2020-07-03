import React from 'react';
import Nav from './components/NavTop/NavTop';
import LandingImage from './components/LandingImage/LandingImage';
import RtButton from './components/RtButton/RtButton';
import LftButton from './components/LftButton/LftButton';
import './App.scss';
import './index.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <div  className="landing__wrapper">
      <LandingImage />
      <RtButton width="90vw" height="auto" fontSize="42" />
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
        <LftButton 
        width="90vw" 
        height="auto" 
        fontSize="1.5em"
        amount = "100"
         />
         </div>
    </div>
  );
}

export default App;
