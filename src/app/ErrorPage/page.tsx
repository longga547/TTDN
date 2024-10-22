import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 sm:px-4">
      <div className="relative w-full max-w-4xl">
        <img
          src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/404.png"
          alt="404 Error"
          className="w-full mb-11"
        />
        <a
          href="/"
          className="absolute bottom-10 left-0 bg-blue-500 hover:bg-gray-800  text-white font-bold py-3 px-6 rounded-full sm:bottom-4 sm:py-2 sm:px-4 sm:text-sm"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
