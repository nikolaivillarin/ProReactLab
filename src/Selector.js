import React, { useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ProductDisplay from "./ProductDisplay";
import SupplierDisplay from "./SupplierDisplay";

const Selector = (props) => {
  const renderMessage = (msg) => (
    <h5 className="bg-info text-white m-2 p-2">{msg}</h5>
  );

  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <div>
              <NavLink
                to="/"
                className="btn btn-block m-2 btn-primary"
                activeClassName="active"
                exact={true}
              >
                Default URL
              </NavLink>
              <NavLink
                to="/products"
                className="btn btn-block m-2 btn-primary"
                activeClassName="active"
              >
                Products
              </NavLink>
              <NavLink
                to="/suppliers"
                className="btn btn-block m-2 btn-primary"
                activeClassName="active"
              >
                Suppliers
              </NavLink>
              <NavLink
                to="/old/data"
                className="btn btn-block m-2 btn-primary"
                activeClassName="active"
              >
                Old Link
              </NavLink>
            </div>
          </div>
          <div className="col">
            <Switch>
              <Route path="/products" component={ProductDisplay} />
              <Route path="/suppliers" component={SupplierDisplay} />
              <Redirect from="/old/data" to="/suppliers" />
              <Redirect to="/products" />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Selector;
