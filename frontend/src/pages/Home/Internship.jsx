import React from "react";
import Benefit from "./Benefit";

const Internship = () => {
  return (
    <div className="bg-linear-to-br from-blue-50 via-white to purple-50 ">
      <div>
        <h2 className="text-4xl font-bold text-center p-10">
          Our{" "}
          <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Internship Benefits
          </span>{" "}
        </h2>
        <p className="w-1/2 text-center m-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
          blanditiis ad fuga debitis obcaecati ducimus nulla illo, pariatur
          deleniti, porro exercitationem ipsam modi quam sunt aliquid! Doloribus
          sint eius maiores?
        </p>
      </div>
      <div className="px-24 mt-8 ">
        <Benefit />
      </div>
    </div>
  );
};

export default Internship;
