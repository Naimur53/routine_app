import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import ReactScrollableFeed from 'react-scrollable-feed'
import { allData } from '../../../../ManageState/DataSlice/dataSlice';
import Message from '../Message/Message';

const ChatBox = () => {
    const { messages, allRoutineData, selectIndex, user, getMessageLoading } = useSelector(allData)
    console.log({ messages })
    const filterMessages = messages.filter(single => single.routineId === allRoutineData[selectIndex]._id)
    console.log(filterMessages)
    return (
        <Box className=' pb-2  w-full' sx={{ height: '85%', flexGrow: '1' }}>
            {/* <RightBar info={{ name: client?.displayName, photo: client?.photoURL }}></RightBar> */}
            <div style={{ height: '100%' }} className=' overflow-hidden'>
                {
                    !filterMessages.length && getMessageLoading ? <div className='h-full flex justify-center items-center'>
                        <CircularProgress></CircularProgress>
                    </div>
                        :
                        <ReactScrollableFeed>
                            {
                                filterMessages?.map((single, i) => <Message key={i} incomingData={single}></Message>)
                            }
                        </ReactScrollableFeed>
                }
            </div>
        </Box>
    );
};

export default ChatBox;