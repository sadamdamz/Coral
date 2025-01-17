import React, { Component } from "react";
import Slider from "react-slick";

const Img_Url = process.env.REACT_APP_API_URL+"/uploads/slider/large/";

class Banner extends Component {
  constructor(props){
    super(props);
    this.state={

    }
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="slider-header">
        <div style={{ textAlign: "center" }}>
          <img src={require('../../assets/icons/Left.svg')} className="leftIcon" onClick={this.previous}/>
          <img src={require('../../assets/icons/Right.svg')} className="rightIcon" onClick={this.next}/>
        </div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {
            this.props.data.map((item, index) => {
              return (
                <div key={index}>
                  <img src={Img_Url+item.slider_image_large} alt={index} className="slider-image"/>
                </div>
              )
            })
          }
          {/* <div>
            <h3><img src={require("../../assets/img/coral/Banner.jpg")} className="slider-image" /></h3>
          </div>
          <div>
          <img src={"https://ezeehousing.com/ezapi/uploads/promoter/microsite/large/c367e2ee-814a-400f-b4ae-bcad18bc82f2-1600755249783.jpeg"} className="slider-image" />
          </div> */}
        </Slider>
      </div>
    );
  }
}

export default Banner;
