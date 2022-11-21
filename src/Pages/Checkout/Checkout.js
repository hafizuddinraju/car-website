import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthDataContext } from '../../UseContext/AuthContext';

const Checkout = () => {
    const {_id, data} = useLoaderData();
    const {user} = useContext(AuthDataContext)
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;
        // console.log(name, email, phone , message);

        const order = {
            service_id: data._id,
            serviceName:data.title,
            price:data.price,
            customer: name,
            email,
            phone,
            message,
        }

        fetch('https://server-car.vercel.app/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
            
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.success){
                toast.success(data.message)
                form.reset();
            }
        })
        .catch(error =>{
            toast.error(error.error)
        })


     

    }
    
    return (
        <div className='py-20'>
            <h1 className='text-center text-1xl md:text-3xl font-bold pb-10'>Service Name : {data.title}</h1>
            <form onSubmit={handleSubmit}>  
            <div className='grid grid-cols-1 lg: grid-cols-2 gap-3  w-3/6 mx-auto'>
            <input type="text" name='firstName' placeholder="First Name" className="input input-bordered w-full " />
            <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered w-full " />
            <input type="number" name='phone' placeholder="+0150000000" className="input input-bordered w-full " />
            <input type="email" defaultValue={user?.email} readOnly name='email' placeholder="Enter your email" className="input input-bordered w-full " />
            </div>
            <div className='w-3/6 mx-auto py-3'>
            <textarea className="textarea textarea-bordered w-full" name='message' placeholder="Type message....."></textarea>
            </div>
            <div className='text-center'>
                <button className='btn bg-orange-600 border-none'>Submit</button>
            </div>
            </form>
        </div>
    );
};

export default Checkout;