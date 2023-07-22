import "./App.css";

import React, { useState } from "react";
import Nav from "./components/Nav";
import Text from "./components/Text";

function App() {
  const [mode, setMode] = useState("light");

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#03032a";
      document.body.style.color = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  const yellow = () => {
    document.body.style.backgroundColor = "#ffa500";
    // document.body.style.color='yellow'
  };
  const red = () => {
    document.body.style.backgroundColor = "#ff00a5";
  };
  const green = () => {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
  };

  return (
    <div className="App">
      <Nav
        tit="Text-Analyzer "
        mode={mode}
        changeMode={changeMode}
        yl={yellow}
        gr={green}
        rd={red}
      />
      <Text heading="Enter text to Analyze" mode={mode} />
    </div>
  );
}

export default App;
