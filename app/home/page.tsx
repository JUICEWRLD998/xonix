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

      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center bg-linear-to-br from-amber-50/50 via-white to-orange-50/30 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-amber-400/20 to-orange-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <Image
                src="/home-coffee.jpg"
                alt="Morning Coffee"
                width={600}
                height={450}
                className="relative rounded-3xl shadow-2xl object-cover w-full h-[450px] ring-1 ring-amber-900/10 transform group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-10 lg:pl-8">
              <div className="space-y-6">
                <h1 
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-900 via-amber-800 to-orange-900 leading-[1.15] tracking-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Enjoy Your Morning Coffee
                </h1>
                
                <p 
                  className="text-xl sm:text-2xl text-amber-900/70 leading-relaxed font-light max-w-xl"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
                >
                  Boost your productivity and build your mood with a glass of coffee in the morning, 100% natural from the garden
                </p>
              </div>

              {/* Order Now Button */}
              <button className="group relative inline-flex items-center gap-4 bg-linear-to-r from-amber-800 to-amber-900 hover:from-amber-900 hover:to-orange-900 text-white px-10 py-5 rounded-2xl font-semibold text-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10">Order Now</span>
                <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-white rounded-full transition-transform group-hover:translate-x-1 duration-300">
                  <svg 
                    className="w-5 h-5 text-amber-800" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              </button>
            </div>
          </div>

          {/* Feature Section - Redesigned */}
          <div className="mt-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Simple Description */}
            <div className="flex items-center">
              <p 
                className="text-xl sm:text-2xl text-amber-900/70 leading-relaxed font-light"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
              >
                Elevate your energy and enhance your day with our premium coffee selection, carefully sourced and roasted to perfection. Experience the pure essence of quality beans, grown naturally in the finest gardens around the world.
              </p>
            </div>

            {/* Right Side - Coffee Splash Image */}
            <div className="relative group order-first lg:order-last">
              <div className="absolute inset-0 bg-linear-to-br from-amber-400/20 to-orange-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <Image
                src="/coffee-splash.jpg"
                alt="Coffee Splash"
                width={600}
                height={450}
                className="relative rounded-3xl shadow-2xl object-cover w-full h-[450px] ring-1 ring-amber-900/10 transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
