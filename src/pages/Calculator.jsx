import CalculatorButtons from "../components/CalculatorButtons";
import { useCalculator } from "../hooks/useCalculator";
import { useTheme } from "../hooks/useTheme";

const Calculator = () => {
  const { inputValue, handleButtonsClick } = useCalculator(15);
  const { translateX, handleThemeChange } = useTheme();

  return (
    <main className="mt-6 mb-6 p-6">
      <div className="h-screen flex items-center justify-center ">
        <div className="max-w-[600px] w-full">
          <header className="flex justify-between items-center p-4">
            <div>
              <span className="logoStyle ">calc</span>
            </div>
            <nav className="themeToggleContainer">
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
                    onClick={handleThemeChange}
                    style={{ transform: `translateX(${translateX})` }}
                  ></button>
                </div>
              </div>
            </nav>
          </header>

          <section className="inputSectionStyle">
            <input
              type="text"
              className="text-[32px] w-full h-20 text-right focus:outline-none"
              value={inputValue}
              readOnly
            />
          </section>
          <CalculatorButtons handleButtonsClick={handleButtonsClick} />
        </div>
      </div>
    </main>
  );
};

export default Calculator;
