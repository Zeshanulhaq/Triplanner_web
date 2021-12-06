import React, { Component } from "react";

import HomePage from "../pages/home/HomePage";
import Headers from "../common/headers";
import Footers from "../common/footers";

//default layout
const MainLayout = () => {
  return (
    <>
      <Headers />
      <HomePage />
      <Footers />
    </>
  );
};

export default MainLayout;
