import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram, FaBars } from "react-icons/fa";

function NavBar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activePage = location.pathname;

  const navLinks = [
    {
      to: "/",
      label: "Home",
      icon: FaHome,
    },
    {
      to: "/aboutme",
      label: "About Me",
      icon: FaUser,
    },
    {
      to: "/project",
      label: "Projects",
      icon: FaProjectDiagram,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-500">AD</div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>

        <div className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`
                flex items-center gap-2 text-lg font-medium px-4 py-2 rounded-lg transition
                ${
                  activePage === link.to
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }
              `}
            >
              <link.icon />
              {link.label}
            </Link>
          ))}
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-800 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  flex items-center gap-4 px-4 py-3 border-b border-gray-700
                  ${
                    activePage === link.to
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-700"
                  }
                `}
              >
                <link.icon />
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
