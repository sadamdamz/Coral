import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import routes from "../../adminRoutes";

const { Header, Sider, Content, Footer } = Layout;

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  componentWillMount() {
    let adminsession =
      localStorage.getItem("admin_session") != null
        ? JSON.parse(localStorage.getItem("admin_session"))
        : null;
    let admin_session = adminsession;
    // console.log(this.state.navigation)
    if (admin_session == null) {
      this.props.history.push("/cc-admin/login");
    }
    this.setState({ data: admin_session });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  logout = () => {
    console.log("logout");
    localStorage.removeItem('admin_session')
    this.props.history.push("/cc-admin/login");
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/cc-admin/dashboard/leads">Contact Leads</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/cc-admin/dashboard/banner-list">Banner List</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/cc-admin/dashboard/add-banner">Add Banner</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined />} onClick={this.logout}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ padding: 0, background: "white", display: "flex" }}
          >
            <>
              <div>
                {React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: this.toggle,
                  }
                )}
              </div>
              <div className="admin-logo">
                <a href="/cc-admin/dashboard">
                  <img
                    src={require("../../assets/img/coral/coral-logo.png")}
                    alt="logo"
                  />
                </a>
              </div>
            </>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Suspense fallback={<p>Loading...</p>}>
              <Switch>
                {routes.map((item, index) => {
                  return (
                    <Route
                      path={item.path}
                      exact={item.exact}
                      render={(props) => <item.component {...props} />}
                    />
                  );
                })}
              </Switch>
            </Suspense>
          </Content>
          <Footer style={{ textAlign: "center", background: "White" }}>
            Coral-Country ©2020
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default index;
