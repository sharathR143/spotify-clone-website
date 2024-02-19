import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useState } from "react";
let Nav = () => {
  const location = useLocation();
  let [open, setOpen] = useState(false);

  let handle = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`sm:flex  w-96 sm:w-auto  justify-between xl:justify-around  h-20  sm:h-auto relative
    ${location.pathname === "/SUPPORT" ? "" : "bg-black"}`}>
      <div className="pt-4  sm:pt-4 text-white  ">
        <div className="flex  text-xl  sm:text-3xl  sm:mb-3 cursor-pointer ">
          <div className="flex  md:ml-6 lg:ml-10 xl:ml-0">
            <svg
              fill="#000000"
              // height="50px"
              // width="60px"
              version="1.1"
              className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] ml-5 sm:ml-0"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 186.84 186.84"
              stroke="#000000">
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
                <g>
                  <path d="M128.875,120.962c-31.094-14.37-74.616-8.014-76.453-7.737c-4.096,0.619-6.915,4.44-6.296,8.536 c0.619,4.096,4.443,6.912,8.536,6.296c0.406-0.062,40.867-5.982,67.92,6.521c1.018,0.471,2.089,0.694,3.142,0.694 c2.834-0.001,5.546-1.614,6.813-4.355C134.274,127.157,132.635,122.7,128.875,120.962z"></path>{" "}
                  <path d="M137.614,93.953c-35.313-16.319-84.833-9.087-86.924-8.772c-4.094,0.619-6.911,4.438-6.294,8.532 c0.616,4.095,4.438,6.916,8.531,6.301c0.468-0.071,47.206-6.857,78.394,7.556c1.02,0.471,2.089,0.694,3.142,0.694 c2.834-0.001,5.546-1.614,6.814-4.356C143.014,100.148,141.374,95.691,137.614,93.953z"></path>{" "}
                  <path d="M143.49,65.736c-39.006-18.027-93.79-10.028-96.103-9.679c-4.094,0.619-6.911,4.438-6.294,8.532s4.44,6.919,8.531,6.3 c0.523-0.079,52.691-7.657,87.573,8.463c1.018,0.471,2.089,0.694,3.142,0.694c2.834,0,5.546-1.614,6.813-4.355 C148.89,71.93,147.25,67.474,143.49,65.736z"></path>{" "}
                  <path d="M93.423,0.001C41.909,0.001,0,41.909,0,93.42c0,51.514,41.909,93.424,93.423,93.424c51.513,0,93.422-41.91,93.422-93.424 C186.845,41.909,144.936,0.001,93.423,0.001z M93.423,171.844C50.18,171.844,15,136.664,15,93.42 c0-43.241,35.18-78.42,78.423-78.42c43.242,0,78.422,35.179,78.422,78.42C171.845,136.664,136.665,171.844,93.423,171.844z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
            <span className="font-bold ml-3  md:mt-1 sm:mr-0">spotify</span>
          </div>
        </div>
      </div>
      <aside>
        <div className="absolute right-3 top-5  text-white  md:hidden ">
          <button className=" mt-1">
            <FiAlignJustify className="w-10 h-7" onClick={handle} />
          </button>
        </div>
        <div
          className={` bg-black sm:hidden z-50 pt-5  absolute  w-full h-[120vh] sm:w-96 sm:h-96 right-0 top-0    text-white  ${
            open ? "" : "hidden"
          }`}>
          <Link
            to="/PREMIUM"
            className="mr-7 font-bold ml-6  mt-5 text-4xl  hover:text-green-500 ">
            Premium
          </Link>
          <button className=" ml-[126px] ">
            <FiX className="h-7 w-10 font-bold" onClick={handle} />
          </button>
          <Link
            to="/SUPPORT"
            className="mr-7 font-bold text-4xl block ml-6 mt-10 mb-10 hover:text-green-500">
            Support
          </Link>
          <Link
            to="/DOWNLOAD"
            className="mr-8 font-bold  text-4xl ml-6  mb-10 block hover:text-green-500">
            Download
          </Link>
          <span className="bg-white"></span>
          <Link
            to="/SIGNUP"
            className="mr-8 font-semibold  text-2xl block ml-6  mb-10 hover:text-green-500">
            Sign up
          </Link>
          <Link
            to="/LOGIN"
            className="mr-8  font-semibold text-2xl block ml-6  mb-4 hover:text-green-500">
            Login
          </Link>

          <div className="pt-4  sm:pt-4 text-white mt-[200px] ">
            <div className="flex  text-xl  sm:text-3xl  sm:mb-3 cursor-pointer ">
              <div className="flex  md:ml-6 lg:ml-10 xl:ml-0">
                <svg
                  fill="#000000"
                  // height="50px"
                  // width="60px"
                  version="1.1"
                  className="w-[60px] h-[50px] sm:w-[60px] sm:h-[60px] ml-5 sm:ml-0"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 186.84 186.84"
                  stroke="#000000">
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
                    <g>
                      <path d="M128.875,120.962c-31.094-14.37-74.616-8.014-76.453-7.737c-4.096,0.619-6.915,4.44-6.296,8.536 c0.619,4.096,4.443,6.912,8.536,6.296c0.406-0.062,40.867-5.982,67.92,6.521c1.018,0.471,2.089,0.694,3.142,0.694 c2.834-0.001,5.546-1.614,6.813-4.355C134.274,127.157,132.635,122.7,128.875,120.962z"></path>{" "}
                      <path d="M137.614,93.953c-35.313-16.319-84.833-9.087-86.924-8.772c-4.094,0.619-6.911,4.438-6.294,8.532 c0.616,4.095,4.438,6.916,8.531,6.301c0.468-0.071,47.206-6.857,78.394,7.556c1.02,0.471,2.089,0.694,3.142,0.694 c2.834-0.001,5.546-1.614,6.814-4.356C143.014,100.148,141.374,95.691,137.614,93.953z"></path>{" "}
                      <path d="M143.49,65.736c-39.006-18.027-93.79-10.028-96.103-9.679c-4.094,0.619-6.911,4.438-6.294,8.532s4.44,6.919,8.531,6.3 c0.523-0.079,52.691-7.657,87.573,8.463c1.018,0.471,2.089,0.694,3.142,0.694c2.834,0,5.546-1.614,6.813-4.355 C148.89,71.93,147.25,67.474,143.49,65.736z"></path>{" "}
                      <path d="M93.423,0.001C41.909,0.001,0,41.909,0,93.42c0,51.514,41.909,93.424,93.423,93.424c51.513,0,93.422-41.91,93.422-93.424 C186.845,41.909,144.936,0.001,93.423,0.001z M93.423,171.844C50.18,171.844,15,136.664,15,93.42 c0-43.241,35.18-78.42,78.423-78.42c43.242,0,78.422,35.179,78.422,78.42C171.845,136.664,136.665,171.844,93.423,171.844z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <span className="font-bold ml-3 mt-1 text-2xl ">spotify</span>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mt-6 sm:visible  lg:ml-16  lg:mr-5 xl:mr-0 invisible  ">
          <div className="text-m font-bold text-white  sm:mb-5">
            <Link to="/PREMIUM" className="mr-7  hover:text-green-500">
              Premium
            </Link>

            <Link to="/SUPPORT" className="mr-7  hover:text-green-500">
              Support
            </Link>
            <Link to="/DOWNLOAD" className="mr-8   hover:text-green-500">
              Download
            </Link>
            <Link
              to="/SIGNUP"
              className="mr-8 pl-8 border-l-2 border-gray-50   hover:text-green-500">
              Sign up
            </Link>
            <Link to="/LOGIN" className="mr-8  hover:text-green-500">
              Login
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Nav;
