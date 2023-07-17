import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  console.log("1")

  // React.useEffect(callback function,dependecies array);

  React.useEffect(() => {
    console.log("hello")
  }, []);

  console.log("2")
  return (
    <div className="App">
      <h1>count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  );
}

export default App;
