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
    <div className="bg-white py-10 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
          {clients.map((client, index) => (
            <Image
              key={index}
              src={client.src}
              alt={client.alt}
              width={158}
              height={48}
              className="w-full h-auto object-contain max-h-12"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
