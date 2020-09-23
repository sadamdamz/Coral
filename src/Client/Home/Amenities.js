import React, { Component } from "react";

class Amenities extends Component {
  render() {
    return (
      <div>
        <div class="container mt-5 pt-5">
          <div class="coral-amenties">
            <h3>
              <a href="#">Amenities</a>
            </h3>
            <p class="text-center">
              Find nature and dwellwith our world-class amenities designed to
              provide you with a pleasurable living space.The best part is,these
            </p>
            <p class="text-center">
              amenties not only help you to connect with the resident but als
              with nature
            </p>
          </div>
        </div>
        <div class="container Amenties-county">
          <img
            src={require("../../assets/img/coral/gym.jpg")}
            width="100%"
            height="100%"
          />
        </div>
        <div class="container amenties-resp-data">
          <div class="row">
            <div class="col-6">
              <div class="Amenties-property">
                <ul class="list-unstyled">
                  <li class="gate-list">
                    <a href="#">
                      <img src={require("../../assets/img/coral/icon1.png")} />
                    </a>
                  </li>
                  <li class="gate-inner">
                    <a href="#">Gated Community</a>
                  </li>
                </ul>
                <ul class="list-unstyled">
                  <li class="gate-list-inner gym-spec">
                    <a href="#">
                      <img src={require("../../assets/img/coral/icon3.png")} class="amem-img" />
                    </a>
                  </li>
                  <li class="gate-inner">
                    <a href="#">Gym & Spa</a>
                  </li>
                </ul>
                <ul class="list-unstyled">
                  <li class="gate-list cafe-coral">
                    <a href="#">
                      <img src={require("../../assets/img/coral/icon5.png")} class="amem-img" />
                    </a>
                  </li>
                  <li class="gate-inner">
                    <a href="#">Gated Community</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-6">
              <ul class="list-unstyled">
                <li class="gate-list-inner">
                  <a href="#">
                    <img src={require("../../assets/img/coral/icon2.png")} />
                  </a>
                </li>
                <li class="gate-inner">
                  <a href="#">Temperature Controlled pool</a>
                </li>
              </ul>
              <ul class="list-unstyled">
                <li class="gate-list">
                  <a href="#">
                    <img src={require("../../assets/img/coral/icon4.png")} />
                  </a>
                </li>
                <li class="gate-inner">
                  <a href="#">Site Maintenance</a>
                </li>
              </ul>
              <ul class="list-unstyled">
                <li class="gate-list-inner">
                  <a href="#">
                    <img src={require("../../assets/img/coral/icon6.png")} />
                  </a>
                </li>
                <li class="gate-inner">
                  <a href="#">24 X 7 Security</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Amenities;
