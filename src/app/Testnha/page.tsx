import React from "react";
import Image from "next/image";

// interface Blog {
//   id: number;
//   title: string;
//   description: string;
//   content: string;
// }

// interface BlogData {
//   data: Blog[];
// }

// async function getBlogData(): Promise<BlogData> {
//   const res = await fetch("https://api-core.dsp.one/api/auth/post", {
//     cache: "no-store",
//   });
//   return res.json();
// }
const imgCourse = [
  {
    src: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/catagories/catagories3.png",
  },
  {
    src: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/catagories/catagories4.png",
  },
  {
    src: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/catagories/catagories5.png",
  },
  {
    src: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/catagories/catagories6.png",
  },
  {
    src: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/catagories/catagories1.png",
  },
  {
    src: "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/catagories/catagories2.png",
  },
];

interface Course {
  id: number;
  name: string;
  code: string;
}

interface CourseData {
  data: Course[];
}

async function getCourseData(): Promise<CourseData> {
  const res = await fetch("https://api-core.dsp.one/api/auth/category", {
    cache: "no-store",
  });
  return res.json();
}

const Testnha = async () => {
  // const blogData = await getBlogData();
  // console.log(blogData);
  const courseData = await getCourseData();
  console.log(courseData);
  return (
    <div>
      {/* {blogData.data.slice(0, 2).map((blog) => (
        <div key={blog.id}>
          <p>id:{blog.id}</p>
          <p>Name: {blog.description}</p>
          <p>Email: {blog.content}</p>
        </div>
      ))} */}
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
      ;
    </div>
  );
};

export default Testnha;
