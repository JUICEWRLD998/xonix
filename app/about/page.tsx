'use client'

import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function AboutPage() {
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
                className="relative text-amber-800 font-medium text-base tracking-wide hover:text-amber-900 transition-all duration-300 pb-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2.5px] after:bg-linear-to-r after:from-amber-700 after:to-amber-600 after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
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
                href="/about" 
                className="relative text-amber-900 font-semibold text-base tracking-wide pb-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-linear-to-r after:from-amber-700 after:to-amber-600 after:rounded-full"
              >
                About
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
                className="block text-amber-800 font-medium py-2 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-900 transition-colors duration-200"
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
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-amber-900 font-semibold py-2 px-3 rounded-lg hover:bg-amber-50 transition-colors duration-200"
              >
                About
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative min-h-screen py-12">
        {/* Hero Banner */}
        <div className="relative w-full h-[400px] mb-16 overflow-hidden">
          <Image
            src="/coffee4.jpg"
            alt="Coffee Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center px-4 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Brewed with Passion, Served with Love
            </h1>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Our Story */}
          <section className="mb-20">
            <h2 
              className="text-3xl lg:text-4xl font-bold text-amber-900 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Story
            </h2>
            <p 
              className="text-lg text-gray-700 leading-relaxed max-w-4xl"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Xonix Coffee started with a simple idea — to share warmth through every cup. 
              Our beans are ethically sourced and roasted to perfection for a rich, authentic taste. 
              We believe that great coffee brings people together and creates moments worth savoring.
            </p>
          </section>

          {/* Our Mission */}
          <section className="mb-20">
            <h2 
              className="text-3xl lg:text-4xl font-bold text-amber-900 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Mission
            </h2>
            <p 
              className="text-lg text-gray-700 leading-relaxed max-w-4xl"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              To bring people together over coffee while supporting sustainable farming communities. 
              We're committed to environmental responsibility and fair trade practices that benefit 
              everyone in our supply chain.
            </p>
          </section>

          {/* Meet the Team */}
          <section className="mb-20">
            <h2 
              className="text-3xl lg:text-4xl font-bold text-amber-900 mb-12 text-center"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src="/review-img1.jpg"
                    alt="Aisha"
                    fill
                    className="object-cover rounded-full ring-4 ring-amber-200"
                  />
                </div>
                <h3 
                  className="text-xl font-bold text-amber-900 mb-1"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Aisha
                </h3>
                <p 
                  className="text-sm text-gray-600"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Barista
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src="/review-img2.jpg"
                    alt="Daniel"
                    fill
                    className="object-cover rounded-full ring-4 ring-amber-200"
                  />
                </div>
                <h3 
                  className="text-xl font-bold text-amber-900 mb-1"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Tanjiro
                </h3>
                <p 
                  className="text-sm text-gray-600"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Roaster
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src="/manager-img.jpeg"
                    alt="Laila"
                    fill
                    className="object-cover rounded-full ring-4 ring-amber-200"
                  />
                </div>
                <h3 
                  className="text-xl font-bold text-amber-900 mb-1"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Muzan
                </h3>
                <p 
                  className="text-sm text-gray-600"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Manager
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p style={{ fontFamily: 'Outfit, sans-serif' }}>© 2025 Xonix Coffee | All rights reserved</p>
            <div className="flex gap-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              <a href="#" className="hover:text-amber-200 transition-colors">Instagram</a>
              <a href="#" className="hover:text-amber-200 transition-colors">X</a>
              <a href="#" className="hover:text-amber-200 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
