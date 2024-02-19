import React from "react";

const Supportquick = ({ movechildComponent }) => {
  let handle = (e) => {
    e.preventDefault();
    movechildComponent();
  };

  let handlepayment = (e) => {
    e.preventDefault();
  };
  return (
    <section className="bg-neutral-800 pt-5 pb-10   w-96 sm:w-auto ">
      <div className="text-white xl:mx-96 lg:mx-48 md:mx-16 pl-10 ">
        <h1 className="font-bold text-2xl ">Quick help</h1>
      </div>
      <aside className="text-white md:mx-16  lg:mx-48 xl:mx-96  pl-10 mt-10 ">
        <div className="text-lg font-semibold flex justify-between pb-10 cursor-pointer hover:underline">
          <a href="/">
            <h1>Can't remember login details</h1>
          </a>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-10 mt-1 "
            onClick={handle}>
            <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
          </svg>
        </div>
        <div className="text-lg font-semibold flex justify-between pb-10 cursor-pointer hover:underline">
          <a href="/">
            <h1>Payment methods</h1>
          </a>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-10 mt-1 "
            onClick={handlepayment}>
            <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
          </svg>
        </div>
        <div className="text-lg font-semibold flex justify-between pb-10 cursor-pointer hover:underline">
          <a href="/">
            <h1>Price updates</h1>
          </a>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-10 mt-1 ">
            <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
          </svg>
        </div>
        <div className="text-lg font-semibold flex justify-between pb-10 cursor-pointer hover:underline">
          <a href="/">
            <h1>Spotify's 2023 Wrapped FAQ</h1>
          </a>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-10 mt-1 ">
            <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
          </svg>
        </div>
        <div className="text-lg font-semibold flex justify-between pb-5 cursor-pointer hover:underline">
          <a href="/">
            <h1>Can't reset password</h1>
          </a>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-10 mt-1 ">
            <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
          </svg>
        </div>
      </aside>
    </section>
  );
};

export default Supportquick;
