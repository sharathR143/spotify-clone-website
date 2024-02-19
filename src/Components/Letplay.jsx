import React from "react";

const Letplay = () => {
  let formhandle = () => {
    window.location.assign("/SIGNUP");
  };
  return (
    <section className="bg-gradient-to-r from-purple-500 to-pink-500    w-96 sm:w-auto ">
      <div className="text-center py-36">
        <h1 className="font-bold text-5xl sm:text-7xl md:text-6xl lg:text-7xl  text-white text-center leading-[60px] sm:leading-[0px]">
          Ready? Let’s play.
        </h1>
        <button
          className=" px-8 py-3 mt-10 rounded-3xl text-xl font-semibold bg-white  hover:scale-105 "
          onClick={formhandle}>
          Get Spotify Free
        </button>
      </div>
    </section>
  );
};

export default Letplay;
