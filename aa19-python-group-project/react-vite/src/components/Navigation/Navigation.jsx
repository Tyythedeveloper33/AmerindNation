import { NavLink } from "react-router-dom";
import '../../index.css';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-80 flex items-center justify-between p-4 z-50 shadow-md">
      {/* Logo and Name */}
      <div className="flex items-center space-x-3">
        <NavLink to="/">
          <img
            src="./Logo.png"
            alt="Logo"
              className="h-12 w-32 shadow-lg hover:shadow-xl transition-shadow duration-300"

          />
        </NavLink>
      </div>
      {/* Navigation Links */}
      <div className="flex space-x-6">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:underline ${
              isActive ? "text-green-500 font-bold" : "text-black"
            }`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/partners"
          className={({ isActive }) =>
            `hover:underline ${
              isActive ? "text-green-500 font-bold" : "text-black"
            }`
          }
        >
          Partners
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `hover:underline ${
              isActive ? "text-green-500 font-bold" : "text-black"
            }`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `hover:underline ${
              isActive ? "text-green-500 font-bold" : "text-black"
            }`
          }
        >
          Services
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
