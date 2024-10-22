import React from "react";
import Image from "next/image";
import Link from "next/link";
const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 sm:px-4">
      <div className="relative w-full max-w-4xl">
      <Image
          src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/bretcome-bg.jpg"
          alt="Image"
          className="w-full h-full object-cover"
          width={800} // Set appropriate width
          height={600} // Set appropriate height
          priority
        />
        <Link
          href="/"
          className="absolute bottom-10 left-0 bg-blue-500 hover:bg-gray-800  text-white font-bold py-3 px-6 rounded-full sm:bottom-4 sm:py-2 sm:px-4 sm:text-sm"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
