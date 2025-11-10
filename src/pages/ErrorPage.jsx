import React from 'react';
import { Link } from 'react-router';
import errorImage from '../assets/error.jpg';

const ErrorPage = () => {
    return (
    <div className="flex items-center justify-center py-10 bg-blue-100 px-4">
      <div className="bg-white rounded-xl shadow-lg p-10 text-center max-w-4xl w-full">
        {/* Image */}
        <img src={errorImage} alt="404 Not Found" className="mx-auto mb-6 " />

        {/* Back Home Button */}
        <Link
          to="/"
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200 font-semibold"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};



export default ErrorPage;
