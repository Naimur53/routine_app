import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../../../ManageState/DataSlice/dataSlice';

const Message = ({ incomingData }) => {
    const { user: incomingUser, message, img, routineId, date, } = incomingData;
    const { user } = useSelector(allData)

    return (
        <div className={user.email === incomingUser.email ? "text-right " : 'text-left'}>
            <div className={`shadow rounded-2xl bg-white inline-block  my-2   ${user.email === incomingUser.email ? 'mr-2 md:mr-5' : 'ml- md:ml-5'}`}>
                <div className="flex flex-col">
                    <span className='break-all max-w-lg text-left p-2 px-3'>

                        {
                            img && <div className='inline-block'>
                                <img src={img} alt='img'></img>
                                <br />

                            </div>
                        }
                        <span>{message}</span>

                        <small className='text-right block text-gray-400'>{new Date(date).toLocaleDateString()}</small>
                    </span>

                </div>
            </div>
            <div dir='ltr' className={user.email === incomingUser.email ? "flex justify-end" : 'block'}>
                <Avatar sx={{ height: 30, width: 30 }} alt={incomingUser.displayName} src={incomingUser.photoURL} />
            </div>
        </div>
    );
};

export default Message;