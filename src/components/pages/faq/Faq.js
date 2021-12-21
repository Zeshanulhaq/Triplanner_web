import React, { Component } from "react";
import {Link} from "react-router-dom";
class Faq extends Component {
  render() {
    return (
        <div>
            {/* ===============  breadcrumb area start =============== */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="breadcrumb-wrap">
                                <h2>FAQ</h2>
                                <ul className="breadcrumb-links">
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                                        <i className="bx bx-chevron-right" />
                                    </li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ===============  breadcrumb area end =============== */}
            {/* ===============  faq wrapper start =============== */}
            <div className="faq-wrapper pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="faq-wrap">
                                <div className="accordion-box">
                                    <h5>General Question</h5>
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Why do you need to turn off all your electronic devices before an airplane takes off and lands? <i className="bx bx-chevron-down" />
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                We've been taught to fear the interference of our portable devices and an airplane's sensitive electronic systems. And despite being told to turn off our darn phones, four out of ten passengers, it seems, disregard these warnings, since there's little hard evidence behind claims that electromagnetic emissions from devices can muddle airplane computers. Still, there's ample anecdotal corroboration, like the flight where a 30-degree navigation error was rectified simply by asking a passenger to turn off a portable DVD player. The issue is still being debated, so if in doubt, flick that Off switch. We might, eventually, long for the days when a chatty seatmate couldn’t make an hour-long phone call.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                What are some common items savvy travelers bring with them (that less-savvy travelers don’t)? <i className="bx bx-chevron-down" />
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                Don’t forget a small power strip—ideal for sharing a crowded outlet in an airport, and a simple way to keep all devices close by once at a hotel. (Combine that with a Zolt—which powers a laptop and two devices with a charger the size of a lipstick—and it’s even handier.) Keep a photograph of your luggage and passport on your smartphone; lose either of them, and you’ll be grateful for the reference. Pack a scarf—always.                                                 </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                What type of luggage do you recommend I take?  <i className="bx bx-chevron-down" />
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                On most Intrepid trips you will be required to carry your own luggage, sometimes up stairs and on and off transport. We therefore recommend you travel with a backpack.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                What type of transportation is used? <i className="bx bx-chevron-down" />
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                The type of transport used depends on your trip style.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-box pt-40">
                                    <h5>Financial Topics</h5>
                                    <div className="accordion" id="accordionExample2">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingFive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                                Do i have to be rich to travel? <i className="bx bx-chevron-down" />
                                                </button>
                                            </h2>
                                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample2">
                                                <div className="accordion-body">
                                                The beauty of travel is that it’s accessible to everyone, in some form. You don't have to go far to experience a new culture.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingSix">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                Does my trip qualify for a price match guarantee? <i className="bx bx-chevron-down" />
                                                </button>
                                            </h2>
                                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample2">
                                                <div className="accordion-body">
                                                If the price of your flight goes down after you've booked it, you might be able to score a refund of the difference.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingSeven">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                Would a packaged tour be a cheaper option than building a custom tour? <i className="bx bx-chevron-down" />
                                                </button>
                                            </h2>
                                            <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample2">
                                                <div className="accordion-body">
                                                Planning a holiday is not an easy task, there are a lot of things to care for from the airfare to the hotel accommodations, transfers, money, itinerary… You may consider booking a package tour or booking all the services individually. Both of them have some advantages and disadvantages, and booking a package tour is preferred by a lot of tourists for four seasons: its safety, time and money-saving and the best service it offers.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingEight">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                    how much money do i need to plan a Trip? <i className="bx bx-chevron-down" />
                                                </button>
                                            </h2>
                                            <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample2">
                                                <div className="accordion-body">
                                                    well, it all depends on your choice the place you are going to visit , what kind of services you required then a number of persons food , accomodation extra so required budged must be calculated according to your selections and demands.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-box pt-40">
                                    <h5>Other Questions</h5>
                                    <div className="accordion" id="accordionExample3">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingNine">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
                                                What clothing should I pack to go on a Trip? <i className="bx bx-chevron-down" />
                                                </button>
                                            </h2>
                                            <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample3">
                                                <div className="accordion-body">
                                                We always recommend packing as light as possible however the specific requirements for your tour will vary widely depending on where and when you are traveling.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTen">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                                What is the most appropriate type of luggage to bring? <i className="bx bx-chevron-down" />
                                                </button>
                                            </h2>
                                            <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample3">
                                                <div className="accordion-body">
                                                We strongly recommend bringing a backpack or duffel bag, as suitcases can be cumbersome and difficult to store in buses, under seats, etc.. Keep in mind that you will normally have to carry your own luggage on and off buses up and down hotel staircases. Suitcases with wheels may not work well on dirt or cobblestone roads.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingEleven">
                                                
                                            </h2>
                                            <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample3">
                                                
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwelve">
                                                
                                            </h2>
                                            <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample3">
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <form>
                                <div className="ask-inputs">
                                    <h5>Ask Any Question</h5>
                                    <input type="text" placeholder="Your Full Name" />
                                    <input type="email" placeholder="Your Email" />
                                    <input type="text" placeholder="Phone" />
                                    <textarea cols={30} rows={7} placeholder="Message" defaultValue={""} />
                                    <input type="submit" defaultValue="Ask Question" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* ===============  faq wrapper end =============== */}
        </div>
    );
  }
}

export default Faq;
