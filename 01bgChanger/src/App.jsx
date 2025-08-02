import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("black");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: bgColor }}
      >
        <h1
          className=" text-2xl font-bold text-center pt-12"
          style={{ color: bgColor === "white" ? "black" : "white" }}
        >
          {" "}
          Background Color Changer
        </h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
            <button
              onClick={() => setBgColor("red")}
              className="outline-none px-4 py-1 bg-red-500 text-white rounded-full shadow-lg"
            >
              Red
            </button>
            <button
              onClick={() => setBgColor("green")}
              className="outline-none px-4 py-1 bg-green-500 text-white rounded-full shadow-lg"
            >
              Green
            </button>
            <button
              onClick={() => setBgColor("blue")}
              className="outline-none px-4 py-1 bg-blue-500 text-white rounded-full shadow-lg"
            >
              Blue
            </button>
            <button
              onClick={() => setBgColor("olive")}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
            <button
              onClick={() => setBgColor("gray")}
              className="outline-none px-4 py-1 bg-gray-500 text-white rounded-full shadow-lg"
            >
              Gray
            </button>
            <button
              onClick={() => setBgColor("yellow")}
              className="outline-none px-4 py-1 bg-yellow-500 text-white rounded-full shadow-lg"
            >
              Yellow
            </button>
            <button
              onClick={() => setBgColor("pink")}
              className="outline-none px-4 py-1 bg-pink-500 text-white rounded-full shadow-lg"
            >
              Pink
            </button>
            <button
              onClick={() => setBgColor("purple")}
              className="outline-none px-4 py-1 bg-purple-500 text-white rounded-full shadow-lg"
            >
              Purple
            </button>
            <button
              onClick={() => setBgColor("lavender")}
              className="outline-none px-4 py-1 text-black rounded-full shadow-lg"
              style={{ backgroundColor: "lavender" }}
            >
              Lavender
            </button>
            <button
              onClick={() => setBgColor("white")}
              className="outline-none px-4 py-1 text-black rounded-full shadow-lg"
              style={{ backgroundColor: "white" }}
            >
              White
            </button>
            <button
              onClick={() => setBgColor("black")}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
