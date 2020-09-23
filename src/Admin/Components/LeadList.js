import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import Moment from "react-moment";
import {toastr} from 'react-redux-toastr';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, {
  textFilter,
  selectFilter,
} from "react-bootstrap-table2-filter";
import {promoterLeadStatus} from "../../constant"
// import ActionPopup from "./ActionPopup";
import axios from "axios";

const API_URL = process.env.API_URL;

class EnquireList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: "",
      TableData: [],
      isModalOpen: false,
      project_id: "",
      modalOpen: false,
      enquiry_id:'',
      loading:true
    };
    this.getListData = this.getListData.bind(this);
    // this.handleAction = this.handleAction.bind(this);
  }

  componentWillMount() {
    this.getListData();
  }

  reload=()=>{
    this.getListData()
  }

  // async handleAction(val,id){
  //   let postData = {
  //     action_type:val,
  //     enquiry_id:id
  //   }
  //   try {
  //     let api = await axios.post(API_URL+'/api/admin/promoter/updateenquiryaction', postData);
  //     let response = await api.data;
  //     toastr.success('Lead Updated');
  //     this.reload();
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  getListData() {
    let $this = this;
    this.setState({loading:true})
    const { promoterId } = this.props;
    let postData = {
      promoter_id: promoterId,
      project_id: "27",
      enquiry_type: "0",
    };
    let columns = [
      { dataField: "enquiry_id", text: "SNO" },
      { dataField: "date", text: "Lead Date" },
      {
        dataField: "enquiry_name",
        text: "First Name",
        filter: textFilter(),
      },
      {
        dataField: "enquiry_name",
        text: "Last Name",
        filter: textFilter(),
      },
      {
        dataField: "enquiry_mobileno",
        text: "Mobile Number",
        filter: textFilter(),
      },
      { dataField: "enquiry_email", text: "Email Id", filter: textFilter() },
      {
        dataField: "enquiry_name",
        text: "Message",
      },
      { dataField: "lead_source", text: "Lead Source", filter: textFilter() },
      { dataField: "action", text: "Action" },
    ];
    this.setState({columns})
    axios
      .post("https://stage.ezeehousing.com/ezapi/api/admin/promoter/getenquirylist", postData)
      .then(function (response) {
        console.log(response.data.Statuscode);
        if (response.data.Statuscode == 200) {
          let resData = response.data.Data;
          let TableData = [];
          let i = 1;
          resData.map((item, index) => {
            let datas = {};
            let action = [];
            let leadStatus = [];
            var date = <Moment format="D MMM YYYY">{item.created_date}</Moment>;
            // action.push(
            //   <UncontrolledButtonDropdown >
            //   <DropdownToggle caret color="primary">
            //     Status
            //   </DropdownToggle>
            //   <DropdownMenu>
            //     {
            //       promoterLeadStatus.map((items,index)=>{
            //         return (
            //         <DropdownItem key={index} onClick={()=>$this.handleAction(items.value,item.enquiry_id)}>{items.label}</DropdownItem>
            //         )
            //       })
            //     }
            //   </DropdownMenu>
            // </UncontrolledButtonDropdown>
            // )
            promoterLeadStatus.filter((items,index)=>{
              if(items.value===item.lead_status){
                leadStatus.push(items.label)
              }
            })
            if(leadStatus.length===0){
              leadStatus.push("Pending")
            }
            datas["enquiry_id"] = index + 1;
            datas["enquiry_name"] = item.enquiry_name;
            datas["enquiry_mobileno"] = item.enquiry_mobileno;
            datas["enquiry_email"] = item.enquiry_email;
            datas["date"] = date;
            datas['lead_source'] = item.lead_source;
            datas["action"] = action;
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
    const { modalOpen, enquiry_id,loading } = this.state;
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
        {/* <ActionPopup
          show={modalOpen}
          onHide={() => this.setState({ modalOpen: false })}
          enquiry_id={enquiry_id}
          reload={this.reload}
        /> */}
        {
          loading?"Loading Please Wait": <Row>
          <Col lg={12}>
            <Card className="users-pg">
              <CardHeader>
                <strong>
                  <i className="icon-info pr-1"></i>Enquiry Leads
                </strong>
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
    );
  }
}

export default EnquireList;
