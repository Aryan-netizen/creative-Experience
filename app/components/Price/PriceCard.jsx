import Image from "next/image";
import React from "react";

const PriceCard = () => {
  return (
    <div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* <!-- Pricing Card --> */}
          {["Standard Plans","Premium Plan","Platinum Plan"].map((elem)=>(
            <div className="flex flex-col mx-auto max-w-lg text-gray-900 stroke-4 stroke-orange-50 drop-shadow-2xl rounded-[40px] bg-white  ">
            <div className="flex flex-col p-[32px] gap-10">
              <h3 className="text-2xl font-semibold">{elem}</h3>
              <div className="flex justify-start items-baseline">
                <span className="mr-2 text-6xl font-bold">$29</span>
                <span className="text-gray-500 ">/month</span>
              </div>
              <p className="font-light text-gray-500 text-md ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div>
                <button className="bg-[#FBFBFE] drop-shadow-md text-black px-8 py-4 border-2 border-muted rounded-xl w-full mx-auto lg:mx-0 font-bold">
                  Get Started
                </button>
              </div>
            </div>
            <hr className="border-gray-300" />

            <div className="p-[32px]">
              <h1 className="text-xl font-semibold">Features</h1>
              <p className="font-light text-gray-500 text-md mt-2">
                Everything in Business Plan, plus:
              </p>
              {/* <!-- List --> */}
              <ul role="list" className="mt-8 space-y-4 text-left">
                {[
                  " Single-page website or landing page.",
                  "Free domain & hosting(1 year)",
                  " Responsive design",
                  "Basic SEO setup",
                  "Contactform",
                  "Google Maps integration ",
                ].map((elem) => (
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <Image
                            src="/check.png"
                            width={0}
                            height={0}
                            className="w-5"
                            alt="Logo"
                          />

                    <span className="font-light text-gray-500 text-md ">{elem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
