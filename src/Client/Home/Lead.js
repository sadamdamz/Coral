import React, { Component } from "react";

class Lead extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid mt-5">
          <div class="row">
            <div class="col-md-6 col-12 coral-overflow">
              <div class="coral-form">
                <form class="coral-text-form">
                  <div class="form-group coral-group">
                    <div class="form-fields">
                      <input
                        type="text"
                        name="name"
                        placeholder="First Name"
                        class="form-control coral-form-1"
                      />
                    </div>
                    <div class="form-fields">
                      <input
                        type="text"
                        name="city"
                        placeholder="Last Name"
                        class="form-control coral-form-1"
                      />
                    </div>
                    <div class="form-fields">
                      <input
                        type="email"
                        name="mail"
                        placeholder="Email Address"
                        class="form-control coral-form-1"
                      />
                    </div>
                    <div class="form-fields">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        class="form-control coral-form-1"
                      />
                    </div>
                    <div class="form-fields">
                      <div class="form-group">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Message:"
                          class="form-control coral-form-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-btn coral-input-btn ">
                    <button class="btn form-corl-btn" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-6 col-12 coral-overflow">
              <div class="contacts-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3302167695606!2d80.22792981484973!3d13.014631217453884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670b2d238033%3A0xf3f11ddf0750ac23!2sSrinagar%20Colony%2C%20Saidapet%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1597829865359!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  border="0"
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lead;
