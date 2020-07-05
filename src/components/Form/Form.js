import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Form.scss';

const Form =()=>{
  const { handleSubmit, register} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form action="" method="POST" onSubmit={handleSubmit(onSubmit)}> 
    <fieldset>
        <legend>Order Details</legend>
        <label for="name">First Name:</label> 
        <input type="text" id="firstName" 
        name="first_name" 
        ref={register({required:true, pattern: /^[A-Za-z]+$/i})} 
        />
        <label for="name">Last Name:</label> 
        <input type="text" 
        id="lastName" 
        name="last_name"
        ref={register({required:true, pattern: /^[A-Za-z]+$/i})} />
        <label for="mail">Email:</label>
        <p className='is-hidden error'></p>
        <input type="email" 
        id="mail" 
        name="user_email" 
        ref={register({required:true})}
        /> 
    </fieldset>
      <fieldset>
        <legend>Payment Info</legend>
        <div id="credit-card" className="credit-card">
          <div>
            <label for="cc-num">Card Number:</label>
        	  <input id="cc-num" name="user_cc-num" type="text" 
            ref={register({required:true})}
            />
          </div>
          <div>
            <label for="cvv">CVV:</label>
            <input id="cvv" name="user_cvv" 
            type="text"
            ref={register({required:true})}
            /> 
          </div>
          <label for="exp-month">Expiration Date:</label>
          <select id="exp-month" name="user_exp-month"
          ref={register({required:true})}>
            <option value="1">1 - January</option>
            <option value="2">2 - February</option>
            <option value="3">3 - March</option>
            <option value="4">4 - April</option>
            <option value="5">5 - May</option>
            <option value="6">6 - June</option>
            <option value="7">7 - July</option>
            <option value="8">8 - August</option>
            <option value="9">9 - September</option>
            <option value="10">10 - October</option>
            <option value="11">11 - November</option>	
            <option value="12">12 - December</option>                
          </select>
          <label for="exp-year">Expiration Year:</label>
          <select id="exp-year" name="user_exp-year"
          ref={register({required:true})}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>  
          </select> 
          <div>
            <label for="cvv">Cardholder Name:</label>
            <input id="cardholder" name="cardholder" 
            type="text"
            ref={register({required:true, pattern: /^[A-Za-z]+$/i})}
            /> 
          </div>	                       
        </div>          
      </fieldset>        
      <Link to={'/paid'}>
      <button type="submit">Pay Now</button>
      </Link>
    </form>
  );
}

export default Form;