'use client'

import Link from "next/link";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import { truncate } from "fs/promises";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-amber-50 via-orange-50 to-yellow-50 px-4 py-8">
      <main className="flex flex-col items-center justify-center gap-6 sm:gap-8 w-full max-w-2xl text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900">
            <ReactTyped
              strings={['Welcome to Xonix Coffee 🍵']}
              typeSpeed={50}
              backSpeed={40}
              loop={true}
            />
          </h1>
          {/* <Image
            src="/cup-animate.png"
            alt="Coffee cup"
            width={80}
            height={80}
            className="animate-bounce w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          /> */}
        </div>
        <p className="text-base sm:text-lg md:text-xl text-amber-800 max-w-md px-4 animate-fade-in-delay">
          Your perfect cup awaits - login or sign up to get started
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Link
            href="/login"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-amber-700 text-white rounded-xl font-semibold hover:bg-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-fade-in-delay-2"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white text-amber-700 border-2 border-amber-700 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-300 shadow-lg hover:scale-105 animate-fade-in-delay-2"
          >
            Sign Up
          </Link>
        </div>
      </main>
    </div>
  );
}
