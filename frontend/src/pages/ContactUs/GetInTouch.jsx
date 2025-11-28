import React from "react";

const GetInTouch = () => {
  const information = [
    { title: "Email", icon: "", description: "tecHub@gmail.com" },
    { title: "Phone", icon: "", description: "+92 XXXXXXXXXX" },
    {
      title: "Address",
      icon: "",
      description: "Gujranwala, Punjab , Pakistan",
    },
  ];
  return (
    <div>
      <h3 className="text-4xl font-bold mb-3 text-center flex justify-center mt-16">
        Contact <span className="text-blue-700 ml-2"> Information</span>{" "}
      </h3>
      <div className="grid grid-cols-3 gap-8 items-center m-10 bg-white rounded-lg">
        {information.map((item, index) => (
          <div
            key={index}
            className="bg-purple-6 flex flex-col gap-2.5 items-center p-4 pt-8 px-6 shadow-2xl shadow-gray-300 pb-8 rounded-lg hover:shadow-xl"
          >
            <div className="bg-linear-to-br from-blue-100 via-purple to bg-blue-200 rounded-full w-18 h-18 flex justify-center items-center hover:rotate-45 ">
              {item.icon}
            </div>
            <p className="font-bold text-xl">{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetInTouch;
