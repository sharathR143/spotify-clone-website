import React from "react";
import play from "../img/play.png";
import play2 from "../img/play2.png";
import play3 from "../img/play3.png";
import play4 from "../img/play4.png";
const Why = () => {
  return (
    <section className="  mb-5  w-96 sm:w-auto">
      <div className=" text-center font-bold text-3xl sm:text-4xl mt-2 sm:mt-20 md:mt-10 lg:mt-20 p-7 sm:p-5">
        <h1>Why spotify?</h1>
      </div>

      <div className=" grid  grid-cols-1  xl:grid-cols-4 lg:grid-cols-2 xl:mx-36 md:grid-cols-2  ">
        <div className="xl:h-96 lg:h-60 w-full sm:w-80 xl:w-80 lg:w-full mb-10 xl:mb-10  lg:mb-10    md:w-96  ">
          <div className="inline-block sm:block md:inline-block  ">
            <img
              src={play}
              alt=""
              className="ml-5 sm:ml-20 lg:ml-20 md:ml-5 w-24 sm:w-36 mt-4 sm:mt-10 xl:w-36 lg:w-28  md:w-24  md:mb-5 lg:mb-0"
            />
          </div>
          <div className="inline-block sm:block  md:inline-block pl-4 sm:pl-0 xl:pl-10 lg:pl-10 md:pl-6    ">
            <h3 className="text-start text-xl sm:text-2xl font-bold sm:text-center sm:mt-10 lg:text-start xl:text-center  md:text-xl lg:text-2xl  md:text-start  ">
              Play your favorites.
            </h3>
            <p className=" mt-3 font-medium lg:text-start xl:text-center w-[auto] sm:w-auto ">
              Listen to the songs you love,and
            </p>
            <p className=" font-medium  lg:text-start xl:text-center  ">
              discover new music and
              <h1 className="xl:block lg:inline-block inline sm:block pl-1 sm:pl-0">
                podcasts.
              </h1>
            </p>
          </div>
        </div>
        <div className="  xl:h-96 lg:h-60 w-full sm:w-80 xl:w-80 lg:w-full md:w-96 mb-10  ">
          <div className="md:inline-block inline-block sm:block  ">
            <img
              src={play2}
              alt=""
              className="  xl:ml-20  w-24 sm:w-36 ml-5 sm:ml-0 mb-5 sm:mt-10  lg:w-28 xl:w-36 md:w-24  md:mb-5 lg:mb-0 "
            />
          </div>
          <div className="inline-block sm:block md:inline-block  xl:pl-10 lg:pl-10 md:pl-6   pl-4 sm:pl-0">
            <h3 className="text-xl sm:text-2xl font-bold text-start sm:text-center lg:text-start xl:text-center mt-10  md:text-xl lg:text-2xl  md:text-start ">
              Playlists made easy.
            </h3>
            <p className="lg:text-start xl:text-center mt-3 font-medium  ">
              We'll help you make playlists.Or
            </p>
            <p className=" text-start sm:text-center font-medium  md:text-start lg:text-center ">
              enjoy playlists made by music
              <h1 className="xl:block lg:inline-block  sm:ml-2 md:ml-0 lg:ml-2  ">
                experts.
              </h1>
            </p>
          </div>
        </div>
        <div className=" xl:h-96 lg:h-60 md:h-44  xl:w-80 lg:w-full md:w-96 mb-10   sm:h-96  sm:w-80 w-full ">
          <div className=" md:inline-block inline-block sm:block ">
            <img
              src={play3}
              alt=""
              className="sm:ml-20 w-24 sm:w-36 mt-3 sm:mt-10 xl:ml-20 lg:w-28 xl:w-36 md:w-24  md:mb-5 lg:mb-0 md:ml-3 lg:ml-20  ml-6 "
            />
          </div>
          <div className="inline-block sm:block md:inline-block  xl:pl-10 lg:pl-10 md:pl-6   pl-4 sm:pl-0">
            <h3 className=" text-xl sm:text-2xl font-bold sm:text-center mt-10    lg:text-start xl:text-center md:text-xl lg:text-2xl  md:text-start md:mt-5 lg:mt-10">
              Make it yours.
            </h3>
            <p className="text-center mt-3 font-medium  md:mb-0 ">
              Tell us what you like, and we'll
            </p>
            <p className="sm:text-center font-medium lg:text-start xl:text-center md:text-start   ">
              recommend music for you.
            </p>
          </div>
        </div>
        <div className=" sm:h-96 w-full sm:w-80  xl:h-96 lg:h-60 md:h-48   md:w-96 xl:w-80 lg:w-full mb-10  ">
          <div className=" md:inline-block inline-block sm:block ">
            <img
              src={play4}
              alt=""
              className="ml-6 sm:ml-20 w-24 sm:w-36  mb-4 sm:mb-0  sm:mt-10 xl:ml-20 lg:ml-0 lg:w-28 xl:w-36  md:w-24  md:mb-5 lg:mb-0 md:ml-0 "
            />
          </div>
          <div className="inline-block sm:block  md:inline-block  xl:pl-10 lg:pl-10 md:pl-5 pl-4 sm:pl-0 ">
            <h3 className="text-xl sm:text-2xl font-bold sm:text-center mt-10 lg:text-start xl:text-center md:text-xl lg:text-2xl  md:text-start">
              Save mobile data.
            </h3>
            <p className="sm:text-center mt-3 font-medium  lg:text-start xl:text-center ">
              To use less data when you play
            </p>
            <p className="sm:text-center font-medium  lg:text-start xl:text-center md:text-start">
              music, turn on Data Saver in{" "}
              <h2 className="xl:block lg:inline-block"> Settings.</h2>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
