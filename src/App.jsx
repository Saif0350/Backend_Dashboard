import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./comps/Layout/Layout";
import Dashboard from "./comps/Dashboard";
import Products from "./comps/Products";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="/login" element={<div>This is a login page </div>}>
          Login
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
