import React, { Component } from 'react';
import Banner from "./Banner";
import Welcome from "./Welcome";
import Video from "./Video";
import Amenities from "./Amenities";
import Lead from "./Lead";

class Home extends Component {
  render() {
    return (
      <div style={{position:'relative'}}>
        <Banner />
        <Welcome />
        <Video />
        <Amenities />
        <Lead />
      </div>
    );
  }
}

export default Home;