import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Form from "./Form";

// Add React Router
function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <Header />
          <Form />
        </Route>
      </Switch>
    </>
  );
}

export default App;
