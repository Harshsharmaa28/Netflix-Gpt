import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
    <h1 className="text-9xl font-bold text-red-500">404</h1>
    <p className="text-2xl text-gray-600 mt-4">
      Oops! The page you're looking for doesn't exist.
    </p>
    <button
      className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none"
      onClick={() => navigate('/browse')}
    >
      Go Back to Home
    </button>
  </div>
  )
}

export default NotFound
