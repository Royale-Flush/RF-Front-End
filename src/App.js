import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components";

function App() {
  return (
    <div>
      <header>
        <h3>Royal Flush Homepage</h3>
        <Link to="/">Home</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
