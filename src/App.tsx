import React, { useEffect, useState } from "react";

import Home from "./pages/Home";
import Splashscreen from "./pages/Splashscreen";

function App() {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowHome(true);
    }, 2500);
  }, []);
  return (
    <div className="App">
      <Splashscreen />
      {showHome && <Home />}
    </div>
  );
}

export default App;
