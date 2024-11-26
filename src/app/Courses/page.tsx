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
      <div className="mx-auto lg:mt-[60px] py-10 md:px-[100px] px-4">
        <p className="flex items-center gap-2 md:text-2xl text-lg text-violet-500 font-medium">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 48 48"
            >
              <path
                fill="#4026E1"
                d="M14.25 4A6.25 6.25 0 0 0 8 10.25v27.5A6.25 6.25 0 0 0 14.25 44h24.5a1.25 1.25 0 1 0 0-2.5h-24.5a3.75 3.75 0 0 1-3.675-3H37.75A2.25 2.25 0 0 0 40 36.25v-26A6.25 6.25 0 0 0 33.75 4zM37.5 36h-27V10.25a3.75 3.75 0 0 1 3.75-3.75h19.5a3.75 3.75 0 0 1 3.75 3.75zM16.25 10A2.25 2.25 0 0 0 14 12.25v4.5A2.25 2.25 0 0 0 16.25 19h15.5A2.25 2.25 0 0 0 34 16.75v-4.5A2.25 2.25 0 0 0 31.75 10zm.25 6.5v-4h15v4z"
              />
            </svg>
          </span>{" "}
          Browse Categories
        </p>
        <div className="xl:flex block justify-between items-center ">
          <div className="md:text-5xl sm:text-4xl text-2xl font-bold my-6  ">
            Top Courses Categories
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:gap-6  ">
            <p className="text-stone-500 font-medium text-lg sm:text-xl hover:text-[#4026E1] duration-300">
              Engineering
            </p>
            <p className="text-stone-500 font-medium text-lg sm:text-xl hover:text-[#4026E1] duration-300">
              Data science
            </p>
            <p className="text-stone-500 font-medium text-lg sm:text-xl hover:text-[#4026E1] duration-300">
              Graphic Design
            </p>
            <p className="text-stone-500 font-medium text-lg sm:text-xl hover:text-[#4026E1] duration-300">
              Business
            </p>
          </div>
        </div>
        {/* 6 box */}
        <div className="flex-col mt-8 space-y-8">
          <div className="row11 grid xl:grid-cols-3 lg:grid-cols-2 gap-8">
            {/* box1 */}
            <div className="rounded group overflow-hidden shadow-lg bg-white">
              <div className="relative overflow-hidden">
                <Image
                  className="w-full h-[322px] object-cover group-hover:scale-110 duration-500"
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/course1.png"
                  alt="Course"
                  width={400} // Set appropriate width
                  height={322} // Set appropriate height
                  priority
                />
                <div className="absolute top-0 right-0 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      fillRule="evenodd"
                      d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154q.448.345.885.688c.526.415.995.778 1.448 1.043s.816.385 1.126.385s.674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043q.437-.344.885-.687c1.254-.968 2.54-1.959 3.603-3.155c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.612-.737-3.778-.542-5.836 1.597a.75.75 0 0 1-1.08 0C9.402 3.882 7.236 3.687 5.624 4.424M12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382q.43.33.826.642c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16q.396-.312.826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="absolute flex items-center justify-between pl-[30px] bottom-0 left-0 right-0 bg-[#203f50] bg-opacity-30 group-hover:bg-[#4026E1] duration-500  p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-[40px] h-[40px]">
                      <Image
                        className="hidden group-hover:block duration-500"
                        src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/shape1.png"
                        alt="Course"
                        width={40}
                        height={40}
                        priority
                      />
                    </div>
                    <div className=" text-white font-semibold ">Kevin Martin</div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-2xl">★★★★★</span>
                    <span className="text-white text-xl ml-2">(29)</span>
                  </div>
                </div>
              </div>
              {/* Content Section */}
              <div className="flex justify-between px-6 py-2">
                <p className="flex gap-2 items-center text-gray-700 text-base">
                  {" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="none"
                        stroke="#4026E1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7S9 1 2 6v22c7-5 14 0 14 0s7-5 14 0V6c-7-5-14 1-14 1m0 0v21"
                      />
                    </svg>
                  </span>
                  22 Lessons
                </p>
                <p className="flex items-center gap-2 text-gray-700 text-base">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="#4026E1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M11 8v5h5" />
                      </g>
                    </svg>
                  </span>
                  1 hr 17 min
                </p>
              </div>
              <div className="px-6 py-2 font-bold text-xl group-hover:text-[#4026E1]">
                Ims The Complete Salesforce Classic Certification
              </div>
              <div className="w-[90%] flex justify-between mx-auto py-3 mt-2 border-t-[1px] border-stone-200">
                <p className="text-lg font-medium">$45.00</p>
                <p className="flex items-center gap-2 text-lg font-medium text-stone-500">
                  {" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#4026E1"
                        d="M14 13.1V12H4.6l.6-1.1l9.2-.9L16 4H3.7L3 1H0v1h2.2l2.1 8.4L3 13v1.5c0 .8.7 1.5 1.5 1.5S6 15.3 6 14.5S5.3 13 4.5 13H12v1.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4"
                      />
                    </svg>
                  </span>
                  Add to cart
                </p>
              </div>
            </div>

            {/* box2 */}
            <div className="rounded group overflow-hidden shadow-lg bg-white">
              <div className="relative overflow-hidden">
                <Image
                  className="w-full h-[322px] object-cover group-hover:scale-110 duration-500"
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/course2.png"
                  alt="Course"
                  width={400} // Set appropriate width
                  height={322} // Set appropriate height
                  priority
                />
                <div className="absolute top-0 right-0 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      fillRule="evenodd"
                      d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154q.448.345.885.688c.526.415.995.778 1.448 1.043s.816.385 1.126.385s.674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043q.437-.344.885-.687c1.254-.968 2.54-1.959 3.603-3.155c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.612-.737-3.778-.542-5.836 1.597a.75.75 0 0 1-1.08 0C9.402 3.882 7.236 3.687 5.624 4.424M12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382q.43.33.826.642c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16q.396-.312.826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="absolute flex items-center justify-between pl-[30px] bottom-0 left-0 right-0 bg-[#203f50] bg-opacity-30 group-hover:bg-[#4026E1] duration-500  p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-[40px] h-[40px]">
                      <Image
                        className="hidden group-hover:block duration-500"
                        src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/shape1.png"
                        alt="Course"
                        width={40}
                        height={40}
                        priority
                      />
                    </div>
                    <div className=" text-white font-semibold ">Kevin Martin</div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-2xl">★★★★★</span>
                    <span className="text-white text-xl ml-2">(29)</span>
                  </div>
                </div>
              </div>
              {/* Content Section */}
              <div className="flex justify-between px-6 py-2">
                <p className="flex gap-2 items-center text-gray-700 text-base">
                  {" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="none"
                        stroke="#4026E1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7S9 1 2 6v22c7-5 14 0 14 0s7-5 14 0V6c-7-5-14 1-14 1m0 0v21"
                      />
                    </svg>
                  </span>
                  22 Lessons
                </p>
                <p className="flex items-center gap-2 text-gray-700 text-base">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="#4026E1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M11 8v5h5" />
                      </g>
                    </svg>
                  </span>
                  1 hr 17 min
                </p>
              </div>
              <div className="px-6 py-2 font-bold text-xl group-hover:text-[#4026E1]">
                Ims The Complete Salesforce Classic Certification
              </div>
              <div className="w-[90%] flex justify-between mx-auto py-3 mt-2 border-t-[1px] border-stone-200">
                <p className="text-lg font-medium">$45.00</p>
                <p className="flex items-center gap-2 text-lg font-medium text-stone-500">
                  {" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#4026E1"
                        d="M14 13.1V12H4.6l.6-1.1l9.2-.9L16 4H3.7L3 1H0v1h2.2l2.1 8.4L3 13v1.5c0 .8.7 1.5 1.5 1.5S6 15.3 6 14.5S5.3 13 4.5 13H12v1.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4"
                      />
                    </svg>
                  </span>
                  Add to cart
                </p>
              </div>
            </div>

            {/* box3 */}
            <div className="rounded group overflow-hidden shadow-lg bg-white">
              <div className="relative overflow-hidden">
                <Image
                  className="w-full h-[322px] object-cover group-hover:scale-110 duration-500"
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/course3.png"
                  alt="Course"
                  width={400} // Set appropriate width
                  height={322} // Set appropriate height
                  priority
                />
                <div className="absolute top-0 right-0 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      fillRule="evenodd"
                      d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154q.448.345.885.688c.526.415.995.778 1.448 1.043s.816.385 1.126.385s.674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043q.437-.344.885-.687c1.254-.968 2.54-1.959 3.603-3.155c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.612-.737-3.778-.542-5.836 1.597a.75.75 0 0 1-1.08 0C9.402 3.882 7.236 3.687 5.624 4.424M12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382q.43.33.826.642c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16q.396-.312.826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="absolute flex items-center justify-between pl-[30px] bottom-0 left-0 right-0 bg-[#203f50] bg-opacity-30 group-hover:bg-[#4026E1] duration-500  p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-[40px] h-[40px]">
                      <Image
                        className="hidden group-hover:block duration-500"
                        src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/shape1.png"
                        alt="Course"
                        width={40}
                        height={40}
                        priority
                      />
                    </div>
                    <div className=" text-white font-semibold ">Kevin Martin</div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-2xl">★★★★★</span>
                    <span className="text-white text-xl ml-2">(29)</span>
                  </div>
                </div>
              </div>
              {/* Content Section */}
              <div className="flex justify-between px-6 py-2">
                <p className="flex gap-2 items-center text-gray-700 text-base">
                  {" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="none"
                        stroke="#4026E1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7S9 1 2 6v22c7-5 14 0 14 0s7-5 14 0V6c-7-5-14 1-14 1m0 0v21"
                      />
                    </svg>
                  </span>
                  22 Lessons
                </p>
                <p className="flex items-center gap-2 text-gray-700 text-base">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="#4026E1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M11 8v5h5" />
                      </g>
                    </svg>
                  </span>
                  1 hr 17 min
                </p>
              </div>
              <div className="px-6 py-2 font-bold text-xl group-hover:text-[#4026E1]">
                Ims The Complete Salesforce Classic Certification
              </div>
              <div className="w-[90%] flex justify-between mx-auto py-3 mt-2 border-t-[1px] border-stone-200">
                <p className="text-lg font-medium">$45.00</p>
                <p className="flex items-center gap-2 text-lg font-medium text-stone-500">
                  {" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#4026E1"
                        d="M14 13.1V12H4.6l.6-1.1l9.2-.9L16 4H3.7L3 1H0v1h2.2l2.1 8.4L3 13v1.5c0 .8.7 1.5 1.5 1.5S6 15.3 6 14.5S5.3 13 4.5 13H12v1.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4"
                      />
                    </svg>
                  </span>
                  Add to cart
                </p>
              </div>
            </div>

            {/* box4 */}
            <div className="rounded group overflow-hidden shadow-lg bg-white">
              <div className="relative overflow-hidden">
                <Image
                  className="w-full h-[322px] object-cover group-hover:scale-110 duration-500"
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/course4.png"
                  alt="Course"
                  width={400} // Set appropriate width
                  height={322} // Set appropriate height
                  priority
                />
                <div className="absolute top-0 right-0 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      fillRule="evenodd"
                      d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154q.448.345.885.688c.526.415.995.778 1.448 1.043s.816.385 1.126.385s.674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043q.437-.344.885-.687c1.254-.968 2.54-1.959 3.603-3.155c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.612-.737-3.778-.542-5.836 1.597a.75.75 0 0 1-1.08 0C9.402 3.882 7.236 3.687 5.624 4.424M12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382q.43.33.826.642c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16q.396-.312.826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="absolute flex items-center justify-between pl-[30px] bottom-0 left-0 right-0 bg-[#203f50] bg-opacity-30 group-hover:bg-[#4026E1] duration-500  p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-[40px] h-[40px]">
                      <Image
                        className="hidden group-hover:block duration-500"
                        src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/course5.png"
                        alt="Course"
                        width={40}
                        height={40}
                        priority
                      />
                    </div>
                    <div className=" text-white font-semibold ">Kevin Martin</div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-2xl">★★★★★</span>
                    <span className="text-white text-xl ml-2">(29)</span>
                  </div>
                </div>
              </div>
              {/* Content Section */}
              <div className="flex justify-between px-6 py-2">
                <p className="flex gap-2 items-center text-gray-700 text-base">
                  {" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="none"
                        stroke="#4026E1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7S9 1 2 6v22c7-5 14 0 14 0s7-5 14 0V6c-7-5-14 1-14 1m0 0v21"
                      />
                    </svg>
                  </span>
                  22 Lessons
                </p>
                <p className="flex items-center gap-2 text-gray-700 text-base">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="#4026E1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M11 8v5h5" />
                      </g>
                    </svg>
                  </span>
                  1 hr 17 min
                </p>
              </div>
              <div className="px-6 py-2 font-bold text-xl group-hover:text-[#4026E1]">
                Ims The Complete Salesforce Classic Certification
              </div>
              <div className="w-[90%] flex justify-between mx-auto py-3 mt-2 border-t-[1px] border-stone-200">
                <p className="text-lg font-medium">$45.00</p>
                <p className="flex items-center gap-2 text-lg font-medium text-stone-500">
                  {" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#4026E1"
                        d="M14 13.1V12H4.6l.6-1.1l9.2-.9L16 4H3.7L3 1H0v1h2.2l2.1 8.4L3 13v1.5c0 .8.7 1.5 1.5 1.5S6 15.3 6 14.5S5.3 13 4.5 13H12v1.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4"
                      />
                    </svg>
                  </span>
                  Add to cart
                </p>
              </div>
            </div>

            {/* box5 */}
            <div className="rounded group overflow-hidden shadow-lg bg-white">
              <div className="relative overflow-hidden">
                <Image
                  className="w-full h-[322px] object-cover group-hover:scale-110 duration-500"
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/course5.png"
                  alt="Course"
                  width={400} // Set appropriate width
                  height={322} // Set appropriate height
                  priority
                />
                <div className="absolute top-0 right-0 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      fillRule="evenodd"
                      d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154q.448.345.885.688c.526.415.995.778 1.448 1.043s.816.385 1.126.385s.674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043q.437-.344.885-.687c1.254-.968 2.54-1.959 3.603-3.155c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.612-.737-3.778-.542-5.836 1.597a.75.75 0 0 1-1.08 0C9.402 3.882 7.236 3.687 5.624 4.424M12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382q.43.33.826.642c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16q.396-.312.826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="absolute flex items-center justify-between pl-[30px] bottom-0 left-0 right-0 bg-[#203f50] bg-opacity-30 group-hover:bg-[#4026E1] duration-500  p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-[40px] h-[40px]">
                      <Image
                        className="hidden group-hover:block duration-500"
                        src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/shape1.png"
                        alt="Course"
                        width={40}
                        height={40}
                        priority
                      />
                    </div>
                    <div className=" text-white font-semibold ">Kevin Martin</div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-2xl">★★★★★</span>
                    <span className="text-white text-xl ml-2">(29)</span>
                  </div>
                </div>
              </div>
              {/* Content Section */}
              <div className="flex justify-between px-6 py-2">
                <p className="flex gap-2 items-center text-gray-700 text-base">
                  {" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="none"
                        stroke="#4026E1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7S9 1 2 6v22c7-5 14 0 14 0s7-5 14 0V6c-7-5-14 1-14 1m0 0v21"
                      />
                    </svg>
                  </span>
                  22 Lessons
                </p>
                <p className="flex items-center gap-2 text-gray-700 text-base">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="#4026E1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M11 8v5h5" />
                      </g>
                    </svg>
                  </span>
                  1 hr 17 min
                </p>
              </div>
              <div className="px-6 py-2 font-bold text-xl group-hover:text-[#4026E1]">
                Ims The Complete Salesforce Classic Certification
              </div>
              <div className="w-[90%] flex justify-between mx-auto py-3 mt-2 border-t-[1px] border-stone-200">
                <p className="text-lg font-medium">$45.00</p>
                <p className="flex items-center gap-2 text-lg font-medium text-stone-500">
                  {" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#4026E1"
                        d="M14 13.1V12H4.6l.6-1.1l9.2-.9L16 4H3.7L3 1H0v1h2.2l2.1 8.4L3 13v1.5c0 .8.7 1.5 1.5 1.5S6 15.3 6 14.5S5.3 13 4.5 13H12v1.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4"
                      />
                    </svg>
                  </span>
                  Add to cart
                </p>
              </div>
            </div>

            {/* box6 */}
            <div className="rounded group overflow-hidden shadow-lg bg-white">
              <div className="relative overflow-hidden">
                <Image
                  className="w-full h-[322px] object-cover group-hover:scale-110 duration-500"
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/course6.png"
                  alt="Course"
                  width={400} // Set appropriate width
                  height={322} // Set appropriate height
                  priority
                />
                <div className="absolute top-0 right-0 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      fillRule="evenodd"
                      d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154q.448.345.885.688c.526.415.995.778 1.448 1.043s.816.385 1.126.385s.674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043q.437-.344.885-.687c1.254-.968 2.54-1.959 3.603-3.155c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.612-.737-3.778-.542-5.836 1.597a.75.75 0 0 1-1.08 0C9.402 3.882 7.236 3.687 5.624 4.424M12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382q.43.33.826.642c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16q.396-.312.826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="absolute flex items-center justify-between pl-[30px] bottom-0 left-0 right-0 bg-[#203f50] bg-opacity-30 group-hover:bg-[#4026E1] duration-500  p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-[40px] h-[40px]">
                      <Image
                        className="hidden group-hover:block duration-500"
                        src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/shape1.png"
                        alt="Course"
                        width={40}
                        height={40}
                        priority
                      />
                    </div>
                    <div className=" text-white font-semibold ">Kevin Martin</div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-2xl">★★★★★</span>
                    <span className="text-white text-xl ml-2">(29)</span>
                  </div>
                </div>
              </div>
              {/* Content Section */}
              <div className="flex justify-between px-6 py-2">
                <p className="flex gap-2 items-center text-gray-700 text-base">
                  {" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="none"
                        stroke="#4026E1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7S9 1 2 6v22c7-5 14 0 14 0s7-5 14 0V6c-7-5-14 1-14 1m0 0v21"
                      />
                    </svg>
                  </span>
                  22 Lessons
                </p>
                <p className="flex items-center gap-2 text-gray-700 text-base">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="#4026E1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M11 8v5h5" />
                      </g>
                    </svg>
                  </span>
                  1 hr 17 min
                </p>
              </div>
              <div className="px-6 py-2 font-bold text-xl group-hover:text-[#4026E1]">
                Ims The Complete Salesforce Classic Certification
              </div>
              <div className="w-[90%] flex justify-between mx-auto py-3 mt-2 border-t-[1px] border-stone-200">
                <p className="text-lg font-medium">$45.00</p>
                <p className="flex items-center gap-2 text-lg font-medium text-stone-500">
                  {" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#4026E1"
                        d="M14 13.1V12H4.6l.6-1.1l9.2-.9L16 4H3.7L3 1H0v1h2.2l2.1 8.4L3 13v1.5c0 .8.7 1.5 1.5 1.5S6 15.3 6 14.5S5.3 13 4.5 13H12v1.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4"
                      />
                    </svg>
                  </span>
                  Add to cart
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
