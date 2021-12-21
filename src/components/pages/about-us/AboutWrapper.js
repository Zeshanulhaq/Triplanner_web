import React, { useState } from "react";
import ModalVideo from 'react-modal-video'

import about1Img from "../../../assets/images/about-1.png"
import about2Img from "../../../assets/images/about-2.png"
import {Link} from "react-router-dom";



const AboutWrapper = (props) => {
    const [isOpen, setisOpen] = useState(false);


    
    return (
       <>
           {/* ===============  About wrapper area start =============== */}
           <div className="about-wrapper mt-120">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-7 col-md-12">
                           <div className="about-wrapper-left">
                               <div className="about-img">
                                   <img src={about1Img} alt="" className="img-fluid" />
                               </div>
                               <div className="about-video">
                                   <img src={about2Img} alt="" className="img-fluid"  />
                                   <i onClick={() => ({ isOpen: true })} class="flaticon-play-button-arrowhead"></i>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-5 col-md-12">
                           <div className="about-wrapper-right section-head head-left">
                               <h5>About TourX</h5>
                               <h2>Trip Planner is the Best Travel Agency</h2>
                               <p>Everyone will be able to use it because of its compatibility with every device and it is free of cost. 
                                   So almost we have worked on everything we have proposed in our proposal.
                                    The system is designed quite flexibly and efficiently keeping in view the user’s requirements. 
                                    With this project, there would be easy to perform the respective tasks..</p>
                               <ul className="about-list">
                                   <li><i className="flaticon-double-checking" /> 	The purpose is to design a system using which one can perform all operations related to planning a trip.</li>
                                   <li><i className="flaticon-double-checking" />The system is a web-based application and maintains a centralized 
                                   repository of all related information.</li>
                                   <li><i className="flaticon-double-checking" />The system allows one to easily access the relevant information 
                                   and make necessary travel arrangements.</li>
                               </ul>
                               <div className="about-wrapper-btn">
                                   <Link to={"#"} className="btn-common">Read More</Link>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

           <React.Fragment>
               <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="-tJYN-eG1zk" onClose={() => this.setState({ isOpen: false })} />
           </React.Fragment>

           {/* ===============  About wrapper area end =============== */}
       </>
    );
  }


export default AboutWrapper;
