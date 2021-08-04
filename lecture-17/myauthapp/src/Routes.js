import { Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from "./Login";

import React, { useContext } from "react";
import { UserContext } from "./App";

function Routes() {
  let user = useContext(UserContext);

  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/">
        {(() => {
          if (user === undefined) {
            return <h1>Fetching User.....</h1>;
          } else if (user === null) {
            return <Redirect to="/login"></Redirect>;
          } else {
            let { HomePage } = require("./HomePage");
            return React.createElement(HomePage);
          }
        })()}
      </Route>
    </Switch>
  );
}

export { Routes };
