import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="mr-6 btn btn-outline  btn-success">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/listedBooks" className="btn btn-ghost">
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink className="ml-6 btn btn-ghost">Pages To Read</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold">
          EKR<span className="text-blue-800">A</span>H
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-4">
        <a className="btn btn-success">Sign In</a>
        <a className="btn btn-info">Sing Up</a>
      </div>
    </div>
  );
};

export default Navbar;
