import React, { Component } from "react";
import {Link} from "react-router-dom";
import pr_1 from "../../../assets/images/destination/d-1.png"
import gallery1Img from "../../../assets/images/gallary/gl-1.png"
import gallery2Img from "../../../assets/images/gallary/gl-2.png"
import gallery4Img from "../../../assets/images/gallary/gl-4.png"
import gallery5Img from "../../../assets/images/gallary/gl-5.png"
import gallery6Img from "../../../assets/images/gallary/gl-6.png"
import galleryGxx1Img from "../../../assets/images/gallary/g-xxl-1.png"
import galleryGxx2Img from "../../../assets/images/gallary/g-xxl-2.png"
import galleryGxx3Img from "../../../assets/images/gallary/g-xxl-3.png"
import galleryGxl1Img from "../../../assets/images/gallary/g-xl-1.png"
import galleryGxl2Img from "../../../assets/images/gallary/g-xl-2.png"
import galleryGxl3Img from "../../../assets/images/gallary/g-xl-3.png"
import { SRLWrapper } from "simple-react-lightbox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class PackageDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate:new Date(),
        };
    }
    changeDatepickerHandeller=(date)=>{
        this.setState({ startDate: date });
    }

    componentDidMount(){
        this.scrollTop();
    }

    scrollTop()
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
  render() {
        const startDate =this.state.startDate;

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
                                    <img src={pr_1} alt="" />
                                </div>
                                <div className="package-header">
                                    <div className="package-title">
                                        <h3>Lahore</h3>
                                        <strong><i className="flaticon-arrival" />
                                            Punjab, Pakistan
                                        </strong>
                                    </div>
                                    <div className="pd-review">
                                        <p>Excellent</p>
                                        <ul>
                                            <li><i className="bx bxs-star" /></li>
                                            <li><i className="bx bxs-star" /></li>
                                            <li><i className="bx bxs-star" /></li>
                                            <li><i className="bx bxs-star" /></li>
                                          <li><i className="bx bx-star" /></li>
                                        </ul>
                                        <p>800 Review</p>
                                    </div>
                                </div>
                                < div className="p-short-info">
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
                                    <div className="single-info">
                                        <i className="flaticon-translate" />
                                        <div className="info-texts">
                                            <strong>Languages</strong>
                                            <p>Any Language</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="package-tab">
                                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i className="flaticon-info" />
                                                Information</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i className="flaticon-clipboard" />
                                                Travel Plan</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"> <i className="flaticon-gallery" />
                                                Our Gallary</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content p-tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="tab-content-1">
                                                        <div className="p-overview">
                                                        <h5>Overview</h5>
                                                            <p>Lahore - The Heart of Pakistan 
"Jinnay Lahore nai vaikhya O Jamyya e nai" a folklore which means you haven't been born until you see Lahore!
Food - People - Culture. That's Lahore! Ask for directions from any Lahori and most chances are that you both would end up having a light-hearted chat about anything the mood allows.
Lahore, the capital of Punjab, is often called the "Cultural Capital of Pakistan". Lahore saw many dynasties and kings making it one of the richest cities both historically and culturally. The city witnessed Hindu Shahis, Ghaznavids, Ghurids, and Delhi Sultanate, but it reached the pinnacle of its splendor under the Mughal Empire. After the Mughals, Lahore became the capital of the Sikh Empire and finally became a part of the British Empire.
This two-day tour will take you to magnificent historical places and lush green gardens. Travel back to the ancient Mughal times by visiting the 'Walled City' of Lahore, also known as the 'Old City'. Immerse yourself into Mughal architecture by visiting the artistically decorated 17th Century Wazir Khan Mosque. Explore Lahore Fort, a 16th-century fort founded by Mughal Emperor Akbar, which is also a UNESCO World Heritage Site. After enriching your senses with Lahore’s ancient history and architectural wonders, enjoy your dinner at the rooftop of a beautiful restaurant with traditional Lahori food in the famous Food Street.
</p>
<h3>What you will be doing</h3>
-<p> Visit Walled City of Lahore</p>
- <p>Visit the 17th Century Wazir Khan Mosque</p>
-<p> Visit the Lahore Fort</p>
- <p>Visit the famous Food Street</p>

<h3>This tour is featured on Independence Day.</h3>
<p>Pick-up and Drop-off Location
We can pick you up from anywhere within Lahore in the morning. Please let us know by inbox message ahead of time about your location and we will meet you there. Similarly, at the end of the tour we can drop-off at your preferred location.
</p>
<h3>Got some Questions?</h3>
<p>Send in your questions regarding this experience using our ‘Inbox’ feature, and we’ll get in touch to address your queries.</p>
<h3>
Distance From Main Cities
</h3>
<p>Islamabad/Rawalpindi = 375KM</p>
<p>Peshawar = 517KM</p>
<p>Karachi = 1211KM</p>

      
                                          
                                                        </div>
                                                        <div className="p-highlight">
                                                            <h5>Transportation</h5>
                                                            <ul>
                                                            <h3>Rail</h3>
                                                            <p>Lahore Junction Station serves as the main railway station for Lahore, and serves as a major hub for all Pakistan Railways services in northern Pakistan. It includes services to Peshawar and national capital Islamabad-Rawalpindi, and long-distance services to Karachi and Quetta. Lahore Cantonment Station also operates a few trains.</p>
<h3>Road</h3>
<p>There are a number of municipal, provincial and federal roads that serve Lahore. </p>
<p>
•	Municipal roads
Canal Road (serves as the major north–south artery)
•	Provincial highways
Lahore Ring Road
Lahore– Kasur Road (Ferozepur Road)
Lahore –  Raiwind Road (Raiwind Road)
Lahore–Sharaqpur Road (Sagianwala Bypass Road)
Lahore–Wagah Road
Grand Trunk Road (G.T Road )
•	Federal highways
M-2 motorway
M-3 motorway
M-11 motorway
N-5 National Highway (Multan Road)
N-60 National Highway (Sargodha–Lahore road)</p>

<h3>Air</h3>
<p>Further information: Allama Iqbal International Airport and Walton Airport</p>
<p>Allama Iqbal International Airport
Pakistan's third busiest airport, Allama Iqbal International Airport (IATA: LHE), straddles the city's eastern boundary. The new passenger terminal was opened in 2003, replacing the old terminal which now serves as a VIP and Hajj lounge. The airport was named after the national poet-philosopher, Muhammad Iqbaland is a secondary hub for the national flag carrier, Pakistan International Airlines. Walton Airport in Askari provides general aviation facilities. In addition, Sialkot International Airport (IATA: SKT) and Faisalabad International Airport (IATA: LYP) also serve as alternate airports for the Lahore area in addition to serving their respective cities.

Allama Iqbal International Airport connects Lahore with many cities worldwide (including domestic destinations) by both passenger and cargo flight including Ras al Khaimah, Guangzhou (begins 28 August 2018),[164] Ürümqi,] Abu Dhabi, Barcelona, Beijing–Capital, Copenhagen, Dammam, Delhi, Dera Ghazi Khan, Doha, Dubai–International, Islamabad, Jeddah, Karachi, Kuala Lumpur–International, London–Heathrow, Manchester, Medina, Milan–Malpensa, Multan, Muscat, Oslo–Gardermoen, Paris–Charles de Gaulle, Peshawar, Quetta, Rahim Yar Khan, Riyadh, Salalah,Tokyo–Narita, Toronto–Pearson, Mashhad, Bangkok–Suvarnabhumi, and Tashkent.</p>
                                                           </ul> </div>
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
                                                                    <td>01 April, 2021   10.00AM</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Return Time</td>
                                                                    <td>08 April, 2021   10.00AM</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Included</td>
                                                                    <td>
                                                                        <ul className="table-list-allow">
                                                                            <li><i className="bx bx-check" /> Specilaized Bilingual Guide</li>
                                                                            <li> <i className="bx bx-check" /> Private Transport</li>
                                                                            <li><i className="bx bx-check" /> Entrance Fees</li>
                                                                            <li><i className="bx bx-check" /> Box Lunch,Water,Dinner and Snacks</li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Excluded</td>
                                                                    <td>
                                                                        <ul className="table-list-disallow">
                                                                            <li> <i className="bx bx-x" /> Additional Services</li>
                                                                            <li><i className="bx bx-x" /> Insurance</li>
                                                                            <li><i className="bx bx-x" /> Drink</li>
                                                                            <li><i className="bx bx-x" /> Tickets</li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colSpan={2} className="table-bottom"><i className="flaticon-public-transport" />
                                                                        Travel With Bus</td>
                                                                </tr>
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
                                                                                <li> <i className="bx bxs-star" /> </li>
                                                                                <li> <i className="bx bxs-star" /> </li>
                                                                                <li> <i className="bx bxs-star" /> </li>
                                                                                <li> <i className="bx bxs-star" /> </li>
                                                                                <li> <i className="bx bxs-star" /> </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="p-review-texts">
                                                                        <p>it was a very nice experience to travel through Trip Planner i would like to suggest it to my friends who would like to come and experience such a pleseant journey. </p>
                                                                    </div>
                                                                    <Link to={`#`} className="r-reply-btn"><i className="bx bx-reply" /> Reply</Link>
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
                                                                                <li> <i className="bx bxs-star" /> </li>
                                                                                <li> <i className="bx bxs-star" /> </li>
                                                                                <li> <i className="bx bxs-star" /> </li>
                                                                                <li> <i className="bx bxs-star" /> </li>
                                                                                <li> <i className="bx bxs-star" /> </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="p-review-texts">
                                                                        <p>it was a very nice experience to travel through Trip Planner i would like to suggest it to my friends who would like to come and experience such a pleseant journey. </p>
                                                                    </div>
                                                                    <Link to={`#`} className="r-reply-btn"><i className="bx bx-reply" /> Reply</Link>
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
                                                                                <li> <i className="bx bxs-star" /> </li>
                                                                                <li> <i className="bx bxs-star" /> </li>
                                                                                <li> <i className="bx bxs-star" /> </li>
                                                                                <li> <i className="bx bxs-star" /> </li>
                                                                                <li> <i className="bx bxs-star" /> </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="p-review-texts">
                                                                        <p>it was a very nice experience to travel through Trip Planner i would like to suggest it to my friends who would like to come and experience such a pleseant journey. </p>

                                                                    </div>
                                                                    <Link to={`#`} className="r-reply-btn"><i className="bx bx-reply" /> Reply</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="p-review-input">
                                                            <form>
                                                                <h5>Leave Your Comment</h5>
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <input type="text" placeholder="Your Full Name" />
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <input type="text" placeholder="Your Email" />
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <input type="text" placeholder="Tour Type" />
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <textarea cols={30} rows={7} placeholder="Write Message" defaultValue={""} />
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <ul className="input-rating">
                                                                            <li><i className="bx bx-star" /></li>
                                                                            <li><i className="bx bx-star" /></li>
                                                                            <li><i className="bx bx-star" /></li>
                                                                            <li><i className="bx bx-star" /></li>
                                                                            <li><i className="bx bx-star" /></li>
                                                                        </ul>
                                                                        <input type="submit" defaultValue="Submit Now" />
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <div className="tab-content-2">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="p-timeline-overview">
                                                            <h5>Overview</h5>
                                                            <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla. Duis aliquet varius mauris eget rutrum. Nullam sit amet justo consequat, bibendum orci in, convallis enim. Proin convallis neque viverra finibus cursus. Mauris lacinia lacinia erat in finibus.</p>
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
                                                                    <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.</p>
                                                                    <ul>
                                                                        <li /><li><i className="bx bx-check" />Specilaized Bilingual Guide</li>
                                                                        <li /><li><i className="bx bx-check" />Private Transport</li>
                                                                        <li /><li><i className="bx bx-check" />Entrance Fees</li>
                                                                        <li /><li><i className="bx bx-check" />Box Lunch,Water,Dinner and Snacks</li>
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
                                                                    <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.</p>
                                                                    <ul>
                                                                        <li /><li><i className="bx bx-check" />Specilaized Bilingual Guide</li>
                                                                        <li /><li><i className="bx bx-check" />Private Transport</li>
                                                                        <li /><li><i className="bx bx-check" />Entrance Fees</li>
                                                                        <li /><li><i className="bx bx-check" />Box Lunch,Water,Dinner and Snacks</li>
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
                                                                    <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.</p>
                                                                    <ul>
                                                                        <li /><li><i className="bx bx-check" />Specilaized Bilingual Guide</li>
                                                                        <li /><li><i className="bx bx-check" />Private Transport</li>
                                                                        <li /><li><i className="bx bx-check" />Entrance Fees</li>
                                                                        <li /><li><i className="bx bx-check" />Box Lunch,Water,Dinner and Snacks</li>
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
                                                                    <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.</p>
                                                                    <ul>
                                                                        <li /><li><i className="bx bx-check" />Specilaized Bilingual Guide</li>
                                                                        <li /><li><i className="bx bx-check" />Private Transport</li>
                                                                        <li /><li><i className="bx bx-check" />Entrance Fees</li>
                                                                        <li /><li><i className="bx bx-check" />Box Lunch,Water,Dinner and Snacks</li>
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
                                                                    <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.</p>
                                                                    <ul>
                                                                        <li /><li><i className="bx bx-check" />Specilaized Bilingual Guide</li>
                                                                        <li /><li><i className="bx bx-check" />Private Transport</li>
                                                                        <li /><li><i className="bx bx-check" />Entrance Fees</li>
                                                                        <li /><li><i className="bx bx-check" />Box Lunch,Water,Dinner and Snacks</li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                            <div className="tab-contant-3">
                                                <SRLWrapper>
                                                <div className="row">
                                                    <div className="col-lg-8 col-md-8">
                                                        <div className="package-grid-one">
                                                            <div className="single-grid">
                                                                <Link to={gallery1Img} className="g-img-sm-1 main-gallary">
                                                                    <img src={gallery1Img} alt="gallary-img" />
                                                                </Link>

                                                                <Link to={gallery2Img} className="g-img-sm-2 main-gallary">
                                                                    <img src={gallery2Img} alt="gallary-img" />
                                                                </Link>

                                                                <Link to={galleryGxx1Img} className="g-img-md main-gallary">
                                                                    <img src={galleryGxx1Img} alt="gallary-img" />
                                                                </Link>
                                                            </div>
                                                            <div className="single-grid mt-24">
                                                                <Link to={gallery2Img} className="g-img-sm-1 main-gallary">
                                                                    <img src={gallery2Img} alt="gallary-img" />
                                                                </Link>
                                                                <Link to={gallery4Img} className="g-img-sm-2 main-gallary">
                                                                    <img src={gallery4Img} alt="gallary-img" />
                                                                </Link>
                                                                <Link to={galleryGxx2Img} className="g-img-md main-gallary">
                                                                    <img src={galleryGxx2Img} alt="gallary-img" />
                                                                </Link>
                                                            </div>

                                                            <div className="single-grid mt-24">

                                                                <Link to={gallery5Img} className="g-img-sm-1 main-gallary">
                                                                    <img src={gallery5Img} alt="gallary-img" />
                                                                </Link>
                                                                <Link to={gallery6Img} className="g-img-sm-2 main-gallary">
                                                                    <img src={gallery6Img} alt="gallary-img" />
                                                                </Link>
                                                                <Link to={galleryGxx3Img} className="g-img-md main-gallary">
                                                                    <img src={galleryGxx3Img} alt="gallary-img" />
                                                                </Link>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4">
                                                        <div className="package-grid-two">
                                                            <div className="single-grid-2">
                                                                <Link to={galleryGxl1Img}  className="main-gallary">
                                                                    <img src={galleryGxl1Img} alt="gallary-img" />
                                                                </Link>
                                                            </div>
                                                            <div className="single-grid-2 mt-24">
                                                                <Link to={galleryGxl2Img}  className="single-grid-2 main-gallary mt-30">
                                                                    <img src={galleryGxl2Img} alt="gallary-img" />
                                                                </Link>
                                                            </div>
                                                            <div className="single-grid-2 mt-24">
                                                                <Link to={galleryGxl3Img}  className="main-gallary mt-30">
                                                                    <img src={galleryGxl3Img} alt="gallary-img" />
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
                                                        <input type="text" placeholder="Your Full Name" />
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <input type="email" placeholder="Your Email" />
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <input type="tel" placeholder="Phone" />
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>Tickets Type</option>
                                                            <option value={1}>Travel With Bus</option>
                                                            <option value={2}>Travel With Plane</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>Adult</option>
                                                            <option value={1}>1</option>
                                                            <option value={2}>2</option>
                                                            <option value={3}>3</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>Child</option>
                                                            <option value={1}>1</option>
                                                            <option value={2}>2</option>
                                                            <option value={3}>3</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="calendar-input" id="packageCalenderMainDiv">
                                                            <DatePicker selected={startDate} onChange={(date) => this.changeDatepickerHandeller(date)}  className="input-field check-in" placeholder="dd-mm-yy"/>
                                                            <i className="flaticon-calendar" id="packageCalenderIcon"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <textarea cols={30} rows={7} placeholder="Message" defaultValue={""} />
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <input type="submit" defaultValue="Book Now" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        {/* <div className="p-sidebar-cards mt-40">
                                            <h5 className="package-d-head">Popular Packages</h5>
                                            <ul className="package-cards">
                                                <li className="package-card-sm">
                                                    <div className="p-sm-img">
                                                        <img src={pm_sm_1} alt="" />
                                                    </div>
                                                    <div className="package-info">
                                                        <div className="package-date-sm">
                                                            <strong><i className="flaticon-calendar" />5 Days/6 night</strong>
                                                        </div>
                                                        <h3><i className="flaticon-arrival" />
                                                            <Link to={`${process.env.PUBLIC_URL}/package-details`}>Lake Garda</Link>
                                                        </h3>
                                                        <h5><span>$180</span>/ Per Person</h5>
                                                    </div>
                                                </li>
                                                <li className="package-card-sm">
                                                    <div className="p-sm-img">
                                                        <img src={pm_sm_4} alt="" />
                                                    </div>
                                                    <div className="package-info">
                                                        <div className="package-date-sm">
                                                            <strong><i className="flaticon-calendar" />5 Days/6 night</strong>
                                                        </div>
                                                        <h3><i className="flaticon-arrival" />
                                                            <Link to={`${process.env.PUBLIC_URL}/package-details`}>Paris Hill Tour</Link>
                                                        </h3>
                                                        <h5><span>$180</span>/ Per Person</h5>
                                                    </div>
                                                </li>
                                                <li className="package-card-sm">
                                                    <div className="p-sm-img">
                                                        <img src={pm_sm_2} alt="" />
                                                    </div>
                                                    <div className="package-info">
                                                        <div className="package-date-sm">
                                                            <strong><i className="flaticon-calendar" />5 Days/6 night</strong>
                                                        </div>
                                                        <h3><i className="flaticon-arrival" />
                                                            <Link to={`${process.env.PUBLIC_URL}/package-details`}>Amalfi Costa</Link>
                                                        </h3>
                                                        <h5><span>$180</span>/ Per Person</h5>
                                                    </div>
                                                </li>
                                                <li className="package-card-sm">
                                                    <div className="p-sm-img">
                                                        <img src={pm_sm_3} alt="" />
                                                    </div>
                                                    <div className="package-info">
                                                        <div className="package-date-sm">
                                                            <strong><i className="flaticon-calendar" />5 Days/6 night</strong>
                                                        </div>
                                                        <h3><i className="flaticon-arrival" />
                                                            <Link to={`${process.env.PUBLIC_URL}/package-details`}>Mount Dtna</Link>
                                                        </h3>
                                                        <h5><span>$180</span>/ Per Person</h5>
                                                    </div>
                                                </li>
                                                <li className="package-card-sm">
                                                    <div className="p-sm-img">
                                                        <img src={pm_sm_4} alt="" />
                                                    </div>
                                                    <div className="package-info">
                                                        <div className="package-date-sm">
                                                            <strong><i className="flaticon-calendar" />5 Days/6 night</strong>
                                                        </div>
                                                        <h3><i className="flaticon-arrival" />
                                                            <Link to={`${process.env.PUBLIC_URL}/package-details`}>Fench Rivirany</Link>
                                                        </h3>
                                                        <h5><span>$180</span>/ Per Person</h5>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div> */}
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        {/* <div className="p-sidebar-organizer mt-40">
                                            <h5 className="package-d-head">Organized By</h5>
                                            <div className="organizer-card">
                                                <div className="organizer-img">
                                                    <img src={organizer} alt="" />
                                                </div>
                                                <div className="organizer-info">
                                                    <h5>Travelhotel</h5>
                                                    <p>Member since 2021</p>
                                                    <ul className="organizer-rating">
                                                        <li><i className="bx bxs-star" /></li>
                                                        <li><i className="bx bxs-star" /></li>
                                                        <li><i className="bx bxs-star" /></li>
                                                        <li><i className="bx bxs-star" /></li>
                                                        <li><i className="bx bx-star" /></li>
                                                    </ul>
                                                    <h5>500 Reviews</h5>
                                                </div>
                                            </div>
                                            <div className="p-ask-btn">
                                                <Link to={`${process.env.PUBLIC_URL}/contact`} >ASK A QUESTION</Link>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        {/* <div className="p-sidebar-banner mt-40">
                                            <img src={sidebarBannar} alt="" className="img-fluid" />
                                            <div className="sidebar-banner-overlay">
                                                <div className="overlay-content">
                                                    <h3>Get 50% Off
                                                        In Dubai Tour</h3>
                                                    <div className="sidebar-banner-btn">
                                                        <Link to={`#`} >Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }
}

export default PackageDetails;