import React from 'react';

const Cta = () => {
  return (
    <div className=" my-10 md:my-20 ">
      <div className="flex flex-col justify-center items-center gap-6 px-6 py-12 sm:px-10 md:px-20 md:py-20 text-center max-w-4xl  stroke-4 stroke-orange-50 drop-shadow-md mx-auto rounded-[40px] bg-[#F5EDEC] ">
        <div className="bg-primary rounded-[20px] text-sm sm:text-base w-fit drop-shadow-sm px-4 py-1">
          Take the First Step Toward Efficiency
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Let’s Discuss Your Marketing Needs
        </h1>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 opacity-75 max-w-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <button className="bg-accent text-primary px-8 py-3 rounded-2xl font-bold">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Cta;
