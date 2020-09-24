import React, { Component, Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";
import routes from "../../routes";
import { Spin, Space } from "antd";
import {getAllSlider} from "../../Axios/Client/index";
import "../../styles/index.css";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async() => {
    this.setState({loading:true})
    let api = await getAllSlider();
    let data = await api.Data;
    this.setState({loading:false, data})
  }

  render() {
    const { loading, data } = this.state;
    return (
      <>
        {loading ? (
          <Space size="middle" className="custom-loader">
            <Spin size="large" />
          </Space>
        ) : (
          <Suspense fallback={<p>Loading...</p>}>
            <Header />
            <Switch>
              {routes.map((item, index) => {
                return (
                  <Route
                    path={item.path}
                    exact={item.exact}
                    render={(props) => (
                      <item.component {...props} data={data} />
                    )}
                  />
                );
              })}
            </Switch>
            <Footer />
          </Suspense>
        )}
      </>
    );
  }
}

export default index;
