import React from "react";
import book1 from "../img/book1.png";
import book2 from "../img/book2.png";
import book3 from "../img/book3.png";
import book4 from "../img/book4.png";
import book5 from "../img/book5.png";
import book6 from "../img/book6.png";

const Supportmain = () => {
  let Handle = (e) => {
    e.preventDefault();
    window.location.assign("/LOGIN");
  };
  return (
    <section className="text-white pb-20 sm:pb-40   w-96 sm:w-auto">
      <div className="  xl:mx-80 lg:mx-28 ">
        <p className="text-lg pt-10 pl-6 md:pl-28 text-gray-300">
          Spotify Support
        </p>
        <h1 className="text-5xl font-bold pt-2 pl-5 md:pl-28">
          How can we help you?
        </h1>
        <h2 className="text-2xl pt-20 sm:pt-10 pl-6 md:pl-28">
          <a
            href="/"
            className="underline text-white font-bold"
            onClick={Handle}>
            Log in
          </a>
          <span className="ml-4 text-gray-300">for faster help</span>
        </h2>
      </div>
      <div className="grid grid-rows-1 lg:w-10/12  xl:w-1/2  xl:ml-80 lg:ml-28 pl-5 sm:pl-28 mt-5 pt-8  ">
        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-[350px] sm:w-auto  md:w-[600px] lg:w-[550px] xl:w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded bg-white-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>
      <div className="flex justify-center mt-5   ">
        <div className="grid grid-cols-2  sm:grid-cols-3 gap-5 md:w-[710px] lg:w-[660px] xl:w-1/2 lg:px-18 md:px-[53px] w-full px-4   lg:mr-5 md:ml-12 lg:ml-0  xl:mr-0 xl:ml-0  py-1   ">
          <div className="bg-fuchsia-700  py-4   rounded  overflow-hidden h-28 md:h-24">
            <div className="  pl-4 sm:pl-0">
              <a
                href="/"
                className="font-bold text-xl sm:text-lg   xl:pl-5 lg:pl-2  md:pl-4">
                Payment <span className="block sm:inline">Help</span>
              </a>
            </div>

            <div className="mt-12  relative   ">
              <img
                src={book1}
                alt=""
                className="absolute rotate-[20deg] left-28  md:left-36  lg:left-32  xl:left-40  bottom-5  sm:bottom-0   w-16 h-16 shadow-white/30"
              />
            </div>
          </div>
          <div className="bg-blue-500 py-5 rounded  overflow-hidden h-28 md:h-24 ">
            <div className=" pl-4 sm:pl-0">
              <a
                href="/"
                className="font-bold text-xl sm:text-lg  xl:pl-5 lg:pl-2 md:pl-4   pr-20 sm:pr-0">
                Account Help
              </a>
            </div>
            <div className="relative mt-12">
              <img
                src={book2}
                alt=""
                className="absolute rotate-[20deg] left-28 md:left-36   lg:left-32  xl:left-40  bottom-5  sm:bottom-0   w-16 h-16 shadow-white/30 "
              />
            </div>
          </div>
          <div className="bg-red-800 py-5 rounded overflow-hidden h-28 md:h-24">
            <div className=" pl-4 sm:pl-0">
              <a
                href="/"
                className="font-bold text-xl sm:text-lg  xl:pl-5 lg:pl-2 md:pl-4  pr-20 sm:pr-0">
                Plan Help
              </a>
            </div>
            <div className="relative mt-12 ">
              <img
                src={book3}
                alt=""
                className="absolute rotate-[20deg] left-28 md:left-36   lg:left-32  xl:left-40 bottom-5  sm:bottom-0   w-16 h-16 shadow-white/30 "
              />
            </div>
          </div>
          <div
            className="bg-amber-800 py-5 rounded overflow-hidden h-28 md:h-24
           ">
            <div className=" pl-4 sm:pl-0">
              <a
                href="/"
                className="font-bold text-xl sm:text-lg  xl:pl-5 lg:pl-2  md:pl-4 pr-20 sm:pr-0">
                App Help
              </a>
            </div>
            <div className="mt-12  relative ">
              <img
                src={book4}
                alt=""
                className="absolute rotate-[20deg] left-28 md:left-36   lg:left-32  xl:left-40 bottom-5  sm:bottom-0   w-16 h-16 shadow-white/30 "
              />
            </div>
          </div>
          <div className="bg-green-800 py-5 rounded overflow-hidden h-28 md:h-24">
            <div className=" pl-4 sm:pl-0">
              <a
                href="/"
                className="font-bold text-xl sm:text-lg  xl:pl-5 lg:pl-2 md:pl-4 pr-20 sm:pr-0">
                Device Help
              </a>
            </div>
            <div className="relative  mt-12">
              <img
                src={book5}
                alt=""
                className="absolute  rotate-[20deg] left-28  md:left-36   lg:left-32  xl:left-40  bottom-5  sm:bottom-0   w-16 h-16 shadow-white/30 "
              />
            </div>
          </div>
          <div className="bg-gray-500 py-5 rounded overflow-hidden h-28 md:h-24">
            <div className=" pl-4 sm:pl-0">
              <a
                href="/"
                className="font-bold text-xl sm:text-lg  xl:pl-5 lg:pl-2 md:pl-4 pr-20 sm:pr-0 ">
                Safe <span className="block sm:inline">&</span> Privacy
              </a>
            </div>
            <div className=" relative mt-12">
              <img
                src={book6}
                alt=""
                className="absolute  rotate-[20deg] left-28 md:left-36   lg:left-32  xl:left-40  bottom-12  sm:bottom-0   w-16 h-16 shadow-white/30 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supportmain;
