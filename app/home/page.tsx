'use client'

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Name - Left */}
            <div className="shrink-0 flex items-center gap-3">

              <div className="flex flex-col leading-tight">
                <h1 className="text-3xl font-semibold text-amber-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Xonix🍵
                </h1>
                
              </div>
            </div>

            {/* Navigation Links - Center */}
            <div className="hidden md:flex items-center space-x-10" style={{ fontFamily: 'Outfit, sans-serif' }}>
              <Link 
                href="/home" 
                className="relative text-amber-900 font-semibold text-base tracking-wide pb-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-linear-to-r after:from-amber-700 after:to-amber-600 after:rounded-full"
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="relative text-amber-800 font-medium text-base tracking-wide hover:text-amber-900 transition-all duration-300 pb-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2.5px] after:bg-linear-to-r after:from-amber-700 after:to-amber-600 after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
              >
                Products
              </Link>
              <Link 
                href="/review" 
                className="relative text-amber-800 font-medium text-base tracking-wide hover:text-amber-900 transition-all duration-300 pb-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2.5px] after:bg-linear-to-r after:from-amber-700 after:to-amber-600 after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
              >
                Review
              </Link>
            </div>

            {/* Cart Icon - Right */}
            <div className="flex items-center">
              <button className="relative p-3 text-amber-900 hover:text-amber-700 hover:bg-amber-50 rounded-full transition-all duration-300 group">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 transition-transform group-hover:scale-110 duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                  />
                </svg>
                <span className="absolute -top-0.5 -right-0.5 bg-linear-to-br from-amber-600 to-amber-800 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center shadow-md border-2 border-white">
                  0
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden pb-4 space-y-2">
            <Link 
              href="/home" 
              className="block text-amber-900 font-semibold border-b-2 border-amber-700 pb-1 w-fit"
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="block text-amber-800 font-medium hover:text-amber-900 transition-colors"
            >
              Products
            </Link>
            <Link 
              href="/review" 
              className="block text-amber-800 font-medium hover:text-amber-900 transition-colors"
            >
              Review
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            Welcome to Xonix Coffee
          </h2>
          <p className="text-lg text-amber-800">
            Your home page content goes here
          </p>
        </div>
      </main>
    </div>
  );
}
