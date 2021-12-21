import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";

import { Link, NavLink } from "react-router-dom";
// import {Autocomplete} from '@react-google-maps/api';

//Import Image
import logoMain from "../../assets/images/Triplanner.png";
import secondLogo from "../../assets/images/Triplanner2.png";

const Headers = ({ setCoords }) => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [autocomplete, setautocomplete] = useState(null);

  const onLoad = (autoC) => setautocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };

  return (
    <>
      {/* =============== Topbar area start =============== */}
      <div className="topbar-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 tob-contact-row">
              <div className="topbar-contact">
                <ul>
                  <li>
                    <i className="bx bxs-phone" />
                    <a href="tel:+92 3068484188">+92 3068484188</a>
                  </li>

                  <li>
                    <i className="bx bxs-envelope" />
                    <a href="mailto:info@example.com">
                      SP18-BSE-027@cuiwah.edu.pk
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 col-6">
              <div className="topbar-social">
                <ul>
                  <li>
                    <Link to={"#"}>
                      <i className="bx bxl-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i className="bx bxl-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i className="bx bxl-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i className="bx bxl-whatsapp" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============== Topbar area end =============== */}

      {/* ===============  header area start =============== */}
      <header>
        <div className="header-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                <div className="navbar-wrap">
                  <div className="logo d-flex justify-content-between">
                    <Link
                      to={`${process.env.PUBLIC_URL}/`}
                      className="navbar-brand"
                      onClick={scrollTop}
                    >
                      <img src={logoMain} alt="" />
                    </Link>
                  </div>
                  <div className="navbar-icons">
                    <div className="searchbar-open">
                      <i className="flaticon-magnifier" />
                    </div>
                    <div className="user-dropdown-icon">
                      <i className="flaticon-user" />
                      <div className="account-dropdown">
                        <ul>
                          <li className="account-el">
                            <i className="bx bx-user-pin" />
                            <Link to={"/SignIn"}>Sign in</Link>
                          </li>
                          <li className="account-el">
                            <i className="bx bxs-user-account" />
                            <Link to={"#"}>My Account</Link>
                          </li>
                          <li className="account-el">
                            <i className="bx bx-extension" />
                            <Link to={"#"}>Settings</Link>
                          </li>
                          <li className="account-el">
                            <i className="bx bx-log-in-circle" />
                            <Link to={"#"}>Log out</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mobile-menu d-flex ">
                      <div className="top-search-bar m-0 d-block d-xl-none"></div>
                      <Link to={"#"} className="hamburger d-block d-xl-none">
                        <span className="h-top" />
                        <span className="h-middle" />
                        <span className="h-bottom" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                <nav className="main-nav">
                  <div className="navber-logo-sm">
                    <img src={secondLogo} alt="" className="img-fluid" />
                  </div>
                  <ul>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to={`${process.env.PUBLIC_URL}/`}
                        onClick={scrollTop}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to={`${process.env.PUBLIC_URL}/about-us`}
                        onClick={scrollTop}
                      >
                        About us
                      </NavLink>
                    </li>
                    <li className="has-child-menu">
                      <Link to={"#"}>Services</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            activeClassName="active"
                            to={`${process.env.PUBLIC_URL}/destination`}
                            className="sub-item"
                            onClick={scrollTop}
                          >
                            Destinations
                          </NavLink>
                        </li>

                        <li>
                          <NavLink
                            activeClassName="active"
                            to={`${process.env.PUBLIC_URL}/hottels`}
                            className="sub-item"
                            onClick={scrollTop}
                          >
                            hotels
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            activeClassName="active"
                            to={`${process.env.PUBLIC_URL}/restorants`}
                            className="sub-item"
                            onClick={scrollTop}
                          >
                            restorants
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu">
                      <Link to={"#"}>Tour Package</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            activeClassName="active"
                            to={`${process.env.PUBLIC_URL}/package`}
                            className="sub-item"
                            onClick={scrollTop}
                          >
                            package
                          </NavLink>
                        </li>

                        <li>
                          <NavLink
                            activeClassName="active"
                            to={`${process.env.PUBLIC_URL}/package-details`}
                            className="sub-item"
                            onClick={scrollTop}
                          >
                            package details
                          </NavLink>
                        </li>
                      </ul>
                    </li>

                    <li className="has-child-menu">
                      <Link to={"#"}>Others</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            activeClassName="active"
                            to={`${process.env.PUBLIC_URL}/gallary`}
                            className="sub-item"
                            onClick={scrollTop}
                          >
                            gallary
                          </NavLink>
                        </li>
                        {/* <li>
                          <NavLink
                            activeClassName="active"
                            to={`${process.env.PUBLIC_URL}/guide`}
                            className="sub-item"
                            onClick={scrollTop}
                          >
                            guide page
                          </NavLink>
                        </li> */}
                        {/* <li>
                          <NavLink
                            activeClassName="active"
                            to={`${process.env.PUBLIC_URL}/destination`}
                            className="sub-item"
                            onClick={scrollTop}
                          >
                            destination page
                          </NavLink>
                        </li> */}
                        {/* <li>
                          <NavLink
                            activeClassName="active"
                            to={`${process.env.PUBLIC_URL}/404`}
                            className="sub-item"
                            onClick={scrollTop}
                          >
                            404 Page
                          </NavLink>
                        </li> */}
                        <li>
                          <NavLink
                            activeClassName="active"
                            to={`${process.env.PUBLIC_URL}/faq`}
                            className="sub-item"
                            onClick={scrollTop}
                          >
                            FAQ page
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to={`${process.env.PUBLIC_URL}/contact`}
                        onClick={scrollTop}
                      >
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                  <div className="navbar-icons-2">
                    <div className="searchbar-open">
                      <i className="flaticon-magnifier" />
                    </div>
                    <div className="user-dropdown-icon">
                      <i className="flaticon-user" />
                      <div className="account-dropdown">
                        <ul>
                          <li className="account-el">
                            <i className="bx bx-user-pin" />
                            <Link to={`/SignIn`}>Sign in</Link>
                          </li>
                          <li className="account-el">
                            <i className="bx bxs-user-account" />
                            <Link to={`#`}>My Account</Link>
                          </li>
                          <li className="account-el">
                            <i className="bx bx-extension" />
                            <Link to={`#`}>Settings</Link>
                          </li>
                          <li className="account-el">
                            <i className="bx bx-log-in-circle" />
                            <Link to={`#`}>Log out</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-contact">
                    <ul>
                      <li className="sidebar-single-contact">
                        <i className="bx bxs-phone" />
                        <Link to={`tel:+17632275032`}>+1 763-227-5032</Link>
                      </li>
                      <li className="sidebar-single-contact">
                        <i className="bx bxs-envelope" />
                        <Link to={`mailto:info@example.com`}>
                          info@example.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className="main-searchbar">
              <div className="searchbar-close">
                <i className="bx bx-x" />
              </div>
              <input type="text" placeholder="Search Here......" />
              <div className="searchbar-icon">
                <i className="bx bx-search" />
              </div>
            </div>
          </Autocomplete>
        </div>
      </header>
      {/* ===============  header area end =============== */}
    </>
  );
};

export default Headers;
