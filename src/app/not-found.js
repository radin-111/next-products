"use client";

import Link from "next/link";
import { FiAlertCircle, FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <FiAlertCircle className="text-red-500 text-6xl md:text-8xl mb-4" />
      <h1 className="text-4xl md:text-6xl font-bold mb-2">Oops!</h1>
      <p className="text-lg md:text-2xl text-gray-700 mb-6 text-center">
        The page you are looking for doesn’t exist or an error occurred.
      </p>
      <Link href="/">
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-all">
          <FiHome className="mr-2" /> Go Back Home
        </button>
      </Link>
    </div>
  );
}
