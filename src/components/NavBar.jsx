import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-center bg-gray-800 p-2">
      <Link
        to="/"
        className="text-white text-lg font-medium px-4 py-2 hover:bg-red-600 hover:text-white rounded"
      >
        Home
      </Link>
      <Link
        to="/aboutme"
        className="text-white text-lg font-medium px-4 py-2 hover:bg-red-600 hover:text-white rounded"
      >
        About Me
      </Link>
      <Link
        to="/contact"
        className="text-white text-lg font-medium px-4 py-2 hover:bg-red-600 hover:text-white rounded"
      >
        Contact
      </Link>
    </nav>
  );
}

export default NavBar;
