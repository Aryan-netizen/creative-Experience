"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-dark text-primary max-w-[960px] mx-8 lg:mx-auto px-5 py-4 mt-8 rounded-[20px] flex items-center justify-between">
      {/* Logo */}
      <Image
        src="/logo.svg"
        width={0}
        height={0}
        className="w-[136px] h-[37.13px]"
        alt="Logo"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-sm  lg:text-base font-light">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/how-it-works">How it Works</Link>
        </li>
        <li>
          <Link href="/teams">Teams</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>

      {/* Desktop Button */}
      <button className="hidden md:block bg-accent text-primary px-6 py-2 rounded-xl font-semibold text-sm">
        Get a Quote
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-dark rounded-b-[20px] p-4 mt-2 md:hidden z-50">
          <ul className="flex flex-col gap-4 text-base font-light">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
            </li>
            <li>
              <Link href="/how-it-works" onClick={() => setIsOpen(false)}>How it Works</Link>
            </li>
            <li>
              <Link href="/teams" onClick={() => setIsOpen(false)}>Teams</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </li>
          </ul>
          <button className="mt-4 w-full bg-accent text-primary px-6 py-3 rounded-xl font-semibold">
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
