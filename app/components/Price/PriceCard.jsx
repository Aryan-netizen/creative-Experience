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
    <div className="py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-white rounded-3xl shadow-lg overflow-hidden p-6 sm:p-6 md:p-8"
            >
              {/* Top */}
              <div className="flex flex-col gap-4">
                <h3 className="text-xl sm:text-2xl font-semibold">{plan}</h3>
                <div className="flex items-baseline">
                  <span className="mr-2 text-4xl sm:text-5xl font-bold">$29</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
                <p className="text-gray-500 text-sm sm:text-base">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <button className="bg-[#FBFBFE] border border-gray-200 text-sm sm:text-base drop-shadow px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-bold">
                  Get Started
                </button>
              </div>

              {/* Divider */}
              <hr className="my-5 border-gray-200" />

              {/* Bottom */}
              <div>
                <h4 className="text-lg sm:text-xl font-semibold">Features</h4>
                <p className="text-gray-500 text-sm mt-1">Everything in Business Plan, plus:</p>
                <ul className="mt-4 space-y-3">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Image
                        src="/check.png"
                        alt="Check"
                        width={16}
                        height={16}
                        className="mt-1"
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
