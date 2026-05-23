"use client";

import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 via-blue-50 to-cyan-100 px-5">
      <div className=" p-10 text-center">
        
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
            <span className="text-5xl">⚠️</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="mt-6 text-4xl font-bold text-slate-800">
          Oops! Something went wrong
        </h1>

        {/* Description */}
        <p className="mt-3 text-slate-500 leading-relaxed">
          An unexpected error occurred while loading this page.
          Please try again or return to the homepage.
        </p>

        {/* Error Message */}
        {error?.message && (
          <div className="mt-5 bg-slate-100 border border-slate-200 rounded-xl p-4 text-left overflow-auto">
            <p className="text-sm text-red-500 break-words">
              {error.message}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-700 text-white font-semibold transition-all duration-300"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-8 text-xs text-slate-400">
          SmartCare+ • Error Boundary
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;