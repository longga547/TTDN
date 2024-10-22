import React from "react";
import Image from "next/image";

const BlogDetail = () => {
  return (
    <div>
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <Image
          src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/bretcome-bg.jpg"
          alt="Image"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold">
          Blog Detail
        </div>
        <button className="absolute bottom-0 md:left-[100px] left-[50px]  bg-[#4026E1] hover:bg-[#6854e9] text-2xl text-white font-medium px-10 py-6 rounded-t-lg">
          Home/Blog Detail
        </button>
      </div>
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 md:px-10 lg:px-40 mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="mb-4">
              <Image
                src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/blog/blog-detials1.png"
                alt="Blog header"
                width={1200}
                height={675}
                className="rounded-lg"
              />
              <div className="mt-4">
                <div className="p-6">
                  <div className="flex items-center space-x-3 text-gray-600 text-sm mb-4">
                    <div className="flex items-center space-x-1">
                      <i className="fas fa-user"></i> <span>By Admin</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <i className="fas fa-comments"></i>{" "}
                      <span>(06) comments</span>
                    </div>
                  </div>

                  <h1 className="text-4xl font-bold text-black mb-6">
                    Are you ready to become a best student
                  </h1>
                  <p className="text-gray-700 mb-4">
                    Mauris non dignissim purus, ac commodo diam. Donec sit amet
                    lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                    Aliquam tellus nulla, sollicitudin at euismod nec, feugiat
                    at nisi. Quisque vitae odio nec lacus interdum tempus.
                    Phasellus a rhoncus erat. Vivamus vel eros vitae.
                  </p>

                  <p className="text-gray-700">
                    Mauris non dignissim purus, ac commodo diam. Donec sit amet
                    lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                    Aliquam tellus nulla, sollicitudin at euismod nec, feugiat
                    at nisi. Quisque vitae odio nec lacus interdum tempus.
                    Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet
                    pellentesque vitae et nunc. Sed vitae leo vitae nisl
                    pellentesque semper euismod justo.
                  </p>
                </div>

                {/* Tag Section */}
                <div className="border border-gray-300 p-6 rounded-lg mt-4 mx-4 md:mx-0 whitespace-nowrap">
                  <div className="flex flex-wrap md:flex-nowrap items-center space-x-3 space-y-3 md:space-y-0 whitespace-nowrap">
                    <span className="text-black text-3xl font-semibold">
                      Tags:
                    </span>
                    <span className="bg-white text-blue-600 border border-gray-300 px-4 py-2 rounded-lg">
                      Business
                    </span>
                    <span className="bg-white text-blue-600 border border-gray-300 px-4 py-2 rounded-lg">
                      Agency
                    </span>
                    <span className="bg-white text-blue-600 border border-gray-300 px-4 py-2 rounded-lg ">
                      Technology
                    </span>
                  </div>
                </div>

                {/* Author Section */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 mt-8 ">
                  <Image
                    src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/blog/blog-team.png"
                    alt="Profile"
                    width={240}
                    height={240}
                    className="rounded object-cover"
                  />
                  <div className="mt-4 sm:mt-0">
                    <h2 className="text-3xl font-bold text-black mb-4">
                      Kevin Martin
                    </h2>
                    <p className="text-gray-600 text-2xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod tempor sed ut perspiciatis unde omnis iste
                      natus error sit voluptatem accusantium.
                    </p>
                    <div className="mt-4">
                      <span className="text-gray-700 font-semibold text-2xl">
                        Share :
                      </span>
                      <div className="inline-flex items-center space-x-3 ml-2 text-2xl">
                        <a href="#" className="text-blue-600">
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
                        </a>
                        <a href="#" className="text-blue-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="bevel"
                              strokeWidth="2"
                            >
                              <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
                              <path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01" />
                            </g>
                          </svg>
                        </a>
                        <a href="#" className="text-blue-600">
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
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Links Section */}
                <div className="flex flex-col items-center space-y-6 mt-10">
                  <div className="flex flex-col justify-center items-center border-t border-b border-indigo-600 py-4 w-full">
                    <div className="flex justify-between space-x-4 w-full px-10">
                      <a
                        href="#"
                        className="text-xl text-center text-indigo-600 hover:text-indigo-800 hover:translate-x-2 transition-all duration-300"
                      >
                        Cargo flow through better <br /> supply in UK
                      </a>
                      <a
                        href="#"
                        className="text-xl text-center text-indigo-600 hover:text-indigo-800 hover:translate-x-2 transition-all duration-300"
                      >
                        Why is supply chain visibility <br /> so important?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Comments */}
            <div className="my-8 max-w-screen-lg mx-auto ">
              <h5 className="text-2xl font-semibold mb-6">Recent Comments</h5>
              <div className="w-20 h-1 bg-[#4026E1] mb-8"></div>
              <div className="flex flex-col md:flex-row mb-12">
                <Image
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/blog/user1.png"
                  alt="User"
                  width={160}
                  height={160}
                  className="rounded-full mr-6"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h6 className="text-2xl font-semibold">Isaac Herman</h6>
                      <p className="text-lg text-gray-500">
                        June 14, 2023 / 12:00 AM
                      </p>
                    </div>
                    <button className="text-lg border px-4 py-2 rounded-lg hover:bg-gray-100">
                      Reply
                    </button>
                  </div>
                  <p className="mt-4 text-lg text-gray-700">
                    ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip e commodo consequat.
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex flex-col md:flex-row mt-12">
                <Image
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/blog/user2.png"
                  alt="User"
                  width={160}
                  height={160}
                  className="rounded-full mr-6"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h6 className="text-2xl font-semibold">George Clooney</h6>
                      <p className="text-lg text-gray-500">
                        June 14, 2023 / 12:10 AM
                      </p>
                    </div>
                    <button className="text-lg border px-4 py-2 rounded-lg hover:bg-gray-100">
                      Reply
                    </button>
                  </div>
                  <p className="mt-4 text-lg text-gray-700">
                    ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip e commodo consequat.
                  </p>
                </div>
              </div>
            </div>

            {/* Comment Form */}
            <div className="border rounded-lg shadow p-4 my-4 sm:px-6 px-4">
              <h5 className="text-xl font-semibold mb-4">Leave A Comment</h5>
              <div className="w-20 h-1 bg-[#4026E1] mb-6"></div>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    className="border p-2 rounded-lg w-full"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    className="border p-2 rounded-lg w-full"
                    placeholder="Email Address"
                  />
                </div>
                <input
                  type="url"
                  className="border p-2 rounded-lg w-full mb-4"
                  placeholder="Website"
                />
                <textarea
                  className="border p-2 rounded-lg w-full mb-4"
                  rows={6}
                  placeholder="Comment"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#4026E1] text-white px-4 py-2 rounded-lg"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="border p-4 rounded-lg shadow mb-4">
              <input type="text" className="w-full" placeholder="Search here" />
            </div>

            {/* Latest Post */}
            <div className="bg-gray-50 p-10 rounded-lg shadow-lg">
              <h3 className="text-[#4026E1] text-3xl font-bold mb-4">
                Latest Post
              </h3>
              <div className="border-t border-gray-300 mb-6"></div>
              <div className="space-y-6">
                <div className="flex items-center space-x-6 bg-white p-2 rounded-lg shadow-md">
                  <Image
                    src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/blog/recent1.png"
                    alt="Post Thumbnail"
                    width={96}
                    height={96}
                    className="object-cover rounded-lg"
                  />

                  <div>
                    <p className="text-sm text-gray-500 flex items-center space-x-1 mb-2">
                      <span>July 24, 2023</span>
                    </p>
                    <a
                      href="#"
                      className="text-xl font-semibold text-gray-900 hover:text-indigo-600"
                    >
                      Top crypto exchange influencers
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-6 bg-white p-2 rounded-lg shadow-md">
                  <Image
                    src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/blog/recent2.png"
                    alt="Post Thumbnail"
                    width={96}
                    height={96}
                    className="object-cover rounded-lg"
                  />
                  <div>
                    <p className="text-sm text-gray-500 flex items-center space-x-1 mb-2">
                      <span>July 24, 2023</span>
                    </p>
                    <a
                      href="#"
                      className="text-xl font-semibold text-gray-900 hover:text-indigo-600"
                    >
                      Will Supply Chains Become Supply
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-6 bg-white p-2 rounded-lg shadow-md">
                  <Image
                    src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/blog/recent3.png"
                    alt="Post Thumbnail"
                    width={96}
                    height={96}
                    className="object-cover rounded-lg"
                  />
                  <div>
                    <p className="text-sm text-gray-500 flex items-center space-x-1 mb-2">
                      <span>July 24, 2023</span>
                    </p>
                    <a
                      href="#"
                      className="text-xl font-semibold text-gray-900 hover:text-indigo-600"
                    >
                      Why Supply Chain Visibility Important?
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-gray-50 p-10 rounded-lg shadow-lg mt-10">
              <div className="border-b border-gray-300 pb-4 mb-4">
                <h3 className="text-[#4026E1] text-2xl font-bold">
                  Categories
                </h3>
              </div>
              <ul className="text-lg divide-y divide-gray-300">
                <li className="py-3 flex justify-between">
                  <span>Business</span>
                  <span className="text-gray-500">(07)</span>
                </li>
                <li className="py-3 flex justify-between">
                  <span>Introductions</span>
                  <span className="text-gray-500">(10)</span>
                </li>
                <li className="py-3 flex justify-between">
                  <span>One Page Template</span>
                  <span className="text-gray-500">(45)</span>
                </li>
                <li className="py-3 flex justify-between">
                  <span>Parallax Effects</span>
                  <span className="text-gray-500">(19)</span>
                </li>
                <li className="py-3 flex justify-between">
                  <span>New Technologies</span>
                  <span className="text-gray-500">(10)</span>
                </li>
                <li className="py-3 flex justify-between">
                  <span>Video Backgrounds</span>
                  <span className="text-gray-500">(45)</span>
                </li>
              </ul>
              <div className="border-t border-gray-300 mt-4"></div>
            </div>

            {/* Tags */}
            <div className="bg-gray-50 p-10 rounded-lg shadow-lg mt-10">
              <h5 className="text-2xl font-bold mb-4 text-[#4026E1] ">
                Tags Post
              </h5>
              <div className="border-t border-gray-300 mb-4"></div>
              <div className="flex flex-wrap gap-4">
                <span className="bg-white-600 text-black border border-gray-300 px-4 py-2 rounded-lg text-lg">
                  Business
                </span>
                <span className="bg-white-600 text-black border border-gray-300 px-4 py-2 rounded-lg text-lg">
                  Agency
                </span>
                <span className="bg-white-600 text-black border border-gray-300 px-4 py-2 rounded-lg text-lg">
                  Technology
                </span>
                <span className="bg-white-600 text-black border border-gray-300 px-4 py-2 rounded-lg text-lg">
                  Parallax
                </span>
                <span className="bg-white-600 text-black border border-gray-300 px-4 py-2 rounded-lg text-lg">
                  Innovative
                </span>
                <span className="bg-white-600 text-black border border-gray-300 px-4 py-2 rounded-lg text-lg">
                  Professional
                </span>
                <span className="bg-white-600 text-black border border-gray-300 px-4 py-2 rounded-lg text-lg">
                  Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
