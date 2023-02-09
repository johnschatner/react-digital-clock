import "./App.css";

// React imports
import React, { useState, useEffect } from "react";

// Components
import DigitalClock from "./components/DigitalClock";

// Root
function App() {
  const [clock, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <DigitalClock date={clock}></DigitalClock>
      </div>
    </div>
  );
}

export default App;
