import React, { useState } from "react";
import Home from "./pages/home/home";
import img1 from "./assets/images/Clone X 1.png";
import img2 from "./assets/images/Characters.png";
import img3 from "./assets/images/jean-vella-AMUXeE7Y2Vc-unsplash 1.png";

function App() {
  const images = [img1, img2, img3];
  return (
    <div>
      <Home images={images} />
    </div>
  );
}

export default App;
