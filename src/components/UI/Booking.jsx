import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
    const [startDate, setstartDate] = useState(new Date)
  const changeDatepickerHandeller = (date) => {
    setstartDate(date);
  };
  return (
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
              <DatePicker
                selected={startDate}
                onChange={(date) => changeDatepickerHandeller(date)}
                className="input-field check-in"
                placeholder="dd-mm-yy"
              />
              <i className="flaticon-calendar" id="packageCalenderIcon" />
            </div>
          </div>
          <div className="col-lg-12">
            <textarea
              cols={30}
              rows={7}
              placeholder="Message"
              defaultValue={""}
            />
          </div>
          <div className="col-lg-12">
            <input type="submit" defaultValue="Book Now" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Booking;
