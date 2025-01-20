import "./App.css";

function App() {
  return (
    <main className="mt-6 mb-6 p-6">
      <div className="h-screen flex items-center justify-center ">
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
