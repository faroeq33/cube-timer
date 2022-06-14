import "./App.css";
import Stopwatch from "./Stopwatch";

function App() {
  return (
    <div className="App bg-black">
      {/* <h1 className="text-3xl font-bold ">Cubetimer</h1> */}
      <div className="flex justify-center items-center h-screen ">
        <Stopwatch></Stopwatch>
      </div>
    </div>
  );
}

export default App;
