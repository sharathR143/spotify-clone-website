import React from "react";
import music from "../img/music2.jpeg";
const Itfree = () => {
  return (
    <section className="bg-gradient-to-t from-purple-800 via-purple-600 to-pink-500  mb-20 text-white font-bold   w-96 sm:w-auto ">
      <div className="pt-10 sm:hidden bg-gradient-to-b from-white to   ">
        <div className="bg-white w-60 ml-20  rounded-t-3xl drop-shadow-2xl       ">
          <div className="pt-5 ">
            <div
              className="bg-black h-[5px] w-10 ml-24    rounded-full
         "></div>
          </div>
          <img src={music} alt="" className=" w-60  h-100 mt-0 p-5 a " />
        </div>
      </div>
      <div className="sm:bg-gradient-to-t from-purple-800 via-purple-600 to-pink-500">
        <div className="text-center lg:py-44 md:py-20  py-20 sm:py-0">
          <h1 className="text-5xl">It's free.</h1>
          <h1 className="text-5xl">No credit card required.</h1>
        </div>
      </div>
    </section>
  );
};

export default Itfree;
