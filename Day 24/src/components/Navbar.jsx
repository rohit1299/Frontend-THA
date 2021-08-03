import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h2>LOGO</h2>
      <ul>
        <Link to="/">
          <li>HOME</li>
        </Link>
        <Link to="/about">
          <li>ABOUT</li>
        </Link>
        <Link to="/profile">
          <li>PROFILE</li>
        </Link>
        <Link to="/dashboard">
          <li>DASHBOARD</li>
        </Link>
      </ul>
    </nav>
  );
}
