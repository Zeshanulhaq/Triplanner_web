import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//Load Image
import package1Img from "../../../assets/images/package/p-1.png";
import package2Img from "../../../assets/images/package/p-2.png";
import package3Img from "../../../assets/images/package/p-3.png";
import package4Img from "../../../assets/images/package/p-4.png";
import package5Img from "../../../assets/images/package/p-5.png";
import package6Img from "../../../assets/images/package/p-6.png";

const Packages = () => {
  const [data, setdata] = useState([]);
  // const [pImg, setpImg] = useState();
  // const [price, setprice] = useState();
  // const [pdurat, setpdurat] = useState();
  // const [ptitle, setptitle] = useState();
  // const [prating, setprating] = useState();
  // const [error, seterror] = useState(null);
  // const [loading, setloading] = useState(false);

  const clk = () => {};

  useEffect(() => {
    async function getPkg() {
      let resp = axios.get("http://127.0.0.1:8000/Pakgapi/");
      // console.log((await resp).data);
      setdata((await resp).data);
    }
    getPkg();
  }, []);
  return (
    <div>
      {/* ===============  breadcrumb area start =============== */}
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="breadcrumb-wrap">
                <h2>Tour Package</h2>
                <ul className="breadcrumb-links">
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                    <i className="bx bx-chevron-right" />
                  </li>
                  <li>Tour Package</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===============  breadcrumb area end =============== */}

      {/* ===============  Package  area start =============== */}
      <div className="package-area pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-head pb-45">
                <h5>Choose Your Package</h5>
                <h2>Select Your best Package For Your Travel</h2>
              </div>
            </div>
          </div>
          {/* Start */}

          <div className="row">
            {data.map((places, i) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link
                      to={`${process.env.PUBLIC_URL}/package-details`}
                      onClick={clk}
                    >
                      <img src={places.pImg} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>{places.price}PKR</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />
                        {places.pdurat}Day
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link
                        to={`${process.env.PUBLIC_URL}/package-details`}
                        onClick={clk}
                      >
                        {" "}
                        {places.ptitle}
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>{places.prating} </span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===============  Package  area end =============== */}
     
    </div>
  );
};

export default Packages;
