import React, { Component } from "react";
import { Link } from "react-router-dom";


//Import Images
import blog1Img from "../../../assets/images/blog/b-1.png";
import blog2Img from "../../../assets/images/blog/b-2.png";
import blog3Img from "../../../assets/images/blog/b-3.png";
import blog4Img from "../../../assets/images/blog/Fairy Meadows.png";
import blog5Img from "../../../assets/images/blog/BlogLah.png";
import blogaboutbalochistan from "../../../assets/images/blog/balochistan.png";

const AboutBlog = () => {
  return (
    <>
      {/* ===============  Blog area start =============== */}
      <div className="blog-area pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-head pb-30">
                <h5>Latest Blog</h5>
                <h2>Stay Updated And new post our Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInLeft animated"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="blog-card">
                <div className="blog-img">
                  <img src={blog4Img} alt="" className="img-fluid" />
                  <div className="blog-date">
                    <i className="flaticon-calendar" /> 1 April, 2021
                  </div>
                </div>
                <div className="blog-details">
                  <div className="blog-info">
                    <Link to={`#https://againstthecompass.com/en/fairy-meadows-trek-nanga-parbat-base-camp`} className="blog-writer">
                      <i className="flaticon-user" />
                      Joan Torres
                    </Link>
                    <Link to={`#`} className="blog-comment">
                      <i className="flaticon-comment" />
                      <span>(3)</span>Comment
                    </Link>
                  </div>
                  <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="blog-title">
                    FAIRY MEADOWS TREK & NANGA PARBAT BASE CAMP – A COMPLETE GUIDE
                    {/* https://againstthecompass.com/en/fairy-meadows-trek-nanga-parbat-base-camp */}
                  </Link>
                  <div className="blog-btn">
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      className="btn-common-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6  wow fadeInLeft animated"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="blog-card">
                <div className="blog-img">
                  <img src={blog5Img} alt="" className="img-fluid" />
                  <div className="blog-date">
                    <i className="flaticon-calendar" /> 1 April, 2021
                  </div>
                </div>
                <div className="blog-details">
                  <div className="blog-info">
                    <Link to={`https://stujarvis.com/2017/11/05/lahore-the-walled-city/`} className="blog-writer">
                      <i className="flaticon-user" />
                      Rio de Janeiro
                    </Link>
                    <Link to={`#`} className="blog-comment">
                      <i className="flaticon-comment" />
                      <span>(3)</span>Comment
                    </Link>
                  </div>
                  <Link
                    to={`${process.env.PUBLIC_URL}/blog-details`}
                    className="blog-title"
                  >
                    LAHORE – THE WALLED CITY
                    {/* https://stujarvis.com/2017/11/05/lahore-the-walled-city*/}
                  </Link>
                  <div className="blog-btn">
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      className="btn-common-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInLeft animated"
              data-wow-duration="1500ms"
              data-wow-delay="600ms"
            >
              <div className="blog-card">
                <div className="blog-img">
                  <img src={blogaboutbalochistan} alt="" className="img-fluid" />
                  <div className="blog-date">
                    <i className="flaticon-calendar" /> 1 April, 2021
                  </div>
                </div>
                <div className="blog-details">
                  <div className="blog-info">
                    <Link to={`#`} className="blog-writer">
                      <i className="flaticon-user" />
                      Basile
                    </Link>
                    <Link to={`#`} className="blog-comment">
                      <i className="flaticon-comment" />
                      <span>(3)</span>Comment
                    </Link>
                  </div>
                  <Link
                    to={`${process.env.PUBLIC_URL}/blog-details`}
                    className="blog-title"
                  >
                    Inside Balochistan, Pakistan 
                    {/* http://crossingvalleys.com/2018/01/29/inside-balochistan-pakistan/ */}
                  </Link>
                  <div className="blog-btn">
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      className="btn-common-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===============  Blog area end =============== */}
    </>
  );
};

export default AboutBlog;
