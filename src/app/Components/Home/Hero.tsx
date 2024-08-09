import React from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

const Hero = () => {
  return (
    <section className="bg-white" id="Home">
      {/* [#231E3D] */}
      <Nav />
      <section className="px-5 lg:flex justify-between items-center py-5 lg:py-[3rem]">
        <div>
            <p className="text-purple-800 lg:text-[1rem] font-semibold">Hi There!</p>
            <h1 className="text-pink-600 font-bold text-[2rem] lg:text-[4rem]">Catherine Naa L. Awuletey</h1>
            <p className="text-purple-800 font-semibold lg:text-[2rem]">Frontend Developer</p>
            <p className="text-purple-800 "> I create stunning websites by translating design ideas into interactive web experiences. Let's connect and bring your vision for your website to life.</p>
        </div>
        <Image src={"/Assets/Girl.png"} alt={"Tech Girl"} width={550} height={200} />
      </section>
    </section>
  );
};

export default Hero;
