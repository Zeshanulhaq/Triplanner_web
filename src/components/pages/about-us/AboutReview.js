import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//Import Images
import review1Img from "../../../assets/images/reviewer/reviewer-1.png";
import review2Img from "../../../assets/images/reviewer/reviewer-2.png";
import review3Img from "../../../assets/images/reviewer/reviewer-3.png";

const AboutReview = () => {
  const reviewOptions = {
    stagePadding: 10,
    items: 3,
    loop: true,
    margin: 15,
    smartSpeed: 1500,
    autoplay: false,
    dots: true,
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
      800: {
        items: 2,
        nav: false,
        dots: false,
      },
      1000: {
        items: 3,
        dots: true,
        nav: false,
        loop: true,
      },
    },
  };

  return (
    <>
      {/* =============== Review area start =============== */}
      <div className="review-area mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-head pb-40">
                <h5>Our Traveller Say</h5>
                <h2>What Oue Traveller Say About Us</h2>
              </div>
            </div>
          </div>
          <OwlCarousel
            className="review-slider owl-carousel"
            {...reviewOptions}
          >
            <div className="review-card ">
              <div className="reviewer-img">
                <img src={review1Img} alt="" className="img-fluid" />
              </div>
              <div className="reviewer-info">
                <h3>Tamina sheikh</h3>
                <h5>Traveller</h5>
                <p>
                It was a very nice experience to travel through
                Trip Planner i would like to suggest it to my friends who
                would like to come and experience such a pleseant journey
                  </p>
              </div>
            </div>
            <div className="review-card">
              <div className="reviewer-img">
                <img src={review2Img} alt="" className="img-fluid" />
              </div>
              <div className="reviewer-info">
                <h3>Abdul wahab</h3>
                <h5>Traveller</h5>
                <p>
                It was a very nice experience and informative.{" "}
                </p>
              </div>
            </div>
            <div className="review-card">
              <div className="reviewer-img">
                <img src={review3Img} alt="" className="img-fluid" />
              </div>
              <div className="reviewer-info">
                <h3>Muhammad Irfan</h3>
                <h5>Traveller</h5>
                <p>
                Loves the way to explore such an amazing things.{" "}
                </p>
              </div>
            </div>
            <div className="review-card ">
              <div className="reviewer-img">
                <img src={review1Img} alt="" className="img-fluid" />
              </div>
              <div className="reviewer-info">
                <h3>Sara Irfan</h3>
                <h5>Traveller</h5>
                <p>
                almost good but still some things needs to work on i hope better experience next time.{" "}
                </p>
              </div>
            </div>
            <div className="review-card">
              <div className="reviewer-img">
                <img src={review2Img} alt="" className="img-fluid" />
              </div>
              <div className="reviewer-info">
                <h3>Raja Irfan</h3>
                <h5>Traveller</h5>
                <p>
                it feels awesome.{" "}
                </p>
              </div>
            </div>
            <div className="review-card">
              <div className="reviewer-img">
                <img src={review3Img} alt="" className="img-fluid" />
              </div>
              <div className="reviewer-info">
                <h3>Waqas Ali</h3>
                <h5>Traveller</h5>
                <p>
                Good site to explore such an amazing sites to visit i really recommend it to others.{" "}
                </p>
              </div>
            </div>
            <div className="review-card ">
              <div className="reviewer-img">
                <img src={review1Img} alt="" className="img-fluid" />
              </div>
              <div className="reviewer-info">
                <h3>Sidra baig</h3>
                <h5>Traveller</h5>
                <p>
                its the platform where you can get to know about many things and history.{" "}
                </p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
      {/* =============== Review area end =============== */}
    </>
  );
};

export default AboutReview;
