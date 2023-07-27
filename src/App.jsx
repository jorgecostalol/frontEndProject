import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isLogoFlipped, FlipLogo] = useState(false);
  const [isPromptVisible, setisPromptVisible] = useState(false);

  return (
    <>
      <div className="MainOutsideBox">
        <div
          className={
            "Error-Prompt" +
            " " +
            (isPromptVisible ? "Error-PromptAfter" : "Error-PromptBefore")
          }
        >
          <p>
            <h1>Fatal Error</h1>
          </p>
        </div>

        <div
          className={"base" + " " + (isLogoFlipped ? "flip" : "")}
          onClick={() => FlipLogo(!isLogoFlipped)}
        >
          <img src={viteLogo} className="logo" alt="Vite logo" />

          <img src={reactLogo} className="logo lapis" alt="React logo" />
        </div>

        <h1>Vite + React</h1>

        <button onClick={() => setisPromptVisible(!isPromptVisible)}></button>

        <div className="jorgeBox">
          <p> {navigator.userAgent} </p>
        </div>

        <div className="card">
          <button onClick={() => setCount((count) => count + 10)}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
