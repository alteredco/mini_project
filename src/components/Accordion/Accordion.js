import React from 'react';
import './Accordion.scss';
import Chevron from  '../Chevron/Chevron';
import Form from '../Form/Form';

const Accordion = (props) => {
  return (
    <div className="accordion__container">
      <button className="accordion__Btn">
        <p className="accordion__title">
          {props.title}
        </p>
        <Chevron width={10} fill={"#fefefe"} />
      </button>
      <div className="accordion__content">
        <Form />
        </div>
        </div>
  );
}

export default Accordion;