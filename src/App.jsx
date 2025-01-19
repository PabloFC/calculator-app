import "./App.css";

function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <section className="app max-w-[600px] w-full">
          <div className="bg-red-900 flex justify-between items-center p-4">
            <div>
              <h1>cal</h1>
            </div>
            <div>
              <p>Theme</p>
              <input type="range" name="" id="" />
            </div>
          </div>
          <section>
            <input type="text" className="w-full h-20 text-right" />
          </section>
          <section className="grid grid-cols-4 gap-2">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>DEL</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>-</button>
            <button>.</button>
            <button>0</button>
            <button>/</button>
            <button>*</button>
            <button>Reset</button>
            <button>=</button>
          </section>
        </section>
      </div>
    </>
  );
}

export default App;
