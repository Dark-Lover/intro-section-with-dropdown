import React, { useState } from "react";
import "./App.css";
import Header from "./component/header/Header";

function App() {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  return (
    <div className="App">
      <Header menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
    </div>
  );
}

export default App;
