import React, { useEffect, useState } from 'react';
import Service from './Service/Service';


const Services = () => {
    const [servics, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://server-car.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data.data))

    },[])
    return (
        <section id='services'  className="py-6 sm:py-12  text-gray-100">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-xl text-orange-600 font-bold">Service</h2>
			<h2 className="text-5xl text-black font-bold">Our Service Area</h2>
			<p className="font-serif text-sm text-gray-500">The majority have suffered alteration in some form, by injected humour, or randomised<br/> words which don't look even slightly believable. </p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {
                servics?.map(service => <Service 
                    key={service._id}
                    service={service}
                    ></Service>)
            }
			
			
		</div>
        <div className='text-center'>
        <button className="btn btn-outline btn-warning">More Services</button>
        </div>
	</div>
</section>
    );
};

export default Services;