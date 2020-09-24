import React, { Component } from 'react';
import Banner from "./Banner";
import Welcome from "./Welcome";
import Video from "./Video";
import Amenities from "./Amenities";
import Lead from "./Lead";

class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      
    }
  }
  render() {
    return (
      <div style={{position:'relative'}}>
        <Banner />
        <Welcome />
        <Video />
        <Amenities />
        <Lead {...this.props}/>
      </div>
    );
  }
}

export default Home;