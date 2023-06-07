import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../../../ManageState/DataSlice/dataSlice';
import Message from '../Message/Message';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useGetMessagesWithRoutineIdWithPaginationQuery } from '../../../../ManageState/features/message/messageApi';
import { useState } from 'react';

const ChatBox = ({ routineId, messages, isLoading, totalMessage, skip }) => {
    // const { allRoutineData, selectIndex, user, } = useSelector(allData)
    const scrollRef = useRef()
    const currentMassageLength = messages?.length
    const [scrollTo, setScrollTo] = useState({ pre: 0, now: 0 })
    const [skipMessage, setSkipMessage] = useState({ skip: messages?.length, shouldGetNewMessage: false, shouldLoadMore: false })

    const { data: newChat, isLoading: isGettingNewChatLoading, isError: isGetNewChatError, } = useGetMessagesWithRoutineIdWithPaginationQuery({ id: routineId, skip: messages?.length }, { skip: !skipMessage.shouldGetNewMessage })

    useEffect(() => {
        if (messages.length < totalMessage) {
            setSkipMessage({ ...skipMessage, skip: messages.length })
        }

    }, [messages, totalMessage])

    useEffect(() => {
        setSkipMessage({ skip: 0, shouldGetNewMessage: false, shouldLoadMore: false })
    }, [routineId, isLoading])

    // useEffect(() => {
    //     if (scrollRef.current) {

    //         setScrollTo(pre => {

    //             console.log({ pre });
    //             return { pre: pre.now, now: scrollRef?.current?.scrollHeight }
    //         })
    //     }

    // }, [scrollRef, scrollRef.current, messages])

    console.log(scrollTo);

    useEffect(() => {
        if (skipMessage.shouldLoadMore) {
            setSkipMessage(pre => ({ ...pre, shouldGetNewMessage: true }))
        } else {
            setSkipMessage(pre => ({ ...pre, shouldGetNewMessage: false }))
        }
    }, [skipMessage.shouldLoadMore])

    useEffect(() => {
        if (scrollRef?.current && scrollTo.pre) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight - scrollTo.pre
            console.log('end of first ', scrollTo.pre)
        }
    }, [newChat, scrollRef?.current, scrollTo.pre,])

    // scrollTo bottom
    useEffect(() => {
        if (scrollRef?.current && !isLoading) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
            console.log('i am going to bottom')
        }
    }, [scrollRef, , routineId, isLoading])

    useEffect(() => {
        if (isGettingNewChatLoading) {
            setScrollTo(pre => {
                return { ...pre, pre: scrollRef?.current?.scrollHeight, }
            })
        }
    }, [isGettingNewChatLoading])
    const loadMore = e => {
        let scrolling = e.target.scrollTop
        console.log({ scrolling });
        if (scrolling === 0) {

            setSkipMessage((prevSkipMessage) => {
                if (!prevSkipMessage.shouldLoadMore) {
                    return { ...prevSkipMessage, shouldLoadMore: true };
                }
                return prevSkipMessage;
            });
        } else {
            setSkipMessage((prevSkipMessage) => {
                if (prevSkipMessage.shouldLoadMore) {
                    return { ...prevSkipMessage, shouldLoadMore: false };
                }
                return prevSkipMessage;
            });
        }
    }
    return (
        <Box className=' pb-2  w-full' sx={{ height: '85%', flexGrow: '1' }}>
            {/* <RightBar info={{ name: client?.displayName, photo: client?.photoURL }}></RightBar> */}
            <div style={{ height: '100%' }} className=' overflow-hidden'>

                {!messages?.length && isLoading ? <div className='h-full flex justify-center items-center'>
                    <CircularProgress></CircularProgress>
                </div>
                    :
                    <div className='max-h-full h-full min-h-full bf-red-900 overflow-y-scroll' onScroll={loadMore} ref={scrollRef}>
                        <div className='text-center py-2'>
                            {isGettingNewChatLoading ? "Loading..." : ""}
                        </div>
                        {
                            messages?.map((single, i) => <Message key={i} incomingData={single}></Message>)
                        }
                    </div>}



                {/* !messages?.length && isLoading ? <div className='h-full flex justify-center items-center'>
                        <CircularProgress></CircularProgress>
                    </div> : <InfiniteScroll
                        dataLength={messages?.length}
                        next={handleComplete}
                        // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
                        inverse={true} //
                        height={window.innerHeight - 129}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}
                        scrollableTarget="scrollableDiv"
                    >
                        {

                            messages?.map((single, i) => <Message key={i} incomingData={single}></Message>)
                        }
                    </InfiniteScroll> */}

            </div>
        </Box>
    );
};

export default ChatBox;