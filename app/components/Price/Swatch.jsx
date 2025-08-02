import React from "react";

const Swatch = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 w-full max-w-3xl mx-auto my-8 px-[1px] py-3 stroke-4 stroke-orange-50 drop-shadow-xl rounded-[12px] bg-[#F5EDEC]">
      {["Web Development", "Graphic Design", "Digital Marketing"].map((text, index) => (
        <div
          key={index}
          className="text-base sm:text-lg md:text-xl lg:text-2xl bg-accent text-primary px-5 py-2 rounded-[12px] text-center"
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default Swatch;
