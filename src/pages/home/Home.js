import React from "react";
import "./home.css";
import Banner from "./Banner";
import About from "../../components/about/About";
import Fact from "../../components/fact/Fact";
import OurServices from "../../components/our-services/OurServices";
import OurAnimals from "../../components/our-animals/OurAnimals";
import OurTeam from "../../components/our-team/OurTeam";
import Visiting from "../../components/visiting/Visiting";
import Testimonials from "../../components/testimonials/Testimonials";
import ScrollToTop from "../../components/scrolltotop/ScrollToTop";
//import Loading from "../../components/loading/Loading";

export default function Home() {
  return (
    <>
      {/* <Loading /> */}
      <Banner />
      <About />
      <Fact />
      <OurServices />
      <OurAnimals />
      <Visiting />
      <OurTeam />
      <Testimonials />
      <ScrollToTop />

    </>
  );
}
