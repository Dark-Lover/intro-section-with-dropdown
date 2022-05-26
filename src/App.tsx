import React, { useState } from "react";
import "./App.css";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import ShowCase from "./component/showcase/ShowCase";

function App() {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  return (
    <div className="App">
      <Header menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      <ShowCase />
      <Footer />
    </div>
  );
}

export default App;
