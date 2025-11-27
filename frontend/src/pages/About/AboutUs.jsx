import React from "react";
import Training from "../../../Images/Training.png";
const AboutUs = () => {
  return (
    <div>
      <h2>About Us</h2>
      <div className="grid grid-cols-2 p-10 px-20 gap-6">
        <img src={Training} alt="" />
        <div>
          <p>Who We Are</p>
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
    </div>
  );
};

export default AboutUs;
