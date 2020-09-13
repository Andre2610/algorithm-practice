import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Pangram from "./Pages/Pangram/Pangram";
import BitCounting from "./Pages/BitCounting/BitCounting";
import "./App.scss";

function App() {
  return (
    <Switch>
      <Route path="/pangram" component={Pangram} />
      <Route path="/bitcounting" component={BitCounting} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
