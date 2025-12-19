import React from "react";
import certificate from "../../../Images/Certificate.png";
const Certificate = () => {
  return (
    <div className="flex justify-center flex-col items-center w-4xl m-auto">
      <h2  className="text-4xl font-bold mt-12 mb-10">Recognized Certification from TecHub</h2>
      <p className="w-3/5 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae,
        maxime inventore qui saepe officia obcaecati ipsam est maiores corrupti
        rerum. Iusto repellat, sit consectetur velit at quisquam nihil nostrum,
        nulla natus odio perferendis in facere quam illo laboriosam enim.
      </p>
      <p className="text-2xl text-gray-500 mb-6">Sample Certificate Preview</p>
      <img src={certificate} alt="" className=" rounded-2xl flex justify-center m-auto  hover:shadow-2xl hover:shadow-purple-700" />
      <p className="p-8">*Certificates are digitally verifiable and can be shared on LinkedIn & CVs</p>
    </div>
  );
};

export default Certificate;
