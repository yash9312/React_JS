import React, { useState } from "react";
import About from "./About";
import App from "../App";

const Home = () => {
  // const [count, setcount] = useState(0);

  // const increment = () => {
  //   setcount(count + 1);
  // };

  // const dec = () => {
  //   setcount(count - 1);
  // };

  const [clr, setclr] = useState("black");

  const color = (a) => {
    setclr(a);
  };

  return (
    <>

      <div style={{margin:"100px 550px",width:"360px",border:"1px solid grey"}}>

      <About clr={clr}></About>

        <button className="b" style={{color:"yellow",border:"1px solid yellow"}} onClick={() => color("yellow")}>yellow</button>
        <button className="b" style={{color:"blue",border:"1px solid blue"}} onClick={() => color("blue")}>blue</button>
        <button className="b" style={{color:"red",border:"1px solid red"}} onClick={() => color("red")}>red</button>
        <button className="b" style={{color:"green",border:"1px solid green"}} onClick={() => color("green")}>green</button>

        {/* <button
          onClick={() => {
            increment();

          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dec();
          }}
        >
          -
        </button> */}
      </div>
    </>
  );
};

export default Home;
