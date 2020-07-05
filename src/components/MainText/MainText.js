import React from 'react';
import CircleCheck from '../CircleCheck/CircleCheck';
import './MainText.scss';

const MainText = ()=> {
  return (
    <section className="mainText__container">
              <table>
          <tr>
            <td>
            <CircleCheck /> Rim AND Disc brake compatible</td>
            <td>
            <CircleCheck/> 15 or 20 Mph Top Speed</td>
            <td>
            <CircleCheck/> Up to 50km Range</td>
          </tr>
        </table>
        <h2>What’s in the box</h2>
        <p>
The Swytch kit includes absolutely everything you need to convert your bike. It includes a complete motor wheel in any size, built to order. The battery is included inside the power pack, which also contains the controller and electronics. You also get the handlebar connector, the pedal sensor, battery charger, and an instructions manual. That’s all you need, because the Swytch kit is just that simple!</p>
    </section>
  );
}

export default MainText;