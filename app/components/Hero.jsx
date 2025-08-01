import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center px-6 sm:px-10 lg:px-[80px] pt-20 lg:pt-[100px] overflow-hidden">
      <div className="bg-primary rounded-[20px] text-sm sm:text-base drop-shadow-sm px-4 py-1 text-black">
        # lorem ipsum dummy Text
      </div>

      <h1 className="text-4xl sm:text-6xl lg:text-8xl mt-8 sm:mt-10 font-bold tracking-tight text-center leading-tight">
        Creative Design &{" "}
        <span className="text-accent">Experience</span>
      </h1>

      <p className="text-lg sm:text-xl lg:text-2xl mt-6 sm:mt-8 text-center leading-relaxed text-gray-600">
        Discuss your goals, determine success metrics,<br className="hidden sm:block" />
        identify problems to solve and define visitors of the website.
      </p>

      {/* Global Image */}
      <div className="relative w-full mt-10 z-10">
        <Image
          src="/global.svg"
          alt="Global Graphic"
          width={1920}
          height={1080}
          className="w-full object-contain aspect-video"
        />
      </div>

      {/* Glow Image */}
      <div className="absolute top-[15%] left-0 w-full z-0 pointer-events-none">
        <Image
          src="/glow.svg"
          alt="Glow Effect"
          width={1920}
          height={1080}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
