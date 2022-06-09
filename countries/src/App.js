import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Countries from "./components/Countries";
import Country from "./components/Country";
import Filter from "./components/Filter";
import Headers from "./components/Headers";

function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<><Filter/><Countries /></>}/>
        <Route path="/Countries/:name" element={<Country />}/>
      </Routes>
    </Router>
  );
}

export default App;
