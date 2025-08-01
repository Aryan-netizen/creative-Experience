import Image from "next/image";
import React from "react";

const Client = () => {
  const clients = [
    {
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg",
      alt: "Transistor",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg",
      alt: "Reform",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg",
      alt: "Tuple",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg",
      alt: "SavvyCal",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
      alt: "Statamic",
    },
  ];

  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
          {clients.map((client, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={client.src}
                alt={client.alt}
                width={158}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
