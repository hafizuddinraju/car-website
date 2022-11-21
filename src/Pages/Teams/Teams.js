import React, { useEffect, useState } from 'react';

const Teams = () => {
    const [teams, setTeams] = useState([]);
    useEffect(()=>{
        fetch('https://server-car.vercel.app/teams')
        .then(res => res.json())
        .then(data => setTeams(data.data))
    },[])
    return (
        <section className="py-6  text-gray-100">
	<div className="container p-4 mx-auto space-y-16 sm:p-10">
		<div className="space-y-4 text-black text-center">
			<h3 className="text-base text-orange-500 font-bold leading-none sm:text-xl">Team</h3>
			<h3 className="text-2xl font-bold leading-none sm:text-5xl">Meet our team</h3>
			<p className=" text-gray-400">The majority have suffered alteration in some form, by injected humour, or randomised<br/> words which don't look even slightly believable. </p>
		</div>
		<div className="relative flex items-center justify-center w-full text-gray-50">
	<button aria-label="Slide back" type="button" className="absolute left-0 z-30 p-2 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
		<svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
			<path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
		</svg>
	</button>
	<div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
        {
            teams?.map(team => {
                return(
                    <div key={team._id} className="relative flex flex-shrink-0 w-full sm:w-auto">
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={team.picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-black text-center">
            <h2 className="card-title">{team.name}</h2>
            <p>{team.about}</p>
            
        </div>
        </div>
            
		</div>

                )
            })
        }
		
	</div>
	<button aria-label="Slide forward" id="next" className="absolute right-0 z-30 p-2 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
		<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
			<path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
		</svg>
	</button>
        </div>
	</div>
</section>
    );
};

export default Teams;