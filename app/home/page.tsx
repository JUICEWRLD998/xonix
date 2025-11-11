'use client'

import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Navigation Bar */}
      <nav className="bg-linear-to-r from-amber-50/80 via-white to-amber-50/80 backdrop-blur-sm shadow-sm border-b border-amber-200/50 sticky top-0 z-50">
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

            {/* Navigation Links - Right (Desktop) */}
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

            {/* Hamburger Menu Button - Mobile */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-amber-900 hover:bg-amber-50 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {!mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 pt-2 space-y-2 border-t border-amber-200/50 mt-2 animate-fade-in" style={{ fontFamily: 'Outfit, sans-serif' }}>
              <Link 
                href="/home" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-amber-900 font-semibold py-2 px-3 rounded-lg hover:bg-amber-50 transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-amber-800 font-medium py-2 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-900 transition-colors duration-200"
              >
                Products
              </Link>
              <Link 
                href="/review"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-amber-800 font-medium py-2 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-900 transition-colors duration-200"
              >
                Review
              </Link>
            </div>
          )}
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
