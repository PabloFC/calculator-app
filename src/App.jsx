import "./App.css";

function App() {
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
              className="w-full h-20 text-right focus:outline-none"
            />
          </section>

          <section className="buttonsSectionStyle p-8 grid grid-cols-4 grid-rows-5 gap-x-6 gap-y-7 ">
            <button className="number">7</button>
            <button className="number">8</button>
            <button className="number">9</button>
            <button className="delete">DEL</button>

            <button className="number">4</button>
            <button className="number">5</button>
            <button className="number">6</button>
            <button className="operator">+</button>

            <button className="number">1</button>
            <button className="number">2</button>
            <button className="number">3</button>
            <button className="operator">-</button>

            <button className="number">.</button>
            <button className="number">0</button>
            <button className="number">/</button>
            <button className="operator">*</button>

            <button className="reset">RESET</button>
            <button className="equal">=</button>
          </section>
        </section>
      </div>
    </main>
  );
}

export default App;
