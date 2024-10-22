import React from "react";
import Image from "next/image";
import anh from "./anhfoget.jpg";
import Link from "next/link";
const ForgetPass = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-5 md:p-10">
      <div className="grid md:grid-cols-2 grid-cols-1 rounded-3xl overflow-hidden">
        <div>
          <Image
            src={anh}
            className="rounded-3xl w-full h-auto object-cover"
            alt="Background"
            width={1920} // Provide the actual width of the image
            height={1080} // Provide the actual height of the image
            priority
          />
        </div>
        <div className="flex justify-center items-center p-5">
          <form action="" className="max-w-md w-full">
            <h1 className="text-center mb-10 font-bold text-3xl md:text-4xl">
              Quên Mật Khẩu
            </h1>
            <h2 className="text-center mb-5">
              Vui Lòng Nhập Thông Tin Bên Dưới
            </h2>
            <input
              type="text"
              className="bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-3"
              placeholder="Số Điện Thoại"
            />

            <h2 className="text-lg mb-4 text-center">
              Nhập mã xác thực OTP gửi đến 0387258217
            </h2>
            <div className="flex justify-center space-x-2 mb-4">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  className="w-10 h-10 text-center font-bold text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ))}
            </div>
            <div className="text-center mb-4">
              <p className="text-gray-600">01:00</p>
            </div>
            <Link href="/dangky" className="text-center block mt-4">
              Nếu Không Nhận được mã?{" "}
              <span style={{ color: "#FFD700" }}>Gửi Lại</span>
            </Link>
            <br />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 border outline-none rounded-md py-3 w-full px-4 font-semibold text-white"
            >
              Xác Thực Ngay
            </button>
            <br />
            <div className="flex justify-center mt-5">
              <Link href="/SignIn" className="text-yellow-400 hover:underline">
                Trở Về
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
