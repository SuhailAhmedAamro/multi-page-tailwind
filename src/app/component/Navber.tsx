"use client"; // Ensures this is client-side rendered

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-5 shadow-lg">
      <div className="container mx-auto">
        <ul className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Home Link */}
          <li>
            <Link
              to="/"
              className="text-white text-lg font-semibold hover:text-yellow-400 transform transition-all duration-300 ease-in-out hover:scale-110"
            >
              Home
            </Link>
          </li>
          
          {/* About Link */}
          <li>
            <Link
              to="/about"
              className="text-white text-lg font-semibold hover:text-yellow-400 transform transition-all duration-300 ease-in-out hover:scale-110"
            >
              About
            </Link>
          </li>
          
          {/* Contact Link */}
          <li>
            <Link
              to="/contact"
              className="text-white text-lg font-semibold hover:text-yellow-400 transform transition-all duration-300 ease-in-out hover:scale-110"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
