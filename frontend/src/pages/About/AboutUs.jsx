import React from "react";
import Training from "../../../Images/Training.png";
import WeDo from "./WeDo";
import OurTec from "./OurTec";
const AboutUs = () => {
  return (
    <div>
      <h2 className="text-4xl font-extrabold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center mt-6">About Us</h2>
      <div className="grid grid-cols-2 p-10 px-20 gap-6">
        <img src={Training} alt="" className="shadow-2xl shadow-purple-600 rounded-2xl" />
        <div className="flex space-y-2 flex-col">
          <p className="text-4xl font-bold mb-3 text-center">Who We Are</p>
          <p>
            TecHub is a tech-driven community built by passionate innovators. We
            started with the goal of providing internships, skill-building
            programs, and practical exposure for students.
          </p>
          <p>
            In the future, we plan to expand into hosting hackathons, workshops,
            and live classes to empower the next generation of developers.
          </p>
        </div>
      </div>
      <div>
        <WeDo />
      </div>
      <div>
        <OurTec />
      </div>
    </div>
  );
};

export default AboutUs;
