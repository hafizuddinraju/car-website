import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthDataContext } from '../../UseContext/AuthContext';
import Order from '../Order/Order';

const Orders = () => {
 const [checkout, setCheckout] = useState([])
 const {user, logout} = useContext(AuthDataContext);
 const [refresh, setRefresh] = useState(false)
 
 useEffect(()=>{
    fetch('https://server-car.vercel.app/orders',{
        headers:{
            authorization: `Bearer ${localStorage.getItem('car-token')}`
        }
    })
    .then(res => {
        if(res.status === 403){
            return logout();
        }
        return res.json()
    })
    .then(data => {
        console.log(data);
        setCheckout(data?.data)
    })
 },[refresh, logout])
 const userData = checkout.filter(data => data.email === user.email)
 console.log(userData);
 const handleDetete =(id) =>{
    const proceed = window.confirm('Are you Sure ?')
    if(proceed){
        fetch(`https://server-car.vercel.app/orders/${id}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            setRefresh(!refresh)
            toast.success(data.message, {autoClose:500})
        }
    })
    .catch(error =>{
        toast.error(error, {autoClose:500});
    })

    }
    
    

}
const handleUpdate = (id) =>{
    fetch(`https://server-car.vercel.app/orders/${id}`,{
        method:'PATCH',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify({status:'Approved'})
    })
    .then(res => res.json())
    .then(data =>{
        if(data.success){
            toast.success(data.message,{autoClose:500})
            setRefresh(!refresh)
        }
    })
    .catch(error =>{
        toast.error(error,{autoClose:500})
    })

}
    return (
        
<div className="container mx-auto px-4 sm:px-8 max-w-3xl">
    <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr className='font-semibold'>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800   text-left text-sm uppercase ">
                                Name
                            </th>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase ">
                                Price
                            </th>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase ">
                                Email
                            </th>
                            <th scope="col" className="px-5 py-3  bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase ">
                                status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData?.map(check => <Order 
                                key={check._id}
                                check={check}
                                handleUpdate={handleUpdate}
                                handleDetete={handleDetete}
                                ></Order>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

    );
};

export default Orders;