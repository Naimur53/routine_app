import React, { useEffect, useState } from 'react';
import MainLayout from '../MainLayout/MainLayout';

const OnlineRoute = ({ children }) => {
    const [status, setStatus] = useState(window.navigator.onLine)
    useEffect(() => {
        window.addEventListener('online', () => {
            setStatus(true)
        })
        window.addEventListener('offline', () => {
            setStatus(false)
        })
        return () => {
            // window.removeEventListener('online')
        }
    }, [])
    if (!status) {
        return <MainLayout>
            <div className="flex justify-center custom_height items-center">
                <div className=''>
                    <img src={process.env.PUBLIC_URL + "/images/please.gif"} alt="please" />
                    <h2 className='text-xl text-bold'>Please Connect to Internet...</h2>
                </div>
            </div>
        </MainLayout>
    }
    return (
        <>
            {children}
        </>
    );
};

export default OnlineRoute;