import React from "react";
import Banner from "./Banner";
import About from "../../components/about/About";
import Mission from "./Mission";
import OurTeam from "../../components/our-team/OurTeam";
import Fact from "../../components/fact/Fact";
import ScrollToTop from "../../components/scrolltotop/ScrollToTop";
//import Loading from "../../components/loading/Loading";

const AboutUs = () => {
  return (
    <>
      {/* <Loading /> */}
      <Banner />
      <About />
      <Mission />
      <Fact />
      <OurTeam /> 
      <ScrollToTop />
    </>
  );
};

export default AboutUs;
