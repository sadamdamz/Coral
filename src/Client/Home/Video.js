import React, { Component } from "react";

class Video extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid mt-5">
          <div class="row">
            <div class="coral-video-image mt-5">
              <h3 class="mt-5 pt-5">our Video</h3>
              <div class="video-play mt-4">
                <img src={require("../../assets/img/coral/Play.png")} width="100%" height="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
