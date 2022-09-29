import React from 'react';

const SingleTab = ({ info: { day, totalClass, totalHours }, i, value, handleChange }) => {

    return (
        <button className='cursor-pointer' type='button' onClick={() => handleChange(i)}>
            <div className={`flex flex-col lg:flex-row justify-center lg:justify-start items-center py-3 px-2 gap-4 rounded-2xl text-main-dark ${value === i && " active_class_tab"}`}>
                <div className={`border-b lg:border-b-0 lg:border-r w-[80px] h-[50px] flex justify-center items-center  border-content `}>
                    <h1 className='text-2xl  font-medium'>{day.slice(0, 3)}</h1>
                </div>
                <div className='text-left'>
                    <h2 className='text-main-dark '> {totalClass} Classes</h2>
                    <p className='text-content '> <span className='hidden lg:inline-block'> Total hours</span> {totalHours} <span className='inline-block lg:hidden'> Hours</span></p>
                </div>
            </div>
        </button>
    )
}
export default SingleTab;