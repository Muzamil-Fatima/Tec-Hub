import React from "react";
import certificate from "../../../Images/certificate.png";
const Certificate = () => {
  return (
    <div>
      <h2>Recognized Certification from TecHub</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae,
        maxime inventore qui saepe officia obcaecati ipsam est maiores corrupti
        rerum. Iusto repellat, sit consectetur velit at quisquam nihil nostrum,
        nulla natus odio perferendis in facere quam illo laboriosam enim.
      </p>
      <p>Sample Certificate Preview</p>
      <img src={certificate} alt="" />
      <p>*Certificates are digitally verifiable and can be shared on LinkedIn & CVs</p>
    </div>
  );
};

export default Certificate;
