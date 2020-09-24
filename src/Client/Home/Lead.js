import React, { Component } from "react";
import { toastr } from "react-redux-toastr";
import { InsertLead } from "../../Axios/Client/index";
import { toastrSuccessOptions } from "../Components/index"

class Lead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        user_area:null
      },
      errors: {},
    };
  }

  getUtmParams = (search) => {
    let fields = this.state.fields;
    let source = "";
    let params = search.replace("?", "");
    let arr = params.split("&");
    arr.map((item, index) => {
      let split = item.split("=");
      if (split[0] === "utm_source") {
        source = split[1];
      }
    });
    if (source == "") {
      fields["source"] = "organic";
    } else {
      fields["source"] = source;
    }
    this.setState({ fields });
  };

  validateForm = () => {
    const { fields } = this.state;
    let formIsValid = true;
    let errors = {};

    if (!fields["enquiry_first_name"]) {
      formIsValid = false;
      errors["enquiry_first_name"] = "Please enter your First Name.";
    }

    if (!fields["enquiry_last_name"]) {
      formIsValid = false;
      errors["enquiry_last_name"] = "Please enter your Last Name";
    }

    if (!fields["enquiry_comments"]) {
      formIsValid = false;
      errors["enquiry_comments"] = "Please enter your Message";
    }

    // user_emailid
    if (!fields["enquiry_email"]) {
      formIsValid = false;
      errors["enquiry_email"] = "Please enter your Email-ID.";
    }

    if (typeof fields["enquiry_email"] !== "undefined") {
      // regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["enquiry_email"])) {
        formIsValid = false;
        errors["enquiry_email"] = "Please enter valid Email-ID.";
      }
    }

    if (!fields["enquiry_mobileno"]) {
      formIsValid = false;
      errors["enquiry_mobileno"] = "Please enter your Mobile No.";
    }

    if (typeof fields["enquiry_mobileno"] !== "undefined") {
      if (!fields["enquiry_mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["enquiry_mobileno"] = "Please enter valid Mobile No.";
      }
    }
    this.setState({ errors });
    return formIsValid;
  };

  handleChange = (e) => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  };

  handleSubmit = async (e) => {
    const { fields } = this.state;
    if (this.validateForm()) {
      let search = this.props.location.search;
      this.getUtmParams(search);
      let api = await InsertLead(fields);
      this.setState({
        fields: {
          enquiry_comments: "",
          enquiry_email: "",
          enquiry_first_name: "",
          enquiry_last_name: "",
          enquiry_mobileno: "",
        },
      });
      toastr.success("Thank You", "Our Support Team Will Contact You Soon", toastrSuccessOptions);
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div class="container-fluid mt-5">
          <div class="row">
            <div class="col-md-6 col-12 coral-overflow">
              <div class="coral-form">
                <div class="coral-text-form">
                  <div class="form-group coral-group">
                    <div class="form-fields">
                      <input
                        type="text"
                        name="enquiry_first_name"
                        placeholder="First Name"
                        class="form-control coral-form-1"
                        value={this.state.fields.enquiry_first_name}
                        onChange={this.handleChange}
                      />
                      <p className="err-msg">{errors.enquiry_first_name}</p>
                    </div>
                    <div class="form-fields">
                      <input
                        type="text"
                        name="enquiry_last_name"
                        placeholder="Last Name"
                        class="form-control coral-form-1"
                        value={this.state.fields.enquiry_last_name}
                        onChange={this.handleChange}
                      />
                      <p className="err-msg">{errors.enquiry_last_name}</p>
                    </div>
                    <div class="form-fields">
                      <input
                        type="email"
                        name="enquiry_email"
                        placeholder="Email Address"
                        class="form-control coral-form-1"
                        value={this.state.fields.enquiry_email}
                        onChange={this.handleChange}
                      />
                      <p className="err-msg">{errors.enquiry_email}</p>
                    </div>
                    <div class="form-fields">
                      <input
                        type="text"
                        name="enquiry_mobileno"
                        placeholder="Phone Number"
                        class="form-control coral-form-1"
                        value={this.state.fields.enquiry_mobileno}
                        onChange={this.handleChange}
                      />
                      <p className="err-msg">{errors.enquiry_mobileno}</p>
                    </div>
                    <div class="form-fields">
                      <div class="form-group">
                        <input
                          type="text"
                          name="enquiry_comments"
                          placeholder="Message:"
                          class="form-control coral-form-2"
                          value={this.state.fields.enquiry_comments}
                          onChange={this.handleChange}
                        />
                        <p className="err-msg">{errors.enquiry_comments}</p>
                      </div>
                    </div>
                  </div>
                  <div class="form-btn coral-input-btn ">
                    <button
                      class="btn form-corl-btn"
                      type="submit"
                      onClick={this.handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-12 coral-overflow">
              <div class="contacts-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3302167695606!2d80.22792981484973!3d13.014631217453884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670b2d238033%3A0xf3f11ddf0750ac23!2sSrinagar%20Colony%2C%20Saidapet%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1597829865359!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
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
