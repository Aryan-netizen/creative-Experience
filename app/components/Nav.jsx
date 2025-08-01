import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-dark text-primary max-w-[960px] mx-auto px-5 py-4 mt-8 rounded-[20px] stroke-1 stroke-white">
        <Image
          src="/logo.svg"
          width={0}
          height={0}
          className="w-[136px] h-[37.13px]"
          alt="Logo"
        />
        <ul className="flex gap-6 text-[16px] font-light">
          <li>
            <Link href="/">
              <h1>Home</h1>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <h1>Portfolio</h1>
            </Link>
          </li>
          <li>
            <Link href="/how-it-works">
              <h1>How it Works</h1>
            </Link>
          </li>
          <li>
            <Link href="/teams">
              <h1>Teams</h1>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <h1>Contact Us</h1>
            </Link>
          </li>
        </ul>
        <button className="bg-accent text-primary px-10 py-3 rounded-2xl font-bold">Get a Quote</button>
      </nav>
    </>
  );
};

export default Nav;
