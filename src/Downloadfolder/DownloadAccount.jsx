import React from "react";

const DownloadAccount = () => {
  return (
    <section className="bg-zinc-800 pb-20  w-96 sm:w-auto">
      <div className="pt-20  flex justify-center  sm:mx-48">
        <img
          src="https://www-growth.scdn.co/static/download/all-devices.svg"
          alt="devices"
          loading="lazy"
          className=" w-[250px]  sm:w-[550px]"
        />
      </div>
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold pt-5">
          One account, listen everywhere.
        </h1>
        <div className="flex justify-center    mt-10  font-semibold  ">
          <ul className=" sm:list-disc md:flex md:justify-center md:flex-wrap     h-auto  text-lg sm:text-base ">
            <li className="list-none  mr-10 pt-5 sm:pt-0">
              <span>MOBILE</span>
            </li>
            <li className="mr-10 pt-5 sm:pt-0 text-green-500">
              <span className="text-white">COMPUTER</span>
            </li>
            <li className="mr-10 pt-5 sm:pt-0 text-green-500">
              <span className="text-white">TABLET</span>
            </li>
            <li className="mr-10 pt-5 sm:pt-0 text-green-500">
              <a href="/">
                <span className="text-green-500 underline">CAR</span>
              </a>
            </li>
            <li className="mr-10 pt-5 sm:pt-0 text-green-500">
              <a href="/">
                <span className="text-green-500 underline">PLAYSTATION®</span>
              </a>
            </li>
            <li className="mr-10 pt-5 sm:pt-0 text-green-500">
              <a href="/">
                <span className="text-green-500 underline">XBOX</span>
              </a>
            </li>
            <li className="mr-10  pt-5 sm:pt-0 text-green-500">
              <a href="/" className="">
                <span className="text-green-500 underline">TV</span>
              </a>
            </li>
            <li className="mr-10 pt-5 sm:pt-0 text-green-500 ">
              <a href="/" className="">
                <span className="text-green-500 underline ">SPEAKER</span>
              </a>
            </li>
            <li className="mr-10 pt-5 sm:pt-0 text-green-500">
              <a href="/" className="">
                <span className="text-green-500 underline">WEB PLAYER</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DownloadAccount;
