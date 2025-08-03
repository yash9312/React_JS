import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-lg mx-auto shadow-lg rounded-2xl px-8 py-8 bg-gray-800 border border-gray-700">
        <h1 className="text-3xl font-bold text-center mb-8 text-white tracking-wide">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-8 bg-gray-700 border border-gray-600">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-1 p-4 bg-transparent text-lg text-gray-100 placeholder-gray-400 outline-none"
            placeholder="Generated Password"
            ref={passwordRef}
          />
          <button
            className="bg-blue-900 hover:bg-blue-800 transition-colors text-blue-200 px-6 py-4 font-semibold"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="mb-8">
          <label
            htmlFor="length"
            className="block text-gray-300 font-medium mb-2"
          >
            Password Length:{" "}
            <span className="text-blue-300 font-bold">{length}</span>
          </label>
          <input
            id="length"
            type="range"
            min="4"
            max="50"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-blue-400 h-2 rounded-lg cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-between gap-6 mb-6">
          <label className="flex items-center gap-2 text-gray-200 font-medium cursor-pointer">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="accent-blue-400 w-5 h-5"
            />
            Include Numbers
          </label>
          <label className="flex items-center gap-2 text-gray-200 font-medium cursor-pointer">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="accent-blue-400 w-5 h-5"
            />
            Include Special Characters
          </label>
        </div>
        <button
          className="w-full mt-4 bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-blue-100 font-bold py-4 rounded-lg shadow transition-all"
          onClick={passwordGenerator}
        >
          Generate New Password
        </button>
      </div>
    </div>
  );
}

export default App;
