import { useEffect, useState } from "react";
import CalculatorButtons from "./components/CalculatorButtons";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [currentTheme, setCurrentTheme] = useState("theme1");
  const [translateX, setTranslateX] = useState("0px");

  const maxInputNumbers = 15;
  const themes = ["theme1", "theme2", "theme3"];
  const translateXValues = ["0px", "22px", "44px"];

  useEffect(() => {
    document.body.classList.add(currentTheme);
  }, [currentTheme]);

  const handleThemeChange = () => {
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nexTheme = themes[nextIndex];

    document.body.className = nexTheme;
    setCurrentTheme(nexTheme);
    setTranslateX(translateXValues[nextIndex]);
  };

  const handleButtonsClick = (value) => {
    if (value === "=") {
      try {
        if (inputValue.includes("/0")) {
          setInputValue("Can't divide by 0");
          return;
        }
        const calculatedResult = eval(inputValue);
        setInputValue(calculatedResult.toString());
      } catch {
        setInputValue("Error");
      }
    } else if (value === "DEL") {
      setInputValue((prevValue) => prevValue.slice(0, -1));
    } else if (value === "RESET") {
      setInputValue("");
    } else {
      setInputValue((prevValue) => {
        const numberCount = prevValue.replace(/[^0-9]/g, "").length;

        if (value.match(/[0-9]/) && numberCount >= maxInputNumbers) {
          return prevValue;
        }
        return prevValue + value;
      });
    }
  };

  return (
    <main className="mt-6 mb-6 p-6">
      <div className="h-screen flex items-center justify-center ">
        <section className="calculator max-w-[600px] w-full">
          <div className="flex justify-between items-center p-4">
            <div>
              <span className="logoStyle ">calc</span>
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
                  <button
                    className="themeButton"
                    role="button"
                    onClick={handleThemeChange}
                    style={{ transform: `translateX(${translateX})` }}
                  ></button>
                </div>
              </div>
            </div>
          </div>

          <section className="inputSectionStyle">
            <input
              type="text"
              className="text-[32px] w-full h-20 text-right focus:outline-none"
              value={inputValue}
              readOnly
            />
          </section>
          <CalculatorButtons handleButtonsClick={handleButtonsClick} />
        </section>
      </div>
    </main>
  );
}

export default App;
