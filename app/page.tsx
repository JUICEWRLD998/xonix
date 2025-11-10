import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
      <main className="flex flex-col items-center justify-center gap-8 px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900">
          Welcome to Xonix
        </h1>
        <p className="text-xl text-gray-600 max-w-md">
          Get started by logging in or creating a new account
        </p>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="px-8 py-3 bg-white text-indigo-600 border-2 border-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
          >
            Sign Up
          </Link>
        </div>
      </main>
    </div>
  );
}
