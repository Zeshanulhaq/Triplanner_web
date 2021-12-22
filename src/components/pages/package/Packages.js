import React, { Component } from "react";
import { Link } from "react-router-dom";

//Load Image
import package1Img from "../../../assets/images/package/p-1.png";
import package2Img from "../../../assets/images/package/p-2.png";
import package3Img from "../../../assets/images/package/p-3.png";
import package4Img from "../../../assets/images/package/p-4.png";
import package5Img from "../../../assets/images/package/p-5.png";
import package6Img from "../../../assets/images/package/p-6.png";

const Packages = () => {
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

            <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="0ms">
             <div className="package-card">
               <div className="package-thumb">
                 <Link to={`${process.env.PUBLIC_URL}/package-details1`}>
                  <img src={package1Img} alt="" className="img-fluid" />
                      </Link>
                </div>
                <div className="package-details">
              <div className="package-info">
        <h5><span>1800PKR</span>/Per Person</h5>
        <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
      </div>
      <h3>
        <i className="flaticon-arrival" />
        <Link to={`${process.env.PUBLIC_URL}/package-details1`}>Taxila City</Link>
      </h3>
      <div className="package-rating">
        <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
      </div>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
  <div className="package-card">
    <div className="package-thumb">
      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
        <img src={package2Img} alt="" className="img-fluid" />
      </Link>
    </div>
    <div className="package-details">
      <div className="package-info">
        <h5><span>3500PKR</span>/Per Person</h5>
        <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
      </div>
      <h3>
        <i className="flaticon-arrival" />
        <Link to={`${process.env.PUBLIC_URL}/package-details1`}>Lahore, Pakistan</Link>
      </h3>
      <div className="package-rating">
        <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
      </div>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="600ms">
  <div className="package-card">
    <div className="package-thumb">
      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
        <img src={package3Img} alt="" className="img-fluid" />
      </Link>
    </div>
    <div className="package-details">
      <div className="package-info">
        <h5><span>2500PKR</span>/Per Person</h5>
        <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
      </div>
      <h3>
        <i className="flaticon-arrival" />
        <Link to={`${process.env.PUBLIC_URL}/package-details`}>Muzaffarabad</Link>
      </h3>
      <div className="package-rating">
        <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
      </div>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="0ms">
  <div className="package-card">
    <div className="package-thumb">
      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
        <img src={package4Img} alt="" className="img-fluid" />
      </Link>
    </div>
    <div className="package-details">
      <div className="package-info">
        <h5><span>5000PKR</span>/Per Person</h5>
        <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
      </div>
      <h3>
        <i className="flaticon-arrival" />
        <Link to={`${process.env.PUBLIC_URL}/package-details`}>Rawalpindi</Link>
      </h3>
      <div className="package-rating">
        <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
      </div>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
  <div className="package-card">
    <div className="package-thumb">
      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
        <img src={package5Img} alt="" className="img-fluid" />
      </Link>
    </div>
    <div className="package-details">
      <div className="package-info">
        <h5><span>5000PKR</span>/Per Person</h5>
        <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
      </div>
      <h3>
        <i className="flaticon-arrival" />
        <Link to={`${process.env.PUBLIC_URL}/package-details`}>Karachi</Link>
      </h3>
      <div className="package-rating">
        <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
      </div>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="600ms">
  <div className="package-card">
    <div className="package-thumb">
      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
        <img src={package6Img} alt="" className="img-fluid" />
      </Link>
    </div>
    <div className="package-details">
      <div className="package-info">
        <h5><span>4500PKR</span>/Per Person</h5>
        <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
      </div>
      <h3>
        <i className="flaticon-arrival" />
        <Link to={`${process.env.PUBLIC_URL}/package-details`}>SWAT</Link>
      </h3>
      <div className="package-rating">
        <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
      </div>
    </div>
  </div>
</div>

</div>



          {/* //old data */}
          <div className="row">

<div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="0ms">
 <div className="package-card">
   <div className="package-thumb">
     <Link to={`${process.env.PUBLIC_URL}/package-details`}>
      <img src={package1Img} alt="" className="img-fluid" />
          </Link>
    </div>
    <div className="package-details">
  <div className="package-info">
<h5><span>1800PKR</span>/Per Person</h5>
<h5><i className="flaticon-calendar" />5 Days/6 night</h5>
</div>
<h3>
<i className="flaticon-arrival" />
<Link to={`${process.env.PUBLIC_URL}/package-details`}>Taxila City</Link>
</h3>
<div className="package-rating">
<strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
</div>
</div>
</div>
</div>

<div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
<div className="package-card">
<div className="package-thumb">
<Link to={`${process.env.PUBLIC_URL}/package-details`}>
<img src={package2Img} alt="" className="img-fluid" />
</Link>
</div>
<div className="package-details">
<div className="package-info">
<h5><span>3500PKR</span>/Per Person</h5>
<h5><i className="flaticon-calendar" />5 Days/6 night</h5>
</div>
<h3>
<i className="flaticon-arrival" />
<Link to={`${process.env.PUBLIC_URL}/package-details1`}>Lahore, Pakistan</Link>
</h3>
<div className="package-rating">
<strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
</div>
</div>
</div>
</div>

<div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="600ms">
<div className="package-card">
<div className="package-thumb">
<Link to={`${process.env.PUBLIC_URL}/package-details`}>
<img src={package3Img} alt="" className="img-fluid" />
</Link>
</div>
<div className="package-details">
<div className="package-info">
<h5><span>2500PKR</span>/Per Person</h5>
<h5><i className="flaticon-calendar" />5 Days/6 night</h5>
</div>
<h3>
<i className="flaticon-arrival" />
<Link to={`${process.env.PUBLIC_URL}/package-details2`}>Muzaffarabad</Link>
</h3>
<div className="package-rating">
<strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
</div>
</div>
</div>
</div>

<div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="0ms">
<div className="package-card">
<div className="package-thumb">
<Link to={`${process.env.PUBLIC_URL}/package-details`}>
<img src={package4Img} alt="" className="img-fluid" />
</Link>
</div>
<div className="package-details">
<div className="package-info">
<h5><span>5000PKR</span>/Per Person</h5>
<h5><i className="flaticon-calendar" />5 Days/6 night</h5>
</div>
<h3>
<i className="flaticon-arrival" />
<Link to={`${process.env.PUBLIC_URL}/package-details`}>Rawalpindi</Link>
</h3>
<div className="package-rating">
<strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
</div>
</div>
</div>
</div>

<div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
<div className="package-card">
<div className="package-thumb">
<Link to={`${process.env.PUBLIC_URL}/package-details`}>
<img src={package5Img} alt="" className="img-fluid" />
</Link>
</div>
<div className="package-details">
<div className="package-info">
<h5><span>5000PKR</span>/Per Person</h5>
<h5><i className="flaticon-calendar" />5 Days/6 night</h5>
</div>
<h3>
<i className="flaticon-arrival" />
<Link to={`${process.env.PUBLIC_URL}/package-details`}>Karachi</Link>
</h3>
<div className="package-rating">
<strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
</div>
</div>
</div>
</div>

<div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="600ms">
<div className="package-card">
<div className="package-thumb">
<Link to={`${process.env.PUBLIC_URL}/package-details`}>
<img src={package6Img} alt="" className="img-fluid" />
</Link>
</div>
<div className="package-details">
<div className="package-info">
<h5><span>4500PKR</span>/Per Person</h5>
<h5><i className="flaticon-calendar" />5 Days/6 night</h5>
</div>
<h3>
<i className="flaticon-arrival" />
<Link to={`${process.env.PUBLIC_URL}/package-details`}>SWAT</Link>
</h3>
<div className="package-rating">
<strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
</div>
</div>
</div>
</div>

</div>

           {/* <div className="row">
            <div className="col-lg-12">
              <div className="pagination mt-30">
                <Link to={"#"}>
                  <i className="bx bx-chevron-left" />
                </Link>
                <Link to={"#"} className="active">
                  1
                </Link>
                <Link to={"#"}>2</Link>
                <Link to={"#"}>3</Link>
                <Link to={"#"}>4</Link>
                <Link to={"#"}>
                  <i className="bx bx-chevron-right" />
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* ===============  Package  area end =============== */}
    </div>
  );
};

export default Packages;
