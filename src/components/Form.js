import React from 'react'
import FormElement from './FormElement';

const Form = () => {
  return <section className='Form'>
    <h2>Enter Your Details : </h2>
    <form>
      {/* creating any part js inside html {} */}
      {["Name","Destination","Phone","Email"].map((field,key)=>(
        <FormElement ID={field} Label={field} key={key} />
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
