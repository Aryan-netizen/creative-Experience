import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="w-full bg-white py-20 px-6 sm:px-10 lg:px-20">
      <div className="flex flex-col gap-24 max-w-7xl mx-auto">
        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <Image
              src="/idea.svg"
              width={600}
              height={400}
              alt="Our Vision"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-5 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">Our Vision</h1>
            <p className="text-base md:text-lg leading-7 md:leading-[35px] opacity-75">
              We bring bold ideas and sharp thinking to every challenge, crafting brand stories
              that cut through the clutter and connect with purpose.
            </p>
            <button className="bg-accent text-primary px-8 py-3 rounded-2xl w-fit mx-auto lg:mx-0 font-bold">
              Read More
            </button>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="w-full lg:w-1/2">
            <Image
              src="/Arrow.svg"
              width={600}
              height={400}
              alt="Our Mission"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-5 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">Our Mission</h1>
            <p className="text-base md:text-lg leading-7 md:leading-[35px] opacity-75">
              We are on a mission to turn strategy into story and design into meaning.
              We believe good branding earns trust, sparks action, and stays with people.
            </p>
            <button className="bg-accent text-primary px-8 py-3 rounded-2xl w-fit mx-auto lg:mx-0 font-bold">
              Read More
            </button>
          </div>
        </div>

        {/* Goal Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <Image
              src="/trophy.svg"
              width={600}
              height={400}
              alt="Our Goal"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-5 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">Our Goal</h1>
            <p className="text-base md:text-lg leading-7 md:leading-[35px] opacity-75">
              Not just for a moment, but for the long run. We want the work we do to mean
              something to your audience and you.
            </p>
            <button className="bg-accent text-primary px-8 py-3 rounded-2xl w-fit mx-auto lg:mx-0 font-bold">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
