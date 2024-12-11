import React from "react";
import Image from "next/image";

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
const Blog = async () => {
  // interface BlogPost {
  //   id: number;
  //   title: string;
  //   description: string;
  //   author: string;
  //   imageUrl: string;
  //   smallImageUrl: string; // Hình ảnh nhỏ
  // }
  // const blogPosts: BlogPost[] = [
  //   {
  //     id: 1,
  //     title: "Useful VS Code Extensions Front-End Develop",
  //     description:
  //       "Lorem ipsum dolor sit amet, atomorum ds sosidon ium est as Id vim rrem princi pes suas molesti interpretaris",
  //     author: "Website_Stock",
  //     imageUrl:
  //       "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/blog/blog1.png",
  //     smallImageUrl:
  //       "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/blog/shape1.png", // Hình ảnh nhỏ
  //   },
  //   {
  //     id: 2,
  //     title: "Designing Better Links Website And Email",
  //     description:
  //       "Lorem ipsum dolor sit amet, atomorum ds sosidon ium est as Id vim rrem princi pes suas molesti interpretaris",
  //     author: "Website_Stock",
  //     imageUrl:
  //       "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/blog/blog2.png",
  //     smallImageUrl:
  //       "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/blog/shape2.png", // Hình ảnh nhỏ
  //   },
  //   {
  //     id: 3,
  //     title: "Useful VS Code Extensions Front-End Develop",
  //     description:
  //       "Lorem ipsum dolor sit amet, atomorum ds sosidon ium est as Id vim rrem princi pes suas molesti interpretaris",
  //     author: "Website_Stock",
  //     imageUrl:
  //       "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/blog/blog1.png",
  //     smallImageUrl:
  //       "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/blog/shape1.png", // Hình ảnh nhỏ
  //   },
  //   {
  //     id: 4,
  //     title: "Designing Better Links Website And Email",
  //     description:
  //       "Lorem ipsum dolor sit amet, atomorum ds sosidon ium est as Id vim rrem princi pes suas molesti interpretaris",
  //     author: "Website_Stock",
  //     imageUrl:
  //       "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/blog/blog2.png",
  //     smallImageUrl:
  //       "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/blog/shape2.png", // Hình ảnh nhỏ
  //   },
  // ];
  const blogData = await getBlogData();
  console.log(blogData);
  return (
    <div>
      <div className="w-full relative">
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/bretcome-bg.jpg"
            alt="Image"
            fill
            className="object-cover w-full h-full"
          />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold">
            Blog
          </div>
          <button className="absolute bottom-0 md:left-[100px] left-[50px]  bg-[#4026E1] hover:bg-[#6854e9] text-2xl text-white font-medium px-10 py-6 rounded-t-lg">
            Home/Blog
          </button>
        </div>
      </div>

      <div className="container mx-auto mb-16 px-4 md:px-6">
        <div className="container mx-auto mt-20 mb-16 max-w-6xl">
          <h4 className="text-center text-gray-500 mb-2">News & Blogs</h4>
          <h2 className="text-center text-3xl font-bold mb-6">
            Latest News & Blog
          </h2>
          
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:px-6 px-4 ">
            {blogData.data.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow-lg group"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full h-auto md:w-1/2 rounded-t-lg md:rounded-l-lg overflow-hidden">
                    <Image
                      src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/blog/blog2.png"
                      alt="img"
                      width={700}
                      height={500}
                      className="object-cover w-full h-[200px] md:h-full transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 w-full md:w-1/2">
                    <div className="flex items-center mb-2">
                      <Image
                        src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/blog/shape1.png"
                        alt="imgsmall"
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                      <p className="text-gray-500 ml-3">
                        By- <br />
                        Website_Stock
                      </p>
                    </div>
                    <h5 className="text-xl font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-purple-500">
                      {blog.title}
                    </h5>
                    <p className="text-gray-600">
                      {blog.description.split(" ").length > 100
                        ? blog.description.split(" ").slice(0, 100).join(" ") +
                          "..."
                        : blog.description}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center text-gray-500">
                        <p className="text-sm">Comment (5)</p>
                      </div>
                      <a
                        href="#"
                        className="relative inline-block bg-[#4026E1] text-white py-2 px-4 rounded-lg overflow-hidden transition-all duration-300 hover:bg-gradient-to-l from-purple-500 to-red-500 "
                      >
                        <span className="relative z-10 ">More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>
  );
};

export default Blog;
