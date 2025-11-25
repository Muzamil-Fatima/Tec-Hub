import React from "react";
import Header from "./Header";
import About from "./About";
import Internship from "./Internship";
import TecHub from "./TecHub";
import Future from "./Future";
import Certificate from "./Certificate";
import Vision from "./Vision";
import Question from "./Question";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <About />
      <Internship />
      <TecHub />
      <Future />
      <Certificate />
      <Vision />
      <Question />
    </div>
  );
};

export default LandingPage;
