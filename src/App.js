import React, { lazy, Suspense } from "react";
import audio from "./assets/audio/solo.mp3";
import Spinner from "./components/Spinner";
import "./App.scss";

const GameBoard = lazy(() => import("./container/GameBoard"));

function App() {
  return (
    <div className="App">
      <audio src={audio} autoPlay>
        <track kind="captions" />
      </audio>
      <div className="App-body">
        <Suspense fallback={<Spinner />}>
          <GameBoard />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
