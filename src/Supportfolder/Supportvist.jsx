import React from "react";

const Supportvist = () => {
  return (
    <section className=" text-white pt-10 pb-10 bg-neutral-900  w-96 sm:w-auto">
      <div className="md:mx-20 lg:mx-40  text-center pt-10 pb-10 ">
        <h1 className="text-4xl sm:text-5xl font-bold">Visit our Community</h1>
        <p className="mt-5 font-semibold  ml-5 sm:ml-0 pr-10 sm:pr-0 text-lg sm:text-base">
          Have questions? Find answers from our worldwide Community of expert
          fans!
        </p>
        <button className="text-black px-10 sm:px-5 py-4 sm:py-2 mt-8 sm:mt-5      sm:rounded-3xl  rounded-full text-lg font-semibold bg-green-600  hover:scale-105 ">
          Go to Community
        </button>
      </div>
    </section>
  );
};

export default Supportvist;
