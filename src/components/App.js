

import React, { useContext } from "react";
import './../styles/App.css';
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import ProductDetails from "./ProductDetails";
import EditPage from "./EditPage";


const App = () => {

  return (
    <BrowserRouter>
      <div>
        {/* Do not remove the main div */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="admin/products/:id" element={<EditPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App