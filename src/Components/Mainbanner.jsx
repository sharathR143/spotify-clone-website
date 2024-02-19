import React from "react";
import phone from "../img/img1.jpg";

const Mainbanner = () => {
  let formhandle = (e) => {
    e.preventDefault();

    window.location.assign("/SIGNUP");
  };
  return (
    <aside className=" bg-gradient-to-r from-purple-500 to-pink-500  flex md:flex-none lg:flex justify-evenly   w-96  sm:w-auto ">
      <div className="bg-white h-2/4  lg:ml-20  xl:ml-36  mt-20 lg:mt-24 rounded-t-3xl  md:w-0 lg:w-72 sm:invisible  md:block lg:visible  hidden w-full">
        <div className=" ">
          <div
            className="bg-black h-[6px] w-10 xl:ml-32 mt-6 mb-5 rounded-full
          lg:ml-[116px]"></div>
        </div>
        <img src={phone} alt="" className=" w-72  h-100 mt-0 p-2  " />
      </div>

      <div className="h-auto sm:h-2/4 mt-20 ml-3 sm:mt-48  md:mt-20 lg:mt-36 lg:pl-20 mb-10 md:pl-0  sm:p-10  mr-3  ">
        <h2 className="font-bold text-[40px] md:text-6xl    xl:text-7xl text-white lg:text-5xl mb-5 inline sm:block">
          Play Millions of Songs
        </h2>
        <h2 className="font-bold text-[40px] xl:text-7xl md:text-6xl mt-2 lg:pr-20  text-white lg:text-5xl inline sm:block pl-2 sm:pl-0">
          and Podcasts,for
          <div className="block  sm:inline-block  lg:mt-3 ">free.</div>
        </h2>
        <button
          className=" px-6 py-3 mt-10 rounded-3xl text-xl font-semibold bg-white  hover:scale-105"
          onClick={formhandle}>
          Get Spotify Free
        </button>
      </div>
    </aside>
  );
};

export default Mainbanner;
