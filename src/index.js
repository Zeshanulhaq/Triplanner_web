import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Image LightBox
import SimpleReactLightbox from "simple-react-lightbox";

//Layout default import from components.
import defaultLayout from "./components/layouts/main";

//Import wrapping layout
import Layout from "./components/app";

//Import all page from components
import aboutUs from "./components/pages/about-us/AboutUs";
import destinations from "./components/pages/Destinations";

import Restorants from "./components/pages/Restorants";
import packages from "./components/pages/package/Packages";
import contact from "./components/pages/contact/Contact";
import faq from "./components/pages/faq/Faq";
import error from "./components/pages/404/404";
//import guide from "./components/pages/guide/GuideComponent";
import gallary from "./components/pages/gallary/GalleryComponent";
import packageDetails from "./components/pages/package/PackageDetails";
import PackageDetails1 from "./components/pages/package/PackageDetails1";
import PackageDetails2 from "./components/pages/package/PackageDetails2";
import PackageDetails4 from "./components/pages/package/PackageDetails4";
import PackageDetails5 from "./components/pages/package/PackageDetails5";

import SignIn from "./components/pages/Account/SignIn";
import Profile from "./components/pages/Account/Profile";

import Signup from "./components/pages/Account/Signup";
import hottels from "./components/pages/hottels";
import UploadDest from "./components/pages/Admin/UploadDest";
import Traval from "./components/pages/Traval";

//this is a comment
//Initializations All Css
import "./index.css";
import "./index.scss";

//Default Warniing Error Hide
// console.log = console.warn = console.error = () => {};

/*
 * Version : 0.1
 * Event : Rendering all content to web.
 * Actions: Define all routes and page.
 * @return html
 * */

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route exact path="/" component={defaultLayout} />

          <Layout>
            <Route
              path={`${process.env.PUBLIC_URL}/about-us`}
              component={aboutUs}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/destination`}
              component={destinations}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/uploadDest`}
              component={UploadDest}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/Restorants`}
              component={Restorants}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/hottels`}
              component={hottels}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/package`}
              component={packages}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/package-details`}
              component={packageDetails}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/package-details1`}
              component={PackageDetails1}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/package-details2`}
              component={PackageDetails2}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/package-details4`}
              component={PackageDetails4}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/package-details5`}
              component={PackageDetails5}
            />
            <Route path={`${process.env.PUBLIC_URL}/faq`} component={faq} />
            <Route path={`${process.env.PUBLIC_URL}/404`} component={error} />
          {/* <Route path={`${process.env.PUBLIC_URL}/guide`} component={guide} /> */}
            <Route
              path={`${process.env.PUBLIC_URL}/gallary`}
              component={gallary}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/Traval`}
              component={Traval}
            />

            <Route
              path={`${process.env.PUBLIC_URL}/contact`}
              component={contact}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/SignIn`}
              component={SignIn}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/Profile`}
              component={Profile}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/Signup`}
              component={Signup}
            />
          </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <Root />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById("root")
);
