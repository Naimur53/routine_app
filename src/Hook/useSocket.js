
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client'
import { addMessage, allData, postMessageToDb } from '../ManageState/DataSlice/dataSlice';

// const io = io.connect('https://shielded-dusk-65695.herokuapp.com/')

const useSocket = () => {
    const { allRoutineData, selectIndex } = useSelector(allData)
    const dispatch = useDispatch()
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        if (socket === null) {
            setSocket(io("https://shielded-dusk-65695.herokuapp.com/"))
        }
        if (socket) {
            socket.on('connect', () => {
                socket.emit('joined', { 'serverchannel': 120 })
                console.log("Connected")
            })

            socket.on('receive_message', (data) => {
                dispatch(addMessage([data]))
                console.log(data.content)
            })
        }
    }, [socket, dispatch])

    const sendMessage = (data) => {
        socket?.emit('message', data)
        dispatch(addMessage([data]))

        //save to db
        dispatch(postMessageToDb(data))
    }
    useEffect(() => {
        let allRoutineId = [];
        allRoutineData.forEach(element => {
            allRoutineId = [...allRoutineId, element._id]
        });
        if (allRoutineData.length) {
            socket?.emit('join', allRoutineId)
        }
        return () => {
            socket?.emit('leave', allRoutineId)
        }
    }, [allRoutineData, socket, selectIndex])

    useEffect(() => {


    }, [])
    return (
        { socket, sendMessage }
    );
};

export default useSocket;