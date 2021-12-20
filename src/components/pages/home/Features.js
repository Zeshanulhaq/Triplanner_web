import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

//Import Images
import features1Img from "../../../assets/images/feature/f-1.png";
import features2Img from "../../../assets/images/feature/f-2.png";
import features3Img from "../../../assets/images/feature/malam-jabba.png";
import features4Img from "../../../assets/images/feature/Naran_friends.png";
import features5Img from "../../../assets/images/feature/murree.png";
import features6Img from "../../../assets/images/feature/islamabad-1.png";
const Features = () => {
  const featuresOptions = {
    items: 2,
    loop: true,
    margin: 30,
    smartSpeed: 1500,
    autoplay: false,
    dots: false,
    nav: true,
    navText: [
      "<i class='bx bx-chevron-left' ></i>",
      "<i class='bx bx-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      600: {
        items: 1,
        nav: false,
        dots: false,
      },
      1000: {
        items: 2,
        dots: false,
        nav: false,
        loop: true,
      },
    },
  };

  return (
    <>
      {/* ===============  Feature area start =============== */}
      <div className="feature-area mt-120 p-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-head pb-60">
                <h5>Feature Tours</h5>
                <h2>See Our Best Popular Destinations</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <OwlCarousel
                className="feature-slider owl-carousel"
                {...featuresOptions}
              >
                <div className="feature-card">
                  <div className="feature-img">
                    <img src={features3Img} alt="" className="img-fluid" />
                  </div>
                  <div className="feature-content">
                    <Link
                      to={`${process.env.PUBLIC_URL}/package-details`}
                      className="title"
                    >
                      Group Travel Go To Malam Jabba In Winter
                    </Link>
                    <h5>
                      <i className="bx bxs-star" />
                      <span> 7K+</span>Rating
                    </h5>
                    <strong>
                      3000PKR Per Person <span>5000PKR</span>
                    </strong>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="feature-img">
                    <img src={features4Img} alt="" className="img-fluid" />
                  </div>
                  <div className="feature-content">
                    <Link
                      to={`${process.env.PUBLIC_URL}/package-details`}
                      className="title"
                    >
                      Group Travel Go To Naran,Kaghan In Summer.
                    </Link>
                    <h5>
                      <i className="bx bxs-star" />
                      <span> 7K+</span>Rating
                    </h5>
                    <strong>
                    5000PKR Per Person <span>6000PKR</span>
                    </strong>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="feature-img">
                    <img src={features6Img} alt="" className="img-fluid" />
                  </div>
                  <div className="feature-content">
                    <Link
                      to={`${process.env.PUBLIC_URL}/package-details`}
                      className="title"
                    >
                      Group Travel Go To Islamabad
                    </Link>
                    <h5>
                      <i className="bx bxs-star" />
                      <span> 7K+</span>Rating
                    </h5>
                    <strong>
                    5000PKR Per Person <span>8000PKR</span>
                    </strong>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="feature-img">
                    <img src={features5Img} alt="" className="img-fluid" />
                  </div>
                  <div className="feature-content">
                    <Link
                      to={`${process.env.PUBLIC_URL}/package-details`}
                      className="title"
                    >
                      Group Travel Go To Murree(Galiyat)
                    </Link>
                    <h5>
                      <i className="bx bxs-star" />
                      <span> 7K+</span>Rating
                    </h5>
                    <strong>
                    5000PKR Per Person <span>7000</span>
                    </strong>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="feature-img">
                    <img src={features2Img} alt="" className="img-fluid" />
                  </div>
                  <div className="feature-content">
                    <Link
                      to={`${process.env.PUBLIC_URL}/package-details`}
                      className="title"
                    >
                      Group Travel Go Lahore In Oct , November
                    </Link>
                    <h5>
                      <i className="bx bxs-star" />
                      <span> 7K+</span>Rating
                    </h5>
                    <strong>
                     4500PKR Per Person<span>6000PKR</span>
                    </strong>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
      {/* ===============  Feature area start =============== */}
    </>
  );
};

export default Features;
