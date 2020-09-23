import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import FrontEnd from "./Client/Container/index";
import Login from "./Admin/Login/index";
import Admin from "./Admin/Container/index";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/cc-admin/login"
          name="Login Page"
          render={(props) => <Login {...props} />}
        />
        <Route
          path="/cc-admin/dashboard"
          name="dashboard"
          render={(props) => <Admin {...props} />}
        />
        <Route
          path="/"
          name="FrontHome"
          render={(props) => <FrontEnd {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
