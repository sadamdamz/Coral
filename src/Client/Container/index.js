import React, { Component, Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";
import routes from "../../routes";
import "../../styles/index.css";

class index extends Component {
  render() {
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <Header />
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
        <Footer />
      </Suspense>
    );
  }
}

export default index;
