import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Countries from "./components/Countries";
import Filter from "./components/Filter";
import Headers from "./components/Headers";

function App() {
  return (
    <Router>
      <Headers />
      <Route exact path="/">
        <Filter />
        <Countries />
      </Route>
    </Router>
  );
}

export default App;
