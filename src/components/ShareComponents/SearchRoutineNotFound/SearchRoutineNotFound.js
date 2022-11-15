import React from 'react';
import { NavLink } from 'react-router-dom';

const SearchRoutineNotFound = () => {
    return (
        <div>
            <div>
                <div className="flex flex-col justify-center items-center ">
                    <img src="./images/duck-searching.gif" alt="" />

                    <span className="mt-4 font-medium">Routine not found!</span>
                    <ul className="list-disc mt-4 text-gray-400">
                        <li>Send a request for routine <NavLink className='text-dark-purple underline   underline-dark-pink' to='/requestForRoutine'>Make Request</NavLink></li>
                        <li>Create your own routine. <NavLink className='text-dark-purple underline  underline-dark-pink' to='/createRoutine'>Create Routine</NavLink></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SearchRoutineNotFound;