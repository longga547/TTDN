import React from "react";
import Image from "next/image";
const CoursesDetail = () => {
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
          Courses Detail
        </div>
        <button className="absolute bottom-0 md:left-[100px] left-[50px]  bg-[#4026E1] hover:bg-[#6854e9] text-2xl text-white font-medium px-10 py-6 rounded-t-lg">
          Home/Courses Detail
        </button>
      </div>
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="max-w-6xl mx-auto p-6">
            {/* Container */}
            <div className="flex flex-col md:flex-row md:space-x-8">
              {/* Left Side */}
              <div className="w-full md:w-1/3">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center border-b ">
                      <div className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-purple-600 size-6"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m18.3 8.59l.91-.9a1 1 0 0 0-1.42-1.42l-.9.91a8 8 0 0 0-9.79 0l-.91-.92a1 1 0 0 0-1.42 1.43l.92.91A7.92 7.92 0 0 0 4 13.5a8 8 0 1 0 14.3-4.91M12 19.5a6 6 0 1 1 6-6a6 6 0 0 1-6 6m-2-15h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2m3 6a1 1 0 0 0-2 0v1.89a1.5 1.5 0 1 0 2 0Z"
                          />
                        </svg>

                        <span>Durations: </span>
                      </div>
                      <span>10 hours</span>
                    </li>{" "}
                    <br />
                    <li className="flex justify-between items-center border-b ">
                      <div className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-purple-600 size-6"
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="currentColor"
                            d="M.54 3.87L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z"
                          />
                        </svg>
                        <span>Lectures::</span>
                      </div>
                      <span>15</span>
                    </li>{" "}
                    <br />
                    <li className="flex justify-between items-center border-b ">
                      <div className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-purple-600 size-6"
                          width="1em"
                          height="1em"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48m126.42 327.25a4 4 0 0 1-6.14-.32a124.3 124.3 0 0 0-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.2 124.2 0 0 0-32.35 29.58a4 4 0 0 1-6.14.32A175.32 175.32 0 0 1 80 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 0 1-46.68 119.25"
                          />
                          <path
                            fill="currentColor"
                            d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144"
                          />
                        </svg>
                        <span> Students:</span>
                      </div>
                      <span>Max 50</span>
                    </li>{" "}
                    <br />
                    <li className="flex justify-between items-center border-b ">
                      <div className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-purple-600 size-6"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m18.3 8.59l.91-.9a1 1 0 0 0-1.42-1.42l-.9.91a8 8 0 0 0-9.79 0l-.91-.92a1 1 0 0 0-1.42 1.43l.92.91A7.92 7.92 0 0 0 4 13.5a8 8 0 1 0 14.3-4.91M12 19.5a6 6 0 1 1 6-6a6 6 0 0 1-6 6m-2-15h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2m3 6a1 1 0 0 0-2 0v1.89a1.5 1.5 0 1 0 2 0Z"
                          />
                        </svg>
                        <span>Skill Level:</span>
                      </div>
                      <span>Advanced</span>
                    </li>{" "}
                    <br />
                    <li className="flex justify-between items-center border-b ">
                      <div className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-purple-600 size-6"
                          width="1em"
                          height="1em"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill="currentColor"
                            d="M11.5 2.19C14.09 2.86 16 5.2 16 8v6l2 2v1H2v-1l2-2V8c0-2.8 1.91-5.14 4.5-5.81V1.5C8.5.67 9.17 0 10 0s1.5.67 1.5 1.5zM10 4C7.79 4 6 5.79 6 8v7h8V8c0-2.21-1.79-4-4-4M8 18h4c0 1.1-.9 2-2 2s-2-.9-2-2"
                          />
                        </svg>
                        <span> Language:</span>
                      </div>
                      <span>English</span>
                    </li>{" "}
                    <br color="black" />
                    <li className="flex justify-between items-center border-b ">
                      <div className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-purple-600 size-6"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12 4.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M8.5 7a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m.87 5.546q-.35.09-.693.202l-.959.315a2.48 2.48 0 0 0-1.626 1.71l-.399 2.88c-.09.647.253 1.18.796 1.31c1.067.255 2.851.537 5.51.537c2.66 0 4.445-.282 5.512-.537c.543-.13.885-.663.796-1.31l-.4-2.88a2.48 2.48 0 0 0-1.626-1.71l-.959-.315q-.343-.113-.692-.202a4.5 4.5 0 0 1-.572.382a4.2 4.2 0 0 1-2.058.558c-.86 0-1.57-.283-2.058-.558a4.5 4.5 0 0 1-.573-.382m.285-1.095l.194.191l.005.005l.024.022q.035.032.111.092c.1.08.251.188.444.296c.387.218.927.429 1.567.429s1.18-.21 1.567-.429a3.5 3.5 0 0 0 .554-.388l.025-.023l.004-.003l.194-.192l.268.062q.516.118 1.022.285l.96.315a3.47 3.47 0 0 1 2.29 2.44l.007.027l.406 2.936c.147 1.06-.42 2.15-1.554 2.42c-1.15.274-3.013.564-5.743.564s-4.593-.29-5.743-.564c-1.134-.27-1.701-1.36-1.555-2.42l.407-2.936l.007-.027a3.47 3.47 0 0 1 2.29-2.44l.96-.315q.506-.166 1.022-.285z"
                          />
                        </svg>
                        <span>Instructor:</span>
                      </div>
                      <span>Dylan Meringue</span>
                    </li>{" "}
                    <br />
                    <li className="flex justify-between items-center border-b ">
                      <div className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-purple-600 size-6"
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            d="M13 3L3 13m10-1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm-7-7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"
                          />
                        </svg>
                        <span>Pass Percentage:</span>
                      </div>
                      <span>85%</span>
                    </li>
                  </ul>
                  <div className="mt-6 text-center">
                    <div className="text-xl font-semibold mb-2 text-black">
                      COURSE PRICE
                    </div>
                    <div className="text-gray-400 text-sm font-bold mb-4">
                      20.00$
                    </div>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 flex items-center justify-center  ">
                      BUY THIS COURSE
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-6"
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m22 6l8 10l-8 10m8-10H2"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="mt-10 bg-slate-100">
                  <h3 className="text-2xl font-bold mb-4">New Courses</h3>
                  <div className="">
                    <div className="flex  ">
                      <Image
                        src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/latest1.jpg"
                        alt="Modern Languages"
                        className="w-16 h-16 object-cover mr-4"
                        width={64} // Provide the actual width of the image
                        height={64} // Provide the actual height of the image
                        priority
                      />

                      <div>
                        <p className="text-sm text-gray-500">by Advanced</p>
                        <h4 className="font-semibold text-lg">
                          Modern Languages
                        </h4>
                        <div className="flex text-blue-800 size-14 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex  ">
                      <Image
                        src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/latest2.jpg"
                        alt=""
                        className="w-16 h-16 object-cover mr-4"
                        width={64} // Provide the actual width of the image
                        height={64} // Provide the actual height of the image
                        priority
                      />
                      <div>
                        <p className="text-sm text-gray-500">by Advanced</p>
                        <h4 className="font-semibold text-lg">
                          Modern Technologies
                        </h4>
                        <div className="flex text-blue-800 size-14 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex  ">
                      <Image
                        src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/latest3.jpg"
                        alt="Development Studies"
                        className="w-16 h-16 object-cover mr-4"
                        width={64} // Provide the actual width of the image
                        height={64} // Provide the actual height of the image
                        priority
                      />
                      <div>
                        <p className="text-sm text-gray-500">by Advanced</p>
                        <h4 className="font-semibold text-lg">
                          Development Studies
                        </h4>
                        <div className="flex text-blue-800 size-14 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/3 mt-8 md:mt-0">
                <div>
                  <Image
                    src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/course-details.jpg"
                    alt="Course Overview"
                    className="shadow-lg w-full h-auto"
                    width={1920} // Provide the actual width of the image
                    height={1080} // Provide the actual height of the image
                    layout="responsive"
                    priority
                  />

                  <div className="mt-6">
                    <h2 className="text-3xl font-bold mb-4">Course Overview</h2>
                    <p className="text-gray-500 font-normal mb-4">
                      Lorem ipsum is simply free text used by copytyping
                      refreshing. Neque porro est qui dolorem ipsum quia quaed
                      inventore veritatis et quasi architecto beatae vitae dicta
                      sunt explicabo. Aelltes port lacus quis enim var sed
                      efficitur turpis gilla sed sit amet finibus eros. Lorem
                      Ipsum is simply dummy text of the printing.
                    </p>
                    <p className="text-gray-500 font-normal mb-4">
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged.
                    </p>

                    <h3 className="text-2xl font-bold mt-6 mb-4">
                      What You Will Learn?
                    </h3>
                    <p className="text-gray-500 font-normal">
                      Lorem ipsum is simply free text used by copytyping
                      refreshing. Neque porro est qui dolorem ipsum quia quaed
                      inventore veritatis et quasi architecto beatae vitae dicta
                      sunt explicabo.
                    </p>

                    {/* Additional Information */}
                    <div className="mt-8">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className=" p-4 rounded-lg ">
                          <h5 className="font-semibold text-lg">
                            Online degree
                          </h5>
                          <p className="text-gray-500">13 COURSES</p>
                        </div>
                        <div className=" p-4 rounded-lg ">
                          <h5 className="font-semibold text-lg">Non-degree</h5>
                          <p className="text-gray-500">38 COURSES</p>
                        </div>
                        <div className=" p-4 rounded-lg ">
                          <h5 className="font-semibold text-lg">Off campus</h5>
                          <p className="text-gray-500">26 COURSES</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetail;
