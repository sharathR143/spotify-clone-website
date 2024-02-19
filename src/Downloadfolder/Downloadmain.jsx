import React from "react";
import micro from "../img/google.svg";
const Downloadmain = () => {
  return (
    <section className="bg-green-400 pb-24 sm:pb-40  w-96 sm:w-auto">
      <div className=" text-center mx-auto md:mx-20 lg:mx-48 pt-10 ">
        <div className="flex justify-center relative  pb-5 ">
          <svg
            width="150px"
            height="150px"
            viewBox="0 0 350 206"
            version="1.1"
            className="">
            <title>laptop-large</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g
              id="Install-Page"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd">
              <g
                id="b2-desktop-1"
                transform="translate(-942.000000, -211.000000)">
                <g
                  id="laptop-animation-large"
                  transform="translate(942.000000, 211.000000)">
                  <g id="laptop-large">
                    <rect
                      id="outer"
                      fill="#3A3A3A"
                      x="29.3334543"
                      y="0"
                      width="289.14405"
                      height="190.855086"
                      rx="3.4155871"></rect>
                    <polygon
                      id="screen"
                      fill="#616467"
                      points="48.1370017 175.430747 299.99515 175.430747 299.99515 17.613464 48.1370017 17.613464"></polygon>
                    <g id="base" transform="translate(0.000000, 190.709728)">
                      <path
                        d="M0.0671929122,0.849159952 C0.0300832902,0.38018186 0.375831694,0 0.854466289,0 L349.051736,0 C349.523645,0 349.832097,0.376057966 349.727279,0.82785953 C349.727279,0.82785953 347.51914,14.6188641 333.02973,14.6188641 L15.0298447,14.6188641 C0.363117499,14.6188641 0.0671929122,0.849159952 0.0671929122,0.849159952 Z"
                        fill="#2F2E2E"></path>
                      <rect
                        id="indent"
                        fill="#212121"
                        x="155.366323"
                        y="0.332246912"
                        width="39.5055393"
                        height="2.6579753"></rect>
                    </g>
                    <rect
                      id="rounded-rectangle"
                      fill="#212121"
                      x="169.973413"
                      y="8.97066663"
                      width="9.98231717"
                      height="1.51292943"
                      rx="0.756464715"></rect>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <div className="relative ">
            <svg
              width="35px"
              height="35px"
              viewBox="-1 -2 50 50"
              version="1.1"
              className="absolute bottom-10 left-[-95px]  top-14 ">
              <path
                d="M23.6119048,45.9261122 C36.2815799,45.9261122 46.552381,35.6493042 46.552381,22.972219 C46.552381,10.2951338 36.2815799,0.0183257301 23.6119048,0.0183257301 C10.9422296,0.0183257301 0.671428571,10.2951338 0.671428571,22.972219 C0.671428571,35.6493042 10.9422296,45.9261122 23.6119048,45.9261122 Z"
                id="Oval-37"
                stroke="#19E68C"
                stroke-width="3"
                fill="none"
                className=" "></path>
            </svg>

            <svg
              width="14px"
              height="14px"
              viewBox="15 16 17 14"
              version="1.1"
              className="absolute bottom-10 left-[-85px]   top-[65px]  ">
              <path
                d="M17.4571429,23.7547569 C17.4571429,23.7547569 18.0490752,24.4211864 18.7821297,25.2464989 L20.5856265,27.2769734 C20.9500699,27.6872835 21.5348482,27.6893774 21.9035538,27.2681837 L29.9635722,18.0607596"
                id="Path-55"
                stroke="#19E68C"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"></path>
            </svg>
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold">Download Spotify</h1>
        <p className="mt-10  p-8 sm:p-0 text-lg sm:text-m font-semibold ">
          Play millions of songs and podcasts on your device.
        </p>
        <div className="flex justify-center pt-10 pb-5   ">
          <img
            src={micro}
            alt=""
            className="w-[350px]  sm:w-72    hover:translate-y-1 duration-200   cursor-pointer "
          />
        </div>
        <p className="underline pt-16 sm:pt-0 sm:mt-5 font-semibold">
          <a href="/">Download directly from Spotify</a>
        </p>
      </div>
    </section>
  );
};

export default Downloadmain;
