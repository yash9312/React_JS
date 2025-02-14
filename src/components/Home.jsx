import React, { useState } from "react";
import About from "./About";


const Home = () => {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };

  const dec = () => {
    setcount(count - 1);
  };

  return (
    <>
      <About cou={count}></About>

      <div>
        <button
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
        </button>
      </div>
    </>
  );
};

export default Home;
