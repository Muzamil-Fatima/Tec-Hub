import React from "react";
import tec from "../../../Images/AboutTec.png";
const About = () => {
  return (
    <div className="flex flex-row justify-around space-x-6 p-8 mb-20">
      <div className="w-1/2 pt-6">
        <h2 className="text-4xl font-bold mb-6">
          About{" "}
          <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent ">
            TecHub
          </span>
        </h2>
        <p className="p-4 w-lg text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          repellendus ipsum in! Vel, sunt recusandae? Totam molestiae, eligendi
          quae, animi ex reprehenderit a minus, neque excepturi reiciendis velit
          magni odio.
        </p>
        <button className="bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500 px-4 py-2.5 rounded-xl font-semibold text-white hover:border-purple-700 hover:border hover:bg-none hover:text-purple-900">
          Learn More
        </button>
      </div>
      <div className="w-1/2 hover:shadow-lg">
        <img
          src={tec}
          alt=""
          className="h-96 rounded-2xl w-full hover:shadow-2xl hover:shadow-purple-700"
        />
      </div>
    </div>
  );
};

export default About;
