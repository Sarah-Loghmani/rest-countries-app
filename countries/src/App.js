import React from "react";
import {BrowserRouter as Router , Route, Link} from "react-router-dom"
import Countries from "./components/Countries";
import Filter from "./components/Filter";
import Headers from "./components/Headers";

function App() {
  return (
    <>
      <Headers/>
      <Filter/>
      <Countries />
    </>
  );
}

export default App;
