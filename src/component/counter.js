import "../css/counter.css";
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const onPress = (opration) => {
    if (opration === "+") {
      setCount(count + 1);
    } else {
      if (count > 0) {
        setCount(count - 1);
      }
    }
  };

  return (
    <div className="Ap1p">
      <header className="App-header">
        <button className="button1" onClick={() => onPress("-")}>
          <p>-</p>
        </button>
        <p className="count">{count}</p>
        <button className="button2" onClick={() => onPress("+")}>
          <p>+</p>
        </button>
      </header>
    </div>
  );
}

export default Counter;
