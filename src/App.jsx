import "./App.css";

function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="app max-w-[600px] w-full">
          <div className="bg-red-900 flex justify-between items-center p-4">
            <div>
              <h1>cal</h1>
            </div>
            <div>
              <p>Theme</p>
              <input type="range" name="" id="" />
            </div>
          </div>
          <div>
            <input type="text" className="w-full h-20 text-right" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
