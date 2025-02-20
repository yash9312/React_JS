import React, { useState } from "react";

export const DayNight = () => {
  const [mode, setmode] = useState();

  const LightMode = () => {
    setmode("Light");
  };

  const DarkMode = () => {
    setmode("Dark");
  };

  return (
    <div
      style={{
        backgroundColor:
          mode == "Dark"
            ? "darkslategray"
            : mode == "Light"
            ? "rgb(182, 231, 255)"
            : "",
        color: mode == "Dark" ? "white" : mode == "Light" ? "black" : "",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1 style={{ paddingTop: "100px", fontSize: "50px" }}>Sorathiya Yash</h1>
      <button
        style={{
          width: "150px",
          height: "50px",
          margin: "10px",
          fontSize: "17px",
          color: "white",
          backgroundColor: "cornflowerblue",
          border: "none",
          borderRadius: "10px",
        }}
        onClick={() => {
          LightMode();
        }}
      >
        Light Mode
      </button>
      <button
        style={{
          width: "150px",
          height: "50px",
          margin: "10px",
          fontSize: "17px",
          color: "white",
          backgroundColor: "cornflowerblue",
          border: "none",
          borderRadius: "10px",
        }}
        onClick={() => {
          DarkMode();
        }}
      >
        Dark Mode
      </button>
    </div>
  );
};
