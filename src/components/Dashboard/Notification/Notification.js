import axios from "axios";
import React, { useEffect, useState } from "react";
import MainLayout from "./../../ShareComponents/MainLayout/MainLayout";
import TokenCard from "./TokenCard";

const Notification = () => {
  const [tokens, setTokens] = useState([]);
  useEffect(() => {
    axios
      .get(`https://routine-app-server-main.onrender.com/notificationToken`)
      .then((res) => {
        let mainData = [];

        res.data.forEach((element) => {
          const exits = mainData.find(
            (single) => single.token === element.token
          );
          if (!exits?._id) {
            mainData = [...mainData, element];
          }
        });
        setTokens(mainData);
      })
      .catch((err) => {});
  }, []);
  return (
    <>
      <div className="flex flex-col gap-3">
        {tokens.map((token, i) => (
          <TokenCard key={isFinite} token={token}></TokenCard>
        ))}
      </div>
    </>
  );
};

export default Notification;
