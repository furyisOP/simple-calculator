import { useState } from "react";
import "./App.css";

function App() {
  const [screenValue, setScreenValue] = useState("");
  const [math, setMath] = useState([]);

  const handleClick = (value) => {
    setScreenValue(value);
    setMath([...math, value]);
  };

  const handleMath = (value) => {
    const result = math
      .join("")
      .split(/(\D)/g)
      .map((value) => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((acc, value, index, array) => {
        switch (value) {
          case "+":
            return (acc = acc + array[index + 1]);
          case "-":
            return (acc = acc - array[index + 1]);
          case "x":
            return (acc = acc * array[index + 1]);
          case "÷":
            return (acc = acc / array[index + 1]);
          default:
            return acc;
        }
      });
    setScreenValue(result);
    setMath("");
  };

  const handleClearScreen = () => {
    setMath("");
    setScreenValue("");
  };
  return (
    <div className="calculator">
      <div className="calculator-screen">
        <p>{math}</p>
        <h3>{screenValue}</h3>
      </div>

      <div className="calculator-buttons">
        <button
          type="button"
          className="clear"
          value="C"
          onClick={handleClearScreen}
        >
          C
        </button>
        <button type="button" className="default" value="+/-">
          +/-
        </button>
        <button
          type="button"
          className="default"
          value="%"
          onClick={(e) => handleClick(e.target.value)}
        >
          %
        </button>
        <button
          type="button"
          className="special"
          value="÷"
          onClick={(e) => handleClick(e.target.value)}
        >
          ÷
        </button>
        <button
          type="button"
          className="default"
          value="7"
          onClick={(e) => handleClick(e.target.value)}
        >
          7
        </button>
        <button
          type="button"
          className="default"
          value="8"
          onClick={(e) => handleClick(e.target.value)}
        >
          8
        </button>
        <button
          type="button"
          className="default"
          value="9"
          onClick={(e) => handleClick(e.target.value)}
        >
          9
        </button>
        <button
          type="button"
          className="special"
          value="x"
          onClick={(e) => handleClick(e.target.value)}
        >
          x
        </button>
        <button
          type="button"
          className="default"
          value="4"
          onClick={(e) => handleClick(e.target.value)}
        >
          4
        </button>
        <button
          type="button"
          className="default"
          value="5"
          onClick={(e) => handleClick(e.target.value)}
        >
          5
        </button>
        <button
          type="button"
          className="default"
          value="6"
          onClick={(e) => handleClick(e.target.value)}
        >
          6
        </button>
        <button
          type="button"
          className="special"
          value="-"
          onClick={(e) => handleClick(e.target.value)}
        >
          -
        </button>
        <button
          type="button"
          className="default"
          value="1"
          onClick={(e) => handleClick(e.target.value)}
        >
          1
        </button>
        <button
          type="button"
          className="default"
          value="2"
          onClick={(e) => handleClick(e.target.value)}
        >
          2
        </button>
        <button
          type="button"
          className="default"
          value="3"
          onClick={(e) => handleClick(e.target.value)}
        >
          3
        </button>
        <button
          type="button"
          className="special"
          value="+"
          onClick={(e) => handleClick(e.target.value)}
        >
          +
        </button>
        <button
          type="button"
          className="default"
          value="0"
          onClick={(e) => handleClick(e.target.value)}
        >
          0
        </button>
        <button
          type="button"
          className="default"
          value="."
          onClick={(e) => handleClick(e.target.value)}
        >
          .
        </button>
        <button
          type="button"
          className="equal"
          value="="
          onClick={() => handleMath()}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
