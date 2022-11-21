import React from 'react';
import { SlCalender } from 'react-icons/sl';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';

const Calander = () => {
    return (
        <section className="px-6 py-20 my-6 bg-gray-900 rounded-lg text-gray-100">
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">
		<div className="flex p-4  rounded-lg   text-gray-100">
			<div className="flex justify-center text-3xl  align-middle rounded-lg sm:p-4 ">
				<SlCalender></SlCalender>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-sm font-semibold leading-none">We are open monday-friday</p>
				<p className="capitalize text-xl font-bold">7:00 am - 9:00 pm</p>
			</div>
		</div>
		<div className="flex p-4  rounded-lg   text-gray-100">
			<div className="flex justify-center text-3xl p-2 align-middle rounded-lg sm:p-4">
				<FaPhoneAlt></FaPhoneAlt>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-sm font-medium leading-none">Have a question?</p>
				<p className="capitalize text-2xl font-bold">+2546 251 2658</p>
			</div>
		</div>
		<div className="flex p-4  rounded-lg   text-gray-100">
			<div className="flex justify-center text-3xl p-2 align-middle rounded-lg sm:p-4">
				<MdLocationPin></MdLocationPin>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-sm font-semibold leading-none">Need a repair? our address</p>
				<p className="capitalize text-2xl font-bold">Liza Street, New York</p>
			</div>
		</div>
		
	</div>
</section>
    );
};

export default Calander;