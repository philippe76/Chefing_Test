import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import List from "./List";

function App() {
  return (
    <>
      <Switch>
        {/* <Route path="/" component={Header} /> */}
        <Route path="/">
          <Header />
          <List />
        </Route>
      </Switch>
    </>
  );
}

export default App;
