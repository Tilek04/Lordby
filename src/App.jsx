import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./Auth/Auth.jsx";
import Home from "./Home";
import Registration from "./Sign up/Registration";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-up" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
