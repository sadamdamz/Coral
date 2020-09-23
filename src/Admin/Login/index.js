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

class index extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  handleSubmit = () => {
    console.log('submit')
    toastr.success('login Sucess')
    this.props.history.push('/cc-admin/dashboard')
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
                      <img
                        src={require("../../assets/img/coral/coral-logo.png")}
                        width="200"
                      />
                      <h1>Login</h1>
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
                          // value={this.state.fields.user_name}
                          // onChange={this.handleChange}
                        />
                      </InputGroup>
                      <div className="errorMsg">
                        {/* {this.state.errors.user_name} */}
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
                          // value={this.state.fields.user_password}
                          // onChange={this.handleChange}
                        />
                      </InputGroup>
                      <div className="errorMsg">
                        {/* {this.state.errors.user_password} */}
                      </div>
                      <Row>
                        <Col xs="12">
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
