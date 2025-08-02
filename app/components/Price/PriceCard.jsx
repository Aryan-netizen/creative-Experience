import Image from "next/image";
import React from "react";

const PriceCard = () => {
  const plans = ["Standard Plan", "Premium Plan", "Platinum Plan"];
  const features = [
    "Single-page website or landing page.",
    "Free domain & hosting (1 year)",
    "Responsive design",
    "Basic SEO setup",
    "Contact form",
    "Google Maps integration",
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-[40px] drop-shadow-2xl stroke-4 stroke-orange-50 bg-white overflow-hidden"
            >
              {/* Top section */}
              <div className="flex flex-col p-8 gap-6">
                <h3 className="text-2xl font-semibold">{plan}</h3>
                <div className="flex items-baseline">
                  <span className="mr-2 text-5xl font-bold">$29</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="font-light text-gray-500 text-base">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <button className="bg-[#FBFBFE] border-2 border-muted drop-shadow-md text-black px-6 py-3 rounded-xl w-full font-bold">
                  Get Started
                </button>
              </div>

              {/* Divider */}
              <hr className="border-gray-200" />

              {/* Bottom section */}
              <div className="p-8">
                <h4 className="text-xl font-semibold">Features</h4>
                <p className="text-gray-500 text-sm mt-2">
                  Everything in Business Plan, plus:
                </p>
                <ul className="mt-6 space-y-4">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <Image
                        src="/check.png"
                        alt="Check"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      <span className="text-gray-500 text-sm">{feature}</span>
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
