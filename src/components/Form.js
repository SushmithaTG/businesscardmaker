import React from 'react'
import FormElement from './FormElement';

const Form = ({onChange,Values}) => {
  return <section className='Form'>
    <h2>Enter Your Details : </h2>
    <form onChange={onChange}>
      {/* creating any part js inside html {} */}
      {/* ["Name","Destination","Phone","Email"]  Instead of this i created Object.keys(Values) as follows that performs as same As one point of place where all things are
      managed by App.js  */}
      {Object.keys(Values).map((field,key)=>(
        <FormElement 
        ID={field} 
        Label={field} 
        Values={Values[field]} 
        key={key} 
        />
      ))}
       {/* INSTEAD OF CREATION THESE 3 LINE I CREATED ABOVE LINE INTO ARRAY TO MAKE IT SIMPLE */}

        {/* <FormElement ID="Name" Label="Name" />
        <FormElement ID="Destination" Label="Destination" />
        <FormElement ID="Phone" Label="Phone" />
         */}
         
    </form>
    </section>;
    
    };

export default Form
