"use client";

import React, { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const [menuStyles, setMenuStyles] = useState({ right: "0" });
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    // This will only run on the client side
    if (menuOpened && typeof document !== 'undefined') {
      setMenuStyles({ right: document.documentElement.clientWidth <= 800 ? "0" : "-100%" });
    }
  }, [menuOpened]);
  
  const getMenuStyles = (menuOpened: boolean) => {
    if (typeof document !== 'undefined' && document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? "0" : "-100%" };
    }
    return { right: "0" };
  };
    
  return (
    <nav className="p-4 bg-white relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={"/Assets/Techie.png"} alt={"TechCattie"} width={30} height={40} />
          <p className="text-purple-800 text-xl font-bold">TechCattie</p>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpened((prev) => !prev)}
            className="text-purple-800 focus:outline-none"
          >
            <BiMenuAltRight size={30} />
          </button>
        </div>

        {/* Navigation Links */}
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div
            style={getMenuStyles(menuOpened)}
            className="fixed top-0 right-0 w-[60%] bg-white transition-all duration-300 lg:static lg:w-auto lg:h-auto lg:flex lg:gap-8"
          >
            <ul className="flex flex-col p-4 lg:p-0 lg:flex-row gap-4 items-center lg:gap-8 text-lg">
              <li className="hover:text-gray-400">
                <Link href="#Home">
                  <span className="text-purple-800 font-semibold">Home</span>
                </Link>
              </li>
              <li className="hover:text-gray-400">
                <Link href="#About">
                  <span className="text-purple-800 font-semibold">About</span>
                </Link>
              </li>
              <li className="hover:text-gray-400">
                <Link href="#Services">
                  <span className="text-purple-800 font-semibold">Services</span>
                </Link>
              </li>
              <li className="hover:text-gray-400">
                <Link href="#Projects">
                  <span className="text-purple-800 font-semibold">Portfolio</span>
                </Link>
              </li>
              <li className="hover:text-gray-400">
                <Link href="#Contact">
                  <span className="text-purple-800 font-semibold">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </OutsideClickHandler>
      </div>
    </nav>
  );
};

export default Nav;







// "use client";

// import React, { useState } from "react";
// import {BiMenuAltRight} from 'react-icons/bi'
// import OutsideClickHandler from 'react-outside-click-handler'
// import Image from "next/image";
// import Link from "next/link";

// const Nav = () => {
//   const [menuOpened, setMenuOpened] = useState(false)

//   const getMenuStyles= (menuOpened: any) => {
//     if (document.documentElement.clientWidth <= 800){
//       return {right: !menuOpened && "-100%"}
//     }

//   return (
//     <nav className="p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center gap-2">
//           <Image
//             src={"/Assets/Techie.png"}
//             alt={"TechCattie"}
//             width={30} 
//             height={40}
//           />
//           <p className="text-purple-800 text-xl font-bold">TechCattie</p>
//         </div>



//         {/* <div className="lg:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-purple-800 focus:outline-none"
//           >
//             <svg
//               className={`w-8 h-8 transform transition-transform duration-300 ${
//                 isOpen ? "rotate-45" : ""
//               }`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={
//                   isOpen
//                     ? "M6 18L18 6M6 6l12 12"
//                     : "M4 6h16M4 12h16m-7 6h7"
//                 }
//               />
//             </svg>
//           </button>
//         </div> */}


//         {/* <div className={`lg:flex gap-8 ${isOpen ? "block" : "hidden"} lg:block`}> */}
//         <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}></OutsideClickHandler>
//           <ul className="flex flex-col lg:flex-row gap-4 items-center lg:gap-8 text-white text-lg">
//             <li className="hover:text-gray-400">
//               <Link href="#Home" className="text-purple-800 font-semibold">Home</Link>
//             </li>
//             <li className="hover:text-gray-400 font-semibold">
//               <Link href="#About" className="text-purple-800">About</Link>
//             </li>
//             <li className="hover:text-gray-400 font-semibold">
//               <Link href="#Services" className="text-purple-800">Services</Link>
//             </li>
//             <li className="hover:text-gray-400 font-semibold">
//               <Link href="#Projects" className="text-purple-800">Portfolio</Link>
//             </li>
//             <li className="hover:text-gray-400 font-semibold">
//               <Link href="#Contact" className="text-purple-800">Contact</Link>
//             </li>
//             <li>
//               {/* <button>
//                 <Image src={"/Assets/Bright.svg"} alt={"Bright"} width={25} height={50} />
//               </button> */}
//             </li>
//           </ul>
//           </OutsideClickHandler>  
//           <div
//           className="menu-icon" 
//           onClick={() => setMenuOpened((prev) => !prev)}
//          >
//           <BiMenuAltRight size={30} />
//         </div>


//         {/* </div> */}


//       </div>
//     </nav>
//   );
// };

// export default Nav;
