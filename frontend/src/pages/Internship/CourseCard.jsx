import React, { useState } from "react";
import CourseModal from "./CourseModal";
const CourseCard = ({ course }) => {
  const [open, setOpen] = useState(false);
  return (
      <div className="text-xs bg-white p-6 flex flex-col space-y-4  rounded-2xl hover:shadow-2xl shadow-gray-300 wrap-break-word w-full">
        {/* <img src={course.image} alt="" /> */}
        <h3 className="text-xl font-bold wrap-break-word">{course.title}</h3>
        <p className="text-gray-400 text-sm wrap-break-word">{course.subtitle}</p>
        <p>{course.description}</p>
        <ul>
          {course.shortDetail?.map((detail, index) => (
            <li key={index} className="wrap-break-word">{detail}</li>
          ))}
        </ul>
        <div>
          <button
            onClick={() => setOpen(true)}
            className="px-2 py-2.5 rounded-2xl border shadow-2xl shadow-gray-300"
          >
            Learn More
          </button>
          <button className="bg-purple-700 hover:bg-purple-800 text-white px-2 py-2.5 rounded-2xl">
            Apply Now
          </button>
        </div>
        {open && <CourseModal course={course} onClose={() => setOpen(false)} />}
      </div>
  );
};

export default CourseCard;
