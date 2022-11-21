import React from 'react';
import parts from '../../assets/images/about_us/parts.jpg'
import person from '../../assets/images/about_us/person.jpg'

const Content = () => {
    return (
        <div id='about' className="hero my-20  ">
  <div className="hero-content  flex-col lg:flex-row">
    <div className='w-1/2 relative'>

    <img src={person} className=" rounded-lg w-4/5 shadow-2xl" alt='' />
    <img src={parts} className=" rounded-lg absolute w-3/5 right-3 top-1/2 border-8 shadow-2xl" alt='' />
    </div>
    <div className='w-1/2'>
      <h1 className='font-bold text-orange-600 py-5'>About Us</h1>
      <h1 className="text-xl font-bold md:text-5xl md:font-bold">We are qualified<br></br> & of experience<br></br> in this field</h1>
      <p className="py-6 text-justify w-full md:w-4/5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      <p className="py-6 text-justify w-full md:w-4/5">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn btn-warning hover:bg-orange-500">Get More Info</button>
    </div>
  </div>
       </div>
    );
};

export default Content;