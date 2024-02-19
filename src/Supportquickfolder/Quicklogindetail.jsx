import React from "react";
import img from "../img/quickimage.avif";

const Quicklogindetail = ({ moveBack }) => {
  // let moveBack = (e) => {
  //   e.preventDefault();
  //   window.location.assign("/SUPPORT");
  // };
  return (
    <section className=" text-white flex justify-center pt-10 pb-10 ">
      <div className="   md:mx-5 lg:mx-32 xl:w-1/2">
        <nav className=" sm:mx-20  px-3">
          <ul className="flex justify-start    ">
            <li className="pt-2 px-1">
              <a href="/" className="text-m font-semibold" onClick={moveBack}>
                Home
              </a>
            </li>
            <li className=" px-1">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="1"
                viewBox="0 0 24 24"
                height="2em"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
                className=" mt-1">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"></path>
              </svg>
            </li>
            <li className="pt-2 px-1">
              <a href="/" className="text-m font-semibold">
                Account Help
              </a>
            </li>
            <li>
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="2em"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
                className=" mt-1">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"></path>
              </svg>
            </li>
          </ul>
        </nav>
        <section className=" mt-10">
          <div className="mx-5 sm:mx-20  rounded-lg  bg-neutral-800  ">
            <div className="px-5 sm:flex justify-between  pt-5 sm:pt-0 ">
              <div className=" mt-5 mb-5">
                <h1 className="font-semibold">
                  Manage your Spotify Account easily
                </h1>
                <p className="pt-4">
                  Your info, payment and privacy all in one place.
                </p>
              </div>
              <div className="ml-32 sm:ml-10  mt-5 mb-5 ">
                <button className="mt-4 border rounded-full px-3 lg:px-5 py-1 text-sm hover:scale-105 font-semibold mb-10 sm:mb-0">
                  Go to your Account
                </button>
              </div>
            </div>
          </div>
          <div className="mx-5 sm:mx-20  mt-10 bg-neutral-800 rounded-lg">
            <div className="pt-5 pl-5">
              <h1 className=" text-4xl sm:text-5xl font-bold">
                Can't remember login details
              </h1>
              <div className="pl-1 pr-4 mt-10 pb-3">
                <img src={img} alt="" />
              </div>

              <div className="pr-2">
                <h1 className="mt-2 mb-3">
                  If you don't remember your password, use password reset.
                </h1>
                <p className=" mb-3">
                  If you don't remember your email or username, go to password
                  reset and enter possible email addresses you own. When you
                  enter an email that's registered with Spotify, you get the
                  message that the password reset email was sent.
                </p>
                <h2 className=" mb-3 pr-2">
                  Note: There are a few ways to sign up, e.g. with email, phone
                  number, Facebook, Apple, or Google. Try logging in with these
                  to find your account.
                </h2>
                <p className="pt-2 pb-8">
                  <a
                    href="/"
                    className="underline hover:text-green-500 font-semibold">
                    Reset your password
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <aside className=" pt-10 pb-10">
          <div className="mx-5 sm:mx-20 rounded-lg  bg-neutral-800 ">
            <h1 className="ml-5 pt-5 text-lg font-semibold">
              Related Articles
            </h1>

            <ul className="ml-5 pt-3 pb-6 text-green-400">
              <li className="underline">
                <a href="/"> Can't reset password</a>
              </li>
              <li className="underline">
                <a href="/">Facebook login help</a>
              </li>
              <li className="underline">
                <a href="/">Apple login help</a>
              </li>
              <li className="underline">
                <a href="/">Phone number login help</a>
              </li>
            </ul>
          </div>
        </aside>
        <footer className="mx-5 sm:mx-20 border-t border-neutral-700  mb-20">
          <h1 className="mt-3 ml-2 font-semibold">Was this article helpful?</h1>
          <button className="ml-3 px-4 mt-5 py-1 border  rounded-full hover:scale-105">
            Yes
          </button>
          <button className="ml-3  mt-5 px-4 py-1 border  rounded-full hover:scale-105">
            No
          </button>
        </footer>
      </div>
    </section>
  );
};

export default Quicklogindetail;
