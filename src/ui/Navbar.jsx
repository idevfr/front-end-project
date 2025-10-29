import { useEffect } from "react";
import { NavLink, useLocation } from "react-router";

function Navbar() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <nav className="fixed right-0 bottom-0 left-0 flex items-center justify-center bg-amber-50">
      <ul className="flex items-center justify-between gap-6">
        <li className="text-2xl font-semibold">
          <NavLink
            className={({ isActive }) => {
              return `h-full px-8 py-4 hover:bg-gray-950 hover:text-gray-50 ${
                isActive ? "bg-gray-950 text-gray-50" : ""
              }`;
            }}
            to={"essentials"}
          >
            Essentials
          </NavLink>
        </li>
        <li className="text-2xl font-semibold">
          <NavLink
            className={({ isActive }) => {
              return `block h-full px-8 py-4 hover:bg-gray-950 hover:text-gray-50 ${
                isActive ? "bg-gray-950 text-gray-50" : ""
              }`;
            }}
            to={"resources"}
          >
            Resources
          </NavLink>
        </li>
        <li className="text-2xl font-semibold">
          <NavLink
            className={({ isActive }) => {
              return `block h-full px-8 py-4 hover:bg-gray-950 hover:text-gray-50 ${
                isActive ? "bg-gray-950 text-gray-50" : ""
              }`;
            }}
            to={"viewpoints"}
          >
            Viewpoints
          </NavLink>
        </li>
        <li className="text-2xl font-semibold">
          <NavLink
            className={({ isActive }) => {
              return `block h-full px-8 py-4 hover:bg-gray-950 hover:text-gray-50 ${
                isActive ? "bg-gray-950 text-gray-50" : ""
              }`;
            }}
            to={"bars"}
          >
            Bars
          </NavLink>
        </li>
        <li className="text-2xl font-semibold">
          <NavLink
            className={({ isActive }) => {
              return `block h-full px-8 py-4 hover:bg-gray-950 hover:text-gray-50 ${
                isActive ? "bg-gray-950 text-gray-50" : ""
              }`;
            }}
            to={"sports-center"}
          >
            Sports Center
          </NavLink>
        </li>
        <li className="text-2xl font-semibold">
          <NavLink
            className={({ isActive }) => {
              return `block h-full px-8 py-4 hover:bg-gray-950 hover:text-gray-50 ${
                isActive ? "bg-gray-950 text-gray-50" : ""
              }`;
            }}
            to={"social-community"}
          >
            Social / Community
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
