import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100">
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <img
          src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/resource/bretcome-bg.jpg"
          alt="Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold">
          Contact
        </div>
        <button className="absolute bottom-0 md:left-[100px] left-[50px]  bg-[#4026E1] hover:bg-[#6854e9] text-2xl text-white font-medium px-10 py-6 rounded-t-lg">
          Home/Contact
        </button>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-500 shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-white">
              Thông tin liên hệ
            </h2>
            <div className="space-y-4">
              <div className="flex items-center bg-white rounded-md px-4 py-2 mb-4">
                <svg
                  className="w-6 h-6 text-gray-600 mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span className="text-gray-700">7515 Carriage Court,</span>
              </div>
              <div className="flex items-center bg-white rounded-md px-4 py-2 mb-4">
                <svg
                  className="w-6 h-6 text-gray-600 mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span className="text-gray-700">(+6656) 15985 96969</span>
              </div>
              <div className="flex items-center bg-white rounded-md px-4 py-2 mb-4">
                <svg
                  className="w-6 h-6 text-gray-600 mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span className="text-gray-700">example@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-blue-500">
              Nhận báo giá
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Tên của bạn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                  placeholder="Nhập tên của bạn"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Địa chỉ email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                  placeholder="Nhập email của bạn"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                  placeholder="Nhập số điện thoại"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                  placeholder="Nhập website"
                />
              </div>
              <div className="col-span-2">
                <label className="block font-medium text-gray-700 mb-2">
                  Tên công ty của bạn
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                  placeholder="Nhập tên công ty"
                />
              </div>
              <div className="col-span-2">
                <label className="block font-medium text-gray-700 mb-2">
                  Viết câu hỏi của bạn ở đây
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                  placeholder="Nhập tin nhắn của bạn"
                ></textarea>
              </div>
              <div className="col-span-2">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                  Nhận báo giá
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Khu vực bản đồ */}
      <div className="map-area wow fadeInUp">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496149.95373021!2d85.84621250756469!3d23.452185887261447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1635150422284!5m2!1sen!2sbd"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* Kết thúc khu vực bản đồ */}
    </div>
  );
};

export default Contact;
