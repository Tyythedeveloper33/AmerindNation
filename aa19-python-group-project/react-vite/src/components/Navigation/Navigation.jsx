import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
// import ProfileButton from "./ProfileButton";
import "../../index.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle hamburger menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-80 flex items-center justify-between px-6 py-4 z-50 shadow-md backdrop-blur-sm">
      {/* Logo and Name */}
      <div className="flex items-center space-x-3">
        <NavLink to="/">
          <img
            src="./Logo.png"
            alt="Logo"
            className="h-12 transition-shadow duration-300"
          />
        </NavLink>
      </div>

      {/* Hamburger Icon for Mobile */}
      <button
        className="lg:hidden flex items-center"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Navigation Links (only for desktop) */}
      <motion.div
        className="flex items-center space-x-8 lg:flex hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {[{ text: "About Us", link: "/about" },
          { text: "Partners", link: "/partners" },
          { text: "Portfolio", link: "/portfolio" },
          { text: "Services", link: "/services" },
          { text: "Sage", link: "/sage" },
        ].map(({ text, link }, index) => (
          <NavLink
            key={index}
            to={link}
            end // Ensures exact match for active state
            className={({ isActive }) =>
              `relative text-lg font-medium transition-colors duration-300 ${
                isActive
                  ? "text-green-500 font-bold"
                  : "text-black hover:text-green-500"
              }`
            }
          >
            <motion.div
              whileHover={{ scale: 1.1, color: "#2F6368" }}
              whileTap={{ scale: 0.95 }}
            >
              {text}
              <motion.div
                className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-green-500"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.div>
          </NavLink>
        ))}

        {/* Profile Button */}
        <div>
          {/* <ProfileButton /> commented out for now */}
        </div>
      </motion.div>

      {/* Dropdown Menu for Mobile */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-60 overflow-auto' : 'max-h-0 overflow-hidden'}`}
        style={{
          transitionProperty: 'max-height',
          position: 'absolute',
          top: '100%', // Positions the dropdown just below the nav bar
          left: 0,
          right: 0,
          zIndex: 40, // Ensures it appears above other content
        }}
      >
        <motion.div
          className="flex flex-col items-start space-y-4 py-4 px-6 bg-white shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {[{ text: "About Us", link: "/about" },
            { text: "Partners", link: "/partners" },
            { text: "Portfolio", link: "/portfolio" },
            { text: "Services", link: "/services" },
            { text: "Sage", link: "/sage" },
          ].map(({ text, link }, index) => (
            <NavLink
              key={index}
              to={link}
              end
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-300 ${
                  isActive ? "text-green-500 font-bold" : "text-black hover:text-green-500"
                }`
              }
              onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
            >
              {text}
            </NavLink>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navigation;
