import { useState } from "react";
import "./style.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Emily and Sandra!</h1>
        <p>Let's open a beer bar?</p>
        <p>
          <button type="button" onClick={() => alert("let's go!")}>
            Hell Yeah
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
