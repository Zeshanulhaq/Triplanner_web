import React, { useState, useEffect } from "react";
import axios from "axios";
const Profile = () => {
  const [user, setuser] = useState([]);
  const [name, setuname] = useState("");
  const [cnic, setucnic] = useState("");
  const [phone, setuphone] = useState("");
  const [email, setuemail] = useState("");
  const [address, setuaddress] = useState("");
  console.log("abc", localStorage.getItem("userID"));

  const uid = localStorage.getItem("userID");
  useEffect(() => {
    async function getAllUser() {
      try {
        let userData = await axios.get(`http://127.0.0.1:8000/userapi/${uid}`);
        console.log("aaaaaaaaaaaaaaaaaaaa", userData.data);
        setuser(userData.data);
        console.log("arsssss", userData.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllUser();
  }, []);

  return (
    <div>
      <div class="container">
        <div class="row gutters">
          <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div class="card h-100">
              <div class="card-body">
                <div class="account-settings">
                  <div class="user-profile">
                    <h5 class="user-name">{user.unam} </h5>
                    <h6 class="user-email">yuki@Maxwell.com</h6>
                  </div>
                  <div class="about">
                    <h5>About</h5>
                    <p>
                      I'm Yuki. Full Stack Designer I enjoy creating
                      user-centric, delightful and human experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="card h-100">
              <div class="card-body">
                <div class="row gutters">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 class="mb-2 text-primary">Personal Details</h6>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="fullName">Full Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="fullName"
                        placeholder="Enter full name"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="eMail">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="eMail"
                        placeholder="Enter email ID"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="phone">Phone</label>
                      <input
                        type="text"
                        class="form-control"
                        id="phone"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="website">Website URL</label>
                      <input
                        type="url"
                        class="form-control"
                        id="website"
                        placeholder="Website url"
                      />
                    </div>
                  </div>
                </div>
                <div class="row gutters">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 class="mt-3 mb-2 text-primary">Address</h6>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="Street">Street</label>
                      <input
                        type="name"
                        class="form-control"
                        id="Street"
                        placeholder="Enter Street"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="ciTy">City</label>
                      <input
                        type="name"
                        class="form-control"
                        id="ciTy"
                        placeholder="Enter City"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="sTate">State</label>
                      <input
                        type="text"
                        class="form-control"
                        id="sTate"
                        placeholder="Enter State"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="zIp">Zip Code</label>
                      <input
                        type="text"
                        class="form-control"
                        id="zIp"
                        placeholder="Zip Code"
                      />
                    </div>
                  </div>
                </div>
                <div class="row gutters">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="text-right">
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        class="btn btn-secondary"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        class="btn btn-primary"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;