import { NavLink } from "react-router-dom";
import '../../index.css';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-80 flex items-center justify-between p-4 z-50 shadow-md">
      {/* Logo and Name */}
      <div className="flex items-center space-x-3">
        <img src="./200x400.png" alt="Logo" className="h-8 w-8" />
        <span className="text-black text-xl font-semibold">Amerind Nation</span>
      </div>
      {/* Navigation Links */}
      <div className="flex space-x-6">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `hover:underline ${
              isActive ? "text-green-500 font-bold" : "text-black"
            }`
          }
        >
          Home
        </NavLink>
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
          to="/projects"
          className={({ isActive }) =>
            `hover:underline ${
              isActive ? "text-green-500 font-bold" : "text-black"
            }`
          }
        >
          Projects
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
