import React from "react";

const Gallery = () => {
  return (
    <div>
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <img
          src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/bretcome-bg.jpg"
          alt="Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold">
          Gallery
        </div>
        <button className="absolute bottom-0 md:left-[100px] left-[50px]  bg-[#4026E1] hover:bg-[#6854e9] text-2xl text-white font-medium px-10 py-6 rounded-t-lg">
          Home/Gallery
        </button>
      </div>
      <div className="container mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-purple-600 font-medium uppercase tracking-wide">
            Latest Best Gallery
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Moderior Latest Gallery
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          <div className="group relative sm:col-span-2">
            <img
              src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/project/project1.png"
              alt="Gallery Image 1"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg group-hover:translate-x-5 transition-transform duration-500 ease-in-out"
            />
            <img
              src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/project/project1.png"
              alt="Gallery Image 2"
              className="absolute top-0 left-0 w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-5 transition-transform duration-500 ease-in-out"
            />
          </div>
          <div className="sm:col-span-2">
            <img
              src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/project/project2.png"
              alt="Gallery Image 3"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
            />
          </div>
          <div className="sm:col-span-3">
            <img
              src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/project/project3.png"
              alt="Gallery Image 4"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
            />
          </div>
          <div className="sm:col-span-1">
            <img
              src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/project/project4.png"
              alt="Gallery Image 5"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
