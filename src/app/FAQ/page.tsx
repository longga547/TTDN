"use client";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is it Full Transport & Logistics Company?",
      answer:
        "The time it takes to repair a roof depends on the extent of the damage. For minor repairs, it might take an hour or two. For significant repairs, a team might be at your home for half a day.",
    },
    {
      question: "How to Create my Project in Company?",
      answer:
        "The time it takes to repair a roof depends on the extent of the damage. For minor repairs, it might take an hour or two. For significant repairs, a team might be at your home for half a day.",
    },
    {
      question: "How to Work in Process of Transport Company?",
      answer:
        "The time it takes to repair a roof depends on the extent of the damage. For minor repairs, it might take an hour or two. For significant repairs, a team might be at your home for half a day.",
    },
    {
      question: "What warranties do I have for installation?",
      answer:
        "The time it takes to repair a roof depends on the extent of the damage. For minor repairs, it might take an hour or two. For significant repairs, a team might be at your home for half a day.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
     <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <img
          src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/bretcome-bg.jpg"
          alt="Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold">
          FAQ
        </div>
        <button className="absolute bottom-0 md:left-[100px] left-[50px]  bg-[#4026E1] hover:bg-[#6854e9] text-2xl text-white font-medium px-10 py-6 rounded-t-lg">
          Home/FAQ
        </button>
      </div>
      <div className="max-w-7xl mx-auto p-7">
        {faqs.map((faq, index) => (
          <div key={index} className="border mb-4 rounded-lg p-4 bg-gray-100">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="font-bold font-sans text-2xl text-blue-800">
                {faq.question}
              </h2>
              <div className="bg-blue-600 p-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white transition-transform duration-300 transform-gpu justify-center size-6"
                  style={{
                    transform: openIndex === index ? "rotate(90deg)" : "none",
                  }}
                  width="1em"
                  height="1em"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L764.736 512L452.864 192a30.59 30.59 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L508.736 512L196.864 192a30.59 30.59 0 0 1 0-42.688"
                  />
                </svg>
              </div>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-black text-lg">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
