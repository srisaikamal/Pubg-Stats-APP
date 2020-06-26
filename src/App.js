import React from "react";
import Home from "./Pages/Home";
import PubgState from "./Context/PubgState";

function App() {
  return (
    <PubgState>
      <Home />
    </PubgState>
  );
}

export default App;
