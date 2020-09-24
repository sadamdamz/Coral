import React, { Component } from "react";
import {
  // Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import { Button } from "antd";
import {toastr} from 'react-redux-toastr'
import "../../styles/admin.css";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

class index extends Component {
  constructor(props){
    super(props);
    this.state={
      fields:{},
      errors:{}
    }
    this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  }

  // handleSubmit = () => {
  //   console.log('submit')
  //   toastr.success('login Sucess')
  //   this.props.history.push('/cc-admin/dashboard')
  // }

  handleSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      const user = {
        user_name: this.state.fields.user_name,
        password: this.state.fields.user_password,
      };
      axios
        .post(API_URL + "/api/admin/login", user)
        .then(function (response) {
          if (response.data.Statuscode == 200) {
            localStorage.setItem(
              "admin_session",
              JSON.stringify(response.data.Data[0])
            );
            toastr.success("Login", response.data.Message);
            window.location.href = "/cc-admin/dashboard";
          } else {
            toastr.error("Login", response.data.Message);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  validateForm = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    // user_name
    if (!fields["user_name"]) {
      formIsValid = false;
      errors["user_name"] = "Please enter your user name.";
    }

    // user_password
    if (!fields["user_password"]) {
      formIsValid = false;
      errors["user_password"] = "Please enter your password.";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  render() {
    return (
      <div className="app flex-row align-items-center bg-clr">
        <Container>
          <Row className="justify-content-center">
            <Col md="6" lg="4">
              <CardGroup className="login-pg">
                <Card className="p-4">
                  <CardBody>
                    <Form
                      method="post"
                      name="LoginForm"
                      onSubmit={this.handleSubmit}
                    >
                      <div className="login-header">
                      <img
                        src={require("../../assets/img/coral/coral-logo.png")}
                      />
                      <h1>Login</h1>
                      </div>
                      <InputGroup className="mb-2">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="Username"
                          name="user_name"
                          value={this.state.fields.user_name}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                      <div className="err-msg">
                        {this.state.errors.user_name}
                      </div>
                      <InputGroup className="mb-2">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="Password"
                          name="user_password"
                          value={this.state.fields.user_password}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                      <div className="err-msg">
                        {this.state.errors.user_password}
                      </div>
                      <Row>
                        <Col xs="12" style={{textAlign:'center'}}>
                          <Button
                            type="primary"
                            color="primary"
                            className="px-4"
                            onClick={this.handleSubmit}
                          >
                            Login
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default index;
