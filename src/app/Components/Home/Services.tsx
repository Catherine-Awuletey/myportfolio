import React from "react";

function Services() {
  return (
    <div
      className="lg:flex justify-around items-center px-5 py-[2rem] bg-white text-purple-800"
      id="Services"
    >
      <div className="">
      <h1 className="text-purple-800 text-[30px] lg:text-[2rem] font-bold mb-4 ">
        MY SERVICES
      </h1>
      <p className="text-pink-600 font-semibold">
        I offer a range of web development and design services. <br/>Let’s work
        together to bring your vision to life with <br />clean, efficient code and
        modern aesthetics.
      </p>
      </div>
      
      <div className="py-3 lg:grid grid-cols-2 gap-3">
        <div className="mb-4 shadow-md p-5 bg-purple-100 rounded-lg">
          <div></div>

          <h2 className="text-purple-950 font-semibold text-[2rem]">
            Web Development
          </h2>
          <p className="text-purple-950">Responsive Design</p>
          <p className="text-purple-950">Performance Optimization</p>
        </div>
        <div className="mb-4 shadow-md p-5 bg-purple-100 rounded-lg">
          <h2 className="text-purple-950 font-semibold text-[2rem]">
            UI/UX Design
          </h2>
          <p className="text-purple-950">User Interface Design</p>
          <p className="text-purple-950">User Experience Design</p>
        </div>
        <div className="mb-4 shadow-md p-5 bg-purple-100 rounded-lg">
          <h2 className="text-purple-950 font-semibold text-[2rem]">
            Front-End Development
          </h2>
          <p className="text-purple-950">HTML, CSS, and JavaScript</p>
          <p className="text-purple-950">React.js and Next.js</p>
        </div>
        <div className="mb-4 shadow-md p-5 bg-purple-100 rounded-lg">
          <h2 className="text-purple-950 font-semibold text-[2rem]">
            Consultation
          </h2>
          <p className="text-purple-950">Project Planning</p>
          <p className="text-purple-950">Code Review and Optimization</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
