import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProfileRoute from "../MyProfile/ProfileRoute/ProfileRoute";
import MainLayout from "./../ShareComponents/MainLayout/MainLayout";
import { toast } from "react-toastify";

const ViewProfile = () => {
  const [viewUser, setViewUser] = useState({});
  const [getLoading, setGetLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    setGetLoading(true);
    axios
      .get(
        `https://routineappserver-production-5617.up.railway.app/user?id=${id}`
      )
      .then((res) => {
        if (res.data?._id) {
          setGetLoading(false);
          setViewUser(res.data);
        } else {
          toast.error("data not found");
        }
      })
      .catch((err) => {
        setGetLoading(false);
      });
  }, [id]);

  return (
    <>
      <ProfileRoute data={viewUser}></ProfileRoute>
    </>
  );
};

export default ViewProfile;
