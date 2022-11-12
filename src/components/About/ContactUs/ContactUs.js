import React from "react";
import MainLayout from "../../ShareComponents/MainLayout/MainLayout";
import mehedi from "../../../images/profile.png";
import naimur from "../../../images/naimur.jpg";
const ContactUs = () => {
  return (
    <MainLayout>
      <h1>contact us</h1>
      <div className="flex">
        <div className=" ml-28 p-4">
          <section className="absolute top-1/2 left-3/2 h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-0     transform rounded-2xl bg-gray-400"></section>

          <section className="absolute top-1/2  h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-3 transform space-y-6 rounded-2xl bg-green-100 p-6 duration-300 ">
            <div className="flex justify-between">
              <div className="">
                <h1 className="text-xl font-bold text-gray-700">
                  {" "}
                  Mehedi Hasan
                </h1>
              </div>
              <div className=" w-28  rounded-full   ">
                <img className="rounded-full -mt-10" src={mehedi} alt="" />
              </div>
            </div>

            <header className="text-center text-xl font-extrabold text-gray-600">
              Frontend Web developer
            </header>

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates harum voluptas incidunt delectus veniam deserunt
                repudiandae quas, quis placeat esse.
              </p>
            </div>
          </section>
        </div>
        <div className=" ml-28 p-4">
          <section className="absolute top-1/2 left-2/3 h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-0     transform rounded-2xl bg-gray-400"></section>

          <section className="absolute top-1/2  left-2/3 h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-3 transform space-y-6 rounded-2xl bg-pink-100 p-6 duration-300 ">
            <div className="flex justify-between">
              <div className="">
                <h1 className="text-xl font-bold text-gray-700">
                  {" "}
                  Naimur Rahaman
                </h1>
              </div>
              <div className=" w-28  rounded-full   ">
                <img className="rounded-full -mt-10" src={naimur} alt="" />
              </div>
            </div>

            <header className="text-center text-xl font-extrabold text-gray-600">
              Frontend Web developer
            </header>

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates harum voluptas incidunt delectus veniam deserunt
                repudiandae quas, quis placeat esse.
              </p>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactUs;
