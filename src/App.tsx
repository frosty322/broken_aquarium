import React from "react";
import "./App.css";
import Canvas from "./Canvas";
import Draw from "./Controll/Draw/Draw";

function App() {
  return <Canvas draw={Draw} />;
}

export default App;
