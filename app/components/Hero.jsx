import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-[80px] pt-[100px]">
        <div className="bg-primary rounded-[20px] text-[17px] drop-shadow-sm px-4 py-1"># lorem ipsum dummy Text</div>
        <h1 className="text-8xl mt-10 font-bold tracking-tight">Creative Design & <span className="text-accent">Experience</span></h1>
        <p className="text-2xl mt-10 text-center leading-[41.6px]">
          Discuss your goals determine success metrics,identify problems to <br />
          solve and define visitors of the website
        </p>
        <Image
          src="/global.svg"
          width={0}
          height={0}
          className="w-full object-contain aspect-video relative "
          alt="Logo"
        />
        <Image
          src="/glow.svg"
          width={0}
          height={0}
          className="w-full object-cover overflow-hidden absolute top-[15%]"
          alt="Logo"
        />
      </div>
    </>
  );
};

export default Hero;
