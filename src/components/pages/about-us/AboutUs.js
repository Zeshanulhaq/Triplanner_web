import React, { Component } from "react";
import BreadCrumb from "./BreadCrumb";
import AboutWrapper from "./AboutWrapper";
import GuideWrapper from "./GuideWrapper";
import Achievement from "./Achievement";
import AboutReview from "./AboutReview";
import AboutBlog from "./AboutBlog";

const AboutUs = () => {
  return (
    <>
      <BreadCrumb />
      <AboutWrapper />
      <GuideWrapper />
      <Achievement />
      <AboutReview />
    </>
  );
};

export default AboutUs;
