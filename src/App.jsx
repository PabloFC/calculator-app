import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleButtonsClick = (value) => {
    if (value === "=") {
      try {
        const calculatedResult = eval(inputValue);
        setInputValue(calculatedResult.toString());
      } catch (error) {
        setInputValue("Error" + error);
      }
    } else if (value === "DEL") {
      setInputValue((prevValue) => prevValue.slice(0, -1));
    } else if (value === "RESET") {
      setInputValue("");
    } else {
      setInputValue((prevValue) => prevValue + value);
    }
  };

  return (
    <main className="mt-6 mb-6 p-6">
      <div className="h-screen flex items-center justify-center ">
        <section className="calculator max-w-[600px] w-full">
          <div className="flex justify-between items-center p-4">
            <div>
              <span className="logoStyle">calc</span>
            </div>
            <div className="themeToggleContainer">
              <div className="themeNumbersContainer">
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>
              <div className="themeContainer">
                <p>theme</p>
                <div className="themeOptions">
                  <button className="themeButton" role="button"></button>
                </div>
              </div>
            </div>
          </div>

          <section className="inputSectionStyle">
            <input
              type="text"
              className="solution w-full h-20 text-right focus:outline-none"
              value={inputValue}
              readOnly
            />
          </section>

          <section className="buttonsSectionStyle p-8 grid grid-cols-4 grid-rows-5 gap-x-6 gap-y-7 ">
            <button className="number" onClick={() => handleButtonsClick("7")}>
              7
            </button>
            <button className="number" onClick={() => handleButtonsClick("8")}>
              8
            </button>
            <button className="number" onClick={() => handleButtonsClick("9")}>
              9
            </button>
            <button
              className="delete"
              onClick={() => handleButtonsClick("DEL")}
            >
              DEL
            </button>

            <button className="number" onClick={() => handleButtonsClick("4")}>
              4
            </button>
            <button className="number" onClick={() => handleButtonsClick("5")}>
              5
            </button>
            <button className="number" onClick={() => handleButtonsClick("6")}>
              6
            </button>
            <button
              className="operator"
              onClick={() => handleButtonsClick("+")}
            >
              +
            </button>

            <button className="number" onClick={() => handleButtonsClick("1")}>
              1
            </button>
            <button className="number" onClick={() => handleButtonsClick("2")}>
              2
            </button>
            <button className="number" onClick={() => handleButtonsClick("3")}>
              3
            </button>
            <button
              className="operator"
              onClick={() => handleButtonsClick("-")}
            >
              -
            </button>

            <button className="number" onClick={() => handleButtonsClick(".")}>
              .
            </button>
            <button className="number" onClick={() => handleButtonsClick("0")}>
              0
            </button>
            <button className="number" onClick={() => handleButtonsClick("/")}>
              /
            </button>
            <button
              className="operator"
              onClick={() => handleButtonsClick("*")}
            >
              *
            </button>

            <button
              className="reset"
              onClick={() => handleButtonsClick("RESET")}
            >
              RESET
            </button>
            <button className="equal" onClick={() => handleButtonsClick("=")}>
              =
            </button>
          </section>
        </section>
      </div>
    </main>
  );
}

export default App;
