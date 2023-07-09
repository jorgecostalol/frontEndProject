import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isLogoFlipped, FlipLogo] = useState(false);

  return (
    <>
      <div
        className={"base" + " " + (isLogoFlipped ? "flip" : "")}
        onClick={() => FlipLogo(!isLogoFlipped)}
      >
        <img src={viteLogo} className="logo" alt="Vite logo" />

        <img src={reactLogo} className="logo lapis" alt="React logo" />
      </div>
      <h1>Vite + React</h1>

      <div className="jorgeBox">
        <p> {navigator.userAgent} </p>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 10)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
