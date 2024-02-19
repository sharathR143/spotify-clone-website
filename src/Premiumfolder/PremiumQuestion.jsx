import { useState } from "react";
import React from "react";

const PremiumQuestion = () => {
  const [isPopup1, setIsPopup1] = useState(false);
  const [isPopup2, setIsPopup2] = useState(false);
  const [isPopup3, setIsPopup3] = useState(false);
  const [isPopup4, setIsPopup4] = useState(false);
  const [isPopup5, setIsPopup5] = useState(false);
  const [isPopup6, setIsPopup6] = useState(false);
  const [isPopup7, setIsPopup7] = useState(false);
  const [isPopup8, setIsPopup8] = useState(false);
  return (
    <section className="  bg-zinc-900 pt-10 pb-20  w-96 sm:w-auto ">
      <aside className="text-center text-white  sm:mx-40 ">
        <h2 className="font-bold text-4xl ">Questions?</h2>
        <p className="mt-5 text-m font-semibold">We've got answers.</p>
        <p className="mt-4 font-semibold text-m">
          Get even more questions answered
          <a href="/" className="underline">
            here.
          </a>
        </p>
      </aside>
      <header className="text-white  xl:mx-44 lg:mx-5 md:mx-3 ml-3 sm:ml-0">
        <div className="hover:bg-zinc-800  border-b-2 border-zinc-800   mt-10 py-3 flex flex-col  ">
          <div class="flex justify-between hover:underline">
            <div className=" ">
              <a href="/" className="text-xl xl:pl-10 md:pl-3  font-medium">
                How does the Spotify Premium trial work?
              </a>
            </div>
            <div
              className="mt-2 mr-6 cursor-pointer"
              onClick={(e) => {
                setIsPopup1(!isPopup1);
                if (!isPopup1) {
                  e.target.style.transform = "rotate(180deg)";
                } else {
                  e.target.style.transform = "rotate(0deg)";
                }
              }}>
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                class="Svg-sc-ytk21e-0 ldgdZj sc-212df1af-2 biJcOI"
                viewBox="0 0 24 24"
                data-encore-id="icon"
                className="text-white "
                fill="white">
                <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414z"></path>
              </svg>
            </div>
          </div>
          <div className={isPopup1 ? "" : "hidden"}>
            <div className="ml-5 sm:ml-14 ">
              <h1 className="mt-5 font-semibold">
                If you've never had Premium before, you may be eligible for a
                free (or reduced rate) trial.
              </h1>
              <h1 className="mt-5 font-semibold">
                For trials, you'll still need to enter a valid payment method to
                sign up. We'll use this to confirm your country or region and
                take payments if you want to keep Premium after the offer ends.
              </h1>
              <h1 className="mt-5 font-semibold">
                We'll send you a reminder 7 days before your trial ends. Country
                restrictions and Terms apply.
              </h1>
            </div>
          </div>
        </div>
        <div className="hover:bg-zinc-800  border-b-2 border-zinc-800   py-3 flex flex-col ">
          <div class="flex justify-between hover:underline">
            <div>
              <a
                href="/"
                className="text-xl xl:pl-10 md:pl-3 pr-3 sm:pr-0 font-medium">
                How do I cancel my Premium plan?
              </a>
            </div>
            <div
              className="mt-2 mr-6 cursor-pointer"
              onClick={(e) => {
                setIsPopup2(!isPopup2);
                if (!isPopup2) {
                  e.target.style.transform = "rotate(180deg)";
                } else {
                  e.target.style.transform = "rotate(0deg)";
                }
              }}>
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                class="Svg-sc-ytk21e-0 ldgdZj sc-212df1af-2 biJcOI"
                viewBox="0 0 24 24"
                data-encore-id="icon"
                className="text-white"
                fill="white">
                <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414z"></path>
              </svg>
            </div>
          </div>
          <div className={isPopup2 ? "" : "hidden"}>
            <div className=" ml-5 sm:ml-14 ">
              <h1 className="mt-5 font-semibold">
                You can easily cancel your Premium plan any time online on your
                account page. Your Premium stays until your next billing date,
                then your account switches over to our free plan.
              </h1>
              <h1 className="mt-5 font-semibold">
                You'll keep all your playlists, saved music, and be able to
                listen with ads when your account is free.
              </h1>
            </div>
          </div>
        </div>
        <div className="hover:bg-zinc-800  border-b-2 border-zinc-800    py-3 flex flex-col">
          <div class="flex justify-between  hover:underline">
            <div>
              <a href="/" className="text-xl xl:pl-10 md:pl-3    font-medium">
                How does the Premium Duo plan work?
              </a>
            </div>
            <div
              className="mt-2 mr-6 cursor-pointer"
              onClick={(e) => {
                setIsPopup3(!isPopup3);
                if (!isPopup3) {
                  e.target.style.transform = "rotate(180deg)";
                } else {
                  e.target.style.transform = "rotate(0deg)";
                }
              }}>
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                class="Svg-sc-ytk21e-0 ldgdZj sc-212df1af-2 biJcOI"
                viewBox="0 0 24 24"
                data-encore-id="icon"
                className="text-white ml-7 sm:ml-0"
                fill="white">
                <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414z"></path>
              </svg>
            </div>
          </div>
          <div className={isPopup3 ? "" : "hidden"}>
            <div className="ml-5 sm:ml-14 ">
              <h1 className="mt-5 font-semibold">
                Premium Duo is a plan for a couple who lives together. Compared
                with having two full-price Premium Individual accounts, it's
                also cheaper. We'll ask for your address to ensure you live at
                the same address. You can invite a member to the plan right
                after the purchase. Each member has their own separate Premium
                account and can listen at the same time with their own account.
                All saved music and playlists are their own. The other account
                holder cannot see what you are listening to.
              </h1>
              <h1 className="mt-5 font-semibold">
                <a href="/">
                  <span className="underline">Read more</span> info about
                  Premium Duo.
                </a>
              </h1>
            </div>
          </div>
        </div>
        <div className="hover:bg-zinc-800  border-b-2 border-zinc-800    py-3 flex flex-col ">
          <div class="flex justify-between hover:underline">
            <div>
              <a href="/" className="text-xl xl:pl-10 md:pl-3  font-medium">
                How does the Premium Family plan work?
              </a>
            </div>
            <div
              className="mt-2 mr-6 cursor-pointer"
              onClick={(e) => {
                setIsPopup4(!isPopup4);
                if (!isPopup4) {
                  e.target.style.transform = "rotate(180deg)";
                } else {
                  e.target.style.transform = "rotate(0deg)";
                }
              }}>
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                class="Svg-sc-ytk21e-0 ldgdZj sc-212df1af-2 biJcOI"
                viewBox="0 0 24 24"
                data-encore-id="icon"
                className="text-white ml-2 sm:ml-0"
                fill="white">
                <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414z"></path>
              </svg>
            </div>
          </div>
          <div className={isPopup4 ? "" : "hidden"}>
            <div className="ml-5 sm:ml-14 ">
              <h1 className="mt-5 font-semibold">
                Premium Family is a plan for up to 6 family members who live
                together. Compared with everyone having their own full-price
                Premium Individual account, it's also cheaper. We will ask for
                your address to ensure you live at the same address. You can
                invite members to the plan right after the purchase. Each member
                has their own separate Premium account and can listen at the
                same time with their own account. All saved music and playlists
                are their own. Other account holders cannot see what you are
                listening to.
              </h1>
              <h1 className="mt-5 font-semibold">
                <a href="/">
                  <span className="underline">Read more</span> info about
                  Premium Family.
                </a>
              </h1>
            </div>
          </div>
        </div>

        <div className="hover:bg-zinc-800  border-b-2 border-zinc-800    py-3 flex flex-col  ">
          <div class="flex justify-between hover:underline">
            <div className=" ">
              <a href="/" className="text-xl xl:pl-10 md:pl-3   font-medium">
                How does the Premium Student Plan work?
              </a>
            </div>
            <div
              className="mt-2 mr-6 cursor-pointer"
              onClick={(e) => {
                setIsPopup5(!isPopup5);
                if (!isPopup5) {
                  e.target.style.transform = "rotate(180deg)";
                } else {
                  e.target.style.transform = "rotate(0deg)";
                }
              }}>
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                class="Svg-sc-ytk21e-0 ldgdZj sc-212df1af-2 biJcOI"
                viewBox="0 0 24 24"
                data-encore-id="icon"
                className="text-white "
                fill="white">
                <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414z"></path>
              </svg>
            </div>
          </div>
          <div className={isPopup5 ? "" : "hidden"}>
            <div className="ml-5 sm:ml-14 ">
              <h1 className="mt-5 font-semibold">
                If you are a student enrolled at an accredited college or
                university, and above the age of 18, then yes. You can get
                Premium Student for up to 4 years. Student plan holders don't
                have audiobook listening time included in their Premium plan.
              </h1>
              <p className="mt-5 font-semibold">
                <a href="/" className="underline mr-1">
                  Read more
                </a>
                info about Premium Student.
              </p>
            </div>
          </div>
        </div>
        <div className="hover:bg-zinc-800  border-b-2 border-zinc-800   py-3 flex flex-col ">
          <div class="flex justify-between hover:underline">
            <div>
              <a href="/" className="text-xl xl:pl-10 md:pl-3   font-medium">
                How much is Spotify Premium in USA?
              </a>
            </div>
            <div
              className="mt-2 mr-6 cursor-pointer"
              onClick={(e) => {
                setIsPopup6(!isPopup6);
                if (!isPopup6) {
                  e.target.style.transform = "rotate(180deg)";
                } else {
                  e.target.style.transform = "rotate(0deg)";
                }
              }}>
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                class="Svg-sc-ytk21e-0 ldgdZj sc-212df1af-2 biJcOI"
                viewBox="0 0 24 24"
                data-encore-id="icon"
                className="text-white ml-7 sm:ml-0"
                fill="white">
                <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414z"></path>
              </svg>
            </div>
          </div>
          <div className={isPopup6 ? "" : "hidden"}>
            <div className="ml-5 sm:ml-14 ">
              <h1 className="mt-5 font-semibold">
                The Spotify Premium prices in USA are different depending on
                which Premium plan you choose: The Spotify Premium Individual
                plan costs $10.99 per month, the Premium Duo plan costs $14.99
                per month, the Premium Family plan costs $16.99 per month, the
                Premium Student plan costs $5.99 per month. If you've never had
                a Premium plan before, you may be eligible for a free (or
                reduced rate) trial. Country restrictions and terms apply.
              </h1>
            </div>
          </div>
        </div>
        <div className="hover:bg-zinc-800  border-b-2 border-zinc-800    py-3 flex flex-col">
          <div class="flex justify-between  hover:underline">
            <div>
              <a href="/" className="text-xl xl:pl-10 md:pl-3   font-medium">
                How does audiobook listening time work for Premium Individual?
              </a>
            </div>
            <div
              className="mt-2 mr-6 cursor-pointer"
              onClick={(e) => {
                setIsPopup7(!isPopup7);
                if (!isPopup7) {
                  e.target.style.transform = "rotate(180deg)";
                } else {
                  e.target.style.transform = "rotate(0deg)";
                }
              }}>
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                class="Svg-sc-ytk21e-0 ldgdZj sc-212df1af-2 biJcOI"
                viewBox="0 0 24 24"
                data-encore-id="icon"
                className="text-white ml-2 sm:ml-0"
                fill="white">
                <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414z"></path>
              </svg>
            </div>
          </div>
          <div className={isPopup7 ? "" : "hidden"}>
            <div className="ml-5 sm:ml-14 ">
              <h1 className="mt-5 font-semibold">
                With a Premium Individual plan, you now have access to 15 hours
                of audiobook listening time per month. Unused listening hours
                expire at the end of each month and do not carry over. The
                audiobook subscriber catalog includes over 200,000 titles across
                many genres and classics.{" "}
                <a href="/" className="underline">
                  Learn more.
                </a>
              </h1>
            </div>
          </div>
        </div>
        <div className="hover:bg-zinc-800  py-3 flex flex-col ">
          <div class="flex justify-between hover:underline">
            <div>
              <a href="/" className="text-xl xl:pl-10 md:pl-3  font-medium">
                How does audiobook listening time work for Premium Duo and
                Family?
              </a>
            </div>
            <div
              className="mt-2 mr-6 cursor-pointer"
              onClick={(e) => {
                setIsPopup8(!isPopup8);
                if (!isPopup8) {
                  e.target.style.transform = "rotate(180deg)";
                } else {
                  e.target.style.transform = "rotate(0deg)";
                }
              }}>
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                class="Svg-sc-ytk21e-0 ldgdZj sc-212df1af-2 biJcOI"
                viewBox="0 0 24 24"
                data-encore-id="icon"
                className="text-white ml-2 sm:ml-0"
                fill="white">
                <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414z"></path>
              </svg>
            </div>
          </div>
          <div className={isPopup8 ? "" : "hidden"}>
            <div className="ml-5 sm:ml-14 ">
              <h1 className="mt-5 font-semibold">
                Only Duo or Family plan managers now have access to 15 hours of
                audiobook listening time every month from our audiobook
                subscriber catalog. Unused listening hours expire at the end of
                each month and do not carry over. Plan members don't have
                access.
                <a href="/">
                  <span className="underline">Learn more.</span>
                </a>
              </h1>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default PremiumQuestion;
