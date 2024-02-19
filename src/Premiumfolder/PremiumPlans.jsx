import React from "react";
import card1 from "../img/card1.svg";
import card2 from "../img/card2.svg";
import card3 from "../img/card3.svg";
import card4 from "../img/card4png.png";
import card5 from "../img/card5.png";

const PremiumPlans = () => {
  let formhandle = () => {
    window.location.assign("/LOGIN");
  };
  return (
    <section className="bg-zinc-900  pb-20  w-96 sm:w-auto  ">
      <div className="xl:mx-28 lg:mx-44 pt-10 text-white ">
        <h1 className="text-5xl sm:text-4xl mx-5 sm:mx-0 text-center font-bold">
          Affordable plans for any situation
        </h1>
        <p className="text-center pt-3 font-medium mx-7 sm:mx-0 mt-3 sm:mt-0">
          Choose a Premium plan and listen to ad-free music without limits on
          your phone, speaker, and other devices. Pay in various ways. Cancel
          anytime.
        </p>
        <div className="flex pb-10  justify-center pt-5">
          <div className="mr-2">
            <img src={card1} alt="" className="bg-white rounded p-1" />
          </div>

          <div className="mr-2">
            <img src={card2} alt="" className="bg-white  rounded p-1 " />
          </div>

          <div className="mr-2 ">
            <img src={card3} alt="" className="bg-white  rounded p-1 " />
          </div>

          <div className="mr-2 ">
            <img
              src={card4}
              alt=""
              className="w-[35px] h-[28px] bg-white rounded p-1"
            />
          </div>

          <div className="mr-2">
            <img
              src={card5}
              alt=""
              className="w-[35px] h-[28px] bg-white rounded p-1 "
            />
          </div>
        </div>
      </div>
      <div
        className="border-solid text-white mx-5 sm:mx-40 rounded-xl   border-4 border-l-fuchsia-600 border-r-cyan-700  border-t-fuchsia-600 border-b-cyan-700 
   ">
        <h1 className="text-lg text-center mt-5 font-semibold  mr-5">
          All Premium plans include
        </h1>
        <div className="mt-5  text-center ">
          <ul className=" lg:mx-32 xl:mx-96 text-start pl-16 sm:pl-24 pb-5  ">
            <li className="flex">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                version="1.2"
                baseProfile="tiny"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 mr-1">
                <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
              </svg>
              <p className="text-m">Ad-free music listening</p>
            </li>
            <li className="flex">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                version="1.2"
                baseProfile="tiny"
                viewBox="0 0 24 24"
                height="1rem"
                width="1rem"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 mr-1">
                <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
              </svg>
              <p className="text-m">Download to listen offline</p>
            </li>
            <li className="flex">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                version="1.2"
                baseProfile="tiny"
                viewBox="0 0 24 24"
                height="1rem"
                width="1rem"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 mr-1">
                <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
              </svg>
              <p className="text-m">Play songs in any order</p>
            </li>
            <li className="flex">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                version="1.2"
                baseProfile="tiny"
                viewBox="0 0 24 24"
                height="1rem"
                width="1rem"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 mr-1">
                <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
              </svg>
              <p className="text-m">High audio quality</p>
            </li>
            <li className="flex">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                version="1.2"
                baseProfile="tiny"
                viewBox="0 0 24 24"
                height="1rem"
                width="1rem"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 mr-1">
                <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
              </svg>
              <p className="text-m">Listen with friends in real time</p>
            </li>
            <li className="flex">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                version="1.2"
                baseProfile="tiny"
                viewBox="0 0 24 24"
                height="1rem"
                width="1rem"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 mr-1">
                <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
              </svg>
              <p className="text-m">Organize listening queue</p>
            </li>
          </ul>
        </div>
      </div>

      <aside className=" xl:grid xl:grid-cols-3   gap-6 mx-5 sm:mx-40 lg:mx-72 xl:mx-40  justify-center     ">
        <div className="  text-white rounded-xl  border-pink-200 border-4 mt-10    ">
          <h2 className="ml-5 bg-pink-200 w-36 text-black  py-2 font-semibold text-center rounded mt-3">
            Free For 1 Month
          </h2>
          <div className="flex justify-between  ">
            <h1 className="text-2xl font-bold ml-5 mt-2 ">
              Premium <p>Individual</p>
            </h1>
            <div className="mr-2 mt-4">
              <p className="text-end font-semibold text-xl">FREE </p>
              <p className="text-[13px]">FOR 1 MONTH</p>
            </div>
          </div>
          <div className="">
            <ul className="ml-10 mt-5">
              <li className="list-disc">1 Premium account</li>
              <li className="list-disc">Cancel anytime</li>
              <li className="list-disc">
                15 hours/month of listening time from our audiobooks subscriber
                catalog
              </li>
            </ul>
          </div>
          <div className="xl:mt-20 mt-10 text-center ">
            <button
              className="bg-red-300 w-72 md:w-96 xl:w-80 px-7 py-4 ml-3 sm:ml-0 sm:px-5 sm:py-3 rounded-full text-black font-semibold hover:scale-105 "
              onClick={formhandle}>
              Try free for 1 month
            </button>
            <p className="text-[13px] mt-4 mb-4">
              Free for 1 month, then $10.99 per month after. Offer only
              <p>available if you haven't tried Premium before. </p>
              <a href="/" className="underline">
                Terms apply.
              </a>
            </p>
          </div>
        </div>
        <div className="   text-white rounded-xl  border-amber-200 border-4 mt-10 ">
          <div className="flex justify-between ">
            <h1 className="text-2xl font-bold ml-5 mt-2 ">Premium Duo</h1>
            <div className="mr-2 mt-4">
              <p className="text-end font-semibold text-xl">$14.99</p>
              <p className="text-[13px]">PER MONTH</p>
            </div>
          </div>
          <div>
            <ul className="ml-10 mt-5">
              <li className="list-disc">2 Premium account</li>
              <li className="list-disc">Cancel anytime</li>
              <li className="list-disc">
                15 hours/month of listening time from our audiobooks subscriber
                catalog (plan manager only)
              </li>
            </ul>
          </div>
          <div className=" xl:mt-28  mt-10 text-center">
            <button
              className="bg-amber-300 w-72 md:w-96 xl:w-80   px-7 py-4 ml-3 sm:ml-0 sm:px-5 sm:py-3   rounded-full text-black font-semibold  hover:scale-105"
              onClick={formhandle}>
              Get Premium Duo
            </button>
            <p className="text-[13px] mt-4 mb-4">
              For couples who reside at the same address.
              <a href="/" className="underline">
                Terms apply.
              </a>
            </p>
          </div>
        </div>
        <div className="   text-white rounded-xl  border-cyan-100 border-4 mt-10 ">
          <div className="flex justify-between ">
            <h1 className="text-2xl font-bold ml-5 mt-2 ">Premium Family</h1>
            <div className="mr-2 mt-4">
              <p className="text-end font-semibold text-xl">$16.99</p>
              <p className="text-[13px]">PER MONTH</p>
            </div>
          </div>
          <div>
            <ul className="ml-10 mt-5">
              <li className="list-disc">Up to 6 Premium or Kids accounts</li>
              <li className="list-disc">Block explicit music</li>
              <li className="list-disc">Access to Spotify Kids</li>
              <li className="list-disc">Cancel anytime</li>
              <li className="list-disc">
                15 hours/month of listening time from our audiobooks subscriber
                catalog (plan manager only)
              </li>
            </ul>
          </div>
          <div className=" xl:mt-16 mt-10 text-center ">
            <button
              className="bg-blue-300 w-72 md:w-96 xl:w-80  px-7 py-4 ml-3 sm:ml-0 sm:px-5 sm:py-3 rounded-full text-black font-semibold  hover:scale-105 "
              onClick={formhandle}>
              Get Premium Family
            </button>
            <div className="">
              <p className="text-[13px] mt-4 mb-4 mx- sm:mx-0 inline sm:block  text-center">
                For up to 6 family members residing at the same address. <br />
                <a href="/" className="underline  ">
                  Terms apply.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="  text-white  border-purple-300 rounded-xl border-4   col-start-2  mt-6">
          <h2 className="ml-5 bg-purple-300 w-36 text-black  py-2 font-semibold text-center rounded mt-3">
            Free For 1 Month
          </h2>
          <div className="flex justify-between ">
            <h1 className="text-2xl font-bold ml-5 mt-2 ">Premium Student</h1>
            <div className="mr-2 mt-4 ">
              <p className="text-end font-semibold text-xl">FREE </p>
              <p className="text-[13px]">FOR 1 MONTH</p>
            </div>
          </div>
          <div>
            <ul className="ml-10 mt-5">
              <li className="list-disc">1 verified Premium account</li>
              <li className="list-disc">Discount for eligible students</li>
              <li className="list-disc">Access to Hulu</li>
              <li className="list-disc">Cancel anytime</li>
            </ul>
          </div>

          <div className=" xl:mt-20 mt-10 text-center ">
            <button
              className="bg-purple-300 w-72 md:w-96 xl:w-80 px-7 py-4 ml-6 sm:ml-0 sm:px-5 sm:py-3 rounded-full text-black font-semibold  hover:scale-105"
              onClick={formhandle}>
              Try free for 1 month
            </button>
            <div className="px-5 sm:mx-0  inline sm:block  ">
              <div className="text-[13px] mt-4 mb-4 mx-4 sm:mx-0 text-center ">
                Free for 1 month, then $5.99 per month after. Offer
                <p className="inline   ">
                  currently includes access to Hulu (With Ads) plan, subject
                </p>
                <p className="inline    ">
                  to eligibility. Offer available only to students at an{" "}
                </p>
                <p className="inline    ">
                  accredited higher education institution and if you haven't
                </p>
                tried Premium before.
                <a href="/" className="underline   ">
                  Terms apply.
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default PremiumPlans;
