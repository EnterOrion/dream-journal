import "./styles/style.scss";
import DailyCheckIn from "./components/DailyCheckIn";
import { DreamContextProvider } from "./contexts/DreamContext";
import React from 'react';
import { useState } from 'react';
import Home from "./components/Home";


function App() {
  const [state, setState] = useState('start')
  return (
    <div className="main">
      <DreamContextProvider>
      {state === 'start' && (<DailyCheckIn updateDisplay={() => setState('home') } />) }
      {state === 'home' && <Home />}
      </DreamContextProvider>
    </div>
  );
}

export default App;
