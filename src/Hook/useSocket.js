import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import {
  addMessage,
  allData,
  postMessageToDb,
} from "../ManageState/DataSlice/dataSlice";

const socket = io.connect("https://routine-app-server-main.onrender.com/");

const useSocket = ({ observer }) => {
  const { allRoutineData, selectIndex } = useSelector(allData);
  const dispatch = useDispatch();
  // const [socket, setSocket] = useState(ioInit)
  useEffect(() => {
    if (observer) {
      socket.on("connect", () => {});
      socket.on("receive_message", (data) => {
        dispatch(addMessage([data]));
      });
    }
  }, []);

  const sendMessage = (data) => {
    socket?.emit("message", data);
    dispatch(addMessage([data]));

    //save to db
    dispatch(postMessageToDb(data));
  };
  useEffect(() => {
    let allRoutineId = [];
    allRoutineData.forEach((element) => {
      allRoutineId = [...allRoutineId, element._id];
    });
    if (allRoutineData.length) {
      socket?.emit("join", allRoutineId);
    }
    return () => {
      socket?.emit("leave", allRoutineId);
    };
  }, [allRoutineData, socket, selectIndex]);

  useEffect(() => {}, []);
  return { socket, sendMessage };
};

export default useSocket;
