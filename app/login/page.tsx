'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()
//this prevents the page from reloading 
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
// this calls supabase auth to check the credentials and redirects to the dashboard if succesful and error message if something went wrong  
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError(error.message)
      } else {
        // Redirect to dashboard
        router.push('/dashboard')
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="w-full max-w-6xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left side - Form */}
            <div className="p-8 md:p-12 lg:p-16">
              <div className="max-w-md mx-auto">
                {/* Header */}
                <div className="mb-8">
                  <h1 className="text-4xl font-bold  text-indigo-700 mb-2 text-center ">
                    Welcome Back
                  </h1>
                  <p className="text-gray-700 text-lg text-center">
                    Log in to continue your journey
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
                      <div className="flex">
                        <div className="shrink-0">
                          <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-red-700">{error}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition duration-200 text-gray-900 placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Password Input */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                        Password
                      </label>
                      <Link 
                        href="/forgot-password" 
                        className="text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                      >
                        Forgot?
                      </Link>
                    </div>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition duration-200 text-gray-900 placeholder-gray-400"
                      placeholder="••••••••"
                    />
                  </div>

                  {/* Remember Me Checkbox */}
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                      Remember me 
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white py-3.5 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Logging in...
                      </span>
                    ) : (
                      'Log In'
                    )}
                  </button>
                </form>

                {/* Footer */}
                <div className="mt-8 text-center">
                  <p className="text-gray-600">
                    Don't have an account?{' '}
                    <Link 
                      href="/signup" 
                      className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="hidden md:block relative overflow-hidden">
              <Image
                src="/coffee.jpg"
                alt="Welcome back"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
