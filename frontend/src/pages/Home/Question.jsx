import React, { useState } from "react";

const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };
  const dropDown = [
    {
      question: "What is TecHub?",
      answer:
        "TecHub is a platform that offers internship training, software solutions, and future courses to empower individuals in the tech industry.",
    },
    {
      question: "What is TecHub?",
      answer:
        "TecHub is a platform that offers internship training, software solutions, and future courses to empower individuals in the tech industry.",
    },
    {
      question: "What is TecHub?",
      answer:
        "TecHub is a platform that offers internship training, software solutions, and future courses to empower individuals in the tech industry.",
    },
    {
      question: "What is TecHub?",
      answer:
        "TecHub is a platform that offers internship training, software solutions, and future courses to empower individuals in the tech industry.",
    },
    {
      question: "What is TecHub?",
      answer:
        "TecHub is a platform that offers internship training, software solutions, and future courses to empower individuals in the tech industry.",
    },
    {
      question: "What is TecHub?",
      answer:
        "TecHub is a platform that offers internship training, software solutions, and future courses to empower individuals in the tech industry.",
    },
    {
      question: "What is TecHub?",
      answer:
        "TecHub is a platform that offers internship training, software solutions, and future courses to empower individuals in the tech industry.",
    },
    {
      question: "What is TecHub?",
      answer:
        "TecHub is a platform that offers internship training, software solutions, and future courses to empower individuals in the tech industry.",
    },
    {
      question: "What is TecHub?",
      answer:
        "TecHub is a platform that offers internship training, software solutions, and future courses to empower individuals in the tech industry.",
    },
  ];
  return (
    <div className="bg-gray-50">
      <h2 className="text-4xl font-bold text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-400 mb-14 text-center p-6">
        Have doubts? We’ve got you covered. Here are the answers to the most
        common questions.
      </p>
      {dropDown.map((item, index) => {
        return (
          <div key={index} className="gap-4">
            <div className="flex justify-around bg-white" onClick={() => toggle(index)}>
              <p>{item.question}</p>
              <svg
                fill="#9810fa"
                width="24px"
                height="24px"
                viewBox="-6.5 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>dropdown</title>
                <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"></path>
              </svg>
            </div>
            {openIndex === index && <p>{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Question;
