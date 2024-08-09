import React from "react";
import Banner from "./Banner";
import About from "../../components/about/About";
import Mission from "./Mission";
import OurTeam from "../../components/our-team/OurTeam";
import Fact from "../../components/fact/Fact";

const AboutUs = () => {
  return (
    <>
      <Banner />
      <About />
      <Mission />
      <Fact />
      <OurTeam /> 
    </>
  );
};

export default AboutUs;
