import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, Cart, Inventory, Login, Logout, Register } from "./components";

function App() {
  const token = false;
  return (
    <div>
      <header>
        <h3>Royal Flush Homepage</h3>
        <Link to="/">Home</Link>
        <Link to="/Inventory">Inventory</Link>
        {token ? (
          <>
            <Link to="/Logout">Logout</Link>
            <Link to="/Cart">Cart</Link>
          </>
        ) : (
          <>
            <Link to="/Login">Login</Link>
            <Link to="/Signup">Sign Up</Link>
          </>
        )}
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Checkout" element={<Cart />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Signup" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
