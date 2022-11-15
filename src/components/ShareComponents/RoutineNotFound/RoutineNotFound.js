import React from 'react';
import { NavLink } from 'react-router-dom';

const RoutineNotFound = ({ title }) => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center custom_height">
                <img src={process.env.PUBLIC_URL + "/images/duck-searching.gif"} alt="not found" />

                <span className="mt-4 text-center text-sm font-medium">{
                    title || "You don't have any routine saved to show!"
                }
                </span>
                <ul className="list-disc px-4 text-sm sm:text-sm mt-2  text-gray-400">
                    <li>Search routine and save it. <NavLink className='text-dark-purple  underline   underline-dark-pink' to='/searchRoutine'>Find here</NavLink></li>
                    <li>Create your own routine. <NavLink className='text-dark-purple underline   underline-dark-pink' to='/createRoutine'>Create routine</NavLink></li>
                    <li>Send request for routine. <NavLink className='text-dark-purple  underline   underline-dark-pink' to='/requestForRoutine'>Make Request</NavLink></li>

                </ul>
            </div>
        </div>
    );
};

export default RoutineNotFound;