import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./21-02(Form)/Form";
// import Text from "./18-02(useEffect)/Text";
// import { DayNight } from "./19-02(DN_Mode)/DayNight";
// import About from "./components/About";
// import Home from "./components/Home";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      {/* <Home></Home> */}
      {/* <About></About> */}
      {/* <Text></Text> */}
      {/* <DayNight></DayNight> */}
      <Form></Form>
    </div>
  );
}

export default App;
