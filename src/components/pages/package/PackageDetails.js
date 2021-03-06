import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import pd_thumb from "../../../assets/images/package/pd-thumb.png";
import pr_1 from "../../../assets/images/package/pr-1.png";
import gallery1Img from "../../../assets/images/gallary/gl-1.png";
import gallery2Img from "../../../assets/images/gallary/gl-2.png";
import gallery4Img from "../../../assets/images/gallary/gl-4.png";
import gallery5Img from "../../../assets/images/gallary/gl-5.png";
import gallery6Img from "../../../assets/images/gallary/gl-6.png";
import galleryGxx1Img from "../../../assets/images/gallary/g-xxl-1.png";
import galleryGxx2Img from "../../../assets/images/gallary/g-xxl-2.png";
import galleryGxx3Img from "../../../assets/images/gallary/g-xxl-3.png";
import gallery17Img from "../../../assets/images/gallary/gl-17.png";
import gallery16Img from "../../../assets/images/gallary/gl-16.png";
import gallery14Img from "../../../assets/images/gallary/gl-14.png";
import galleryGxl1Img from "../../../assets/images/gallary/g-xl-1.png";
import galleryGxl2Img from "../../../assets/images/gallary/g-xl-2.png";
import galleryGxl3Img from "../../../assets/images/gallary/g-xl-3.png";
import galleryGxl4Img from "../../../assets/images/gallary/g-xl-4.png";
import pm_sm_1 from "../../../assets/images/package/p-sm-1.png";
import pm_sm_4 from "../../../assets/images/package/p-sm-4.png";
import pm_sm_2 from "../../../assets/images/package/p-sm-2.png";
import pm_sm_3 from "../../../assets/images/package/p-sm-3.png";
import organizer from "../../../assets/images/organizer.png";
import sidebarBannar from "../../../assets/images/sidebar-banner.png";
import { SRLWrapper } from "simple-react-lightbox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PackageDetails = (places) => {
  const [data, setdata] = useState("");
  const [pdImg, setpdImg] = useState([]);
  const [pdtitle, setpdtitle] = useState("");
  const [pdlocation, setpdlocation] = useState("");
  const [pdrating, setpdrating] = useState("");
  const [pd_durate, setpd_durate] = useState("");
  const [pd_groupsize, setpd_groupsize] = useState("");
  const [pd_overview, setpd_overview] = useState("");
  const [pd_geography, setpd_geography] = useState("");
  const [pd_distanceFMC, setpd_distanceFMC] = useState("");
  const [pd_transport, setpd_transport] = useState("");

  const [uname, setuname] = useState();
  const [bemail, setbemail] = useState();
  const [bphone, setbphone] = useState();
  const [btickettype, setbtickettype] = useState();
  const [badult, setbadult] = useState();
  const [bchild, setbchild] = useState("");
  const [bmessage, setbmessage] = useState("");

  const handleSubmit = () => {
    console.log(uname, bemail, bphone, btickettype, badult, bchild, bmessage);
    alert("your package is booked");
    let resp = axios.post("http://127.0.0.1:8000/bookingapi/", {
      uname,
      bemail,
      bphone,
      btickettype,
      badult,
      bchild,
      bmessage,
    });
    // console.log("ha haha", fname, lname, uemail, upassword, urpassword, resp);
    // alert("Successfully Registered ");

    // setuname("");
    // setbemail("");
    // setbphone("");
    // setbtickettype("");
    // setbadult("");
    // setbchild("");
    // setbmessage("");
  };

  // const bookingerror = () => {
  //   if ((value = { badult } === 13)) {
  //     seterror("cannot be more than 12");
  //   }
  // };
  useEffect(() => {
    async function getPkg() {
      let resp = axios.get("http://127.0.0.1:8000/PkgDetailapi/");
      console.log("abcjakflsdaf;oiewhvkhfwe", (await resp).data);
      setdata((await resp).data);
    }
    getPkg();
  }, []);

  return (
    <>
      {/* ===============  breadcrumb area start =============== */}
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="breadcrumb-wrap">
                <h2>Tour Package Details</h2>
                <ul className="breadcrumb-links">
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                    <i className="bx bx-chevron-right" />
                  </li>
                  <li>Package Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===============  breadcrumb area end =============== */}

      <div className="package-details-wrapper pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="package-details">
                <div className="package-thumb">
                  <img src={pd_thumb} alt="" />
                </div>
                <div className="package-header">
                  <div className="package-title">
                    <h3>Taxila Sites & Monuments</h3>
                    <strong>
                      <i className="flaticon-arrival" />
                      Taxila Punjab, Pakistan
                    </strong>
                  </div>
                  <div className="pd-review">
                    <p>Excellent</p>
                    <ul>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bx-star" />
                      </li>
                    </ul>
                    <p>800 Review</p>
                  </div>
                </div>
                <div className="p-short-info">
                  <div className="single-info">
                    <i className="flaticon-clock" />
                    <div className="info-texts">
                      <strong>Duration</strong>
                      <p>Daily Tour</p>
                    </div>
                  </div>

                  <div className="single-info">
                    <i className="flaticon-footprints" />
                    <div className="info-texts">
                      <strong>Tour Type</strong>
                      <p>4 Days</p>
                    </div>
                  </div>
                  <div className="single-info">
                    <i className="flaticon-traveller" />
                    <div className="info-texts">
                      <strong>Group Size</strong>
                      <p>12 People</p>
                    </div>
                  </div>
                  {/* <div className="single-info">
                                        <i className="flaticon-translate" />
                                        <div className="info-texts">
                                            <strong>Languages</strong>
                                            <p>Any Language</p>
                                        </div>
                                    </div> */}
                </div>
                <div className="package-tab">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        <i className="flaticon-info" />
                        Information
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        <i className="flaticon-clipboard" />
                        Travel Plan
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        {" "}
                        <i className="flaticon-gallery" />
                        Our Gallary
                      </button>
                    </li>
                  </ul>
                  <div
                    className="tab-content p-tab-content"
                    id="pills-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="tab-content-1">
                            <div className="p-overview">
                              <h5>Overview</h5>
                              <p>
                                Taxila (Urdu: ??????), is a city in Rawalpindi
                                District of the Punjab, Pakistan. Taxila is
                                situated about 32 km (20 mi) north-west of
                                Islamabad and Rawalpindi, along the historic
                                Grand Trunk Road, near the important Sikh
                                pilgrimage centre of Hasan Abdal, and the
                                Mughal-era Wah Gardens. Ancient Taxila was
                                historically referred to as Takshashila in
                                Sanskrit, and Takkasila in Pali. The earliest
                                settlement at Taxila was founded around 1000 BCE
                                at the Hathial site. The Hindu epic poem
                                Mah?bh?rata is believed to have been first
                                recited at Taxila, by the sage Vai?amp?yana. By
                                some accounts, Taxila was home to one of the
                                earliest, if not the first, universities in the
                                world. Taxila???s ruins are internationally
                                renowned, and function as a series of
                                interrelated sites, including a Mesolithic cave,
                                the remains of 4 ancient cities, and Buddhist
                                monasteries and stupas. The ancient ruins of
                                Taxila were declared a UNESCO World Heritage
                                Site in 1980.
                              </p>

                              <h3>Geography</h3>
                              <p>
                                Taxila is located 32 km (20 mi) north-west of
                                the Pakistani capital Islamabad. The city is
                                located approximately 549 meters (1,801 ft)
                                above sea level..
                              </p>
                              {/* <h3>Industry</h3> */}
                              {/* <p>
                                  Taxila is home to Heavy Industries Taxila, a
                                  major Pakistani defence, military contractor,
                                  engineering conglomerate. The city???s economy
                                  is also closely linked to the large Pakistan
                                  Ordnance Factories at nearby Wah Cantt, which
                                  employs 27,000 people. Cottage and household
                                  industries include stoneware, pottery and
                                  footwear.
                                </p> */}
                              <h3>Distance from Main Cities</h3>
                              <p> Islamabad/Rawalpindi = 35KM </p>
                              <p> Lahore = 378KM </p>
                              <p> Peshawar = 156KM </p>
                              <p> Karachi = 1412KM </p>
                            </div>
                            <div className="p-highlight">
                              <h5>Transportation</h5>
                              <ul>
                                <h3>Rail</h3>
                                Taxila is served by the Taxila Cantonment
                                Junction railway station. Taxila Junction is
                                served by the Karachi???Peshawar Railway Line, and
                                is the southern terminus of the Khunjerab
                                Railway, which connects Taxila to the Havelian
                                railway station. A planned extension of the
                                railway will eventually connect Taxila to
                                China???s Southern Xinjiang Railway in Kashgar, as
                                part of the China???Pakistan Economic Corridor.
                                <h3>Road</h3>
                                The M-1 Motorway, pictured near Taxila, links
                                the city to Islamabad and Peshawar. The ancient
                                Grand Trunk Road is designated as N-5 National
                                Highway, and connects the city to the Afghan
                                border, and northern Punjab. The Karakoram
                                Highway???s southern terminus is in nearby Hasan
                                Abdal, and connects Taxila to the Chinese border
                                near the Hunza Valley. The city is linked to
                                Peshawar and Islamabad by the M-1 Motorway,
                                which in turn offers wider motorway access to
                                Lahore via the M-2 Motorway, and Faisalabad via
                                the M-4 Motorway.
                                <h3>Air</h3>
                                The nearest airport to Taxila is Islamabad
                                International Airport located 36.5 kilometers
                                away. Peshawar???s Bacha Khan International
                                Airport is 155 kilometers away.
                              </ul>
                            </div>
                            <div className="p-details-table">
                              <table className="table caption-top">
                                <tbody>
                                  <tr>
                                    <td>Destination</td>
                                    <td>Current Location</td>
                                  </tr>
                                  <tr>
                                    <td>Depature</td>
                                    <td>Yes Required</td>
                                  </tr>
                                  <tr>
                                    <td>Departure Time</td>
                                    <td>01 April, 2021 10.00AM</td>
                                  </tr>
                                  <tr>
                                    <td>Return Time</td>
                                    <td>08 April, 2021 10.00AM</td>
                                  </tr>
                                  <tr>
                                    <td>Included</td>
                                    <td>
                                      <ul className="table-list-allow">
                                        <li>
                                          <i className="bx bx-check" />{" "}
                                          Specilaized Bilingual Guide
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bx-check" /> Private
                                          Transport
                                        </li>
                                        <li>
                                          <i className="bx bx-check" /> Entrance
                                          Fees
                                        </li>
                                        <li>
                                          <i className="bx bx-check" /> Box
                                          Lunch,Water,Dinner and Snacks
                                        </li>
                                      </ul>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Excluded</td>
                                    <td>
                                      <ul className="table-list-disallow">
                                        <li>
                                          {" "}
                                          <i className="bx bx-x" /> Additional
                                          Services
                                        </li>
                                        <li>
                                          <i className="bx bx-x" /> Insurance
                                        </li>
                                        <li>
                                          <i className="bx bx-x" /> Drink
                                        </li>
                                        <li>
                                          <i className="bx bx-x" /> Tickets
                                        </li>
                                      </ul>
                                    </td>
                                  </tr>
                                  {/* <tr>
                                      <td colSpan={2} className="table-bottom">
                                        <i className="flaticon-public-transport" />
                                        Travel With Bus
                                      </td>
                                    </tr> */}
                                </tbody>
                              </table>
                            </div>
                            <div className="p-rationg">
                              <h5>Rating</h5>
                              <div className="rating-card">
                                <div className="r-card-avarag">
                                  <h2>4.9</h2>
                                  <h5>Excellent</h5>
                                </div>
                                <div className="r-card-info">
                                  <ul>
                                    <li>
                                      <strong>Accommodation</strong>
                                      <ul className="r-rating">
                                        <li>
                                          <i className="bx bxs-star" />
                                          <i className="bx bxs-star" />
                                          <i className="bx bxs-star" />
                                          <i className="bx bxs-star" />
                                          <i className="bx bxs-star" />
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <strong>Transport</strong>
                                      <ul className="r-rating">
                                        <li>
                                          <i className="bx bxs-star" />
                                          <i className="bx bxs-star" />
                                          <i className="bx bxs-star" />
                                          <i className="bx bx-star" />
                                          <i className="bx bx-star" />
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <strong>Comfort</strong>
                                      <ul className="r-rating">
                                        <li>
                                          <i className="bx bxs-star" />
                                          <i className="bx bxs-star" />
                                          <i className="bx bxs-star" />
                                          <i className="bx bxs-star" />
                                          <i className="bx bx-star" />
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <strong>Hospitality</strong>
                                      <ul className="r-rating">
                                        <li>
                                          <i className="bx bxs-star" />
                                          <i className="bx bxs-star" />
                                          <i className="bx bxs-star" />
                                          <i className="bx bxs-star" />
                                          <i className="bx bx-star" />
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <strong>Food</strong>
                                      <ul className="r-rating">
                                        <li>
                                          <i className="bx bxs-star" />
                                          <i className="bx bxs-star" />
                                          <i className="bx bx-star" />
                                          <i className="bx bx-star" />
                                          <i className="bx bx-star" />
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="p-review">
                              <ul>
                                <li className="p-review-card">
                                  <div className="p-review-info">
                                    <div className="p-reviewr-img">
                                      <img src={pr_1} alt="" />
                                    </div>
                                    <div className="p-reviewer-info">
                                      <strong>Shahbaz Ahmad</strong>
                                      <p>2 April, 2021 10.00PM</p>
                                      <ul className="review-star">
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="p-review-texts">
                                    <p>
                                      it was a very nice experience to travel
                                      through Trip Planner i would like to
                                      suggest it to my friends who would like to
                                      come and experience such a pleseant
                                      journey.{" "}
                                    </p>
                                  </div>
                                  <Link to={`#`} className="r-reply-btn">
                                    <i className="bx bx-reply" /> Reply
                                  </Link>
                                </li>
                                <li className="p-review-card">
                                  <div className="p-review-info">
                                    <div className="p-reviewr-img">
                                      <img src={pr_1} alt="" />
                                    </div>
                                    <div className="p-reviewer-info">
                                      <strong>Asaad Farooq</strong>
                                      <p>2 April, 2021 10.00PM</p>
                                      <ul className="review-star">
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="p-review-texts">
                                    <p>
                                      it was a very nice experience to travel
                                      through Trip Planner i would like to
                                      suggest it to my friends who would like to
                                      come and experience such a pleseant
                                      journey.{" "}
                                    </p>
                                  </div>
                                  <Link to={`#`} className="r-reply-btn">
                                    <i className="bx bx-reply" /> Reply
                                  </Link>
                                </li>
                                <li className="p-review-card">
                                  <div className="p-review-info">
                                    <div className="p-reviewr-img">
                                      <img src={pr_1} alt="" />
                                    </div>
                                    <div className="p-reviewer-info">
                                      <strong>Zeeshan ul Haq</strong>
                                      <p>2 April, 2021 10.00PM</p>
                                      <ul className="review-star">
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="p-review-texts">
                                    <p>
                                      it was a very nice experience to travel
                                      through Trip Planner i would like to
                                      suggest it to my friends who would like to
                                      come and experience such a pleseant
                                      journey.{" "}
                                    </p>
                                  </div>
                                  <Link to={`#`} className="r-reply-btn">
                                    <i className="bx bx-reply" /> Reply
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="p-review-input">
                              <form>
                                <h5>Leave Your Comment</h5>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <input
                                      type="text"
                                      placeholder="Your Full Name"
                                    />
                                  </div>
                                  <div className="col-lg-6">
                                    <input
                                      type="text"
                                      placeholder="Your Email"
                                    />
                                  </div>
                                  <div className="col-lg-12">
                                    <input
                                      type="text"
                                      placeholder="Tour Type"
                                    />
                                  </div>
                                  <div className="col-lg-12">
                                    <textarea
                                      cols={30}
                                      rows={7}
                                      placeholder="Write Message"
                                      defaultValue={""}
                                    />
                                  </div>
                                  <div className="col-lg-12">
                                    <ul className="input-rating">
                                      <li>
                                        <i className="bx bx-star" />
                                      </li>
                                      <li>
                                        <i className="bx bx-star" />
                                      </li>
                                      <li>
                                        <i className="bx bx-star" />
                                      </li>
                                      <li>
                                        <i className="bx bx-star" />
                                      </li>
                                      <li>
                                        <i className="bx bx-star" />
                                      </li>
                                    </ul>
                                    <input
                                      type="submit"
                                      defaultValue="Submit Now"
                                    />
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div className="tab-content-2">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="p-timeline-overview">
                              <h5>Overview</h5>
                              <p>
                                Pellentesque accumsan magna in augue sagittis,
                                non fringilla eros molestie. Sed feugiat mi nec
                                ex vehicula, nec vestibulum orci semper. Class
                                aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inceptos himenaeos. Donec
                                tristique commodo fringilla. Duis aliquet varius
                                mauris eget rutrum. Nullam sit amet justo
                                consequat, bibendum orci in, convallis enim.
                                Proin convallis neque viverra finibus cursus.
                                Mauris lacinia lacinia erat in finibus.
                              </p>
                            </div>
                            <ul className="p-timeline">
                              <li>
                                <div className="timeline-index">
                                  <div className="index-circle">
                                    <h5>01</h5>
                                  </div>
                                </div>
                                <div className="timeline-content">
                                  <h5>DAY 1 : Departure And Small Tour</h5>
                                  <strong>10.00 AM to 10.00 PM</strong>
                                  <p>
                                    Pellentesque accumsan magna in augue
                                    sagittis, non fringilla eros molestie. Sed
                                    feugiat mi nec ex vehicula, nec vestibulum
                                    orci semper. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per
                                    inceptos himenaeos. Donec tristique commodo
                                    fringilla.
                                  </p>
                                  <ul>
                                    <li />
                                    <li>
                                      <i className="bx bx-check" />
                                      Specilaized Bilingual Guide
                                    </li>
                                    <li />
                                    <li>
                                      <i className="bx bx-check" />
                                      Private Transport
                                    </li>
                                    <li />
                                    <li>
                                      <i className="bx bx-check" />
                                      Entrance Fees
                                    </li>
                                    <li />
                                    <li>
                                      <i className="bx bx-check" />
                                      Box Lunch,Water,Dinner and Snacks
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <div className="timeline-index">
                                  <div className="index-circle">
                                    <h5>02</h5>
                                  </div>
                                </div>
                                <div className="timeline-content">
                                  <h5>DAY 2 : Departure And Small Tour</h5>
                                  <strong>10.00 AM to 10.00 PM</strong>
                                  <p>
                                    Pellentesque accumsan magna in augue
                                    sagittis, non fringilla eros molestie. Sed
                                    feugiat mi nec ex vehicula, nec vestibulum
                                    orci semper. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per
                                    inceptos himenaeos. Donec tristique commodo
                                    fringilla.
                                  </p>
                                  <ul>
                                    <li />
                                    <li>
                                      <i className="bx bx-check" />
                                      Specilaized Bilingual Guide
                                    </li>
                                    <li />
                                    <li>
                                      <i className="bx bx-check" />
                                      Private Transport
                                    </li>
                                    <li />
                                    <li>
                                      <i className="bx bx-check" />
                                      Entrance Fees
                                    </li>
                                    <li />
                                    <li>
                                      <i className="bx bx-check" />
                                      Box Lunch,Water,Dinner and Snacks
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <div className="timeline-index">
                                  <div className="index-circle">
                                    <h5>03</h5>
                                  </div>
                                </div>
                                <div className="timeline-content">
                                  <h5>DAY 3 : Departure And Small Tour</h5>
                                  <strong>10.00 AM to 10.00 PM</strong>
                                  <p>
                                    Pellentesque accumsan magna in augue
                                    sagittis, non fringilla eros molestie. Sed
                                    feugiat mi nec ex vehicula, nec vestibulum
                                    orci semper. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per
                                    inceptos himenaeos. Donec tristique commodo
                                    fringilla.
                                  </p>
                                  <ul>
                                    <li />
                                    <li>
                                      <i className="bx bx-check" />
                                      Specilaized Bilingual Guide
                                    </li>
                                    <li />
                                    <li>
                                      <i className="bx bx-check" />
                                      Private Transport
                                    </li>
                                    <li />
                                    <li>
                                      <i className="bx bx-check" />
                                      Entrance Fees
                                    </li>
                                    <li />
                                    <li>
                                      <i className="bx bx-check" />
                                      Box Lunch,Water,Dinner and Snacks
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <div className="timeline-index">
                                  <div className="index-circle">
                                    <h5>04</h5>
                                  </div>
                                </div>
                                <div className="timeline-content">
                                  <h5>DAY 4 : Departure And Small Tour</h5>
                                  <strong>10.00 AM to 10.00 PM</strong>
                                  <p>
                                    Pellentesque accumsan magna in augue
                                    sagittis, non fringilla eros molestie. Sed
                                    feugiat mi nec ex vehicula, nec vestibulum
                                    orci semper. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per
                                    inceptos himenaeos. Donec tristique commodo
                                    fringilla.
                                  </p>
                                  <ul>
                                    <li />
                                    <li>
                                      <i className="bx bx-check" />
                                      Specilaized Bilingual Guide
                                    </li>
                                    <li />
                                    <li>
                                      <i className="bx bx-check" />
                                      Private Transport
                                    </li>
                                    <li />
                                    <li>
                                      <i className="bx bx-check" />
                                      Entrance Fees
                                    </li>
                                    <li />
                                    <li>
                                      <i className="bx bx-check" />
                                      Box Lunch,Water,Dinner and Snacks
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <div className="timeline-index">
                                  <div className="index-circle">
                                    <h5>05</h5>
                                  </div>
                                </div>
                                <div className="timeline-content">
                                  <h5>DAY 5 : Departure And Small Tour</h5>
                                  <strong>10.00 AM to 10.00 PM</strong>
                                  <p>
                                    Pellentesque accumsan magna in augue
                                    sagittis, non fringilla eros molestie. Sed
                                    feugiat mi nec ex vehicula, nec vestibulum
                                    orci semper. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per
                                    inceptos himenaeos. Donec tristique commodo
                                    fringilla.
                                  </p>
                                  <ul>
                                    <li />
                                    <li>
                                      <i className="bx bx-check" />
                                      Specilaized Bilingual Guide
                                    </li>
                                    <li />
                                    <li>
                                      <i className="bx bx-check" />
                                      Private Transport
                                    </li>
                                    <li />
                                    <li>
                                      <i className="bx bx-check" />
                                      Entrance Fees
                                    </li>
                                    <li />
                                    <li>
                                      <i className="bx bx-check" />
                                      Box Lunch,Water,Dinner and Snacks
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <div className="tab-contant-3">
                        <SRLWrapper>
                          <div className="row">
                            <div className="col-lg-8 col-md-8">
                              <div className="package-grid-one">
                                <div className="single-grid">
                                  <Link
                                    to={gallery1Img}
                                    className="g-img-sm-1 main-gallary"
                                  >
                                    <img src={gallery1Img} alt="gallary-img" />
                                  </Link>

                                  <Link
                                    to={gallery2Img}
                                    className="g-img-sm-2 main-gallary"
                                  >
                                    <img src={gallery2Img} alt="gallary-img" />
                                  </Link>

                                  <Link
                                    to={galleryGxx1Img}
                                    className="g-img-md main-gallary"
                                  >
                                    <img
                                      src={galleryGxx1Img}
                                      alt="gallary-img"
                                    />
                                  </Link>
                                </div>
                                <div className="single-grid mt-24">
                                  <Link
                                    to={gallery2Img}
                                    className="g-img-sm-1 main-gallary"
                                  >
                                    <img src={gallery2Img} alt="gallary-img" />
                                  </Link>
                                  <Link
                                    to={gallery4Img}
                                    className="g-img-sm-2 main-gallary"
                                  >
                                    <img src={gallery4Img} alt="gallary-img" />
                                  </Link>
                                  <Link
                                    to={galleryGxx2Img}
                                    className="g-img-md main-gallary"
                                  >
                                    <img
                                      src={galleryGxx2Img}
                                      alt="gallary-img"
                                    />
                                  </Link>
                                </div>

                                <div className="single-grid mt-24">
                                  <Link
                                    to={gallery5Img}
                                    className="g-img-sm-1 main-gallary"
                                  >
                                    <img src={gallery5Img} alt="gallary-img" />
                                  </Link>
                                  <Link
                                    to={gallery6Img}
                                    className="g-img-sm-2 main-gallary"
                                  >
                                    <img src={gallery6Img} alt="gallary-img" />
                                  </Link>
                                  <Link
                                    to={galleryGxx3Img}
                                    className="g-img-md main-gallary"
                                  >
                                    <img
                                      src={galleryGxx3Img}
                                      alt="gallary-img"
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                              <div className="package-grid-two">
                                <div className="single-grid-2">
                                  <Link
                                    to={galleryGxl1Img}
                                    className="main-gallary"
                                  >
                                    <img
                                      src={galleryGxl1Img}
                                      alt="gallary-img"
                                    />
                                  </Link>
                                </div>
                                <div className="single-grid-2 mt-24">
                                  <Link
                                    to={galleryGxl2Img}
                                    className="single-grid-2 main-gallary mt-30"
                                  >
                                    <img
                                      src={galleryGxl2Img}
                                      alt="gallary-img"
                                    />
                                  </Link>
                                </div>
                                <div className="single-grid-2 mt-24">
                                  <Link
                                    to={galleryGxl3Img}
                                    className="main-gallary mt-30"
                                  >
                                    <img
                                      src={galleryGxl3Img}
                                      alt="gallary-img"
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SRLWrapper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="package-d-sidebar">
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="p-sidebar-form">
                      <form>
                        <h5 className="package-d-head">Book This Package</h5>
                        <div className="row">
                          <div className="col-lg-12">
                            <input
                              type="text"
                              placeholder="Your Full Name"
                              value={uname}
                              onChange={(e) => setuname(e.target.value)}
                            />
                          </div>
                          <div className="col-lg-12">
                            <input
                              type="email"
                              placeholder="Your Email"
                              value={bemail}
                              onChange={(e) => setbemail(e.target.value)}
                            />
                          </div>
                          <div className="col-lg-12">
                            <input
                              type="tel"
                              placeholder="Phone"
                              value={bphone}
                              onChange={(e) => setbphone(e.target.value)}
                            />
                          </div>
                          <div className="col-lg-12">
                            <input
                              type="tel"
                              placeholder="bus or plain"
                              value={btickettype}
                              onChange={(e) => setbtickettype(e.target.value)}
                            />
                          </div>
                          <div className="col-lg-12">
                            <input
                              type="tel"
                              placeholder="Adult members"
                              value={badult}
                              onChange={(e) => setbadult(e.target.value)}
                            />
                          </div>
                          <div className="col-lg-12">
                            <input
                              type="tel"
                              placeholder="Children"
                              value={bchild}
                              onChange={(e) => setbchild(e.target.value)}
                            />
                          </div>
                          {/* <div className="col-lg-12">
                            <div
                              className="calendar-input"
                              id="packageCalenderMainDiv"
                            >
                              <DatePicker
                                selected={startDate}
                                onChange={(date) =>
                                  this.changeDatepickerHandeller(date)
                                }
                                className="input-field check-in"
                                placeholder="dd-mm-yy"
                              />
                              <i
                                className="flaticon-calendar"
                                id="packageCalenderIcon"
                              />
                            </div>
                          </div> */}
                          <div className="col-lg-12">
                            <textarea
                              cols={30}
                              rows={7}
                              placeholder="Message"
                              defaultValue={""}
                              value={bmessage}
                              onChange={(e) => setbmessage(e.target.value)}
                            />
                          </div>
                          <div className="col-lg-12">
                            <input
                              type="submit"
                              defaultValue="Book Now"
                              onClick={handleSubmit}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6"></div>
                  <div className="col-lg-12 col-md-6"></div>
                  <div className="col-lg-12 col-md-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageDetails;
