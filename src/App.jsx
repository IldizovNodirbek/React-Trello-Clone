import React from "react";
import Board from "./components/Board";

function App() {
  return (
    <div>
      <h1 className="bg-white bg-opacity-20 backdrop-blur-md text-white font-bold py-4 px-4 rounded-lg hover:bg-opacity-30 transition-all duration-300 text-center text-4xl ">
        React Trello Clone
      </h1>
      <div className="mt-5">
        <Board />
      </div>
    </div>
  );
}

export default App;
