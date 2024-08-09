"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src={"/Assets/Techie.png"}
            alt={"TechCattie"}
            width={30} 
            height={40}
          />
          <p className="text-purple-800 text-xl font-bold">TechCattie</p>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-purple-800 focus:outline-none"
          >
            <svg
              className={`w-8 h-8 transform transition-transform duration-300 ${
                isOpen ? "rotate-45" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
        <div className={`lg:flex gap-8 ${isOpen ? "block" : "hidden"} lg:block`}>
          <ul className="flex flex-col lg:flex-row gap-4 items-center lg:gap-8 text-white text-lg">
            <li className="hover:text-gray-400">
              <Link href="#Home" className="text-purple-800 font-semibold">Home</Link>
            </li>
            <li className="hover:text-gray-400 font-semibold">
              <Link href="#About" className="text-purple-800">About</Link>
            </li>
            <li className="hover:text-gray-400 font-semibold">
              <Link href="#Services" className="text-purple-800">Services</Link>
            </li>
            <li className="hover:text-gray-400 font-semibold">
              <Link href="#Projects" className="text-purple-800">Portfolio</Link>
            </li>
            <li className="hover:text-gray-400 font-semibold">
              <Link href="#Contact" className="text-purple-800">Contact</Link>
            </li>
            <li>
              {/* <button>
                <Image src={"/Assets/Bright.svg"} alt={"Bright"} width={25} height={50} />
              </button> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
