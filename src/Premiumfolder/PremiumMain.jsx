import React from "react";
import img from "../img/premiumbanner.png";
import { useNavigate } from "react-router-dom";
const PremiumMain = ({ scrolldata }) => {
  let navigate = useNavigate();
  let formhandle = () => {
    navigate("/LOGIN");
  };

  return (
    <section className=" bg-gradient-to-t from-zinc-900  via-black to bg-stone-500   pb-10  w-96 sm:w-auto ">
      <aside className="flex relative  ">
        <div className=" xl:ml-36  pb-10  ">
          <div className="mt-56 sm:mt-24 md:pl-8 lg:pl-7 md:mr-[350px] xl:pl-0 lg:mr-[600px] xl:mr-0  xl:ml-20  mx-16 sm:mx-0 ">
            <h2 className="text-white text-4xl w-[400px] xl:w-auto  font-bold   inline xl:block ">
              Listen without limits. Try 1
            </h2>
            <h3 className="text-white ml-2 xl:ml-0 text-4xl font-bold inline xl:block">
              month of Premium for ₹119.
            </h3>
            <p className="text-white text-xl pt-5 font-semibold">
              Only ₹119/month after. Cancel anytime.
            </p>
          </div>
          <div className=" ">
            <div className="mt-10  md:mb-6 xl:mb-0">
              <button
                className="ml-16 sm:ml-0 xl:ml-20 lg:ml-7 md:ml-6 xl:mr-5 md:px-10 md:py-3 px-14 py-5  lg:mr-10 md:mr-5 lg:px-10 lg:py-4  xl:px-5 xl:py-3 rounded-full bg-pink-200 font-medium hover:scale-105 hover:bg-slate-200   "
                onClick={formhandle}>
                Try free for 1 month
              </button>
              <button
                className="border-2 px-10 py-5 ml-[70px] sm:ml-0 mt-5 sm:mt-0   md:px-10 md:py-3  lg:px-10 lg:py-4  xl:px-5 xl:py-3  rounded-full bg-black font-medium hover:scale-105 text-white"
                onClick={scrolldata}>
                view all premium plans
              </button>
            </div>

            <div className="ml-16 mr-5 sm:ml-0 sm:mr-0    mt-5 sm:mt-0">
              <h1 className="md:text-[11px] mt-10  xl:text-sm text-white font-normal xl:ml-20 lg:ml-8 md:ml-8 inline xl:block  ">
                Free for 1 month, then ₹119 per month after.Offer only
              </h1>
              <h2 className=" md:text-[11px] xl:text-sm text-white font-normal  xl:ml-20 lg:ml-1  inline xl:block ">
                available if you haven't tried Premium before.
                <a href="/" className="underline ">
                  Terms apply.
                </a>
              </h2>
            </div>
          </div>
        </div>
        <div className=" bg-blue-800">
          <img
            src={img}
            alt=""
            className="absolute  top-0 right-0 sm:top-0  sm:right-0     md:w-[450px]  lg:w-[600px] xl:w-auto "
          />
        </div>
      </aside>
    </section>
  );
};

export default PremiumMain;
