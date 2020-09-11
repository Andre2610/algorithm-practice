import React from "react";
import { Switch, Route } from "react-router-dom";
import Pangram from "./Pages/Pangram/Pangram";
import "./App.scss";

function App() {
  return (
    <Switch>
      <Route path="/" component={Pangram} />
    </Switch>
  );
}

export default App;
