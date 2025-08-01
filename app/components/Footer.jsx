import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="overflow-hidden drop-shadow-2xl">
      <div className="mx-auto max-w-7xl px-6 py-12 md:p-[80px] my-20 rounded-[48px] bg-white">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Logo and Text */}
          <div className="md:w-1/3 flex flex-col gap-4">
            <a href="/" className="flex flex-col items-start gap-4">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={155}
                height={40}
                className="w-[155px] h-auto"
              />
              <span className="text-md opacity-75">
                Follow us and never miss an <br />
                update on the latest productivity <br />
                trends, tools, and insights.
              </span>
            </a>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 8 19">
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3...Z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 17">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 1.892a8.178...Z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase">
                Menu
              </h2>
              <ul className="text-gray-500 text-md flex flex-col gap-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Portfolio</a></li>
                <li><a href="#" className="hover:underline">How it works</a></li>
                <li><a href="#" className="hover:underline">Teams</a></li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 text-md flex flex-col gap-2">
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Newsletter</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Use</a></li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase">
                Contact
              </h2>
              <ul className="text-gray-500 text-md flex flex-col gap-2">
                <li><a href="#" className="hover:underline">support@vehon.com</a></li>
                <li><a href="#" className="hover:underline">+91 85987 65412</a></li>
                <li><a href="#" className="hover:underline">A-101, Royal Squares, Surat</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Bottom Text */}
        <div className="text-center text-sm text-gray-500">
          © 2025{" "}
          <a href="/" className="hover:underline font-medium">
            Vehon
          </a>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
