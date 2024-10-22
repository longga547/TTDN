import React from "react";

const ForgetPass = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-5 md:p-10">
      <div className="grid md:grid-cols-2 grid-cols-1 border rounded-3xl overflow-hidden">
        <div>
          <img
            src="https://img.freepik.com/premium-vector/vector-abstract-seamless-pattern-with-stars-blue-background_117177-1008.jpg"
            className="rounded-3xl w-full h-auto object-cover"
            alt="Background"
          />
        </div>
        <div className="flex justify-center items-center p-5">
          <form action="" className="max-w-md w-full">
            <h1 className="text-center mb-10 font-bold text-3xl md:text-4xl">
              Quên Mật Khẩu
            </h1>
            <h2 className="text-center mb-5">Vui Lòng Nhập Thông Tin Bên Dưới</h2>
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
            <a href="/dangky" className="text-center block mt-4">
              Nếu Không Nhận được mã?{" "}
              <span style={{ color: "#FFD700" }}>Gửi Lại</span>
            </a>
            <br />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 border outline-none rounded-md py-3 w-full px-4 font-semibold text-white"
            >
              Xác Thực Ngay
            </button>
            <br />
            <div className="flex justify-center mt-5">
              <a href="#" className="text-blue-500 hover:underline">
                Trở Về
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;