import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <div class="container coral-county">
          <div class="row">
            <div class="county-img">
              <img src={require("../../assets/img/coral/coral-logo.png")} width="100%" height="100%" />
            </div>
            <h1>welcom to coral county</h1>
            <p>
              One of the fastest-growing entities in the realty sector with a
              difference that offers luxury at resonable costs,excellent
              customer care levels with the highest satisfaction and the highest
              possible standards.we take pride in upholding the highest ethical
              standards by
            </p>
            <h4>maintaining transparency in all our transactions.</h4>
            <div class="coral-btn">
              <button type="button" class="coral-btn1">
                {" "}
                Read more<i class="fa fa-arrow-circle-right coral-right"></i>
              </button>
              <button type="button" class="coral-btn2">
                Contact Us<i class="fa fa-arrow-circle-right coral-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="container mt-5">
          <div class="row">
            <div class="col-md col-12">
              <div class="overview-image mt-5">
                <img src={require("../../assets/img/coral/About.jpg")} width="100%" height="100%" />
              </div>
            </div>
            <div class="col-md-6 col-12 mt-5 overres-coral">
              <div class="overview-content">
                <h3>Overview</h3>
                <p>
                  Coral county is an exclusive layout located on the way to
                  Kuppanur @Yercaud.Nestling the beautiful Yercaud
                  Hills,accessible from major cities of tamilnadu and Banglore,
                  our design reflect our philosophy.Designed with meticulously
                  planned homes with each element in harmony with the next,for
                  people who are looking for a property with a perfect setting
                  that combines the exotic style of living with a Mountain
                  atmospher
                </p>
              </div>
              <button type="button" class="coral-btn1">
                {" "}
                Read more<i class="fa fa-arrow-circle-right coral-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
