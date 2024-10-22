import React from "react";
import Image from "next/image";
import anh from "./hinchuan.jpg";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-5 md:p-10">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-10">
        <div className="flex justify-center items-center">
          <Image
            src={anh}
            alt="Image"
            className="rounded-3xl object-cover" // Removed width/height from className
            width={600} // Width in pixels
            height={400} // Height in pixels
            priority
          />
        </div>
        <div className="flex justify-center items-center p-5">
          <form action="" className="w-full max-w-sm">
            <h1 className="text-center mb-10 font-bold text-3xl md:text-4xl">
              Đăng Nhập
            </h1>
            <h2 className="text-center mb-5 text-base md:text-lg">
              Vui Lòng Nhập Đầy Đủ Thông Tin Đăng Nhập!
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
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 border-0 outline-none rounded-md py-3 w-full px-4 font-semibold text-white"
            >
              Submit
            </button>
            <br />
            <Link href="/SignUp" className="text-center block mt-4">
              Bạn chưa có tài khoản?{" "}
              <span style={{ color: "#FFD700" }}>Đăng ký ngay</span>
            </Link>
            <br />
            <Link href="/ForgetPass">
              <span className="flex justify-center" style={{ color: "#FFD700" }}>Quên Mật khẩu</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;