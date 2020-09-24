import React, { Component } from 'react';
import Banner from "./Banner";
import Welcome from "./Welcome";
import Video from "./Video";
import Amenities from "./Amenities";
import Lead from "./Lead";
import {getAllSlider} from "../../Axios/Client/index";
import { Spin, Space } from 'antd';

class Home extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  render() {
    return (
          <div style={{position:'relative'}}>
          <Banner {...this.props}/>
          <Welcome {...this.props}/>
          <Video />
          <Amenities />
          <Lead {...this.props}/>
        </div>
        )
  }
}

export default Home;