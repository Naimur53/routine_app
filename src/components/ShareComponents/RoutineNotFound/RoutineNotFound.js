import React from 'react';
import { NavLink } from 'react-router-dom';

const RoutineNotFound = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center custom_height">
                <img src="./images/duck-searching.gif" alt="" />

                <span className="mt-4 font-medium">You don't have any routine saved  to show</span>
                <ul className="list-disc mt-4 text-gray-400">
                    <li>Search routine and save it. <NavLink className='text-dark-purple underline   underline-dark-pink' to='/searchRoutine'>Find here</NavLink></li>
                    <li>Create your own routine. <NavLink className='text-dark-purple underline   underline-dark-pink' to='/createRoutine'>Create routine</NavLink></li>
                    <li>Send a request for creating routine <NavLink className='text-dark-purple underline   underline-dark-pink' to='/requestForRoutine'>Make Request</NavLink></li>

                </ul>
            </div>
        </div>
    );
};

export default RoutineNotFound;