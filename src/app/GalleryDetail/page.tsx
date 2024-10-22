'use client';
import React, { useState } from 'react';
const GalleryDetail = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  
  // Mảng nội dung câu hỏi
  const questions = [
    "Is it Full Transport & Logistics Company?",
    "How to Create my Project in Company?",
    "How to Work in Process of Transport Company?",
    "What warranties do I have for installation?"
  ];
  return (
    <div className="bg-gray-100">
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <img
          src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/bretcome-bg.jpg"
          alt="Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold">
          Gallery Detail
        </div>
        <button className="absolute bottom-0 md:left-[100px] left-[50px]  bg-[#4026E1] hover:bg-[#6854e9] text-2xl text-white font-medium px-10 py-6 rounded-t-lg">
          Home/Gallery Detail
        </button>
      </div>

      {/* Project Details Title */}
      <section className="container mx-auto px-16 py-16 ">
              <div className="py-10">
                <div className="flex justify-center">
                  <div className="relative overflow-hidden">
                    <img
                      src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/project/project-detials1.jpg"
                      alt=""
                      className="w-full max-w-7xl transition-transform duration-300 transform hover:scale-105"
                    />
                  </div>
                </div>
              </div>
              <div className="my-5 ml-[52px]">
                <h4 className="text-2xl font-bold">Projects Details</h4>
              </div>

              <div className="mb-6 ml-[52px]">
                <p className="text-gray-700 leading-relaxed mr-[52px] mb-3">
                  To be clear, Project Online is NOT a web-based version of Project
                  Professional. Project Online is an entirely separate service that
                  offers full portfolio and project management tools on the web. It
                  includes Project Web App, and can, depending on your subscription,
                  also include Project Online Desktop Client, which is a Discover
                  Community. Explore subscription benefits, browse training courses,
                  learn how to secure.
                </p>
                <p className="text-gray-700 leading-relaxed mr-[52px]">
                  To be clear, Project Online is NOT a web-based version of Project
                  Professional. Project Online is an entirely separate service that
                  offers full portfolio and project management tools on the web. It
                  includes Project Web App, and can, depending on your subscription,
                  also include Project Online.
                </p>
              </div>

              <div className="flex items-center justify-center">
              <div className="relative overflow-hidden">
              <img
                alt="Group of people discussing a project"
                className="w-full  h-auto rounded-none mr-4 transition-transform duration-300 transform hover:scale-105"
                height="300"
                src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/project/project-detials2.jpg"
                width="500"
              />
                </div>          
            <div className="w-2/5">
            {questions.map((question, index) => (
              <div className="bg-gray-100 p-4 rounded-none" key={index}> 
                <button
                  onClick={() => toggleQuestion(index)}
                  className="bg-gray-200 p-4 rounded-none cursor-pointer flex justify-between items-center text-blue-700 w-full text-left"
                >
                  <span className="font-extrabold">
                    {index + 1}. {question}
                  </span>
                  <div className="w-[38px] h-[38px] bg-[#4026E1] flex justify-center items-center text-white ml-2">
                    <span className={`transition-transform duration-200 transform ${openIndex === index ? 'rotate-90' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m7.089 18.5l4.653-6.5L7.09 5.5h1.219l4.654 6.5l-4.654 6.5zm5.796 0l4.654-6.5l-4.655-6.5h1.22l4.654 6.5l-4.654 6.5z"/>
                      </svg>
                    </span>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="bg-gray-200 p-4 rounded-none">
                    <p>
                      The time it takes to repair a roof depends on the extent of the damage. For minor repairs, it might take an hour or two. For significant repairs, our team might be at your home for half a day.
                    </p>
                  </div>
                )}
              </div>
            ))}
             </div>
            </div>
      </section>
      <section className="container mx-auto px-16 mb-10 flex items-center justify-center">
      <p className="text-gray-700 leading-relaxed ml-[54px] mr-[54px]">
            To be clear, Project Online is NOT a web-based version of Project
            Professional. Project Online is an entirely separate service that
            offers full portfolio and project management tools on the web. It
            includes Project Web App, and can, depending on your subscription,
            also include Project Online.
          </p>
      </section>
    </div>
  )
}

export default GalleryDetail