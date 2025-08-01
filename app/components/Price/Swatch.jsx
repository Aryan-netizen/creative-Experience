import React from "react";

const Swatch = () => {
  return (
    <div className="flex justify-center items-center gap-6 w-fit py-3 px-[2px] stroke-4 stroke-orange-50 drop-shadow-xl mx-auto my-[35px] rounded-[12px] bg-[#F5EDEC] ">
        <div className="text-2xl bg-accent text-primary px-7 py-2 rounded-[12px]">Web Devlopment</div>
        <div className="text-2xl bg-accent text-primary px-7 py-2 rounded-[12px]">Graphic Design</div>
        <div className="text-2xl bg-accent text-primary px-7 py-2 rounded-[12px]">Digital Marketing</div>
    </div>
  );
};

export default Swatch;
