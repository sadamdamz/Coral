import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="main-responsive">
          <div class="responsive-bar">
            <nav class="navbar navbar-default mt-3 mb-2">
              <div class="container-fulid">
                <div class="navbar-header">
                  <button
                    type="button"
                    class="navbar-toggle dropdown res-coral-btn"
                    data-toggle="collapse"
                    data-target="#myNavId"
                  >
                    <i class="fa fa-bars" aria-hidden="true"></i>
                  </button>
                </div>
                <div class="collapse navbar-collapse" id="myNavId">
                  <ul class="nav navbar-nav coral-nav-res">
                    <li class="active">
                      <a href="/">Home</a>
                    </li>
                    <li className="active"><a href="/project-details">Project Details</a></li>
                    <li class="active">
                      <a href="/aboutus">About us</a>
                    </li>
                    <li class="active">
                      <a href="/contact">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div class="mt-4 mb-2">
              <img
                src={require("../../assets/img/coral/coral-logo.png")}
                width="100%"
                height="100%"
                class="img-fluid"
              />
            </div>
            <div class="mt-4 mr-3 mb-2">
              <a href="#" class="bar-envelop ham-envelope">
                <i class="fa fa-envelope "></i>
              </a>
              <a href="#" class="bar-phone ham-mobile">
                <i class="fa fa-phone "></i>
              </a>
            </div>
          </div>
        </div>
        <div class="container-fluid cor-align">
          <div class="coral-border">
            <div class="coral-border-left"></div>
            <div class="coral-border-right"></div>
          </div>
        </div>
        <div class="coral-main-logo">
          <div class=" col-12 container-inner">
            <div class="row">
              <div class="col-6">
                <a href="/">
                  <div class="coral-top-logo">
                    <div class="c-logo">
                      <img
                        src="https://coralcounty.catalystudio.in/wp-content/uploads/2020/07/Coral-County-logo-640-X-100.png"
                        class="img-fluid"
                        alt="logo"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-6 coral-nav">
                <div class="coral-linksd">
                  <div class="curve">
                    <div class="coral-mobiles-link">
                      {/* <a href="#"> */}
                      <a href="tel:9842791955">
                        {" "}
                        <i
                          class="fa fa-mobile mobilefour"
                          aria-hidden="true"
                        ></i>
                        +91 9842791955 /{" "}
                      </a>{" "}
                      <a href="tel:9791622236">+91 9791622236</a>
                      {/* </a> */}
                    </div>
                    <div class="coral-emails">
                      <a href="mailto: coralcounty@gmail.com">
                        <i
                          class="fa fa-envelope mobilefour"
                          aria-hidden="true"
                        ></i>
                        coralcounty@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div class="coral-menu">
                  <ul>
                    <li>
                      <NavLink
                        className="tags"
                        activeClassName="coral-active coral-list"
                        exact
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="tags"
                        activeClassName="coral-active coral-list"
                        to="/project-details"
                      >
                        Project Details
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="tags"
                        activeClassName="coral-active coral-list"
                        to="/aboutus"
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="tags"
                        activeClassName="coral-active coral-list"
                        to="/contact"
                      >
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
