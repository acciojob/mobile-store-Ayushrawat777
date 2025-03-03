 import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";
import { initialProducts } from "./Data";
import "../App.css";
import Navbar from "./Navbar";
const App = () => {
  const [products, setProducts] = useState(initialProducts);

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route
          path="/products/:id"
          element={<ProductDetails products={products} />}
        />
        <Route
          path="/admin"
          element={<AdminPanel products={products} setProducts={setProducts} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
 