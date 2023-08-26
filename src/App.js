import React, { useState } from "react";
import Home from "./pages/home/home";

function App() {
  const [count, setCount] = useState("hello");
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
