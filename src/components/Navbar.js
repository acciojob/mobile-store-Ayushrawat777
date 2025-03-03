import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>📱 Mobile Store</h2>
      <div className="nav-links">
        <Link to="/">🏠 Home</Link>
        <Link to="/admin">⚙️ Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
