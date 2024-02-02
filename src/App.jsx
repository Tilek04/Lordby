import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import Home from "./Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
