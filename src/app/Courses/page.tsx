import React from "react";
import Image from "next/image";
const Courses = () => {
  return (
    <div>
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <Image
          src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/bretcome-bg.jpg"
          alt="Image"
          className="w-full h-full object-cover"
          width={800} // Set appropriate width
          height={600} // Set appropriate height
          priority
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold">
          Courses
        </div>
        <button className="absolute bottom-0 md:left-[100px] left-[50px]  bg-[#4026E1] hover:bg-[#6854e9] text-2xl text-white font-medium px-10 py-6 rounded-t-lg">
          Home/Courses
        </button>
      </div>
      {/* Browse Categories 2 */}
      <div className="mx-auto lg:mt-[60px] py-10 md:px-[100px] px-10">
        <p className="text-2xl text-violet-500 font-medium">
          Browse Categories
        </p>
        <div className="xl:flex block justify-between items-center ">
          <div className="md:text-5xl text-4xl font-bold my-6  ">
            Top Courses Categories
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-6 ">
            <p className="text-stone-500 font-medium text-lg sm:text-xl">
              Engineering
            </p>
            <p className="text-stone-500 font-medium text-lg sm:text-xl">
              Data science
            </p>
            <p className="text-stone-500 font-medium text-lg sm:text-xl">
              Graphic Design
            </p>
            <p className="text-stone-500 font-medium text-lg sm:text-xl">
              Business
            </p>
          </div>
        </div>
        {/* 6 box */}
        <div className="flex-col mt-8 space-y-8">
          <div className="row11 grid xl:grid-cols-3 lg:grid-cols-2 gap-8">
            {/* box1 */}
            <div className="rounded overflow-hidden shadow-lg bg-white">
              <div className="relative">
                <Image
                  className="w-full h-[322px] object-cover"
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/course1.png"
                  alt="Course"
                  width={400} // Set appropriate width
                  height={322} // Set appropriate height
                  priority
                />
                <div className="absolute flex justify-between pl-[30px] bottom-0 left-0 right-0 bg-gradient-to-t from-[#203f50] to-transparent p-4">
                  <h2 className="text-white font-semibold">Kevin Martin</h2>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-lg">★★★★★</span>
                    <span className="text-white ml-2">(29)</span>
                  </div>
                </div>
              </div>
              {/* Content Section */}
              <div className="flex justify-between px-6 py-2">
                <span className="text-gray-700 text-base">22 Lessons</span>
                <span className="text-gray-700 text-base">1 hr 17 min</span>
              </div>
              <div className="px-6 py-2 font-bold text-xl">
                Ims The Complete Salesforce Classic Certification
              </div>
              <div className="w-[90%] flex justify-between mx-auto py-3 mt-2 border-t-[1px] border-stone-200">
                <p className="text-lg font-medium">$45.00</p>
                <p className="text-lg font-medium text-stone-00">Add to cart</p>
              </div>
            </div>

            {/* box2 */}
            <div className="rounded overflow-hidden shadow-lg bg-white">
              <div className="relative">
                <Image
                  className="w-full h-[322px] object-cover"
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/course2.png"
                  alt="Course"
                  width={400}
                  height={322}
                  priority
                />
                <div className="absolute flex justify-between pl-[30px] bottom-0 left-0 right-0 bg-gradient-to-t from-[#203f50] to-transparent p-4">
                  <h2 className="text-white font-semibold">Kevin Martin</h2>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-lg">★★★★★</span>
                    <span className="text-white ml-2">(29)</span>
                  </div>
                </div>
              </div>
              {/* Content Section */}
              <div className="flex justify-between px-6 py-2">
                <span className="text-gray-700 text-base">22 Lessons</span>
                <span className="text-gray-700 text-base">1 hr 17 min</span>
              </div>
              <div className="px-6 py-2 font-bold text-xl">
                Ims The Complete Salesforce Classic Certification
              </div>
              <div className="w-[90%] flex justify-between mx-auto py-3 mt-2 border-t-[1px] border-stone-200">
                <p className="text-lg font-medium">$45.00</p>
                <p className="text-lg font-medium text-stone-00">Add to cart</p>
              </div>
            </div>

            {/* box3 */}
            <div className="rounded overflow-hidden shadow-lg bg-white">
              <div className="relative">
                <Image
                  className="w-full h-[322px] object-cover"
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/course3.png"
                  alt="Course"
                  width={400}
                  height={322}
                  priority
                />
                <div className="absolute flex justify-between pl-[30px] bottom-0 left-0 right-0 bg-gradient-to-t from-[#203f50] to-transparent p-4">
                  <h2 className="text-white font-semibold">Kevin Martin</h2>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-lg">★★★★★</span>
                    <span className="text-white ml-2">(29)</span>
                  </div>
                </div>
              </div>
              {/* Content Section */}
              <div className="flex justify-between px-6 py-2">
                <span className="text-gray-700 text-base">22 Lessons</span>
                <span className="text-gray-700 text-base">1 hr 17 min</span>
              </div>
              <div className="px-6 py-2 font-bold text-xl">
                Ims The Complete Salesforce Classic Certification
              </div>
              <div className="w-[90%] flex justify-between mx-auto py-3 mt-2 border-t-[1px] border-stone-200">
                <p className="text-lg font-medium">$45.00</p>
                <p className="text-lg font-medium text-stone-00">Add to cart</p>
              </div>
            </div>

            {/* box4 */}
            <div className="rounded overflow-hidden shadow-lg bg-white">
              <div className="relative">
                <Image
                  className="w-full h-[322px] object-cover"
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/course4.png"
                  alt="Course"
                  width={400}
                  height={322}
                  priority
                />
                <div className="absolute flex justify-between pl-[30px] bottom-0 left-0 right-0 bg-gradient-to-t from-[#203f50] to-transparent p-4">
                  <h2 className="text-white font-semibold">Kevin Martin</h2>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-lg">★★★★★</span>
                    <span className="text-white ml-2">(29)</span>
                  </div>
                </div>
              </div>
              {/* Content Section */}
              <div className="flex justify-between px-6 py-2">
                <span className="text-gray-700 text-base">22 Lessons</span>
                <span className="text-gray-700 text-base">1 hr 17 min</span>
              </div>
              <div className="px-6 py-2 font-bold text-xl">
                Ims The Complete Salesforce Classic Certification
              </div>
              <div className="w-[90%] flex justify-between mx-auto py-3 mt-2 border-t-[1px] border-stone-200">
                <p className="text-lg font-medium">$45.00</p>
                <p className="text-lg font-medium text-stone-00">Add to cart</p>
              </div>
            </div>

            {/* box5 */}
            <div className="rounded overflow-hidden shadow-lg bg-white">
              <div className="relative">
                <Image
                  className="w-full h-[322px] object-cover"
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/course5.png"
                  alt="Course"
                  width={400}
                  height={322}
                  priority
                />
                <div className="absolute flex justify-between pl-[30px] bottom-0 left-0 right-0 bg-gradient-to-t from-[#203f50] to-transparent p-4">
                  <h2 className="text-white font-semibold">Kevin Martin</h2>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-lg">★★★★★</span>
                    <span className="text-white ml-2">(29)</span>
                  </div>
                </div>
              </div>
              {/* Content Section */}
              <div className="flex justify-between px-6 py-2">
                <span className="text-gray-700 text-base">22 Lessons</span>
                <span className="text-gray-700 text-base">1 hr 17 min</span>
              </div>
              <div className="px-6 py-2 font-bold text-xl">
                Ims The Complete Salesforce Classic Certification
              </div>
              <div className="w-[90%] flex justify-between mx-auto py-3 mt-2 border-t-[1px] border-stone-200">
                <p className="text-lg font-medium">$45.00</p>
                <p className="text-lg font-medium text-stone-00">Add to cart</p>
              </div>
            </div>

            {/* box6 */}
            <div className="rounded overflow-hidden shadow-lg bg-white">
              <div className="relative">
                <Image
                  className="w-full h-[322px] object-cover"
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/course6.png"
                  alt="Course"
                  width={400}
                  height={322}
                  priority
                />
                <div className="absolute flex justify-between pl-[30px] bottom-0 left-0 right-0 bg-gradient-to-t from-[#203f50] to-transparent p-4">
                  <h2 className="text-white font-semibold">Kevin Martin</h2>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-lg">★★★★★</span>
                    <span className="text-white ml-2">(29)</span>
                  </div>
                </div>
              </div>
              {/* Content Section */}
              <div className="flex justify-between px-6 py-2">
                <span className="text-gray-700 text-base">22 Lessons</span>
                <span className="text-gray-700 text-base">1 hr 17 min</span>
              </div>
              <div className="px-6 py-2 font-bold text-xl">
                Ims The Complete Salesforce Classic Certification
              </div>
              <div className="w-[90%] flex justify-between mx-auto py-3 mt-2 border-t-[1px] border-stone-200">
                <p className="text-lg font-medium">$45.00</p>
                <p className="text-lg font-medium text-stone-00">Add to cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
