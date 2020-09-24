import React, { Component } from "react";
import { Card } from "antd";
import { Button } from "antd";
import {addImageUpload, insertSlider} from "../../Axios/Admin/index";
import {Spinner} from "react-bootstrap";
import { toastr } from "react-redux-toastr";

const Img_Url = `${process.env.REACT_APP_API_URL}/uploads/slider/thumb/`;

class AddBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      imageLoading: false,
      imageFile:{},
      error:''
    };
  }

  handleChange = async(e) => {
    this.setState({imageLoading:true});
    let api = await addImageUpload(e.target.files[0]);
    this.setState({imageLoading: false, imageFile:api});
  }

  handleSubmit = async() => {
    const {imageFile} = this.state;
    if(Object.keys(imageFile).length===0){
      this.setState({error:'please upload image'})
    }else{
      this.setState({loading:true});
      let api = await insertSlider(imageFile);
      this.setState({loading:false});
      toastr.success('Upload Success');
      this.props.history.push('/cc-admin/dashboard/banner-list');
    }
  };

  openModal = () => {
    this.refs.image.click();
  }

  render() {
    const { loading, imageLoading, error, imageFile } = this.state;
    return (
      <Card title="Upload Banner Image">
        <div className="upload-icon">
          {
            imageLoading?<Spinner animation="border" variant="success" />:(
              Object.keys(imageFile).length!==0?<img src={Img_Url+imageFile.slider_image_thumb} onClick={this.openModal} alt="logo"/>:(
                <img
                src={require("../../assets/icons/upload.svg")}
                className="upload-icon"
                alt="logo"
                onClick={this.openModal}
              />
              )
            )
          }
          <input type="file" ref="image" style={{display:"none"}} onChange={this.handleChange}/>
        </div>
        <p style={{textAlign:"center", padding:"1rem"}}>Recommended Size (Dimension : 1340 × 753 )</p>
        <div className="upload-btn">
          <Button type="primary" loading={loading} onClick={this.handleSubmit}>
            Upload
          </Button>
        </div>
        <p className="err-msg">{error}</p>
      </Card>
    );
  }
}

export default AddBanner;
