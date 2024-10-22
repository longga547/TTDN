import React from "react";
import Anhdk from "./anhsignup.jpg";
import Image from "next/image";

const SignUp = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-5 md:p-10">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-10">
        <div className="flex justify-center items-center">
          <Image
            src={Anhdk}
            alt="Image"
            className="rounded-3xl w-full h-auto object-cover"
            width={600}
            height={400}
            priority
          />
        </div>
        <div className="flex justify-center items-center p-5">
          <form action="" className="w-full max-w-sm">
            <h1 className="text-center mb-10 font-bold text-3xl md:text-4xl">
              Đăng Ký
            </h1>
            <h2 className="text-center mb-5 text-base md:text-lg">
              Vui Lòng Nhập Đầy Đủ Thông Tin Đăng Ký!
            </h2>
            <input
              type="text"
              className="bg-gray-100 border-0 outline-none rounded-md py-3 w-full px-4 mb-3"
              placeholder="Số Điện Thoại"
            />
            <input
              type="password"
              className="bg-gray-100 border-0 outline-none rounded-md py-3 w-full px-4 mb-3"
              placeholder="Mật Khẩu"
            />
            <input
              type="password"
              className="bg-gray-100 border-0 outline-none rounded-md py-3 w-full px-4 mb-3"
              placeholder="Xác Nhận Mật Khẩu"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 border-0 outline-none rounded-md py-3 w-full px-4 font-semibold text-white"
            >
              Đăng Ký Ngay
            </button>
            <br />
            <a href="/dangky" className="text-center block mt-4">
              Trở Về{" "}
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
