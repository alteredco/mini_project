import React, {useState, useRef } from 'react';
import './Accordion.scss';
import Chevron from  '../Chevron/Chevron';
import Form from '../Form/Form';

const Accordion = (props) => {

  const [active, setActive] = useState("");
  const [ height, setHeight] = useState("0px");
const [rotate, setRotate] = useState("accordion__icon");

  const content = useRef(null);

  function toggleActive() {
    setActive(active === ""? "active": "");
    setHeight(active === "active" ?  "0px": `${content.current.scrollHeight}px`)
    setRotate(active==="active"? "accordion__icon": "accordion__icon rotate")
  }

  return (
    <div className="accordion__container">
      <button className={`accordion__btn ${active}`} onClick={toggleActive}>
        <p className="accordion__title">
          {props.title}
        </p>
        <Chevron 
        className={`${rotate}`}
        width={10}  
        />
      </button>
      <div ref={content} style={{maxHeight: `${height}`}} className="accordion__content">
        <Form />
        </div>
        </div>
  );
}

export default Accordion;