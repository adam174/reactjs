import React from "react";
import "./App.scss";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav navbar-nav">
        <Link to="/todo">
          <li>Todo List</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
