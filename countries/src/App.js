import React from "react";
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
