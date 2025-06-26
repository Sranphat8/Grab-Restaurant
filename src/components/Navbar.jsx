import React from "react";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          {/* ชื่อร้านแบบไม่มี icon */}
          <div
            className="flex shrink-0 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <span className="font-extrabold text-gray-900 text-lg">
              Grab Restaurant
            </span>
          </div>

          {/* เมนูกลาง */}
          <nav className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <button
              onClick={() => (window.location.href = "/add")}
              className="inline-block rounded-lg px-3 py-1 text-sm font-semibold text-gray-900 bg-indigo-100 hover:bg-indigo-200 transition-all duration-200 shadow-sm"
            >
              Add Restaurant
            </button>

            <button
              onClick={() => alert("Coming Soon")}
              className="inline-block rounded-lg px-3 py-1 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-all duration-200"
            >
              Search
            </button>
          </nav>

          {/* ปุ่มขวา */}
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={() => alert("Register clicked")}
              className="hidden sm:inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50"
            >
              Register
            </button>

            <button
              onClick={() => alert("Login clicked")}
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
