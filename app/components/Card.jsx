import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="w-full h-[270vh]">
      <div className="flex flex-col justify-center items-center gap-[60px] w-full h-full p-[80px]">
        <div className="w-full h-full flex justify-center items-center gap-9">
          <Image
            width={0}
            height={0}
            src="/idea.svg"
            className="w-[50%]"
          ></Image>
          <div className="w-[50%] flex flex-col gap-5">
            <h1 className="text-5xl font-bold">Our Vision</h1>
            <p className="text-md leading-[35px] opacity-75">
              We bring bold ideas and sharp thinking to every 
              challenge, crafting brand stories <br /> that cut through the clutter and 
              connect with purpose.
            </p>
            <button className="bg-accent text-primary px-10 py-3 rounded-2xl w-fit font-bold">
              Read More
            </button>
          </div>
        </div>
        <div className="w-full h-full flex flex-row-reverse justify-center items-center gap-9">
          <Image
            width={0}
            height={0}
            src="/Arrow.svg"
            className="w-[50%]"
          ></Image>
          <div className="w-[50%] flex flex-col gap-5">
            <h1 className="text-5xl font-bold">Our Mission</h1>
            <p className="text-md leading-[35px] opacity-75">
              We are on a mission to turn strategy into story and design into meaning. <br />
              We believe good branding earns trust, sparks action, and stays with people.
            </p>
            <button className="bg-accent text-primary px-10 py-3 rounded-2xl w-fit font-bold">
              Read More
            </button>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center gap-9">
          <Image
            width={0}
            height={0}
            src="/trophy.svg"
            className="w-[50%]"
            alt="trophy"
          ></Image>
          <div className="w-[50%] flex flex-col gap-5">
            <h1 className="text-5xl font-bold">Our Goal</h1>
            <p className="text-md leading-[35px] opacity-75">
             Not just for a moment, but for the long run. We want the work we do to mean <br />
             something to your audience and you.
            </p>
            <button className="bg-accent text-primary px-10 py-3 rounded-2xl w-fit font-bold">
              Read More
            </button>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Card;
