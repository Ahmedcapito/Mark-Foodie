"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
    <header className="fixed inset-x-0 top-0 z-50 bg-gray-100">
      <nav
        className="flex items-center justify-between p-6 lg:px-12"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <h1 className="font-black text-3xl text-fuchsia-950">
              Mark Foodie
            </h1>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 font-bold  text-amber-600 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-10"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-xl font-bold text-amber-600 ">
            Home
          </Link>
          <Link href="/menu" className="text-xl font-bold text-amber-600 ">
            Menu
          </Link>
          <Link href="/contact" className="text-xl font-bold text-amber-600 ">
            Contact
          </Link>
        </div>
      </nav>

      {/* Mobile Menu - Only show when menuOpen is true */}
      {menuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 z-40 bg-black/20"
            onClick={() => setMenuOpen(false)}
          ></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-white px-6 py-6 overflow-y-auto shadow-lg">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <h1 className="font-black text-2xl text-fuchsia-950">
                  Mark Foodie
                </h1>
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-amber-600 cursor-pointer"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="size-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200 transform">
                <div className="space-y-2 py-6">
                  <Link
                    href="/"
                    className="block px-3 py-2 rounded-lg text-base font-bold text-amber-600 hover:bg-fuchsia-950 transition"
                  >
                    Home
                  </Link>
                  <Link
                    href="/menu"
                    className="block px-3 py-2 rounded-lg text-base font-bold text-amber-600 hover:bg-fuchsia-950 transition"
                  >
                    Menu
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-3 py-2 rounded-lg text-base font-bold text-amber-600 hover:bg-fuchsia-950 transition"
                  >
                    Contact
                  </Link>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
    </div>
    
  );
};

export default Navbar;
