import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const activePage = location.pathname;

  return (
    <nav className="flex justify-center bg-gray-800 p-2">
      <Link
        to="/"
        className={`text-lg font-medium px-4 py-2 rounded ${
          activePage === "/"
            ? "text-orange-500"
            : "text-white hover:text-orange-500"
        }`}
      >
        Home
      </Link>
      <Link
        to="/aboutme"
        className={`text-lg font-medium px-4 py-2 rounded ${
          activePage === "/aboutme"
            ? "text-orange-500"
            : "text-white hover:text-orange-500"
        }`}
      >
        About Me
      </Link>
      <Link
        to="/contact"
        className={`text-lg font-medium px-4 py-2 rounded ${
          activePage === "/contact"
            ? "text-orange-500"
            : "text-white hover:text-orange-500"
        }`}
      >
        Contact
      </Link>
    </nav>
  );
}

export default NavBar;
