import Image from "next/image";
export default async  function Home() {
  //  Browse Categories 1

  const categories = [
    {
      src: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/catagories/catagories3.png",
      title: "Graphic Design",
    },
    {
      src: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/catagories/catagories4.png",
      title: "Art & Humanities",
    },
    {
      src: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/catagories/catagories5.png",
      title: "Mobile Application",
    },
    {
      src: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/catagories/catagories6.png",
      title: "Development",
    },
    {
      src: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/catagories/catagories1.png",
      title: "Photography",
    },
    {
      src: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/catagories/catagories2.png",
      title: "Web Development",
    },
  ];

  // Browse Categories 2

  const coursesCates = [
    {
      id: 1,
      name: "Engineering",
    },
    {
      id: 2,
      name: "Data science",
    },
    {
      id: 3,
      name: "Graphic Design",
    },
    {
      id: 4,
      name: "Business",
    },
  ];
  const courses = [
    {
      id: 1,
      nameLesson: "lms The Complete Salesforce	Classic Certification",
      anh: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/course1.png",
      teacherAnh:
        "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/shape1.png",
      teacherName: "Kevin Martin",
      star: 29,
      lesson: 23,
      time: "1 hr 17 min",
      cost: 45,
    },
    {
      id: 2,
      nameLesson: "lms The Complete Salesforce	Classic Certification",
      anh: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/course2.png",
      teacherAnh:
        "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/shape2.png",
      teacherName: "Gus Atkinson",
      star: 29,
      lesson: 24,
      time: "1 hr 17 min",
      cost: 49,
    },
    {
      id: 3,
      nameLesson: "lms The Complete Salesforce	Classic Certification",
      anh: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/course3.png",
      teacherAnh:
        "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/shape2.png",
      teacherName: "Gus Atkinson",
      star: 29,
      lesson: 24,
      time: "1 hr 17 min",
      cost: 49,
    },
    {
      id: 4,
      nameLesson: "lms The Complete Salesforce	Classic Certification",
      anh: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/course4.png",
      teacherAnh:
        "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/shape2.png",
      teacherName: "Gus Atkinson",
      star: 29,
      lesson: 24,
      time: "1 hr 17 min",
      cost: 49,
    },
    {
      id: 5,
      nameLesson: "lms The Complete Salesforce	Classic Certification",
      anh: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/course5.png",
      teacherAnh:
        "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/shape2.png",
      teacherName: "Gus Atkinson",
      star: 29,
      lesson: 24,
      time: "1 hr 17 min",
      cost: 49,
    },
    {
      id: 6,
      nameLesson: "lms The Complete Salesforce	Classic Certification",
      anh: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/course6.png",
      teacherAnh:
        "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/course/shape2.png",
      teacherName: "Gus Atkinson",
      star: 29,
      lesson: 24,
      time: "1 hr 17 min",
      cost: 49,
    },
  ];

  // Choose From 5,000 Online

  const upcomingCourses = [
    {
      id: 1,
      anh: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/choose1.png",
      name: "The Complete Salesforce To Classic Certification",
      address: " Humberg City, Germany",
      time: "August 31, 2024",
    },
    {
      id: 2,
      anh: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/choose2.png",
      name: "The Complete Salesforce To Classic Certification",
      address: " Humberg City, Germany",
      time: "August 31, 2024",
    },
    {
      id: 3,
      anh: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/choose3.png",
      name: "The Complete Salesforce To Classic Certification",
      address: " Humberg City, Germany",
      time: "August 31, 2024",
    },
    {
      id: 4,
      anh: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/choose4.png",
      name: "The Complete Salesforce To Classic Certification",
      address: " Humberg City, Germany",
      time: "August 31, 2024",
    },
  ];

  // Consult with your favorite

  const personalisedTrainings = [
    {
      id: 1,
      anh: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/team/team1.png",
    },
    {
      id: 2,
      anh: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/team/team2.png",
    },
    {
      id: 3,
      anh: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/team/team3.png",
    },
    {
      id: 4,
      anh: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/team/team4.png",
    },
  ];

  //Duy
  // News & Blogs
  interface Blog {
    id: number;
    title: string;
    description: string;
    content: string;
  }
  interface BlogData {
    data: Blog[];
  }
  async function getBlogData(): Promise<BlogData> {
    const res = await fetch("https://api-core.dsp.one/api/auth/post", {
      cache: "no-store",
    });
    return res.json();
  }
  const blogData = await getBlogData();
  console.log(blogData); 
  // News & Blogs
  return (
    <div>
      <main>
        {/* Banner */}
        <div className="relative flex items-center h-screen bg-gradient-to-r from-purple-500 to-blue-500 ">
          <div className="absolute lg:w-2/3 text-white md:ml-[80px] ml-[10px] md:p-6 px-2 z-10">
            <h5 className="lg:text-2xl text-xl font-bold mt-4 mb-8">
              100% Satisfaction Guarantee
            </h5>
            <h1 className="lg:text-7xl text-6xl font-bold ">
              Learn Skills From Our Top Instructors
            </h1>
            <div className="flex items-center justify-between my-5">
              {/* nút Our Courses */}
              <div className="relative bg-white text-xl text-purple-600 font-semibold py-4 px-8 rounded-3xl shadow-lg overflow-hidden transition-all duration-300 group">
                <span className="absolute inset-0 bg-[#020d23] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-3xl"></span>
                <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                  Our Courses
                </span>
              </div>
              {/* nút Our Courses */}
              {/* box view */}
              <div className="hidden md:block bg-white rounded-md py-6 px-8 z-20  ">
                <div className="flex -space-x-2">
                  <Image
                    alt="Instructor 1"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src="https://storage.googleapis.com/a1aa/image/WvRMeRDFny1lOSwBoZffSLRZqUbHheKp10wbtG370A2VoxdPB.jpg"
                    width={40}
                    height={40}
                  />
                  <Image
                    alt="Instructor 2"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src="https://storage.googleapis.com/a1aa/image/eb6zpRHlGz0zBCumCWupZo77YG662suquauKLU0525pBNu7JA.jpg"
                    width={40}
                    height={40}
                  />
                  <Image
                    alt="Instructor 3"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src="https://storage.googleapis.com/a1aa/image/vp97mgLh14KvKBPlffo21xUIbdBWwn4hMO3y9XeYoyuB04unA.jpg"
                    width={40}
                    height={40}
                  />
                  <Image
                    alt="Instructor 4"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src="https://storage.googleapis.com/a1aa/image/I3lhmNwlGSZYCxuvjThv5ClSjAuLN5G8T0W4M2tFDnTgG39E.jpg"
                    width={40}
                    height={40}
                  />
                  <Image
                    alt="Instructor 5"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src="https://storage.googleapis.com/a1aa/image/5kWMkYGLnexZGqg3RWuP8ACupqscGgfVMsxBgNztXmO9Zc3TA.jpg"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex mt-5 items-center">
                  <span className="mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#f0e800"
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      />
                    </svg>
                  </span>
                  <span className="font-bold text-[#022C5D]">4.5</span>
                  <span className="text-[#022C5D]"> (750K Reviews)</span>
                  <span className="ml-4 text-[#022C5D] text-xl">➔</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full overflow-hidden relative z-0">
            <Image
              src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/slider/slider-thumb.png"
              alt=""
              className="absolute top-0 right-0 w-auto h-full object-cover hidden md:block"
              width={650}
              height={200}
              priority
            />
          </div>
        </div>
        {/* Browse Categories 1 */}
        <div className="mx-auto lg:mt-[60px] py-10 md:px-[100px] sm:px-[60px] px-4">
          <div className="relative flex justify-between items-center ">
            <div className="flex items-center gap-2 md:text-2xl text-lg text-violet-500 font-medium">
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
            </div>
            <div className="hidden md:block ">
              <div className="flex gap-6">
                <div className="flex items-center justify-center w-[50px] h-[50px] rounded-[50%] bg-violet-500">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 6 16"
                    >
                      <path
                        fill="white"
                        d="M5.5 13a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71l4.5-4.49c.2-.2.51-.2.71 0s.2.51 0 .71L1.71 8l4.15 4.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
                      />
                    </svg>
                  </i>
                </div>
                <div className="flex items-center justify-center w-[50px] h-[50px] rounded-[50%] bg-violet-500">
                  <i className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 6 16"
                    >
                      <path
                        fill="white"
                        d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15"
                      />
                    </svg>
                  </i>
                </div>
              </div>
            </div>
          </div>

          <div className="md:text-5xl sm:text-4xl text-2xl font-bold my-6 ">
            Top Courses Categories
          </div>

          {/* image */}
          <div className="mt-10">
            <div className="flex gap-5 md:gap-12 overflow-x-auto snap-x snap-mandatory scrollbar-hidden ">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex-col items-center snap-center  flex-shrink-0"
                >
                  <div className="relative md:w-[284px] md:h-[384px] sm:w-[200px] sm:h-[300px] w-[180px] h-[280px] overflow-hidden">
                    <Image
                      className="w-full transition-transform duration-300 transform hover:scale-115"
                      src={category.src}
                      alt={category.title}
                      width={284}
                      height={384}
                      priority
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-30 opacity-0 transition-opacity duration-300 hover:opacity-100">
                      <span className="text-xl text-white font-semibold">
                        Visit
                      </span>
                    </div>
                  </div>
                  <span className="flex justify-center mt-6 md:text-2xl text-xl font-semibold">
                    {category.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Browse Categories 2 */}
        <div className="mx-auto lg:mt-[60px] py-10 md:px-[100px] sm:px-[60px] px-4">
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
            <div className="grid grid-cols-2 sm:grid-cols-4 md:gap-6 ">
              {coursesCates.map((coursesCate, index) => (
                <p
                  key={index}
                  className="text-stone-500 text-center font-medium text-lg sm:text-xl hover:text-[#4026E1] duration-300"
                >
                  {coursesCate.name}
                </p>
              ))}
            </div>
          </div>
          {/* 6 box */}
          <div className="flex-col mt-8 space-y-8">
            <div className="row11 grid xl:grid-cols-3 md:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="rounded group overflow-hidden shadow-lg bg-white"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      className="w-full h-[322px] object-cover group-hover:scale-110 duration-500"
                      src={course.anh}
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
                            src={course.teacherAnh}
                            alt="Course"
                            width={40}
                            height={40}
                            priority
                          />
                        </div>
                        <div className=" text-white font-semibold ">
                          {course.teacherName}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-yellow-400 text-2xl">★★★★★</span>
                        <span className="text-white text-xl ml-2">
                          ({course.star})
                        </span>
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
                      {course.lesson} Lessons
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
                      {course.time}
                    </p>
                  </div>
                  <div className="px-6 py-2 font-bold text-xl group-hover:text-[#4026E1]">
                    {course.nameLesson}
                  </div>
                  <div className="w-[90%] flex justify-between mx-auto py-3 mt-2 border-t-[1px] border-stone-200">
                    <p className="text-lg font-medium">${course.cost}.00</p>
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
              ))}
            </div>
          </div>
        </div>
        {/* One Platfrom Many Courses You */}
        <div className="flex my-4 ">
          <div className="relative sm:flex md:px-[100px] sm:px-[60px] px-4 md:py-[80px] py-8 w-full lg:w-1/2 md:h-[500px]">
            {/* Background Image */}
            <Image
              src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/help-bg.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-0"
            />
            {/* Content */}
            <div className="relative z-10 flex-col space-y-6">
              <div>
                <p className="text-white font-medium text-xl">
                  BEST LEARNING PLATFORM
                </p>
              </div>
              <div>
                <h1 className="text-white text-5xl font-medium w-full">
                  One Platform Many Courses You
                </h1>
              </div>
              <div className="space-y-4 my-4 sm:mt-10 font-medium">
                <p className="text-white flex items-center">
                  <span className="p-1 rounded-full bg-[#573CFF] w-5 h-5 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12px"
                      height="12px"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M16.972 6.251a2 2 0 0 0-2.72.777l-3.713 6.682l-2.125-2.125a2 2 0 1 0-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 0 0 1.471-1.009l5-9a2 2 0 0 0-.776-2.72"
                      />
                    </svg>
                  </span>
                  Easy Online Learning Platform
                </p>
                <p className="text-white flex items-center">
                  <span className="p-1 rounded-full bg-[#573CFF] w-5 h-5 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12px"
                      height="12px"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M16.972 6.251a2 2 0 0 0-2.72.777l-3.713 6.682l-2.125-2.125a2 2 0 1 0-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 0 0 1.471-1.009l5-9a2 2 0 0 0-.776-2.72"
                      />
                    </svg>
                  </span>
                  98% Course Completion Rates
                </p>
                <p className="text-white flex items-center">
                  <span className="p-1 rounded-full bg-[#573CFF] w-5 h-5 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12px"
                      height="12px"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M16.972 6.251a2 2 0 0 0-2.72.777l-3.713 6.682l-2.125-2.125a2 2 0 1 0-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 0 0 1.471-1.009l5-9a2 2 0 0 0-.776-2.72"
                      />
                    </svg>
                  </span>
                  Friendly Environments & Teachers
                </p>
              </div>
            </div>
            {/* Responsive */}
            <div className="relative z-10 w-1/2 block sm:hidden md:block lg:hidden sm:my-2 my-6 ">
              <div className="flex justify-center items-center w-[280px] h-[180px] top-[150px] bg-gradient-to-t from-[#836FFB] to-[#573CFF] text-white p-4">
                <div className="flex-col justify-center space-y-4">
                  <p className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50px"
                      height="50px"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="white"
                        strokeWidth="1.5"
                        d="m4 11.5l-.485.121A2 2 0 0 0 2 13.561v1.877a2 2 0 0 0 1.515 1.94l1.74.435A.6.6 0 0 0 6 17.231v-5.463a.6.6 0 0 0-.746-.582zm0 0V11a8 8 0 1 1 16 0v.5m0 0l.485.121A2 2 0 0 1 22 13.561v1.877a2 2 0 0 1-1.515 1.94L20 17.5m0-6l-1.255-.314a.6.6 0 0 0-.745.582v5.463a.6.6 0 0 0 .745.582L20 17.5m-5 3h3a2 2 0 0 0 2-2v-1m-5 3a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0 0 3h3a1.5 1.5 0 0 0 1.5-1.5Z"
                      />
                    </svg>
                  </p>
                  <p className="text-xl font-medium flex justify-center">
                    Need Help? Call us
                  </p>
                  <p className="sm:text-2xl text-xl font-semibold">
                    +91 458 654 528
                  </p>
                </div>
              </div>
            </div>
            {/* Responsive */}
          </div>

          <div className="relative w-1/2 hidden lg:block ">
            <div className="img w-full h-full">
              <Image
                className="w-full h-full object-cover"
                src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/help-thumb.png"
                alt="Help"
                width={500}
                height={500}
                priority
              />
            </div>
            <div className="absolute flex justify-center items-center w-[350px] h-[200px] top-[150px] bg-gradient-to-t from-[#836FFB] to-[#573CFF] hover:from-[#001f2e] hover:to-[#00344a] text-white p-4 transition-colors duration-600">
              <div className="flex-col justify-center space-y-4">
                <p className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                      d="m4 11.5l-.485.121A2 2 0 0 0 2 13.561v1.877a2 2 0 0 0 1.515 1.94l1.74.435A.6.6 0 0 0 6 17.231v-5.463a.6.6 0 0 0-.746-.582zm0 0V11a8 8 0 1 1 16 0v.5m0 0l.485.121A2 2 0 0 1 22 13.561v1.877a2 2 0 0 1-1.515 1.94L20 17.5m0-6l-1.255-.314a.6.6 0 0 0-.745.582v5.463a.6.6 0 0 0 .745.582L20 17.5m-5 3h3a2 2 0 0 0 2-2v-1m-5 3a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0 0 3h3a1.5 1.5 0 0 0 1.5-1.5Z"
                    />
                  </svg>
                </p>
                <p className="text-xl font-medium flex justify-center">
                  Need Help? Call us
                </p>
                <p className="text-2xl font-semibold">+91 458 654 528</p>
              </div>
            </div>
          </div>
        </div>
        {/* Choose From 5,000 Online */}
        <div className="mx-auto lg:mt-[60px] py-10 md:px-[100px] sm:px-[60px] px-10 ">
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
            Choose From 5,000 Online
          </p>
          <div className="lg:flex lg:justify-between items-center ">
            <div className="md:text-5xl sm:text-4xl text-2xl font-bold my-6 ">
              Upcoming Course Section
            </div>
            <div className="flex items-center justify-center gap-2 bg-[#573CFF] hover:bg-[black] duration-500 w-[185px] p-4 my-4 md:text-xl text-center text-white font-medium  ">
              View All
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 1024 1024"
                >
                  <rect width="1024" height="1024" fill="none" />
                  <path
                    fill="#fff"
                    d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="4box flex-col space-y-4 ">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              {upcomingCourses.map((upcomingCourse, index) => (
                <div
                  key={index}
                  className="block sm:flex bg-white p-12 gap-8 space-y-4  shadow-lg"
                >
                  <div>
                    <Image
                      src={upcomingCourse.anh}
                      alt="hi"
                      className="duration-300 hover:scale-110 hover:brightness-110 mx-auto"
                      width={200}
                      height={150}
                      priority
                    />
                  </div>
                  <div>
                    <div className="sm:text-left text-center">
                      <p className="text-[#573CFF] font-medium">
                        {upcomingCourse.time}
                      </p>
                      <h3 className="text-xl font-semibold my-4 hover:text-[#573CFF] duration-500">
                        {upcomingCourse.name}
                      </h3>
                      <p className="text-[#747474] font-medium">
                        {upcomingCourse.address}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Consult with your favorite */}
        <div className="mx-auto mt-[60px] py-10 lg:px-[100px] sm:px-[60px] px-[20px] bg-[#F9F8FF]">
          <div className="space-y-4">
            <p className="flex items-center justify-center gap-2 text-[#4026E1] font-medium text-xl tracking-widest">
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
              Consult with your favorite
            </p>
            <h1 className="text-5xl font-medium text-center">
              Personalised Training
            </h1>
          </div>
          <div className="4teacher grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-12">
            {personalisedTrainings.map((personalisedTraining, index) => (
              <div
                key={index}
                className="bg-white rounded-md space-y-4 pb-8 group"
              >
                <div className="overflow-hidden">
                  <Image
                    className="w-full duration-300 group-hover:scale-110"
                    src={personalisedTraining.anh}
                    alt=""
                    width={300} // Set appropriate width
                    height={300} // Set appropriate height
                    priority
                  />
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-medium text-center  group-hover:text-[#4026E1] duration-500">
                      Earle Goodman
                    </h3>
                    <p className="text-[#747474] text-center">
                      Master s Degree
                    </p>
                  </div>
                  {/* icon */}
                  <div className="flex gap-3 justify-center ">
                    <div className=" flex items-center hover:bg-[#4026E1] hover:border-0 w-[38px] h-[38px] rounded-[50%] border-2 border-[#747474]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        className="mx-auto fill-[#747474] hover:fill-white"
                      >
                        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396z" />
                      </svg>
                    </div>
                    <div className="flex items-center hover:bg-[#4026E1] hover:border-0 w-[38px] h-[38px] rounded-[50%] border-2 border-[#747474] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18.32px"
                        height="16px"
                        viewBox="0 0 1231.051 1000"
                        className="mx-auto fill-[#747474] hover:fill-white"
                      >
                        <path d="M1231.051 118.453q-51.422 76.487-126.173 130.403q.738 14.46.738 32.687q0 101.273-29.53 202.791q-29.53 101.519-90.215 194.343T841.297 843.145T639.62 957.395t-252.474 42.606q-210.2 0-387.147-113.493q31.406 3.495 60.242 3.495q175.605 0 313.687-108.177q-81.877-1.501-146.654-50.409q-64.777-48.907-89.156-124.988q24.097 4.59 47.566 4.59q33.782 0 66.482-8.812q-87.378-17.5-144.975-87.04q-57.595-69.539-57.595-160.523v-3.126q53.633 29.696 114.416 31.592q-51.762-34.508-82.079-89.999q-30.319-55.491-30.319-120.102q0-68.143 34.151-126.908q95.022 116.607 230.278 186.392q135.258 69.786 290.212 77.514q-6.609-27.543-6.621-57.485q0-104.546 73.994-178.534Q747.623 0 852.169 0q109.456 0 184.392 79.711q85.618-16.959 160.333-61.349q-28.785 90.59-110.933 139.768q75.502-8.972 145.088-39.677z" />
                      </svg>
                    </div>
                    <div className="flex items-center hover:bg-[#4026E1] hover:border-0 w-[38px] h-[38px] rounded-[50%] border-2 border-[#747474]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        className="mx-auto fill-[#747474] stroke-[#747474] hover:stroke-white hover:fill-white duration-300"
                      >
                        <g fill="none">
                          <path
                            className="hover:stroke-white"
                            strokeWidth="2"
                            d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z"
                          />
                          <circle
                            className="hover:fill-white"
                            cx="16.5"
                            cy="7.5"
                            r="1.5"
                            fill="#747474"
                          />
                          <circle
                            className="hover:stroke-white"
                            cx="12"
                            cy="12"
                            r="3"
                            strokeWidth="2"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="flex items-center hover:bg-[#4026E1] hover:border-0 w-[38px] h-[38px] rounded-[50%] border-2 border-[#747474]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        className="mx-auto fill-[#747474] hover:fill-white duration-300"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path
                            className="hover:fill-white"
                            d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                          />
                          <path
                            className="fill-[#747474] hover:fill-white"
                            d="M12 5.5a6.5 6.5 0 1 0 6.326 8H13a1.5 1.5 0 0 1 0-3h7a1.5 1.5 0 0 1 1.5 1.5a9.5 9.5 0 1 1-2.801-6.736a1.5 1.5 0 1 1-2.116 2.127A6.48 6.48 0 0 0 12 5.5"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-[#e6e2ff] w-3/4 mx-auto p-2 text-center text-lg font-medium rounded-sm group-hover:text-white group-hover:bg-[#4026E1] duration-500">
                    Book Schedule
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* 2box bự */}
          <div className="">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 ">
              <div className="relative overflow-hidden">
                <Image
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/instractor-bg1.png"
                  alt=""
                  className="w-full"
                  width={300} // Set appropriate width
                  height={200} // Set appropriate height
                  priority
                />
                <div className="absolute inset-0 flex flex-col justify-center items-start p-6 w-2/3">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">
                    Free Online Courses From School To Education
                  </h2>
                  <p className="text-gray-500 mb-4 hidden sm:block">
                    Top instructors from around the world teach millions of
                    students on EduMall.
                  </p>
                  <button className="bg-[#573CFF] text-white sm:text-xl font-medium text-center sm:px-6 px-2 py-3 rounded hover:bg-[#002935] transition duration-300">
                    Become A Instructor
                  </button>
                </div>
              </div>
              <div className="relative overflow-hidden ">
                <Image
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/instractor-bg2.png"
                  alt=""
                  className="w-full scale-110"
                  width={300} // Set appropriate width
                  height={200} // Set appropriate height
                  priority
                />
                <div className="absolute inset-0 flex flex-col justify-center items-start p-6 w-2/3">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">
                    Free Online Courses From School To Education
                  </h2>
                  <p className="text-gray-500 mb-4 hidden sm:block">
                    Top instructors from around the world teach millions of
                    students on EduMall.
                  </p>
                  <button className="bg-[#573CFF] text-white sm:text-xl font-medium text-center sm:px-6 px-2 py-3 rounded hover:bg-[#002935] transition duration-300">
                    Become A Instructor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Duy */}
      <div className="duyy">
        {/* PHAN 1 */}
        <div className="bg-gray-100 p-6">
          <div className="text-center mb-6">
            <p className="flex items-center justify-center gap-2 text-lg text-indigo-600 font-medium uppercase mb-2">
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
              </span>
              LATEST VIDEO GALLERY
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-1">
              We Provide Life Changing
            </h1>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
              Video Tutorials
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-16">
            <div className="col image-container">
              <Image
                src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/video1.png"
                alt="anh1"
                className="w-full h-auto shadow-md"
                width={500} // Set a width based on your design
                height={300} // Set a height based on your design
              />
              <span className="price-tag">$155</span>
              <div className="play-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <polygon points="9,19 9,5 19,12" />
                </svg>
              </div>
              <div className="overlay-text">
                <h2 className="text-lg font-bold">Online Education</h2>
                <p className="text-sm">By Aiden Markram</p>
              </div>
            </div>
            <div className="col image-container">
              <Image
                src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/video2.png"
                alt="anh2"
                className="w-full h-auto shadow-md"
                width={500} // Set a width based on your design
                height={300} // Set a height based on your design
              />
              <span className="price-tag">$125</span>
              <div className="play-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <polygon points="9,19 9,5 19,12" />
                </svg>
              </div>
              <div className="overlay-text">
                <h2 className="text-lg font-bold">Investment Planning</h2>
                <p className="text-sm">By Joseph Anderson</p>
              </div>
            </div>
            <div className="col image-container">
              <Image
                src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/video3.png"
                alt="anh3"
                className="w-full h-auto shadow-md"
                width={500} // Set a width based on your design
                height={300} // Set a height based on your design
              />
              <span className="price-tag">$227</span>
              <div className="play-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <polygon points="9,19 9,5 19,12" />
                </svg>
              </div>
              <div className="overlay-text">
                <h2 className="text-lg font-bold">Business Consulting</h2>
                <p className="text-sm">By Stewart Burgess</p>
              </div>
            </div>
            <div className="col image-container">
              <Image
                src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/video4.png"
                alt="anh4"
                className="w-full h-auto shadow-md"
                width={500} // Set a width based on your design
                height={300} // Set a height based on your design
              />
              <span className="price-tag">$222</span>
              <div className="play-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <polygon points="9,19 9,5 19,12" />
                </svg>
              </div>
              <div className="overlay-text">
                <h2 className="text-lg font-bold">How To Fit Your Health</h2>
                <p className="text-sm">By Aiden Markram</p>
              </div>
            </div>
          </div>
        </div>
        {/* END PHAN 1 */}

        {/* PHAN 2 */}
        <div>
          {/* 2.1 */}
          <div className=" grid lg:grid-cols-3 grid-cols-1  items-center space-y-4 bg-gradient-to-t from-[#836FFB] to-[#573CFF] py-[80px] px-8 ">
            <div className="text-2xl text-white font-bold text-center sm:text-left">
              Subscribe Our Newsletter
            </div>
            <div className=" ">
              <form className="bg-white shadow-lg p-2 lg:w-2/3 w-full flex justify-center">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-2 text-gray-400 focus:outline-none "
                  required
                />
              </form>
            </div>
            <button className="bg-[#002935] mx-auto text-white font-bold w-full py-4 lg:px-6 lg:w-1/3 flex items-center justify-center space-x-4  transition duration-300 transform hover:bg-[#573CFF] ">
              Subscribe
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h8m0 0l-4-4m4 4l-4 4"
                />
              </svg>
            </button>
          </div>
          {/* END 2.1 */}

          {/* 2.2 */}
          <div
            className="flex flex-col lg:flex-row bg-center py-[100px]"
            style={{
              backgroundImage:
                "url('https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/registration-bg.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="col-1 lg:w-1/2 w-full p-4 text-white flex flex-col text-left px-4 sm:px-[60px] ">
              <p className="text-lg font-semibold">Get Free Registration</p>
              <h1 className="text-3xl sm:text-5xl font-bold mt-4">
                Register Your Account Get Free Access To 78,540 Online Courses
              </h1>

              <p className="mt-4 text-lg ">
                Learning from an online event involves several key steps.
                Firstly, it’s important to research and choose an event that
                aligns with your learning objectives and interests. Once you’ve
                registered for the event, make sure...
              </p>
            </div>
            <div className="col-2 w-full lg:w-1/2 bg-opacity-75 rounded-lg px-4 sm:px-[60px]">
              <form className="p-6 bg-white md:w-4/5 w-full rounded-lg ">
                <h1 className="text-3xl font-bold mb-4">
                  Interested in Discussing
                </h1>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg mb-4 bg-gray-100 h-[60px]"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 rounded-lg mb-4 bg-gray-100 h-[60px]"
                  required
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-lg mb-4 bg-gray-100 h-[60px]"
                  required
                />
                <textarea
                  placeholder="Write Message"
                  className="w-full p-3 rounded-lg mb-4 bg-gray-100 h-[120px]"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#573CFF] text-white font-medium text-xl py-2 rounded mt-2 h-[65px] w-1/2"
                >
                  Apply for it →
                </button>
              </form>
            </div>
          </div>
          {/* END 2.2 */}
        </div>

        {/* END 2.2 */}
        {/* END PHAN 2 */}

        {/* PHAN 3 */}
        <div className="text-center  mt-[80px] mb-[40px]">
          <p className="flex items-center justify-center gap-2 text-lg text-indigo-600 font-medium uppercase mb-2">
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
            </span>
            Clients About Us
          </p>
          <h1 className="md:text-5xl text-3xl font-bold text-gray-800 mb-1">
            What Our Students Say
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 mb-10">
          <div className="col">
            <div className="relative box-1">
              <Image
                src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/testimonial/testi1.png"
                alt="anh1"
                className="w-full h-auto"
                width={500} // Set a width based on your design
                height={300} // Set a height based on your design
              />
              <div className="absolute bottom-0 left-0 text-white p-4">
                <p className="font-semibold">Earle Goodman</p>
                <p>WordPress Expert</p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque ipsa
                  quae.
                </p>
              </div>
            </div>
            <div className="box-2 p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/testimonial/testi-shape1.png"
                  alt="anh1"
                  className="w-16 h-16 rounded-full mr-4"
                  width={64} // 16 * 4 (for Tailwind's default rem size)
                  height={64} // 16 * 4 (for Tailwind's default rem size)
                />
                <div>
                  <p className="font-semibold text-lg">Jacob Jones</p>
                  <p className="text-gray-600">Web Developer</p>
                </div>
              </div>
              <div className="flex space-x-1 mb-2">
                {/* Star Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 72 72"
                >
                  <path
                    fill="#fcea2b"
                    d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z"
                  />
                  <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z"
                  />
                </svg>
              </div>
              <p className="text-gray-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur sunt in culpa qui officia
                deserunt mollit.
              </p>
            </div>
          </div>

          {/* Repeat for other columns as needed */}
          <div className="col">
            <div className="box-2 p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/testimonial/testi-shape2.png"
                  alt="anh2"
                  className="w-16 h-16 rounded-full mr-4"
                  width={64} // 16 * 4 (for Tailwind's default rem size)
                  height={64} // 16 * 4 (for Tailwind's default rem size)
                />
                <div>
                  <p className="font-semibold text-lg">Jacob Jones</p>
                  <p className="text-gray-600">Web Developer</p>
                </div>
              </div>
              <div className="flex space-x-1 mb-2">
                {/* Star Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 72 72"
                >
                  <path
                    fill="#fcea2b"
                    d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z"
                  />
                  <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z"
                  />
                </svg>
              </div>
              <p className="text-gray-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur sunt in culpa qui officia
                deserunt mollit.
              </p>
            </div>
            <div className="relative box-1">
              <Image
                src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/testimonial/testi1.png"
                alt="anh1"
                className="w-full h-auto"
                width={500} // Set a width based on your design
                height={300} // Set a height based on your design
              />
              <div className="absolute bottom-0 left-0 text-white p-4">
                <p className="font-semibold">Lindsay Lohan</p>
                <p>Senior Consultant</p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque ipsa
                  quae.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="relative box-1">
              <Image
                src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/testimonial/testi2.png"
                alt="anh3"
                className="w-full h-auto"
                width={500} // Set a width based on your design
                height={300} // Set a height based on your design
              />
              <div className="absolute bottom-0 left-0 text-white p-4">
                <p className="font-semibold">Antwan Perkins</p>
                <p>WordPress Expert</p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque ipsa
                  quae.
                </p>
              </div>
            </div>
            <div className="box-2 p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/testimonial/testi-shape3.png"
                  alt="anh4"
                  className="w-16 h-16 rounded-full mr-4"
                  width={64} // 16 * 4 (for Tailwind's default rem size)
                  height={64} // 16 * 4 (for Tailwind's default rem size)
                />
                <div>
                  <p className="font-semibold text-lg">Mohammed Shami</p>
                  <p className="text-gray-600">Social Media Specialist</p>
                </div>
              </div>
              <div className="flex space-x-1 mb-2">
                {/* Star Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 72 72"
                >
                  <path
                    fill="#fcea2b"
                    d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z"
                  />
                  <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z"
                  />
                </svg>
              </div>
              <p className="text-gray-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur sunt in culpa qui officia
                deserunt mollit.
              </p>
            </div>
          </div>
        </div>
        {/* END PHAN 3 */}

        {/* PHAN 4 */}
        <div className="text-center mt-[80px] mb-[40px]">
          <p className="flex items-center justify-center gap-2 text-lg text-indigo-600 font-medium uppercase mb-2">
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
            </span>
            News & Blogs
          </p>
          <h1 className="md:text-5xl text-3xl font-bold text-gray-800 mb-1">
            Latest News & Blog
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* box1 */}
        {blogData.data.slice(0, 2).map((blog) => (
        <div key={blog.id} className="shadow-xl px-[10px]">
          <div>
            <Image
              src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/blog/blog1.png"
              alt="anh1"
              className="w-full h-auto"
              width={500} // Set a width based on your design
              height={300} // Set a height based on your design
            />
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center">
              <Image
                src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/blog/shape1.png"
                alt="anh1"
                className="w-12 h-12 rounded-full mr-2"
                width={48}
                height={48}
              />
              <p className="text-gray-500 font-normal">
                By-
                <br />
                Website_Stock
              </p>
            </div>
            <p className="text-xl text-black font-bold mt-[20px]">
            {blog.title}
            </p>
            <br />
            <p className="text-gray-500">
            {blog.description}
            </p>
            <div className="md:w-2/3 w-full flex items-center justify-between space-x-2 bg-gray-100">
              <div className="flex items-center text-gray-500 rounded px-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="mr-1 text-sky-600"
                >
                  <path
                    fill="currentColor"
                    d="M21 20.077L17.923 17H4.616q-.691 0-1.154-.462T3 15.385V4.615q0-.69.463-1.153T4.615 3h14.77q.69 0 1.152.462T21 4.615zM4.616 16H18.35L20 17.644V4.616q0-.231-.192-.424T19.385 4H4.615q-.23 0-.423.192T4 4.615v10.77q0 .23.192.423t.423.192M4 16V4z"
                  />
                </svg>
                Comment (5)
              </div>
              <div className="flex items-center bg-blue-600 text-white rounded md:px-6 px-4 py-4 hover:bg-blue-700 transition duration-200 ">
                <span className="mr-1">More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 48 48"
                  className="h-5 w-5"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="m20 12l12 12l-12 12z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>

        {/* END PHAN 4 */}
      </div>
    </div>
  );
}
