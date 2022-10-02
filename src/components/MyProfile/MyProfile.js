import { PhotoCamera } from "@mui/icons-material";
import { Button, Grid, IconButton, Input } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";

const MyProfile = () => {
  const [click, setClick] = useState(false);
  const { register, handleSubmit, watch, reset } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <MainLayout>
      {!click ? (
        <Grid container spacing={2}>
          <Grid
            item
            md={4}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div>
              <img
                src="https://i.ibb.co/r2Qrrcn/client-01-160x160.jpg"
                className=" rounded-xl"
                alt="profile_image"
              />

              <Button sx={{ mt: 2, ml: 3 }} onClick={() => setClick(true)}>
                Edit Profile
              </Button>
            </div>
          </Grid>

          <Grid item md={6} xs={12}>
            <div className="flex bg-purple-100 p-2 rounded mb-2">
              <p className="flex-none text-gray-500 font-bold md:text-right  md:mb-0 pr-4 w-32">
                Full Name
              </p>
              <p className="grow text-purple-900 text-sm md:text-base break-all">
                Rakibul Hoque
              </p>
            </div>

            <div className="flex bg-purple-100 p-2 rounded mb-2">
              <p className="flex-none text-gray-500 font-bold md:text-right  md:mb-0 pr-4  w-32">
                Email
              </p>
              <p className="grow text-purple-900 text-sm md:text-base break-all">
                mdrakibulhoque83@gmail.com
              </p>
            </div>

            <div className="flex bg-purple-100 p-2 rounded mb-2">
              <p className="flex-none text-gray-500 font-bold md:text-right  md:mb-0 pr-4 w-32">
                Phone
              </p>
              <p className="grow text-purple-900 text-sm md:text-base">
                01522222222
              </p>
            </div>

            <div className="flex bg-purple-100 p-2 rounded mb-2">
              <p className="flex-none text-gray-500 font-bold md:text-right  md:mb-0 pr-4 w-32">
                Department
              </p>
              <p className="grow text-purple-900 text-sm md:text-base">
                Economics
              </p>
            </div>

            <div className="flex  bg-purple-100 p-2 rounded mb-2">
              <p className="flex-none text-gray-500 font-bold md:text-right  md:mb-0 pr-4 w-32">
                ID
              </p>
              <p className="grow text-purple-900 text-sm md:text-base">
                16030454879878
              </p>
            </div>

            <div className="flex  bg-purple-100 p-2 rounded mb-2">
              <p className="flex-none text-gray-500 font-bold md:text-right  md:mb-0 pr-4 w-32">
                Semester
              </p>
              <p className="grow text-purple-900 text-sm md:text-base">6th</p>
            </div>

            <div className="flex  bg-purple-100 p-2 rounded mb-2">
              <p className="flex-none text-gray-500 font-bold md:text-right  md:mb-0 pr-4 w-32">
                Credits
              </p>
              <p className="grow text-purple-900 text-sm md:text-base">132</p>
            </div>

            <div className="flex  bg-purple-100 p-2 rounded mb-2">
              <p className="flex-none text-gray-500 font-bold md:text-right  md:mb-0 pr-4 w-32">
                CGPA
              </p>
              <p className="grow text-purple-900 text-sm md:text-base">3.88</p>
            </div>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2}>
          <Grid
            item
            md={4}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div>
              <img
                src="https://i.ibb.co/r2Qrrcn/client-01-160x160.jpg"
                className=" rounded-xl"
                alt="profile_image"
              />
              <label htmlFor="icon-button-file">
                <Input
                  {...register("profileImage")}
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  sx={{ display: "none" }}
                />
                <div className="flex justify-center mt-2">
                  <IconButton
                    sx={{
                      color: "white",
                    }}
                    style={{ background: "#242526" }}
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </div>
              </label>
            </div>
          </Grid>

          <Grid item md={6} xs={12}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Your Name"
                  id="small-input"
                  class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 mb-5"
                />

                <input
                  {...register("semester")}
                  type="text"
                  placeholder="Semester"
                  id="small-input"
                  class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 mb-5"
                />

                <input
                  {...register("credits")}
                  type="text"
                  placeholder="Credits Complete"
                  id="small-input"
                  class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 mb-5"
                />

                <input
                  {...register("cgpa")}
                  type="text"
                  placeholder="Current CGPA"
                  id="small-input"
                  class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 mb-5"
                />

                <input
                  {...register("contact")}
                  type="text"
                  placeholder="Change Contact No"
                  id="small-input"
                  class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 mb-5"
                />

                <button
                  type="submit"
                  class="text-white bg-purple-200 hover:bg-purple-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </Grid>
        </Grid>
      )}
    </MainLayout>
  );
};

export default MyProfile;
