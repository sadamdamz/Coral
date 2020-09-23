import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import FrontEnd from "./Client/Container/index";
import Login from "./Admin/Login/index";
import Admin from "./Admin/Container/index";
import { createStore, combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
const reducers = {
  toastr: toastrReducer,
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);

function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-right"
            getState={(state) => state.toastr} 
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick
          />
        </div>
      </Provider>
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
    </>
  );
}

export default App;
