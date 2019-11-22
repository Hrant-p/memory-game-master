import React, { lazy, Suspense } from "react";
import "./App.scss";
import Spinner from "./components/Spinner";

const GameBoard = lazy(() => import("./container/GameBoard"));

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Suspense fallback={<Spinner />}>
          <GameBoard />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
