import { Button, CircularProgress, Skeleton, Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { saveRoutine } from "../../../utilities/localDb";
import HomeClassShow from "../../Home/smallCompo/HomeClassShow/HomeClassShow";
import MainLayout from "../../ShareComponents/MainLayout/MainLayout";

const Checkout = () => {
  const { id } = useParams();
  const [data, setData] = useState({ classes: [] });
  const [getLoading, setGetLoading] = useState(true);
  const [save, setSave] = useState(false);

  useEffect(() => {
    setGetLoading(true);
    axios.get(`http://localhost:5001/routine?id=${id}`).then((res) => {
      setGetLoading(false);
      setData(res.data);
    });
  }, [id]);
  console.log(data, "from checkout");
  const handleSave = () => {
    console.log(data);
    setSave(true);
    const { response, status } = saveRoutine(data);
    alert(response, status);
  };
  return (
    <MainLayout>
      <div className="p-2">
        <div className="text-center border shadow-md m-2 p-2 rounded-md">
          <Box>
            <div className="lg:flex justify-items-center  ">
              <div className="text-lg flex-1">
                {getLoading ? (
                  <>
                    <Skeleton
                      variant="text"
                      sx={{ mx: "auto" }}
                      width="20%"
                      height={40}
                    />
                  </>
                ) : (
                  <>
                    {" "}
                    <h1 className="text-2xl font-bold"> {data.institute}</h1>
                  </>
                )}
                {getLoading ? (
                  <>
                    <Skeleton
                      variant="text"
                      sx={{ mx: "auto" }}
                      width="20%"
                      height={20}
                    />
                    <Skeleton
                      variant="text"
                      sx={{ mx: "auto" }}
                      width="20%"
                      height={20}
                    />

                    <Skeleton
                      variant="text"
                      sx={{ mx: "auto" }}
                      width="20%"
                      height={20}
                    />
                    <Skeleton
                      variant="text"
                      sx={{ mx: "auto" }}
                      width="10%"
                      height={40}
                    />
                  </>
                ) : (
                  <>
                    <div className="">
                      <h1> {data.department} Department</h1>
                      <h1>
                        {" "}
                        {data.semester} Semester , {data.shift} Shift
                      </h1>
                      <h1> </h1>
                      <h1> section: {data.section}</h1>
                    </div>
                  </>
                )}
              </div>
              <div className=" ">
                {data?._id && (
                  <Button
                    variant="outlined"
                    disabled={save}
                    className="text-lg border  p-2 rounded bg-dark-purple text-light-purple disabled:bg-gray-300"
                    onClick={handleSave}
                  >
                    Save Routine
                  </Button>
                )}
              </div>
            </div>
          </Box>
        </div>

        {getLoading ? (
          <>
            <Skeleton variant="text" sx={{ ms: 5 }} width="20%" height={80} />
            <Skeleton variant="text" sx={{ ms: 5 }} width="20%" height={80} />
            <Skeleton variant="text" sx={{ ms: 5 }} width="20%" height={80} />
            <Skeleton variant="text" sx={{ ms: 5 }} width="20%" height={80} />
            <Skeleton variant="text" sx={{ ms: 5 }} width="20%" height={80} />
          </>
        ) : (
          <>
            <HomeClassShow data={data}></HomeClassShow>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default Checkout;
