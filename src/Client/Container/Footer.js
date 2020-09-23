import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <div class="container-fluid  coral-change-footer">
          <div class="container res-container">
            <div class="row"></div>
          </div>
        </div>
        <div class="container-fluid se-res">
          <div class="row">
            <div class="col-md 3 col-12 ssq">
              <div class="footer-social">
                <h3>Coral Country</h3>
              </div>
              <div class="coral-social-links">
                <ul class="list-unstyled d-inline-flex">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-12 ssq1">
              <div class="coral-contact-us">
                <h3>quick links</h3>
              </div>
              <div class="coral-quick-link">
                <ul class="list-unstyled">
                  <li class="quick-inner">
                    <a href="#">Home</a>
                  </li>
                  <li class="quick-inner">
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li class="quick-inner">
                    <a href="#">FAQ</a>
                  </li>
                  <li class="quick-inner">
                    <a href="#">Privacy Policy</a>
                  </li>
                  {/* <li class="quick-inner">
                    <a href="#">News</a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-12 ssq2">
              <div class="coral-contact-keeraikuda">
                <h3>contact us</h3>
              </div>
              <div class="coral-quick-country">
                <ul class="list-unstyled">
                  <li class="quick-inner-map">
                    <a href="#">Coral Country</a>
                  </li>
                  <li class="mt-1">
                    <a href="#">KeeraiKadu bus stop,</a>
                  </li>
                  <li class="mt-1">
                    <a href="#">SH 188,Yercaud-636602</a>
                  </li>
                  <li class="mt-1">
                    <a href="#">Tamil Nadu,India.</a>
                  </li>
                  <li class="quick-inner-contact mt-3">
                    <a href="#">Phone:9842791955</a>
                  </li>
                  <li class="quick-inner-email mt-3">
                    <a href="#">Email:Coralcounty@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-12 ssq3">
              <div class="coral-contact-keeraikuda">
                <h3>contact us</h3>
              </div>
              <div class="coral-quicks-country">
                <ul class="list-unstyled cor-ul">
                  <li class="quicks-inner-map">
                    <a href="#">Sigram Property Developers </a>
                  </li>
                  <li class="mt-1">
                    <a href="#">1st floor,Nirmalskywm mall,</a>
                  </li>
                  <li class="mt-1">
                    <a href="#">Rajaji road,salem-636007</a>
                  </li>
                  <li class="mt-1">
                    <a href="#">Tamil Nadu,India.</a>
                  </li>
                  <li class="quicks-inner-contact mt-3">
                    <a href="#">Phone:9791622236</a>
                  </li>
                  <li class="quick-inner-email mt-3">
                    <a href="#">Email:sigarampropertydevelopers@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="container-fluid footer-bord"></div>

            <div class="coral-copy-right ssq4 pt-3">
              <p>2020 &copy; Sigram Developers Pvt.Ltd.All Rights Reserved</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
