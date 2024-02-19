import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
const Signupmain = () => {
  let handle = (e) => {
    e.preventDefault();
    window.location.assign("/LOGIN");
  };
  return (
    <section className="bg-neutral-900 pb-10 w-[120%] sm:w-auto h-[auto]">
      <aside className=" pt-5 pb-5 pl-5">
        <div className="flex">
          <svg
            fill="#000000"
            height=""
            width=""
            version="1.1"
            className="h-[40px] w-[30px]  sm:h-[50px] sm:w-[60px]"
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
          <span className="font-bold text-white text-xl sm:text-3xl mt-1">
            Spotify
          </span>
        </div>
      </aside>
      <header className="mx-7 md:mx-52 lg:mx-96  xl:px-52 ">
        <h1 className=" font-bold  text-4xl  sm:text-5xl text-white lg:w-96   ">
          Sign up to start listening
        </h1>
        <form action="" className="pt-10">
          <label htmlFor="" className="block text-white font-semibold ">
            Email address
          </label>

          <input
            type="search"
            className="block  grow w-full sm:w-80  py-3 mt-3 text-sm   border  hover:border-white border-white/30 rounded bg-neutral-900 focus:ring-white focus:border-white dark:bg-neutral-900 dark:border-white  text-white "
            placeholder="name@domain.com"
            required
          />
        </form>
        <div>
          <a href="/" className="underline text-green-500 block  mt-3">
            Use phone number instead.
          </a>
          <button className="bg-green-500  grow w-full sm:w-80 py-3 mt-5 rounded-full font-bold ">
            Next
          </button>
          <div className=" flex mt-5 w-10   ">
            <p className="text-white/30   ">_____________________</p>

            <span className="text-white px-3 mt-1">or</span>
            <p className="text-white/30 w-10 ">____________________</p>
          </div>
        </div>
      </header>
      <aside className="mx-7 md:mx-52 lg:mx-96  xl:px-52  ">
        <div className="  text-white pb-8   border-b border-white/10">
          <a
            href="https://in.search.yahoo.com/search;_ylt=AwrKEZQXLbdlwU8Kojm7HAx.;_ylc=X1MDMjExNDcyMzAwMwRfcgMyBGZyA21jYWZlZQRmcjIDc2ItdG9wBGdwcmlkA1FYNFR1NF9EVGthemVSYVIzbGVCOEEEbl9yc2x0AzAEbl9zdWdnAzEwBG9yaWdpbgNpbi5zZWFyY2gueWFob28uY29tBHBvcwMyBHBxc3RyAwRwcXN0cmwDMARxc3RybAMxNARxdWVyeQNnb29nbGUlMjBzaWduJTIwdXAEdF9zdG1wAzE3MDY1MDM0NjM-?p=google+sign+up&fr2=sb-top&fr=mcafee&vm=r&type=E211IN714G0&mkr=16"
            target="_blank">
            <button className=" grow w-full  sm:w-80 py-3 mt-5 rounded-full font-bold  border border-white/30  relative hover:border-white">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" absolute ml-5 ">
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
          <a
            href="https://www.facebook.com/login.php?skip_api_login=1&api_key=174829003346&kid_directed_site=0&app_id=174829003346&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv17.0%2Fdialog%2Foauth%3Fclient_id%3D174829003346%26state%3DAQCES9s6%252BVh73m18e5GEyFod6lSuf14HTMWxkCm2w%252FH%252BbmArwjuwxquRz3icqD4l%252FQhd1U9%252FNApwL8Y2MQQ5D1DpSLq8OqYNWNfQdsksta0okCPAObmKDmwRa72iq8fUUHqhu2e9YNAkBDIB%252FX41hcd7Um6fX%252BYRfByrLBUBos3tJ5A5bHiJLExVsh4To9O6dcih7eS%252BLpqQ3blOj8B%252FJ39zAewMg0VUwCwK3ZSwbocUQwRxr3V1sEAY7tRCjCWW%252FxQe7gcJKJkZgsMV3dgMAZOc5eQhDIolo1p32elza1nEAr05LBQjXJ%252F7OtdJEhdXWPkSS6zk7nIU87XqvFU4K7sRl125yhWxw39FbJEoVG6WfVSJuNAgTR2Buidc654YC54cIodCLS%252FNvT8l4RVzwE4XQ9WhpLWbXT3Jyxm2V15afEMkV61pisQR7V03O3F0%252FWxnJDfwy%252FcrxTcLCCIVAravJO8HZF1XDwEPNlzvcf2HRUjB42rVyX%252BHAUSFOE%252FKYJ5ZTV2fGhIUqEai%252BOaeNBnTogclmx1M9HCQs8Z2TU1ZHBSNlA%253D%253D%26redirect_uri%3Dhttps%253A%252F%252Faccounts.spotify.com%252Flogin%252Ffacebook%252Fredirect%252Fsignup%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D1e15b664-dcd1-432a-8c30-f7ede329bf23%26tp%3Dunspecified&cancel_url=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Ffacebook%2Fredirect%2Fsignup%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DAQCES9s6%252BVh73m18e5GEyFod6lSuf14HTMWxkCm2w%252FH%252BbmArwjuwxquRz3icqD4l%252FQhd1U9%252FNApwL8Y2MQQ5D1DpSLq8OqYNWNfQdsksta0okCPAObmKDmwRa72iq8fUUHqhu2e9YNAkBDIB%252FX41hcd7Um6fX%252BYRfByrLBUBos3tJ5A5bHiJLExVsh4To9O6dcih7eS%252BLpqQ3blOj8B%252FJ39zAewMg0VUwCwK3ZSwbocUQwRxr3V1sEAY7tRCjCWW%252FxQe7gcJKJkZgsMV3dgMAZOc5eQhDIolo1p32elza1nEAr05LBQjXJ%252F7OtdJEhdXWPkSS6zk7nIU87XqvFU4K7sRl125yhWxw39FbJEoVG6WfVSJuNAgTR2Buidc654YC54cIodCLS%252FNvT8l4RVzwE4XQ9WhpLWbXT3Jyxm2V15afEMkV61pisQR7V03O3F0%252FWxnJDfwy%252FcrxTcLCCIVAravJO8HZF1XDwEPNlzvcf2HRUjB42rVyX%252BHAUSFOE%252FKYJ5ZTV2fGhIUqEai%252BOaeNBnTogclmx1M9HCQs8Z2TU1ZHBSNlA%253D%253D%23_%3D_&display=page&locale=en_GB&pl_dbl=0"
            target="_blank">
            <button className="grow w-full  sm:w-80 py-3 mt-2 rounded-full font-bold border relative border-white/30 hover:border-white">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute ml-5 ">
                <circle cx="12.5" cy="12" r="10" fill="white"></circle>
                <path
                  d="M22.5 12C22.5 6.477 18.023 2 12.5 2C6.977 2 2.5 6.477 2.5 12C2.5 16.991 6.157 21.128 10.938 21.878V14.891H8.398V12H10.938V9.797C10.938 7.291 12.43 5.907 14.715 5.907C15.808 5.907 16.953 6.102 16.953 6.102V8.562H15.693C14.45 8.562 14.063 9.333 14.063 10.125V12H16.836L16.393 14.89H14.063V21.878C18.843 21.128 22.5 16.991 22.5 12Z"
                  fill="#1877F2"></path>
              </svg>
              Sign up with Facebook
            </button>
          </a>

          <a
            href="https://appleid.apple.com/auth/authorize?response_type=code&response_mode=form_post&client_id=com.spotify.accounts&state=AQCjeO3FqV84XunlC%2BpPawm1Ka3mxU%2Bb1mAN16W%2Bxgg7kpF0zgsDT75MIvSKMK7%2BjcJvBVyMGw2Q5N%2BHW%2BkbLmw94BtDKiLHSdj2NEMFucaYISer37ha8o8IiEwu1U%2BL944cimdT%2BSSVvmkfR21UL3abvO%2B1Z3jc7kcrgYlfwS46qG2jo0jHZtK1dL3NGkjee%2BJ9qDeYI%2FmVavF0leh8kG7OhxskHaes9XzjOaZSm3IONp4970iiODZxskGcCmIHL2f05IjNLb1bgW44WL%2BG0LckW%2BYcBazisVahfH5YXYMIUViQUXaXT1EgZe2kK6gmTJx4I5XG6f58AdrJNGQ%2FFZfOP2ywzUXEXYHCk7lm%2FuMv%2FtRL4RhYKAnOsV2tR9LXMxCX5LO7%2FQjBpCNOGOHvvaN%2FIh2zvbHj8SZQhxN70reDMIeEH45nuP6Syzgl%2F55n76lUE0IvLsW5acGGuhoE8P56UetX78PmXEDlrsyxCn6oarABzCfx1nEp%2BLP7eogJzV51nv5CkafYPZeGx6iOYTTxhJeIV8NA2eQJ9UoIw5VjIlMT5Q%3D%3D&scope=name+email&redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Fapple%2Fredirect%2Fsignup"
            target="_blank">
            <button className="grow w-full  sm:w-80 py-3 mt-2 rounded-full font-bold border relative border-white/30 hover:border-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute ml-5 ">
                <path
                  d="M15.195 4.513C15.873 3.69 16.351 2.567 16.351 1.433C16.351 1.278 16.341 1.123 16.318 1C15.206 1.044 13.872 1.734 13.083 2.668C12.449 3.379 11.871 4.513 11.871 5.647C11.871 5.825 11.905 5.991 11.916 6.047C11.982 6.058 12.094 6.08 12.216 6.08C13.206 6.08 14.45 5.413 15.195 4.513ZM15.973 6.313C14.317 6.313 12.961 7.325 12.093 7.325C11.171 7.325 9.97 6.38 8.525 6.38C5.779 6.38 3 8.648 3 12.918C3 15.586 4.023 18.398 5.301 20.211C6.391 21.744 7.347 23 8.725 23C10.081 23 10.682 22.1 12.371 22.1C14.083 22.1 14.472 22.978 15.973 22.978C17.463 22.978 18.453 21.61 19.397 20.265C20.442 18.72 20.887 17.219 20.897 17.142C20.809 17.119 17.963 15.952 17.963 12.695C17.963 9.871 20.198 8.604 20.331 8.504C18.852 6.381 16.596 6.314 15.973 6.314V6.313Z"
                  fill="white"></path>
              </svg>
              Sign up with Apple
            </button>
          </a>
        </div>
      </aside>
      <footer className=" text-center pt-5  ">
        <h1 className="text-gray-400">
          Already have an account?
          <a href="/" className="underline text-white ml-1" onClick={handle}>
            Log in here.
          </a>
        </h1>
        <p className="text-xs  mt-5 text-gray-400">
          This site is protected by reCAPTCHA and the Google
          <span className="block ">
            <a href="/" className="underline mr-1">
              Privacy Policy
            </a>
            and
            <a href="/" className="underline ml-1">
              Terms of Service apply.
            </a>
          </span>
        </p>
      </footer>
    </section>
  );
};

export default Signupmain;
