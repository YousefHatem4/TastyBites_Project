import React from 'react';
import { Link } from 'react-router-dom';

export default function Error(){
  return <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-white-100 p-6">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="bg-[#FFBE33] text-white py-3 px-6 rounded-lg hover:bg-yellow-400 transition">
          Back to Home
        </Link>
      </div>
    </div>
    </>
};
