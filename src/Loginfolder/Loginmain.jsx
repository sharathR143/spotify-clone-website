import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Loginmain = () => {
  const [visiable, setVisiable] = useState(false);
  let [email, setEmail] = useState();
  let [password, setPass] = useState();
  const [errors, setErrors] = useState({});

  let ChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  let ChangePass = (e) => {
    setPass(e.target.value);
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;
    // let pass = /^(?=.\d)(?=.*[a-z])(?=.*?[A-Z])[a-zA-Z0-9]{6,}$/;
    // let pass = [/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})$/];

    // Email validation
    if (!email) {
      errors.email = "Email or username required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    // Password validation
    if (!password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    }
    // else if (!pass.test(password)) {
    //   errors.password = "Password must be uniqe";
    //   isValid = false;
    //   return pass;
    // }

    setErrors(errors);
    return isValid;
  };
  let navi = useNavigate();
  let EnterHome = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navi("/ENTERHOME");
      // Form submission logic, for example, sending data to server
      console.log("Form is valid. Submitting...");
      console.log({ email, password });
    } else {
      console.log("Form is invalid. Cannot submit.");
    }
  };

  let handle = (e) => {
    e.preventDefault();
    window.location.assign("/SIGNUP");
  };
  return (
    <section className=" bg-gradient-to-t from-black to-neutral-900 pb-10">
      <aside className=" pt-5 pb-5 pl-5 bg-black">
        <div className="flex">
          <svg
            fill="#000000"
            height="50px"
            width="60px"
            version="1.1"
            className=" h-[40px] w-[30px] sm:h-[50px] sm:w-[60px]"
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
          <span className="font-bold text-white text-xl  sm:text-3xl mt-1">
            Spotify
          </span>
        </div>
      </aside>
      <section className=" sm:mx-10 lg:mx-32 xl:mx-96 bg-black  sm:mt-10 rounded-lg  ">
        <header className=" sm:mx-28 xl:mx-28    text-center pt-5 sm:pt-16">
          <h1 className=" font-bold text-3xl sm:text-5xl text-white lg:w-96  block  ml-7  sm:ml-10 lg:ml-20 text-start sm:text-center ">
            Log in to Spotify
          </h1>
          <div className="  text-white pb-8 mt-10 border-b border-white/35  mx-5 sm:mx-0 ">
            <a href="/" className="block ">
              <button className=" w-full  sm:w-80 py-3 mt-5 rounded-full font-bold  border border-white/30  relative hover:border-white">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" absolute  sm:ml-5  ml-3">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.1 12.2272C22.1 11.5182 22.0364 10.8363 21.9182 10.1818H12.5V14.05H17.8818C17.65 15.3 16.9455 16.3591 15.8864 17.0682V19.5772H19.1182C21.0091 17.8363 22.1 15.2727 22.1 12.2272Z"
                    fill="#4285F4"></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4998 21.9999C15.1998 21.9999 17.4635 21.1045 19.118 19.5772L15.8862 17.0681C14.9907 17.6681 13.8453 18.0227 12.4998 18.0227C9.89529 18.0227 7.69075 16.2636 6.90439 13.8999H3.56348V16.4908C5.20893 19.759 8.59075 21.9999 12.4998 21.9999Z"
                    fill="#34A853"></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.90455 13.9C6.70455 13.3 6.59091 12.6591 6.59091 12C6.59091 11.3409 6.70455 10.7 6.90455 10.1V7.50909H3.56364C2.88636 8.85909 2.5 10.3864 2.5 12C2.5 13.6136 2.88636 15.1409 3.56364 16.4909L6.90455 13.9Z"
                    fill="#FBBC05"></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4998 5.97727C13.968 5.97727 15.2862 6.48182 16.3226 7.47273L19.1907 4.60455C17.4589 2.99091 15.1953 2 12.4998 2C8.59075 2 5.20893 4.24091 3.56348 7.50909L6.90439 10.1C7.69075 7.73636 9.89529 5.97727 12.4998 5.97727Z"
                    fill="#EA4335"></path>
                </svg>
                Sign up with Google
              </button>
            </a>

            <a href="/" className="block">
              <button className="  w-full  sm:w-80 py-3 mt-2 rounded-full font-bold border relative border-white/30 hover:border-white">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  // fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute sm:ml-5 ml-3">
                  <circle cx="12.5" cy="12" r="10" fill="white"></circle>
                  <path
                    d="M22.5 12C22.5 6.477 18.023 2 12.5 2C6.977 2 2.5 6.477 2.5 12C2.5 16.991 6.157 21.128 10.938 21.878V14.891H8.398V12H10.938V9.797C10.938 7.291 12.43 5.907 14.715 5.907C15.808 5.907 16.953 6.102 16.953 6.102V8.562H15.693C14.45 8.562 14.063 9.333 14.063 10.125V12H16.836L16.393 14.89H14.063V21.878C18.843 21.128 22.5 16.991 22.5 12Z"
                    fill="#1877F2"></path>
                </svg>
                <span className="ml-5 sm:ml-0"> Sign up with Facebook</span>
              </button>
            </a>

            <a href="/" className="block">
              <button className="w-full  sm:w-80 py-3 mt-2 rounded-full font-bold border relative border-white/30  hover:border-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute sm:ml-5 ml-3 mr-3">
                  <path
                    d="M15.195 4.513C15.873 3.69 16.351 2.567 16.351 1.433C16.351 1.278 16.341 1.123 16.318 1C15.206 1.044 13.872 1.734 13.083 2.668C12.449 3.379 11.871 4.513 11.871 5.647C11.871 5.825 11.905 5.991 11.916 6.047C11.982 6.058 12.094 6.08 12.216 6.08C13.206 6.08 14.45 5.413 15.195 4.513ZM15.973 6.313C14.317 6.313 12.961 7.325 12.093 7.325C11.171 7.325 9.97 6.38 8.525 6.38C5.779 6.38 3 8.648 3 12.918C3 15.586 4.023 18.398 5.301 20.211C6.391 21.744 7.347 23 8.725 23C10.081 23 10.682 22.1 12.371 22.1C14.083 22.1 14.472 22.978 15.973 22.978C17.463 22.978 18.453 21.61 19.397 20.265C20.442 18.72 20.887 17.219 20.897 17.142C20.809 17.119 17.963 15.952 17.963 12.695C17.963 9.871 20.198 8.604 20.331 8.504C18.852 6.381 16.596 6.314 15.973 6.314V6.313Z"
                    fill="white"></path>
                </svg>
                <span className="">Sign up with Apple</span>
              </button>
            </a>
            <div className="flex justify-center">
              <button className=" w-full sm:w-80 py-3 mt-2 rounded-full font-bold border relative border-white/30 block  hover:border-white   ">
                <span className="p-1 sm:p-0">continue with phone number</span>
              </button>
            </div>
          </div>
        </header>

        <aside className=" sm:mx-28  flex justify-center border-b border-white/35 pb-5">
          <div className="sm:pl-5">
            <form action="" className="pt-10 ">
              <label
                htmlFor=""
                className="block text-white font-semibold ml-7 sm:ml-0 ">
                Email or UserName
              </label>
              <input
                type="email"
                className=" block  mr-10 grow ml-7 w-[260px] sm:ml-0 sm:mr-5  sm:w-80  py-3 mt-3 text-sm    border  hover:border-white border-white/30 rounded bg-neutral-900 focus:ring-white focus:border-white dark:bg-neutral-900 dark:border-white  text-white  placeholder:text-gray-400"
                placeholder="Email or username"
                required
                value={email}
                onChange={ChangeEmail}
              />

              <p className="ml-7 sm:ml-0">
                {errors.email && (
                  <span className="text-red-800">{errors.email}</span>
                )}
              </p>
              <label className="block text-white font-semibold mt-3  ml-7 sm:ml-0">
                Password
              </label>
              <div className="flex bg-neutral-900 mt-3 border rounded  border-white/30 hover:border-white ml-7 sm:ml-0 w-[260px]  sm:w-80">
                <input
                  className="block pr-12 sm:pr-0  sm:w-80 py-3 mt-0 text-sm  text-white  border-none    bg-neutral-900  placeholder:text-gray-400
                  focus:ring-white focus:border-white dark:bg-neutral-900  rounded "
                  placeholder="password"
                  type={visiable ? "text" : "password"}
                  value={password}
                  onChange={ChangePass}
                />

                <div
                  className="text-white mt-3 mb-2 "
                  onClick={() => setVisiable(!visiable)}>
                  {visiable ? (
                    <FaRegEye className=" w-10 h-6 text-gray-200 hover:text-white" />
                  ) : (
                    <FaRegEyeSlash className="w-10 h-6 text-gray-200 hover:text-white" />
                  )}
                </div>
              </div>

              <p className="ml-7 sm:ml-0">
                {errors.password && (
                  <span className="text-red-800">{errors.password}</span>
                )}
              </p>

              <label className="relative inline-flex items-center mb-5 cursor-pointer mt-10  ml-7 sm:ml-0  ">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer w-20  "
                />
                <div className="w-8 h-4  bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-white peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black after:border-gray-300 after:border after:rounded-full after:w-4 after:h-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
                <span className="ms-3 text-sm font-medium text-white dark:text-gray-300 block ">
                  Remember me
                </span>
              </label>

              <div className="mx-5 sm:mx-0">
                <button className="bg-green-500  sm:w-80 py-3 mt-5 rounded-full font-bold  hover:scale-105 block  grow w-full">
                  <Link
                    to="/ENTERHOME"
                    className=" grow w-full  sm:w-80  sm:px-[136px] py-3 rounded-full"
                    onClick={EnterHome}>
                    Log In
                  </Link>
                </button>
              </div>

              <a
                href="/"
                className="underline block hover:text-green-500 mt-8  text-white w-44 ml-20 mb-5 font-semibold">
                Forgot your password?
              </a>
            </form>
          </div>
        </aside>
        <footer className=" text-center pt-10  ">
          <h1 className="text-gray-400 ">
            Don't have an account?
            <a
              href="/"
              className="underline text-white font-semibold ml-1 hover:text-green-500 block sm:inline"
              onClick={handle}>
              Sign up for Spotify
            </a>
          </h1>
          <p className="text-xs  mt-20 pb-5 text-gray-400 mx-5 sm:mx-0">
            This site is protected by reCAPTCHA and the Google
            <a href="/" className="underline mr-1 ml-1">
              Privacy Policy
            </a>
            and
            <a href="/" className="underline ml-1">
              Terms of Service apply.
            </a>
          </p>
        </footer>
      </section>
    </section>
  );
};

export default Loginmain;
