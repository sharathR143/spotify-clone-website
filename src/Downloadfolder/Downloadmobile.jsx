import React from "react";
import micro from "../img/google.svg";
const Downloadmobile = () => {
  return (
    <section className="bg-white  w-96 sm:w-auto">
      <div className="text-black font-bold text-center   pt-14 pb-20 ">
        <h1 className="font-bold text-3xl px-10 sm:px-0">
          Bring your music to mobile and tablet, too.
        </h1>
        <p className="mt-8 px-5 sm:px-0">
          Listening on your phone or tablet is free, easy, and fun.
        </p>
        <div className=" flex flex-wrap justify-center  mt-5">
          <img
            src="https://www-growth.scdn.co/static/badges/svgs/apple/badge-en.svg"
            alt="Download on the App Store"
            loading="lazy"
            className="w-[110px] sm:w-32 ml-8 sm:ml-6 h-10 sm:h-auto mr-5 mt-3 sm:mt-1"></img>
          <img
            src="https://www-growth.scdn.co/static/badges/svgs/google/badge-en.svg"
            alt="Get it on Google Play"
            className="w-36 h-16 sm:h-auto sm:w-40   mr-5"></img>
          <img
            src={micro}
            alt=""
            className="w-32 mr-6 h-10 sm:h-auto sm:mr-5 "
          />
          <img
            src="https://www-growth.scdn.co/static/badges/amazon/us.png"
            alt="Available at Amazon Appstore"
            loading="lazy"
            className=" w-32 h-10 sm:h-12 rounded sm:mt-2"></img>
        </div>
      </div>
    </section>
  );
};

export default Downloadmobile;
