import React from "react";
import Link from "next/link";
import Image from "next/image";

const Stacks = () => {
  return (
    <section className="bg-white py-[1rem] lg:py-[4rem] flex flex-col lg:flex-row items-center gap-[5rem] justify-around px-5">
        <div>
            <p className="text-purple-800 font-bold text-[2rem]">Tech Stacks & Tools</p>
            <p className="text-pink-600 font-semibold">These are some of the Tech  <br /> Stacks & Tools I&apos;m experienced in.</p>
        </div>
      <div className="shadow-2xl p-5 flex flex-col gap-[3rem] items-center rounded-xl bg-purple-50">
        <h1 className="text-purple-800 font-bold lg:text-[2rem]">Stacks</h1>
        <div className="flex flex-col lg:flex-row lg:gap-[2rem] gap-3">
          <div className="p-5 shadow-md rounded-md hover:scale-105 hover:shadow-2xl hover:rounded-b-xl transition duration-9000">
            <Image
              src={"/Assets/html.svg"}
              alt={"HTML"}
              width={40}
              height={50}
            />
          </div>
          <div  className="p-5 shadow-md rounded-md hover:scale-105 hover:shadow-2xl hover:rounded-b-xl transition duration-9000">
            <Image src={"/Assets/css.svg"} alt={"CSS"} width={60} height={50} />
          </div>
          <div className="p-5 shadow-md rounded-md hover:scale-105 hover:shadow-2xl hover:rounded-b-xl transition duration-9000">
            <Image
              src={"/Assets/next.svg"}
              alt={"NEXTjs"}
              width={60}
              height={50}
            />
          </div>
          <div  className="p-5 shadow-md rounded-md hover:scale-105 hover:shadow-2xl hover:rounded-b-xl transition duration-9000">
            <Image
              src={"/Assets/react.svg"}
              alt={"REACTjs"}
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>

      <div className="shadow-2xl p-5 flex flex-col gap-[3rem] items-center rounded-xl bg-purple-50">
        <p className="text-purple-800 font-bold lg:text-[2rem]">Tools</p>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-[2rem]">
          <div className="p-5 shadow-md rounded-md hover:scale-105 hover:shadow-2xl hover:rounded-b-xl transition duration-9000">
            <Image
              src={"/Assets/VsCode.svg"}
              alt={"VsCode"}
              width={50}
              height={20}
            />
          </div>
          <div className="p-5 shadow-md rounded-md hover:scale-105 hover:shadow-2xl hover:rounded-b-xl transition duration-9000">
            <Image
              src={"/Assets/Git.svg"}
              alt={"GitHb"}
              width={50}
              height={20}
            />
          </div>
          <div className="p-5 shadow-md rounded-md hover:scale-105 hover:shadow-2xl hover:rounded-b-xl transition duration-9000">
            <Image
              src={"/Assets/Figma.svg"}
              alt={"Figma"}
              width={50}
              height={30}
            />
            {/* <p className="text-purple-800">Figma</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stacks;
