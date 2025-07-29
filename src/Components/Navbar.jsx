import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/gjgdg9.jpg";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          title: "Logged Out!",
          text: "You have been logged out successfully.",
          icon: "success",
          confirmButtonText: "Okay",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "bg-green-200 text-green-800 font-semibold px-3 py-1 rounded-md"
            : "text-gray-600 hover:text-green-600 px-3 py-1"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/exploreGardeners"
        className={({ isActive }) =>
          isActive
            ? "bg-green-200 text-green-800 font-semibold px-3 py-1 rounded-md"
            : "text-gray-600 hover:text-green-600 px-3 py-1"
        }
      >
        Explore Gardeners
      </NavLink>
      <NavLink
        to="/browseTips"
        className={({ isActive }) =>
          isActive
            ? "bg-green-200 text-green-800 font-semibold px-3 py-1 rounded-md"
            : "text-gray-600 hover:text-green-600 px-3 py-1"
        }
      >
        Browse Tips
      </NavLink>

      <NavLink
        to="/shareGardenTip"
        className={({ isActive }) =>
          isActive
            ? "bg-green-200 text-green-800 font-semibold px-3 py-1 rounded-md"
            : "text-gray-600 hover:text-green-600 px-3 py-1"
        }
      >
        Share a Garden Tip
      </NavLink>
      <NavLink
        to="/myTips"
        className={({ isActive }) =>
          isActive
            ? "bg-green-200 text-green-800 font-semibold px-3 py-1 rounded-md"
            : "text-gray-600 hover:text-green-600 px-3 py-1"
        }
      >
        My Tips
      </NavLink>
    </>
  );

  return (
    <div className="w-full bg-base-100 shadow-sm px-4 md:px-10">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center py-4">
        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center mr-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-green-700 focus:outline-none"
          >
            {isOpen ? <IoMdClose /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-20 object-cover rounded-full"
          />
          <span className="text-2xl font-bold text-green-700">GreenSpace</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-5 font-semibold items-center">
          {links}
        </div>

        {/* Profile & Login/Logout - All Screens */}
        <div className="flex items-center gap-4">
          {user && (
            <img
              src={user.photoURL}
              alt="Profile"
              className="h-10 w-10 rounded-full border-2 border-green-500"
              title={user.displayName || "User"}
            />
          )}
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-white text-[#6C4A2D] font-semibold px-4 py-2 md:px-6 md:py-2 rounded-lg shadow-md hover:bg-[#e7dccc] hover:text-[#4a2e16] hover:scale-105 duration-300 border border-[#c3b59f]"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-white text-[#6C4A2D] font-semibold px-4 py-2 md:px-6 md:py-2 rounded-lg shadow-md hover:bg-[#e7dccc] hover:text-[#4a2e16] hover:scale-105 duration-300 border border-[#c3b59f]">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4">
          <div className="flex flex-col items-start gap-3 font-semibold">
            {links}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
