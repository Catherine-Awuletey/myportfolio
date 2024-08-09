import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="flex flex-col container px-4 lg:px-8 py-6">
        <div className="flex justify-around flex-col lg:flex-row">
          <div className="flex flex-col gap-4 mb-6 sm:mb-0">
            <h2 className="text-xl font-bold text-pink-600">Quick Links</h2>
            <ul className="flex flex-col gap-2">
              <li><a href="#Home" className="hover:underline text-white">Home</a></li>
              <li><a href="#About" className="hover:underline text-white">About</a></li>
              <li><a href="#Projects" className="hover:underline text-white">Portfolio</a></li>
              <li><a href="#Contact" className="hover:underline text-white">Contact</a></li>
            </ul>
          </div>

          <div className="flex flex-col align-center lg:items-center gap-4 mb-6 sm:mb-0">
            <h2 className="text-xl font-bold text-pink-600">Follow Me</h2>
            <div className="flex space-x-4">
              <a href="https://github.com/Catherine-Awuletey" className="hover:text-gray-300 text-white">
                <Image src={"/Assets/github.svg"} alt="GitHub" width={30} height={30} />
              </a>
              <a href="https://www.linkedin.com/in/catherine-naa-larteley-awuletey-a3ab72222/" className="hover:text-gray-300 text-white">
                <Image src={"/Assets/Linkedin.svg"} alt="LinkedIn" width={30} height={30} />
              </a>
              <a href="https://www.tiktok.com/@techgirlcattie?_t=8ojThQGhdmX&_r=1" className="hover:text-gray-300 text-white">
                <Image src={"/Assets/tiktok.svg"} alt="TikTok" width={30} height={30} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-pink-600">Contact Me</h2>
            <div className="flex items-center gap-2">
              <Image src={"/Assets/email.svg"} alt="Email" width={15} height={15} />
              <p className="text-white">tech.cattiecodes@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={"/Assets/phone.svg"} alt="Phone" width={15} height={15} />
              <p className="text-white">+233 55 148 3238</p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-pink-600">
          <p>&copy; {new Date().getFullYear()} TechGirlCattie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
