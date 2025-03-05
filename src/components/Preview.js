import React from 'react'
import BusinessCard from './BusinessCard';

const Preview = ({Values}) => {
  return <section className='Preview'>
    <h2> Preview Pane : </h2>
    {/* <pre>{JSON.stringify(Values,null,2)}</pre> */}
    <div className='Preview-Wrapper'>
      <BusinessCard Values={Values} />
    </div>
    <div className='Preview-Actions'>
      <button>Save as PDF</button>
      <button>Save as PNG </button>
      <button>Save as JPEG</button>

    </div>
    </section>;
};

export default Preview
