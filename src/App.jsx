import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";
import "./style.scss";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Aside></Aside>
    </div>
  );
}

export default App;
