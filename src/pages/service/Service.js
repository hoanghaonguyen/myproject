import React from "react";
import './service.css'
import OurServices from "./../../components/our-services/OurServices";
import Banner from "../about/Banner";
import TitleService from "./TitleService";
import ScrollToTop from "../../components/scrolltotop/ScrollToTop";

const Service = () => {
  return (
    <>
      <Banner />
      <TitleService />
      <OurServices />
      <ScrollToTop />
    </>
  );
};

export default Service;
