'use client'

import Link from "next/link";
import React from "react";

export default function ProductsPage() {
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
                className="relative text-amber-900 font-semibold text-base tracking-wide pb-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-linear-to-r after:from-amber-700 after:to-amber-600 after:rounded-full"
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
                className="block text-amber-800 font-medium py-2 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-900 transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-amber-900 font-semibold py-2 px-3 rounded-lg hover:bg-amber-50 transition-colors duration-200"
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

      {/* Main Content */}
      <main className="relative min-h-screen py-12 bg-linear-to-br from-amber-50/50 via-white to-orange-50/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Product Detail Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Left - Product Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-amber-400/15 to-orange-400/15 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gray-50 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                <img
                  src="/coffee4.jpg"
                  alt="Ethiopian Arabica Blend"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Right - Product Details */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                {/* Title & Description */}
                <div className="space-y-3">
                  <h1 
                    className="text-3xl lg:text-4xl font-bold text-amber-900 leading-tight"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Ethiopian Arabica Blend
                  </h1>
                  <p 
                    className="text-base text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="text-base font-semibold">Flavor notes:</span> Berry, Chocolate, Floral
                  </p>
                  <p 
                    className="text-sm text-gray-600"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="font-semibold">Origin:</span> Ethiopia
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex text-amber-500">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    (128 reviews)
                  </span>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300"></div>

                {/* Price */}
                <div>
                  <span className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                    $16.00
                  </span>
                </div>

                {/* Quantity & Add to Cart */}
                <div className="flex items-center gap-4">
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                    <button className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                      <span className="text-lg font-medium">−</span>
                    </button>
                    <input 
                      type="number" 
                      value="1" 
                      className="w-12 text-center text-sm font-medium text-gray-900 bg-transparent border-x border-gray-300 focus:outline-none"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      readOnly
                    />
                    <button className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                      <span className="text-lg font-medium">+</span>
                    </button>
                  </div>
                  
                  {/* Add to Cart Button */}
                  <button 
                    className="flex-1 bg-amber-900 hover:bg-amber-950 text-white px-6 py-2.5 rounded-lg font-medium text-sm uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Detail Section 2 - Colombian Roast */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Left - Product Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-amber-400/15 to-orange-400/15 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gray-50 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                <img
                  src="/coffee5.jpg"
                  alt="Colombian Roast"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Right - Product Details */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                {/* Title & Description */}
                <div className="space-y-3">
                  <h1 
                    className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Colombian Roast
                  </h1>
                  <p 
                    className="text-base text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Flavor notes: caramel, nuts, dark chocolate
                  </p>
                  <p 
                    className="text-sm text-gray-500"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Dark roast, origin: Colombia
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex text-amber-500">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                    <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                    (95 reviews)
                  </span>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200"></div>

                {/* Price */}
                <div>
                  <span className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                    $14.00
                  </span>
                </div>

                {/* Quantity & Add to Cart */}
                <div className="flex items-center gap-4">
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                    <button className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                      <span className="text-lg font-medium">−</span>
                    </button>
                    <input 
                      type="number" 
                      value="1" 
                      className="w-12 text-center text-sm font-medium text-gray-900 bg-transparent border-x border-gray-300 focus:outline-none"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      readOnly
                    />
                    <button className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                      <span className="text-lg font-medium">+</span>
                    </button>
                  </div>
                  
                  {/* Add to Cart Button */}
                  <button 
                    className="flex-1 bg-amber-900 hover:bg-amber-950 text-white px-6 py-2.5 rounded-lg font-medium text-sm uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Detail Section 3 - Espresso Blend */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Left - Product Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-amber-400/15 to-orange-400/15 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gray-50 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                <img
                  src="/coffee3.jpg"
                  alt="Espresso Blend"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Right - Product Details */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                {/* Title & Description */}
                <div className="space-y-3">
                  <h1 
                    className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Espresso Blend
                  </h1>
                  <p 
                    className="text-base text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Flavor notes: bold, smoky, rich cream
                  </p>
                  <p 
                    className="text-sm text-gray-500"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Extra dark roast, origin: Brazil & Italy
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                    (203 reviews)
                  </span>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200"></div>

                {/* Price */}
                <div>
                  <span className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                    $18.00
                  </span>
                </div>

                {/* Quantity & Add to Cart */}
                <div className="flex items-center gap-4">
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                    <button className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                      <span className="text-lg font-medium">−</span>
                    </button>
                    <input 
                      type="number" 
                      value="1" 
                      className="w-12 text-center text-sm font-medium text-gray-900 bg-transparent border-x border-gray-300 focus:outline-none"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      readOnly
                    />
                    <button className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                      <span className="text-lg font-medium">+</span>
                    </button>
                  </div>
                  
                  {/* Add to Cart Button */}
                  <button 
                    className="flex-1 bg-amber-900 hover:bg-amber-950 text-white px-6 py-2.5 rounded-lg font-medium text-sm uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

         
         
          {/* Ratings & Reviews */}
          <div className="mb-16">
            <h2 
              className="text-3xl font-bold text-amber-900 mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ratings & Reviews
            </h2>
            <div className="space-y-6">
              {/* Review 1 */}
              <div className="bg-white border border-amber-200/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex text-amber-600 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="font-semibold text-amber-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Sarah</p>
                  </div>
                </div>
                <p className="text-amber-800/80" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  "My morning favorite! The flavor profile is absolutely incredible. Can't start my day without it."
                </p>
              </div>

              {/* Review 2 */}
              <div className="bg-white border border-amber-200/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex text-amber-600 mb-2">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                      <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    </div>
                    <p className="font-semibold text-amber-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Tunde</p>
                  </div>
                </div>
                <p className="text-amber-800/80" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  "Great flavor but strong. Perfect if you like bold coffee. I'd recommend it for anyone who enjoys rich, intense flavors."
                </p>
              </div>
            </div>
          </div>

          {/* You Might Also Like */}
          <div className="mb-16">
            <h2 
              className="text-3xl font-bold text-amber-900 mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              You might also like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Product 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-amber-200/50">
                <div className="bg-gray-100 h-64">
                  <img src="/coffee-splash.jpg" alt="Colombian Roast" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Colombian Roast
                  </h3>
                  <p className="text-amber-800/70 text-sm mb-4">Bold and smooth • Dark Roast</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-900">$14.00</span>
                    <button className="bg-amber-800 hover:bg-amber-900 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold">
                      View
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-amber-200/50">
                <div className="bg-gray-100 h-64">
                  <img src="/coffee-cup.jpg" alt="Espresso Blend" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Espresso Blend
                  </h3>
                  <p className="text-amber-800/70 text-sm mb-4">Rich and intense • Extra Dark</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-900">$18.00</span>
                    <button className="bg-amber-800 hover:bg-amber-900 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold">
                      View
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-amber-200/50">
                <div className="bg-gray-100 h-64">
                  <img src="/home-coffee.jpg" alt="Pastry" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Kenya Gold Blend
                  </h3>
                  <p className="text-amber-800/70 text-sm mb-4">Fruity notes • Light Roast</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-900">$17.00</span>
                    <button className="bg-amber-800 hover:bg-amber-900 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p style={{ fontFamily: 'Outfit, sans-serif' }}>© 2025 Xonix Coffee | All rights reserved</p>
            <div className="flex gap-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              <a href="#" className="hover:text-amber-200 transition-colors">Privacy</a>
              <a href="#" className="hover:text-amber-200 transition-colors">Terms</a>
              <a href="#" className="hover:text-amber-200 transition-colors">Instagram</a>
              <a href="#" className="hover:text-amber-200 transition-colors">X</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
