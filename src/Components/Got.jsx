import React, { useState } from "react";

const Got = () => {
  const [isPopup1, setIsPopup1] = useState(false);
  const [isPopup2, setIsPopup2] = useState(false);
  const [isPopup3, setIsPopup3] = useState(false);
  const [isPopup4, setIsPopup4] = useState(false);
  return (
    <section className=" sm:mb-10   w-96 sm:w-auto ">
      <div className="sm:pb-10 ">
        <div className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl text-center   lg:font-semibold md:font-bold  sm:font-semibold font-bold">
          <h2 className=" sm:pt-5 pb-10 sm:pb-0 ">Got questions?</h2>
        </div>
        <div className=" hover:bg-slate-100  border-b-2 border-slate-100 sm:mx-44 xl:mx-44 lg:mx-10 md:mx-3 sm:mt-10 py-5 px-10 sm:px-0 flex flex-col ">
          <div className="flex justify-between hover:underline">
            <div>
              <a
                href="/"
                className="text-2xl md:text-xl lg:text-2xl sm:pl-10  font-medium ">
                How do I create a playlist?
              </a>
            </div>
            <div
              className="mt-2  sm:mr-6 cursor-pointer"
              onClick={(e) => {
                setIsPopup1(!isPopup1);
                if (!isPopup1) {
                  e.target.style.transform = "rotate(180deg)";
                } else {
                  e.target.style.transform = "";
                }
              }}>
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-encore-id="icon">
                <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414z"></path>
              </svg>
            </div>
          </div>
          <div className={isPopup1 ? "" : "hidden"}>
            <div className="sm:ml-14 ml-5  ">
              <h1 className="mt-5 font-semibold">
                Playlists are a great way to save collections of music, either
                for your own listening or to share.
              </h1>
              <p className="mt-6 font-semibold">To create one:</p>
              <ul className="mt-5 font-semibold">
                <li>1. Tap Your Library.</li>
                <li>
                  2. Tap <span className="text-green-500">CREATE.</span>
                </li>
                <li>3. Give your playlist a name.</li>
                <li>4. Start adding songs (and we'll help you along).</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hover:bg-slate-100  border-b-2 border-slate-100  sm:mx-44  py-5 mt-1  flex flex-col xl:mx-44 lg:mx-10 px-10 sm:px-0 md:mx-3 ">
          <div className="flex justify-between hover:underline ">
            <div>
              <a
                href="/"
                className="text-2xl md:text-xl lg:text-2xl  sm:pl-10  font-medium ">
                How do I activate Data Saver mode?
              </a>
            </div>
            <div
              className="mt-5 sm:mr-6   cursor-pointer "
              onClick={(e) => {
                setIsPopup2(!isPopup2);
                if (!isPopup2) {
                  e.target.style.transform = "rotate(180deg)";
                } else {
                  e.target.style.transform = "";
                }
              }}>
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-encore-id="icon"
                className="">
                <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414z"></path>
              </svg>
            </div>
          </div>
          <div className={isPopup2 ? "" : "hidden"}>
            <div className="  sm:ml-14 ml-5 ">
              <ul className="mt-5 font-semibold">
                <li>
                  1. Tap <span className="text-green-500"> Home.</span>
                </li>
                <li>
                  2. Tap <span className="text-green-500">Settings.</span>
                </li>
                <li>
                  3. Tap
                  <span className="text-green-500"> Data Saver.</span>
                </li>
                <li>4. Switch on Data Saver.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hover:bg-slate-100  border-b-2 border-slate-100  sm:mx-44  py-5 mt-1 flex flex-col xl:mx-44 lg:mx-10 md:mx-3  px-10 sm:px-0">
          <div className="flex justify-between hover:underline">
            <div>
              <a
                href="/"
                className="text-2xl sm:pl-10 md:text-xl lg:text-2xl font-medium">
                Is it only possible to shuffle play music?
              </a>
            </div>
            <div
              className="mt-5 sm:mr-6 cursor-pointer"
              onClick={(e) => {
                setIsPopup3(!isPopup3);
                if (!isPopup3) {
                  e.target.style.transform = "rotate(180deg)";
                } else {
                  e.target.style.transform = "";
                }
              }}>
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                // class="Svg-sc-ytk21e-0 ldgdZj sc-212df1af-2 biJcOI"
                viewBox="0 0 24 24"
                data-encore-id="icon"
                // className="ml-96"
              >
                <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414z"></path>
              </svg>
            </div>
          </div>
          <div className={isPopup3 ? "" : "hidden"}>
            <div className="sm:ml-14">
              <h1 className="mt-5 font-semibold">
                Any playlist with the shuffle icon will play on shuffle.
              </h1>
              <h1 className="mt-5 font-semibold">
                Some playlists won't have the shuffle icon, so you can tap any
                song to play it.
              </h1>
            </div>
          </div>
        </div>
        <div className="hover:bg-slate-100  border-b-2 border-slate-100  sm:mx-44  py-5 mt-1  flex flex-col xl:mx-44 lg:mx-10 md:mx-3 px-10 sm:px-0">
          <div className=" flex justify-between hover:underline">
            <div>
              <a
                href="/"
                className="text-2xl sm:pl-10 md:text-xl lg:text-2xl font-medium ">
                Where can I find Podcasts?
              </a>
            </div>
            <div
              className=" mt-5 sm:mr-6 cursor-pointer"
              onClick={(e) => {
                setIsPopup4(!isPopup4);
                if (!isPopup4) {
                  e.target.style.transform = "rotate(180deg)";
                } else {
                  e.target.style.transform = "";
                }
              }}>
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-encore-id="icon">
                <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414z"></path>
              </svg>
            </div>
          </div>
          <div className={isPopup4 ? "" : "hidden"}>
            <div className="mt-5 ml-5 sm:ml-0 ">
              <h1 className="sm:ml-14 font-semibold">
                Tap <span className="text-green-500"> Search.</span> Under{" "}
                <span className="text-green-500">Browse All</span>, tap
                Podcasts.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Got;
