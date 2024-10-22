import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div>
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <Image
          src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/bretcome-bg.jpg"
          alt="Image"
          layout="fill"
          objectFit="cover"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="sm:col-span-2">
            <Image
              src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/project/project1.png"
              alt="Gallery Image 1"
              layout="responsive"
              width={700}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="sm:col-span-2">
            <Image
              src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/project/project2.png"
              alt="Gallery Image 2"
              layout="responsive"
              width={700}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="sm:col-span-3 h-[250px] md:h-[400px] relative">
            {" "}
            {/* Chiều cao cho ảnh 4 */}
            <Image
              src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/project/project3.png"
              alt="Gallery Image 4"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="sm:col-span-1 h-[250px] md:h-[400px] relative">
            {" "}
            {/* Chiều cao cho ảnh 5 */}
            <Image
              src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/project/project4.png"
              alt="Gallery Image 5"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
