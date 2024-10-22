import React from "react";
import Image from "next/image";

const Team = () => {
  const bgImageUrl =
    "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/bretcome-bg.jpg";
  const anh1 =
    "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/team/team1.png";
  const anh2 =
    "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/team/team2.png";
  const anh3 =
    "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/team/team3.png";
  const anh4 =
    "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/team/team4.png";
  return (
    <div className="bg-gray-100">
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <Image
          src={bgImageUrl}
          alt="Image"
          width={1920}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold">
          Team
        </div>
        <button className="absolute bottom-0 md:left-[100px] left-[50px]  bg-[#4026E1] hover:bg-[#6854e9] text-2xl text-white font-medium px-10 py-6 rounded-t-lg">
          Home/Team
        </button>
      </div>

      <div className="text-center py-8">
        <div className="flex items-center justify-center">
          <span className="mr-2 text-3xl text-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M6 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm1 0v1h6V5zM4 4v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2m10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1z"
              />
            </svg>
          </span>
          <p className="font-extrabold text-blue-700 uppercase tracking-widest">
            Consult with your favorite
          </p>
        </div>
        <div className="border-r border-gray-300 h-6 mx-auto my-4"></div>
        <h1 className="text-5xl font-bold mt-2">Personalized Training</h1>
      </div>

      <div className="container mx-auto px-16">
        {/* 4 Card Thông Tin */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <Image
                alt="Portrait of Earle Goodman"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                src={anh1}
                width={2000}
                height={1080}
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-center text-black transition-colors duration-300 group-hover:text-blue-500">
                  Earle Goodman
                </h2>
                <p className="text-center text-gray-600">Mater Degree</p>
                {/* Icon */}
                <div className="flex justify-center mt-4 space-x-2">
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="currentColor"
                          d="M8.643 4A2.64 2.64 0 0 0 6 6.64C6 8.1 7.183 9.31 8.64 9.31c1.459 0 2.643-1.21 2.643-2.668A2.64 2.64 0 0 0 8.643 4m12.892 7c-2.219 0-3.488 1.16-4.098 2.314h-.064v-2.003H13V26h4.557v-7.271c0-1.916.144-3.768 2.515-3.768c2.337 0 2.371 2.185 2.371 3.889V26H27v-8.068C27 13.984 26.151 11 21.535 11m-15.172.31V26h4.56V11.31z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button className="bg-[#573CFF26] text-black font-bold py-3 px-12 transition-colors duration-300 hover:text-white bg-gradient-to-b hover:from-blue-500 hover:to-purple-500">
                    Book Schedule
                  </button>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <Image
                alt="Portrait of Earle Goodman"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                src={anh2}
                width={1920}
                height={400}
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-center text-black transition-colors duration-300 group-hover:text-blue-500">
                  Sarah Taylor
                </h2>
                <p className="text-center text-gray-600">UX/UI Expert</p>
                {/* Icon */}
                <div className="flex justify-center mt-4 space-x-2">
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="currentColor"
                          d="M8.643 4A2.64 2.64 0 0 0 6 6.64C6 8.1 7.183 9.31 8.64 9.31c1.459 0 2.643-1.21 2.643-2.668A2.64 2.64 0 0 0 8.643 4m12.892 7c-2.219 0-3.488 1.16-4.098 2.314h-.064v-2.003H13V26h4.557v-7.271c0-1.916.144-3.768 2.515-3.768c2.337 0 2.371 2.185 2.371 3.889V26H27v-8.068C27 13.984 26.151 11 21.535 11m-15.172.31V26h4.56V11.31z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button className="bg-[#573CFF26] text-black font-bold py-3 px-12 transition-colors duration-300 hover:text-white bg-gradient-to-b hover:from-blue-500 hover:to-purple-500">
                    Book Schedule
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <Image
                alt="Portrait of Earle Goodman"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                src={anh3}
                width={1920}
                height={400}
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-center text-black transition-colors duration-300 group-hover:text-blue-500">
                  Hunter Hunter
                </h2>
                <p className="text-center text-gray-600">Math Teacher</p>
                {/* Icon */}
                <div className="flex justify-center mt-4 space-x-2">
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="currentColor"
                          d="M8.643 4A2.64 2.64 0 0 0 6 6.64C6 8.1 7.183 9.31 8.64 9.31c1.459 0 2.643-1.21 2.643-2.668A2.64 2.64 0 0 0 8.643 4m12.892 7c-2.219 0-3.488 1.16-4.098 2.314h-.064v-2.003H13V26h4.557v-7.271c0-1.916.144-3.768 2.515-3.768c2.337 0 2.371 2.185 2.371 3.889V26H27v-8.068C27 13.984 26.151 11 21.535 11m-15.172.31V26h4.56V11.31z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button className="bg-[#573CFF26] text-black font-bold py-3 px-12 transition-colors duration-300 hover:text-white bg-gradient-to-b hover:from-blue-500 hover:to-purple-500">
                    Book Schedule
                  </button>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <Image
                alt="Portrait of Earle Goodman"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                src={anh4}
                width={2000}
                height={600}
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-center text-black transition-colors duration-300 group-hover:text-blue-500">
                  Norris Weeks
                </h2>
                <p className="text-center text-gray-600">Department Head</p>
                {/* Icon */}
                <div className="flex justify-center mt-4 space-x-2">
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="currentColor"
                          d="M8.643 4A2.64 2.64 0 0 0 6 6.64C6 8.1 7.183 9.31 8.64 9.31c1.459 0 2.643-1.21 2.643-2.668A2.64 2.64 0 0 0 8.643 4m12.892 7c-2.219 0-3.488 1.16-4.098 2.314h-.064v-2.003H13V26h4.557v-7.271c0-1.916.144-3.768 2.515-3.768c2.337 0 2.371 2.185 2.371 3.889V26H27v-8.068C27 13.984 26.151 11 21.535 11m-15.172.31V26h4.56V11.31z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button className="bg-[#573CFF26] text-black font-bold py-3 px-12 transition-colors duration-300 hover:text-white bg-gradient-to-b hover:from-blue-500 hover:to-purple-500">
                    Book Schedule
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 4 Card Thông Tin */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <Image
                alt="Portrait of Earle Goodman"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                src={anh1}
                width={2000}
                height={1080}
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-center text-black transition-colors duration-300 group-hover:text-blue-500">
                  Earle Goodman
                </h2>
                <p className="text-center text-gray-600">Mater Degree</p>
                {/* Icon */}
                <div className="flex justify-center mt-4 space-x-2">
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="currentColor"
                          d="M8.643 4A2.64 2.64 0 0 0 6 6.64C6 8.1 7.183 9.31 8.64 9.31c1.459 0 2.643-1.21 2.643-2.668A2.64 2.64 0 0 0 8.643 4m12.892 7c-2.219 0-3.488 1.16-4.098 2.314h-.064v-2.003H13V26h4.557v-7.271c0-1.916.144-3.768 2.515-3.768c2.337 0 2.371 2.185 2.371 3.889V26H27v-8.068C27 13.984 26.151 11 21.535 11m-15.172.31V26h4.56V11.31z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button className="bg-[#573CFF26] text-black font-bold py-3 px-12 transition-colors duration-300 hover:text-white bg-gradient-to-b hover:from-blue-500 hover:to-purple-500">
                    Book Schedule
                  </button>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <Image
                alt="Portrait of Earle Goodman"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                src={anh2}
                width={1920}
                height={400}
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-center text-black transition-colors duration-300 group-hover:text-blue-500">
                  Sarah Taylor
                </h2>
                <p className="text-center text-gray-600">UX/UI Expert</p>
                {/* Icon */}
                <div className="flex justify-center mt-4 space-x-2">
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="currentColor"
                          d="M8.643 4A2.64 2.64 0 0 0 6 6.64C6 8.1 7.183 9.31 8.64 9.31c1.459 0 2.643-1.21 2.643-2.668A2.64 2.64 0 0 0 8.643 4m12.892 7c-2.219 0-3.488 1.16-4.098 2.314h-.064v-2.003H13V26h4.557v-7.271c0-1.916.144-3.768 2.515-3.768c2.337 0 2.371 2.185 2.371 3.889V26H27v-8.068C27 13.984 26.151 11 21.535 11m-15.172.31V26h4.56V11.31z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button className="bg-[#573CFF26] text-black font-bold py-3 px-12 transition-colors duration-300 hover:text-white bg-gradient-to-b hover:from-blue-500 hover:to-purple-500">
                    Book Schedule
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <Image
                alt="Portrait of Earle Goodman"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                src={anh3}
                width={1920}
                height={400}
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-center text-black transition-colors duration-300 group-hover:text-blue-500">
                  Hunter Hunter
                </h2>
                <p className="text-center text-gray-600">Math Teacher</p>
                {/* Icon */}
                <div className="flex justify-center mt-4 space-x-2">
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="currentColor"
                          d="M8.643 4A2.64 2.64 0 0 0 6 6.64C6 8.1 7.183 9.31 8.64 9.31c1.459 0 2.643-1.21 2.643-2.668A2.64 2.64 0 0 0 8.643 4m12.892 7c-2.219 0-3.488 1.16-4.098 2.314h-.064v-2.003H13V26h4.557v-7.271c0-1.916.144-3.768 2.515-3.768c2.337 0 2.371 2.185 2.371 3.889V26H27v-8.068C27 13.984 26.151 11 21.535 11m-15.172.31V26h4.56V11.31z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button className="bg-[#573CFF26] text-black font-bold py-3 px-12 transition-colors duration-300 hover:text-white bg-gradient-to-b hover:from-blue-500 hover:to-purple-500">
                    Book Schedule
                  </button>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <Image
                alt="Portrait of Earle Goodman"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                src={anh4}
                width={2000}
                height={600}
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-center text-black transition-colors duration-300 group-hover:text-blue-500">
                  Norris Weeks
                </h2>
                <p className="text-center text-gray-600">Department Head</p>
                {/* Icon */}
                <div className="flex justify-center mt-4 space-x-2">
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-[38px] h-[38px] rounded-full border-2 border-[#747474] transition-colors duration-300 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-purple-500 hover:border-blue-500 flex items-center justify-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="currentColor"
                          d="M8.643 4A2.64 2.64 0 0 0 6 6.64C6 8.1 7.183 9.31 8.64 9.31c1.459 0 2.643-1.21 2.643-2.668A2.64 2.64 0 0 0 8.643 4m12.892 7c-2.219 0-3.488 1.16-4.098 2.314h-.064v-2.003H13V26h4.557v-7.271c0-1.916.144-3.768 2.515-3.768c2.337 0 2.371 2.185 2.371 3.889V26H27v-8.068C27 13.984 26.151 11 21.535 11m-15.172.31V26h4.56V11.31z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button className="bg-[#573CFF26] text-black font-bold py-3 px-12 transition-colors duration-300 hover:text-white bg-gradient-to-b hover:from-blue-500 hover:to-purple-500">
                    Book Schedule
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
