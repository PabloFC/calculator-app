import "./App.css";

function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <section className="app max-w-[600px] w-full">
          <div className="flex justify-between items-center p-4">
            <div>
              <h1 className="text-2xl text-white font-bold">calc</h1>
            </div>
            <div>
              <p className="text-md text-white font-bold">THEME</p>
              <input type="range" name="" id="" />
            </div>
          </div>
          <section id="inputSection">
            <input type="text" className="w-full h-20 text-right" />
          </section>
          <section id="buttonsSection" className="p-4 grid grid-cols-4 gap-2">
            <button className="number">7</button>
            <button className="number">8</button>
            <button className="number">9</button>
            <button className="operator">DEL</button>

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

            <button className="reset">Reset</button>
            <button className="equal">=</button>
          </section>
        </section>
      </div>
    </>
  );
}

export default App;
