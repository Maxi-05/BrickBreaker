import "./App.css";
import Title from "./components/Title";
import { useState } from "react";
import Blocks from "./components/Blocks";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import End from "./components/End";
function App() {
  const [score, setScore] = useState(0);
  const increment = () => {
    setScore(score + 10);
  };
  const reset = () => {
    setScore(0);
  };
  return (
    <>
      <Router>
        <Title />
        <Routes>
          <Route
            path="/"
            element={<Blocks score={score} increment={increment} />}
          />
          <Route path="/end" element={<End score={score} reset={reset} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
