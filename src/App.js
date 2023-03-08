import "./styles/style.scss";
import DailyCheckIn from "./components/DailyCheckIn";
import { DreamContextProvider } from "./contexts/DreamContext";
import React from 'react';
import { useState } from 'react';
import Home from "./components/Home";
import Analysis from "./components/Analysis";
import { useEffect } from "react";


function App() {
  const [state, setState] = useState('');
  useEffect(() => {
    let date = new Date().toLocaleDateString();
    if( localStorage.today_date === date ) {
        setState('home');
    }
    else {
    localStorage.today_date = date;
    setState('start');
    }
  }, []);
 


  return (
    <div className="main">
      <DreamContextProvider>
      {state === 'start' && <DailyCheckIn updateDisplay={() => setState('home') } /> }
      {state === 'home' && <Home updateDisplay={() => setState('analysis') } />}
      {state === 'analysis' && <Analysis updateDisplay={() => setState ('home')} />}
      </DreamContextProvider>
    </div>
  );
}

export default App;
