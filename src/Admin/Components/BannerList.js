import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button,  Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { toastr } from "react-redux-toastr";
import { confirmAlert } from "react-confirm-alert";
import Moment from "react-moment";
import filterFactory, {
  textFilter,
  selectFilter,
} from "react-bootstrap-table2-filter";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

class BannerList extends Component {
  constructor(props){
    super(props);
    let columns = [
      { dataField: "sno", text: "SNO"  },
      { dataField: "created_date", text: "Created Date" },
      { dataField: "image", text: "Image",  },
      { dataField: "active", text: "Enable/Disable" }
    ];
    this.state={
      columns:columns,
      TableData:[],
      loading:true
    }
    this.getListData = this.getListData.bind(this);
  }

  componentWillMount(){
    this.getListData();
  }
  active_action(slider_id) {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui-confirm-alert">
            <h1>Are you sure?</h1>
            <p>You want to Enable this ?</p>
            <button onClick={onClose}>No</button>
            <button
              onClick={() => {
                this.handleClickInactive(slider_id, "enabled");
                onClose();
              }}
            >
              {" "}
              Yes, Enable it!{" "}
            </button>
          </div>
        );
      },
    });
  }

  inactive_action(slider_id) {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui-confirm-alert">
            <h1>Are you sure?</h1>
            <p>You want to Disable this ?</p>
            <button onClick={onClose}>No</button>{" "}
            <button
              onClick={() => {
                this.handleClickInactive(slider_id, "disabled");
                onClose();
              }}
            >
              {" "}
              Yes, Disable it!{" "}
            </button>
          </div>
        );
      },
    });
  }
  handleClickInactive(slider_id, action_type) {
    let $this = this;
    const PostData = { slider_id: slider_id, action_type: action_type };
    // const { history } = this.props;
    axios
      .post(API_URL + "/api/admin/updateslideractiondata", PostData)
      .then(function (response) {
        if (response.data.Statuscode == 200) {
          toastr.success("User", response.data.Message);
          $this.getListData();
        } else {
          toastr.error("Error", response.data.Message);
        }

        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getListData(){
    let $this = this;
    this.setState({loading:true})
    const { promoterId } = this.props;
    let postData = {promoter_id:promoterId};
    axios
    .get(API_URL + "/api/admin/getallsliderlist")
    .then(function (response) {
      console.log(response.data.Statuscode);
      if (response.data.Statuscode == 200) {
        let resData = response.data.Data;
        let TableData = [];
        let i = 1;
        resData.map((item, index) => {
          let datas = {};
          var Action = [];
          var Active = [];
          // Action.push(
          //   <Link
          //     to={`/ez-admin/promoters/slideslist/edit-slides/${item.slider_id}`}
          //   >
          //     <a className="option-btns" href="">
          //       <i className="fa fa-edit"></i>
          //     </a>
          //   </Link>
          // );
          if (item.slider_status == 1) {
            Active.push(
              <a
                className="option-btns"
                onClick={() => $this.active_action(item.slider_id)}
              >
                <i className="fa fa-ban"></i>
              </a>
            );
          } else {
            Active.push(
              <a
                className="option-btns"
                onClick={() => $this.inactive_action(item.slider_id)}
              >
                <i className="fa fa-check"></i>
              </a>
            );
          }
          let image = <img src={API_URL+`/uploads/slider/thumb/${item.slider_image_thumb}`} alt={item.slider_title} style={{height:'5rem'}} />
          datas['sno'] = index + 1;
        datas['created_date'] = <Moment format="D MMM YYYY">{item.created_date}</Moment>
          datas["slider_title"] = item.slider_title;
          datas["project_name"] = item.project_name;
          datas["image"] = image;
          datas["sequence_no"] = item.slider_sequence;
          datas["action"] = Action;
          datas["active"] = Active;
          i++;
          TableData.push(datas);
        });

        $this.setState({ TableData: TableData,loading:false });
      } else {
        $this.setState({ TableData: [],loading:false });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const {loading} = this.state;
    function indication() {
      return "Data Not Found";
    }
    let pagination = paginationFactory({
      page: 1,
      sizePerPage: 5,
      withFirstAndLast: true,
      sizePerPageList: [
        { text: "5th", value: 5 },
        { text: "10th", value: 10 },
        { text: "All", value: this.state.TableData.length },
      ],
    });
    return (
      <div className="animated fadeIn">
        {
          loading?"Loading Please Wait":<Row>
          <Col lg={12}>
            <Card className="users-pg">
            <CardHeader>
                <strong><i className="icon-info pr-1"></i>Slider List</strong>
              </CardHeader>
              <CardBody>
              <BootstrapTable
                  keyField="id"
                  data={this.state.TableData}
                  columns={this.state.columns}
                  pagination={pagination}
                  filter={filterFactory()}
                  striped
                  hover
                  condensed
                  noDataIndication={indication}
                  wrapperClasses="table-responsive"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        }
      </div>
    )
  }
}

export default BannerList;
