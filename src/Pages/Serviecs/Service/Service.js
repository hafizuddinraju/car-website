import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {img, _id, title, price} = service
    return (
        <article className="flex flex-col border-2 rounded-md">
        <div rel="noopener noreferrer"  aria-label="Te nulla oportere reprimique his dolorum">
            <img alt="" className="object-cover rounded-md w-full h-52 bg-gray-500" src={img} />
        </div>
        <div className="flex flex-col flex-1 p-6">
            
            <div rel="noopener noreferrer"  className="text-2xl font-bold tracking-wider  text-gray-800">{title}</div>
            
            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xl font-semibold text-orange-600">
                <span>Price: ${price}</span>
                <Link to={`/services/${_id}`}>
                <span><AiOutlineArrowRight></AiOutlineArrowRight></span>
                </Link>
            </div>
        </div>
    </article>
    );
};

export default Service;