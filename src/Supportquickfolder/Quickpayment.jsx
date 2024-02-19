import React from "react";

const Quickpayment = ({ move2 }) => {
  return (
    <section className=" text-white   flex justify-center pt-10 pb-10 ">
      <div className="  w-1/2">
        <nav className=" mx-20  px-3">
          <ul className="flex justify-start    ">
            <li className="pt-2 px-1">
              <a href="/" className="text-m font-semibold" onClick={move2}>
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
                Payment Help
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
          <div className="mx-20 rounded-lg  bg-neutral-800  ">
            <div className="px-5 flex justify-between   ">
              <div className=" mt-5 mb-5">
                <h1 className="font-semibold">
                  Manage your Spotify Account easily
                </h1>
                <p className="pt-4">
                  Your info, payment and privacy all in one place.
                </p>
              </div>
              <div className=" ml-14 mt-5 mb-5 pl-">
                <button className="mt-4 border rounded-full px-5 py-1 text-sm hover:scale-105 font-semibold">
                  Go to your Account
                </button>
              </div>
            </div>
          </div>
          <div className="mx-20  mt-10 bg-neutral-800 rounded-lg  font-semibold ">
            <div className="pt-5 pl-5">
              <h1 className="text-5xl font-bold">Payment methods</h1>
              <div className="pl-1 pr-4 mt-10 pb-3">
                <h1>
                  There are multiple ways to pay for a
                  <a href="/" className="hover:text-green-500 underline ml-1">
                    Spotify Premium plan
                  </a>
                  , including:
                </h1>
                <ol className=" ml-10 mt-5">
                  <li className="list-disc">Credit/debit card</li>
                  <li className="list-disc">Prepaid cards</li>
                  <li className="list-disc">PayPal</li>
                  <li className="list-disc">Gift cards</li>
                  <li className="list-disc">Pay by mobile</li>
                  <li className="list-disc">Pay as you go</li>
                </ol>
              </div>

              <div className="pr-2">
                <h1 className="mt-2 mb-3">
                  Note: We may offer different payment methods depending on the
                  country or region you’re in.
                </h1>
                <p className=" pb-10">
                  To see what payment methods are available where you are, go to
                  <a href="/" className="hover:text-green-500 underline ml-1">
                    www.spotify.com/premium,
                  </a>
                  choose a plan, and all the payment options for your account’s
                  location will be on the next page. You won’t be charged until
                  you submit your payment info.
                </p>
              </div>
            </div>
          </div>
        </section>
        <aside className=" pt-10 pb-10">
          <div className="mx-20 rounded-lg  bg-neutral-800 ">
            <h1 className="ml-5 pt-5 text-lg font-semibold">
              Related Articles
            </h1>

            <ul className="ml-5 pt-3 pb-6 text-green-400">
              <li className="underline">
                <a href="/">Update payment details</a>
              </li>
              <li className="underline">
                <a href="/">Country or region settings</a>
              </li>
              <li className="underline">
                <a href="/">Premium plans</a>
              </li>
            </ul>
          </div>
        </aside>
        <footer className=" mx-20 border-t border-neutral-700 mb-20">
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

export default Quickpayment;
