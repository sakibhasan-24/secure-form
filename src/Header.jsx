import React from "react";
import { Link, Outlet } from "react-router-dom";
import Home from "./Home";

export default function Header() {
  return (
    <header className="w-full bg-red-400 text-white px-4 py-2 space-x-7 text-bold">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </header>
  );
}
