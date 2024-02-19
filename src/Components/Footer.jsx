import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const yearEl = document.querySelector("#year");
    const currentyear = new Date().getFullYear();
    console.log("current year", currentyear);
    yearEl.textContent = currentyear;
  }, []);

  return (
    <section className="bg-black   w-96 sm:w-auto ">
      <div className="sm:flex md:block  lg:flex justify-between sm:py-20 lg:py-20 md:py-10  sm:mb-10  sm:mx-28 xl:mx-28 lg:mx-5 md:mx-0  ">
        <div className=" md:block lg:flex  justify-between  ">
          <div className=" md:block lg:flex text-3xl  cursor-pointer ml-0 xl:ml-20 lg:ml-0 md:ml-2  pt-5 sm:pt-0">
            <svg
              fill="#000000"
              height="50px"
              width="60px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 186.84 186.84"
              stroke="#000000"
              className=" inline-block">
              <g id="SVGRepo_bgCarrier">
                <rect
                  x="0"
                  y="0"
                  width="186.84"
                  height="186.84"
                  rx="93.42"
                  fill="#ffffff"></rect>
              </g>
              <g id="SVGRepo_tracerCarrier"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M128.875,120.962c-31.094-14.37-74.616-8.014-76.453-7.737c-4.096,0.619-6.915,4.44-6.296,8.536 c0.619,4.096,4.443,6.912,8.536,6.296c0.406-0.062,40.867-5.982,67.92,6.521c1.018,0.471,2.089,0.694,3.142,0.694 c2.834-0.001,5.546-1.614,6.813-4.355C134.274,127.157,132.635,122.7,128.875,120.962z"></path>{" "}
                  <path d="M137.614,93.953c-35.313-16.319-84.833-9.087-86.924-8.772c-4.094,0.619-6.911,4.438-6.294,8.532 c0.616,4.095,4.438,6.916,8.531,6.301c0.468-0.071,47.206-6.857,78.394,7.556c1.02,0.471,2.089,0.694,3.142,0.694 c2.834-0.001,5.546-1.614,6.814-4.356C143.014,100.148,141.374,95.691,137.614,93.953z"></path>{" "}
                  <path d="M143.49,65.736c-39.006-18.027-93.79-10.028-96.103-9.679c-4.094,0.619-6.911,4.438-6.294,8.532s4.44,6.919,8.531,6.3 c0.523-0.079,52.691-7.657,87.573,8.463c1.018,0.471,2.089,0.694,3.142,0.694c2.834,0,5.546-1.614,6.813-4.355 C148.89,71.93,147.25,67.474,143.49,65.736z"></path>{" "}
                  <path d="M93.423,0.001C41.909,0.001,0,41.909,0,93.42c0,51.514,41.909,93.424,93.423,93.424c51.513,0,93.422-41.91,93.422-93.424 C186.845,41.909,144.936,0.001,93.423,0.001z M93.423,171.844C50.18,171.844,15,136.664,15,93.42 c0-43.241,35.18-78.42,78.423-78.42c43.242,0,78.422,35.179,78.422,78.42C171.845,136.664,136.665,171.844,93.423,171.844z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
            <span className="font-semibold text-white  ">Spotify</span>
          </div>
          <div className="sm:flex   justify-between md:mt-10 lg:mt-0 mt-10 ml-5 sm:mt-0 sm:ml-0 ">
            <div className="sm:ml-20 xl:ml-20 lg:ml-10 md:ml-5">
              <h3 className="text-gray-400 font-medium mb-4">COMPANY</h3>
              <ol className="text-white font-semibold leading-10 ">
                <li className="hover:text-green-500">
                  <a href="/"> About</a>
                </li>
                <li className="hover:text-green-500">
                  <a href="/"> Jobs</a>
                </li>
                <li className="hover:text-green-500">
                  <a href="/"> For the Record</a>
                </li>
              </ol>
            </div>
            <div className="sm:ml-20 xl:ml-20 lg:ml-10 md:ml-5 mt-14 sm:mt-0">
              <h3 className="text-gray-400 font-medium  mb-4">COMMUNITIES</h3>
              <ol className="text-white font-semibold leading-10 ">
                <li className="hover:text-green-500">
                  <a href="/">For Artists</a>
                </li>
                <li className="hover:text-green-500">
                  <a href="/">Developers</a>
                </li>
                <li className="hover:text-green-500">
                  <a href="/">Advertising</a>
                </li>
                <li className="hover:text-green-500">
                  <a href="/">Investors</a>
                </li>
                <li className="hover:text-green-500">
                  <a href="/">Vendors</a>
                </li>
              </ol>
            </div>
            <div className="sm:ml-20 xl:ml-20 lg:ml-10 md:mr-28 lg:mr-0 mt-14 sm:mt-0">
              <h3 className="text-gray-400 font-medium  mb-4">USEFUL LINKS</h3>
              <ol className="text-white font-semibold leading-10">
                <li className="hover:text-green-500">
                  <a href="/">Support</a>
                </li>
                <li className="hover:text-green-500">
                  <a href="/">Web Player</a>
                </li>
                <li className="hover:text-green-500">
                  <a href="/">Free Mobile App</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="ml-4 sm:ml-0 sm:mr-16 md:ml-5 lg:ml-0  md:mt-32 lg:mt-0 mt-20 sm:mt-0">
          <ol className="flex gap-3">
            <li className="">
              <a href="/" className="">
                <div className="bg-white p-2 rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 448"
                    fill="#222326"
                    width="30px"
                    height="30px"
                    className="bg-white  rounded-lg hover:bg-green-500 ">
                    <path d="M0 230.126v-.793c.016 55.974.294 63.853 1.344 87.03 3.733 81.349 48.87 126.56 130.293 130.293C155.55 447.739 163.165 448 224 448H0V230.126zm229.242-189.75c55.006.014 62.368.256 85.291 1.307 60.704 2.762 89.059 31.565 91.822 91.821 1.05 22.905 1.275 30.266 1.287 85.272v10.487c-.014 55.022-.255 62.365-1.287 85.27-2.782 60.2-31.062 89.059-91.822 91.822-23.159 1.06-30.399 1.297-87.005 1.306h-7.054c-56.572-.009-63.848-.245-86.989-1.306-60.853-2.782-89.058-31.715-91.821-91.84-1.05-22.905-1.292-30.249-1.306-85.271v-8.77c.01-56.572.263-63.83 1.306-86.989 2.781-60.237 31.061-89.058 91.821-91.821 22.923-1.032 30.268-1.274 85.273-1.287h10.484zm-5.242 68.6c-63.523 0-115.024 51.501-115.024 115.024S160.477 339.043 224 339.043 339.024 287.54 339.024 224c0-63.523-51.501-115.024-115.024-115.024zm0 40.357c41.235 0 74.667 33.432 74.667 74.667 0 41.253-33.432 74.667-74.667 74.667S149.333 265.253 149.333 224c0-41.235 33.432-74.667 74.667-74.667zM343.579 77.56c-14.859 0-26.899 12.04-26.899 26.88s12.04 26.88 26.899 26.88c14.84 0 26.861-12.04 26.861-26.88s-12.021-26.88-26.861-26.88zM448 224v224H224c60.835 0 68.47-.261 92.363-1.344 81.274-3.733 126.597-48.87 130.274-130.293C447.74 292.469 448 284.835 448 224zm-1.344-92.344c-3.659-81.275-48.85-126.56-130.275-130.293C293.187.294 285.307.016 229.333 0H448v224c0-60.835-.261-68.45-1.344-92.344zM0 0h218.667c-55.973.016-63.834.294-87.011 1.344C50.306 5.077 5.096 50.214 1.363 131.637.299 154.722.019 162.62 0 217.873V0z" />
                  </svg>
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="bg-white p-2 rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 448"
                    fill="#222326"
                    width="30px"
                    height="30px"
                    className="bg-white rounded-lg hover:bg-green-500">
                    <path d="M448 0v448H0V0h448zM299.75 64c-22.333 0-41.375 7.875-57.125 23.625S219 122.417 219 144.75c0 6 .667 12.167 2 18.5-33-1.667-63.958-9.958-92.875-24.875S74.667 103.583 54.5 78.75c-7.333 12.5-11 26.083-11 40.75 0 13.833 3.25 26.667 9.75 38.5 6.5 11.833 15.25 21.417 26.25 28.75-12.717-.49-24.637-3.77-35.76-9.841L43 176.5v1c0 19.5 6.125 36.625 18.375 51.375s27.708 24.042 46.375 27.875a83.54 83.54 0 01-21.25 2.75c-4.667 0-9.75-.417-15.25-1.25 5.167 16.167 14.667 29.458 28.5 39.875 13.833 10.417 29.5 15.792 47 16.125-29.333 23-62.75 34.5-100.25 34.5-7.167 0-13.667-.333-19.5-1C64.5 371.917 105.833 384 151 384c28.667 0 55.583-4.542 80.75-13.625s46.667-21.25 64.5-36.5 33.208-32.792 46.125-52.625c12.917-19.833 22.542-40.542 28.875-62.125 6.333-21.583 9.5-43.208 9.5-64.875 0-4.667-.083-8.167-.25-10.5 15.833-11.5 29.333-25.417 40.5-41.75-15.5 6.667-31 10.833-46.5 12.5C392 104 403.833 89.167 410 70c-16 9.5-33.083 16-51.25 19.5-16-17-35.667-25.5-59-25.5z" />
                  </svg>
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="bg-white p-2 rounded-full ">
                  <svg
                    // xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 448"
                    fill="#222326"
                    width="30px"
                    height="30px"
                    className=" bg-white rounded-lg hover:bg-green-500">
                    <path d="M448 0v448H0V0h448zM276.877 16h-1.127c-28.833 0-51.917 8.542-69.25 25.625-17.16 16.912-25.826 40.645-25.997 71.197l-.003.928v54.5h-63.75v74h63.75V432H257V242.25h63.5l9.75-74H257V121c0-12 2.5-21 7.5-27 4.923-5.908 14.37-8.907 28.342-8.998L293.5 85h39.25V19c-13.085-1.938-31.336-2.938-54.754-2.997l-1.12-.003z" />
                  </svg>
                </div>
              </a>
            </li>
          </ol>
        </div>
      </div>
      <footer className="pb-16 md:pb-5">
        <div className="text-gray-500 text-[12px] sm:text-sm mt-5 sm:mt-0  sm:mx-28   xl:mx-28 lg:mx-1  md:mx-0  flex justify-end ">
          <a href="/">
            <div className="sm:mr-20 mb-0 sm:mb-6  md:mr-2 xl:mr-16 ">
              <div className=" text-gray-600 flex ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="2em"
                  width="1em"
                  // xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 pb-1">
                  <path d="M256 32c-37.764.086-74.894 9.72-107.938 28.002l27.52 19.36 40.033-13.694 24.582 5.62 8.78 49.864 15.1-11.588 41.087-14.046 18.26 27.742-35.82 18.963-22.473 16.152-2.458 22.475-24.932 21.07-7.023 34.064-14.047 1.053 7.023-38.63-53.027-2.807-12.64 18.61-.1-.01v26.644l25.824 1.986 23.838 16.885-1.986 25.328 33.77 5.96-.36.76 53.004-30.558 90.88 59.098-20.51 48.548-32.685 20.156-61.143 77.965-13.498-3.845L262.216 365l-42.213-42.213 7.853-13.86-25.732-9.482-25.326-30.79-21.853-4.967L116.422 208H112l-5.117 26.746-3.64-39.146 5.267-29.147-.7-23.178L97.247 98.2C55.516 140.12 32.06 196.847 32 256c0 123.712 100.288 224 224 224 82.413-.028 158.155-45.308 197.195-117.887L442.82 298.14l-5.62-36.17-34.06-27.392 6.67-37.926 15.803-20.367 37.555-5.05C428.766 87.086 346.913 32.072 256 32zm89.047 48H368v48l-32 16v-23.836zm-122.76 166.518l29.85 4.918-4.213 6.32-24.23-4.916z"></path>
                </svg>
                <p className="hover:text-green-500">India (English)</p>
              </div>
            </div>
          </a>
        </div>
        <div className="flex justify-evenly  mt-5 sm:mt-0  ">
          <div className="md:ml-5 lg:ml-0  ml-5 sm:ml-0 ">
            <ol className="text-gray-500 text-sm  ">
              <li className="inline-block mr-10 sm:mr-5 hover:text-green-500 ">
                <a href="/">Legal</a>
              </li>
              <li className="inline-block  mr-0 sm:mr-5 hover:text-green-500">
                <a href="/">Privacy Center</a>
              </li>
              <li className="inline-block mt-5 sm:mt-0 mr-10 sm:mr-5 hover:text-green-500">
                <a href="/">Privacy Policy</a>
              </li>
              <li className="inline-block  mr-0 sm:mr-5  hover:text-green-500">
                <a href="/">Cookies</a>
              </li>
              <li className="inline-block mt-5 sm:mt-0 mr-10 sm:mr-5 hover:text-green-500">
                <a href="/">About Ads</a>
              </li>
              <li className="inline-block  mr-0 sm:mr-5 hover:text-green-500 ">
                <a href="/">Accessibility</a>
              </li>
              <li className="inline-block mr-5 hover:text-green-500  ">
                <a href="/" className="invisible xl:visible ">
                  Notice at Collection
                </a>
              </li>
              <li className="inline-block mr-5 md:mr-0 lg:mr-5 hover:text-green-500">
                <a href="/" className="invisible xl:visible">
                  Cookies Settings
                </a>
              </li>
            </ol>
          </div>
          <div className="text-gray-500 text-sm w-96 sm:auto  md:w-72 lg:w-auto  ">
            <p className="sm:ml-20    ">
              &copy;
              <span id="year" className="mr-1 sm:mr-0">
                2030
              </span>
              Spotify AB
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
