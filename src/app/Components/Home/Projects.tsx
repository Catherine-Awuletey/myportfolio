import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section
      className="bg-white px-5 py-[3rem] flex flex-col gap-5"
      id="Projects"
    >
      <div className="text-center flex flex-col gap-5">
        <h1 className="text-purple-800 font-bold text-[3rem]">Projects</h1>
        <p className="text-purple-800 font-semibold">
          Browse my portfolio to see a range of projects that{" "}
          <span className="text-pink-500">highlight</span> my skills in web
          development and design. Each project demonstrates my{" "}
          <span className="text-pink-500"> ability </span>
          to create innovative solutions and deliver high-quality results.
        </p>
      </div>
      {/* Projects */}
      <div className="w-[100%] py-5 grid sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-3 md:m-auto lg:pb-0">
      {/* flex flex-col lg:flex-row gap-3 items-center justify-around */}
        {/* Dream House */}
        <div className="flex">
          {/* Card */}
          <div className="flex flex-col gap-2 md:w-[60%] lg:w-[100%] shadow-2xl rounded-xl">
            <Image
              src={"/Assets/Dream.png"}
              alt={"Dream-House"}
              width={450}
              height={200}
              className="rounded-t-md"
            />
            <div className="flex flex-col gap-3 p-3">
              <p className="text-black font-semibold">Dream House</p>
              <div className="flex gap-[9rem]">
                {/* HTML */}
                <div className="flex items-center gap-2 px-2 py-1 border border-purple bg-slate-200 rounded-md">
                  <Image
                    src={"/Assets/html.svg"}
                    alt={"HTML"}
                    width={10}
                    height={20}
                  />
                  <p className="text-black  text-[10px] font-semibold border-s-violet-50">
                    HTML
                  </p>
                </div>
                {/* Tailwind CSS */}
                <div className="flex items-center gap-2 px-2 py-1 border border-purple bg-slate-200 rounded-md">
                  <Image
                    src={"/Assets/css.svg"}
                    alt={"Tailwind"}
                    width={20}
                    height={20}
                  />
                  <p className="text-black  text-[10px] font-semibold">
                    Tailwind
                  </p>
                </div>
              </div>
              <p className="text-black ">
                This is web page for a real estate organization. Potential
                clients can find houses within their budgets and preferred
                neighborhoods.
              </p>

              {/* View */}
              <div className="flex gap-[8rem]">
                {/* GitHub */}
                <a
                  href="https://github.com/Catherine-Awuletey/Dream-House"
                  target="_blank"
                >
                  <button className="flex flex-row items-center gap-2 px-3 py-1 border border-purple-900 hover:bg-purple-100 rounded-md">
                    <Image
                      src={"/Assets/github.svg"}
                      alt={"GitHub"}
                      width={15}
                      height={20}
                    />
                    <p className="text-black  text-[12px] font-semibold">
                      GitHub
                    </p>
                  </button>
                </a>
                {/* Preview */}
                <a href="https://my-dream-house.netlify.app/" target="_blank">
                  <button className="flex items-center gap-2 px-3 py-1 border border-purple-900 hover:bg-purple-100 rounded-md">
                    <Image
                      src={"/Assets/Preview.svg"}
                      alt={"Preview"}
                      width={15}
                      height={20}
                    />
                    <p className="text-black  text-[12px] font-semibold">
                      Preview
                    </p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Student React */}
        <div className="flex">
          {/* Card */}
          <div className="flex flex-col gap-2 md:w-[60%] lg:w-[100%] shadow-2xl rounded-xl">
            <Image
              src={"/Assets/Student.png"}
              alt={"Dream-House"}
              width={450}
              height={200}
              className="rounded-t-md"
            />
            <div className="flex flex-col gap-3 p-3">
              <p className="text-black font-semibold">Student Web</p>
              <div className="flex gap-4 lg:gap-[4rem]">
                {/* HTML */}
                <div className="flex items-center gap-2 px-2 py-1 border border-purple bg-slate-200 rounded-md">
                  <Image
                    src={"/Assets/html.svg"}
                    alt={"HTML"}
                    width={10}
                    height={20}
                  />
                  <p className="text-black  text-[10px] font-semibold border-s-violet-50">
                    HTML
                  </p>
                </div>
                {/* Tailwind CSS */}
                <div className="flex items-center gap-2 px-2 py-1 border border-purple bg-slate-200 rounded-md">
                  <Image
                    src={"/Assets/css.svg"}
                    alt={"Tailwind"}
                    width={20}
                    height={20}
                  />
                  <p className="text-black  text-[10px] font-semibold">
                    Tailwind
                  </p>
                </div>
                {/* React*/}
                <div className="flex items-center gap-2 px-2 py-1 border border-purple bg-slate-200 rounded-md">
                  <Image
                    src={"/Assets/react-js.svg"}
                    alt={"Tailwind"}
                    width={20}
                    height={20}
                  />
                  <p className="text-black  text-[10px] font-semibold">React</p>
                </div>
              </div>
              <p className="text-black ">
                This is an educational web page showcasing courses availabe and
                course packages. It is a UI design originally from the figma
                community.
              </p>

              {/* View */}
              <div className="flex gap-[8rem]">
                {/* GitHub */}
                <a
                  href="https://github.com/Catherine-Awuletey/Student-react"
                  target="_blank"
                >
                  <button className="flex flex-row items-center gap-2 px-3 py-1 border border-purple-900 hover:bg-purple-100 rounded-md">
                    <Image
                      src={"/Assets/github.svg"}
                      alt={"GitHub"}
                      width={15}
                      height={20}
                    />
                    <p className="text-black  text-[12px] font-semibold">
                      GitHub
                    </p>
                  </button>
                </a>
                {/* Preview */}
                <a href="https://students-web.netlify.app/" target="_blank">
                  <button className="flex items-center gap-2 px-3 py-1 border border-purple-900 hover:bg-purple-100 rounded-md">
                    <Image
                      src={"/Assets/Preview.svg"}
                      alt={"Preview"}
                      width={15}
                      height={20}
                    />
                    <p className="text-black  text-[12px] font-semibold">
                      Preview
                    </p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Projects List */}
        <div className="flex">
          {/* Card */}
          <div className="flex flex-col gap-2 md:w-[60%] lg:w-[100%] shadow-2xl rounded-xl">
            <Image
              src={"/Assets/projects.png"}
              alt={"Dream-House"}
              width={500}
              height={200}
              className="rounded-t-md"
            />
            <div className="flex flex-col gap-3 p-3">
              <p className="text-black font-semibold">Projects List</p>
              <div className="flex gap-[8rem]">
                {/* HTML */}
                <div className="flex items-center gap-2 px-2 py-1 border border-purple bg-slate-200 rounded-md">
                  <Image
                    src={"/Assets/html.svg"}
                    alt={"HTML"}
                    width={10}
                    height={20}
                  />
                  <p className="text-black  text-[10px] font-semibold border-s-violet-50">
                    HTML
                  </p>
                </div>
                {/* Tailwind CSS */}
                <div className="flex items-center gap-2 px-2 py-1 border border-purple bg-slate-200 rounded-md">
                  <Image
                    src={"/Assets/css.svg"}
                    alt={"Tailwind"}
                    width={20}
                    height={20}
                  />
                  <p className="text-black  text-[10px] font-semibold">
                    Tailwind
                  </p>
                </div>
              </div>
              <p className="text-black ">
                This is a list of projects completed so far, with links to host
                them. 
              </p>

              {/* View */}
              <div className="flex gap-[8rem] pt-[25px]">
                {/* GitHub */}
                <a
                  href="https://github.com/Catherine-Awuletey/Projects-list"
                  target="_blank"
                >
                  <button className="flex flex-row items-center gap-2 px-3 py-1 border border-purple-900 hover:bg-purple-100 rounded-md">
                    <Image
                      src={"/Assets/github.svg"}
                      alt={"GitHub"}
                      width={15}
                      height={20}
                    />
                    <p className="text-black  text-[12px] font-semibold">
                      GitHub
                    </p>
                  </button>
                </a>
                {/* Preview */}
                <a href="https://myprojectslist.netlify.app/" target="_blank">
                  <button className="flex items-center gap-2 px-3 py-1 border border-purple-900 hover:bg-purple-100 rounded-md">
                    <Image
                      src={"/Assets/Preview.svg"}
                      alt={"Preview"}
                      width={15}
                      height={20}
                    />
                    <p className="text-black  text-[12px] font-semibold">
                      Preview
                    </p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
