import { useState, useEffect } from "react";
import rocket from "./assets/rocket.gif";
import background from "./assets/background.jfif";

function App() {
  const [text, setText] = useState<string>("");
  const [caracterCount, setCaracterCount] = useState<number>(0);
  const finalText = "Hello World!";

  const isFinished = finalText === text;

  // timeout options
  const max = 500;
  const min = 100;

  function writeText() {
    const timeout = Math.floor(Math.random() * (max - min + 1)) + min;
    if (text != finalText) {
      setTimeout(() => {
        setText(text + finalText[caracterCount]);
        setCaracterCount(caracterCount + 1);
      }, timeout);
    }
  }

  useEffect(writeText, [text]);

  return (
    <div className="app">
      <div className={`${isFinished ? "bg" : "invisible"}`} />
      <main>
        <p>{text}</p> {isFinished && <img id="rocket" src={rocket} />}
      </main>
      {isFinished && (
        <p id="presentation">
          Opa! Desculpa a bagunça, ainda estou organizando as coisas por aqui!
          :D
        </p>
      )}
    </div>
  );
}

export default App;
