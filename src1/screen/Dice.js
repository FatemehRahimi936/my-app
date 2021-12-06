import "../css/Dice.css";
import React, { useState } from "react";

function App() {
  const Image = [
    "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.svg",
    "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.svg",
    "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.svg",
    "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.svg",
    "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.svg",
    "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.svg",
  ];
  const [tas, setTas] = useState(0);
  function Random({ item1 }) {
    let item = Math.floor(Math.random() * Image.length);
    setTas(item);
  }

  return (
    <div className="App">
      <img
        src={Image[tas]}
        className="Image_Dice"
        alt="Dice"
        onClick={Random}
      />
    </div>
  );
}

export default App;
