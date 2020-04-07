import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Prompt
} from "react-router-dom";
// import ProductDisplay from "./ProductDisplay";
// import SupplierDisplay from "./SupplierDisplay";
// import RouteInfo from "./routing/routeInfo";
import ToggleLink from "./routing/toggleLink";
import CustomPrompt from "./routing/customPrompt";

const Selector = (props) => {
  const promptDefaults = {
    showPrompt: false,
    message: "",
    callback: () => {}
  };
  
  const [promptState, setPromptState] = useState(promptDefaults);

  const customGetUserConfirmation = (message, navCallback) => {
    setPromptState({
      showPrompt: true,
      message: message,
      callback: allow => {
        navCallback(allow);
        setPromptState({
          ...promptState,
          showPrompt: false
        });
      }
    });
  };

  const routes = React.Children.map(props.children, child => ({
    component: child,
    name: child.props.name,
    url: `/${child.props.name.toLowerCase()}`
  }));

  return (
    <Router getUserConfirmation={customGetUserConfirmation}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <div>
              {routes.map(r => 
                <ToggleLink
                  key={r.url}
                  to={r.url}
                >
                  {r.name}
                </ToggleLink>  
              )}
            </div>
          </div>
          <div className="col">
            <CustomPrompt 
              show={promptState.showPrompt}
              message={promptState.message}
              callback={promptState.callback}
            />
            <Prompt
              message={location => `Do you want to navigate to ${location.pathname}`}
            />
            <Switch>
              {routes.map(r => 
                <Route 
                  key={r.url}
                  path={r.url}
                  render={() => r.component}
                />
              )}
              <Redirect to={routes[0].url} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Selector;
