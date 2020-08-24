import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import List from "./List";
import Form from "./Form";

function App() {
  return (
    <>
      <Switch>
        {/* <Route path="/" component={Header} /> */}
        <Route path="/">
          <Header />
          {/* <List /> */}
          <Form />
        </Route>
      </Switch>
    </>
  );
}

export default App;
