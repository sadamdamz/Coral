import React, { Component } from "react";
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
class Video extends Component {
  constructor(props){
    super(props);
    this.state={
      open:false
    }
  }

  openModal = () => {
    this.setState({open:true})
  }

  close = () => {
    this.setState({open:false})
  }

  render() {
    const {open} = this.state;
    return (
      <div>
        <div class="container-fluid mt-5">
          <div class="row">
            <div class="coral-video-image mt-5">
              <h3 class="mt-5 pt-5">our Video</h3>
              <div class="video-play mt-4">
                <img src={require("../../assets/img/coral/Play.png")} width="100%" height="100%" alt="logo" onClick={this.openModal} allowFullScreen/>
                <ModalVideo channel='youtube' autoplay isOpen={open} videoId="VJneknfLK2Q" onClose={() => this.close()} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
