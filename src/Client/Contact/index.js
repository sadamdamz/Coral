import React, { Component } from 'react';
import Lead from "../Home/Lead";

class index extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div style={{background:'#f3f3f385'}}>
        <h1 className="contact-h1">Contact Us</h1>
        <p className="contact-p">An investment for your weekend getaway. Luxury villas coupled with nature.</p>
        <Lead {...this.props}/>
      </div>
    );
  }
}

export default index;