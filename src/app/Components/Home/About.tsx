import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="flex flex-col justify-between items-center gap-5 bg-white px-[2rem] py-[3rem]" id="About">
      <h1 className="text-purple-800 text-[30px] lg:text-[2rem] font-bold ">About Me</h1>
      <div className="flex flex-col lg:flex-row justify-around py-3 gap-3">
      <div className="flex flex-col lg:w-[50%] p-5 shadow-2xl rounded-lg gap-2  bg-purple-50 ">
        <h1 className="text-purple-800 lg:text-[20px] font-bold">
          LET ME <span className="text-purple-950">INTRODUCE</span> MYSELF
        </h1>
        <div className="py-3 flex flex-col gap-3">
          <p className=" font-semibold text-purple-950">Hi, I'm Cattie!</p>
          <p className="text-purple-800">
            I'm a front-end developer passionate about turning design ideas into
            interactive web experiences. With expertise in HTML, CSS, React.js,
            and Next.js, I create responsive and engaging interfaces.
          </p>
          <p className="font-semibold text-purple-950">My Background</p>
          <p className="text-purple-800">
            I'm a Computer Engineering graduate with a solid foundation in web
            development who enjoys solving design challenges with clean and
            efficient code.
          </p>
          <p className=" text-purple-950 font-semibold">What Drives Me</p>
          <p className="text-purple-800">
            I love the process of transforming concepts into functional websites
            and am always excited to learn and grow in my field.
          </p>
          <p className="text-purple-800">
            Feel free to connect with me if you’d like to collaborate or chat
            about web development!
          </p>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-purple-800">
            <p className="text-pink-600">Let's Connect</p>
          </div>
          <div className="flex gap-2">
          <a href="https://github.com/Catherine-Awuletey" className="hover:text-gray-300 text-white">
                <Image src={"/Assets/github.svg"} alt={""} width={20} height={50}/>
              </a>
              <a href="https://www.linkedin.com/in/catherine-naa-larteley-awuletey-a3ab72222/" className="hover:text-gray-300 text-white">
                <Image src={"/Assets/Linkedin.svg"} alt={""} width={20} height={50}/>
              </a>
              <a href="https://www.tiktok.com/@techgirlcattie?_t=8ojThQGhdmX&_r=1" className="hover:text-gray-300 text-white">
                <Image src={"/Assets/tiktok.svg"} alt={""} width={20} height={50} />
              </a>
          </div>
        </div>
      </div>
      <div >
        <Image
          src={"/Assets/Cattie.jpg"}
          alt={"Cattie"}
          width={350}
          height={100}
          className="rounded-lg m-auto"
        />
      </div>
      </div>
    
    </section>
  );
};

export default About;
