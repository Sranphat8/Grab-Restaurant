import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        <a className="text-lg font-bold">Grab Restaurant</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-sm">
          <li>
            <a className="cursor-pointer">Add restaurant</a>
          </li>
          <li>
            <a className="cursor-pointer">Search</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end space-x-2">
        <button className="btn btn-outline btn-primary cursor-pointer">Register</button>
        <button className="btn btn-outline btn-accent cursor-pointer">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
