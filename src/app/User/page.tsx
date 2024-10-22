import React from "react";

const User = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1900 + 1 },
    (_, i) => currentYear - i
  );
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 px-4 py-[60px] sm:px-10 md:px-20 md:grid-cols-3">
        <div className="col-1 p-4 bg-white rounded-lg max-w-sm mx-auto">
          <div className="flex items-center mb-4">
            <img
              className="w-16 h-16 rounded-full mr-4"
              src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-1/456665061_1225995405241232_8942598692084260272_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=pfJVr31iExsQ7kNvgFogMt9&_nc_zt=24&_nc_ht=scontent.fsgn4-1.fna&_nc_gid=AyyW_wZRM4I8Pd2_fTTIw9M&oh=00_AYAkelpHm51dh2TaEjE7RtNtbbbNQ_mX2RqQg-8e6qj70Q&oe=6712EF3D"
              alt="Ảnh đại diện"
            />
            <div>
              <p className="text-sm md:text-lg">Tài khoản của</p>
              <p className="text-xl">Nguyễn Ngọc Trâm Anh</p>
            </div>
          </div>

          <div className="mt-4">
            <div className="py-2">
              <a
                href="/User"
                className="flex items-center text-gray-700 hover:text-[#573CFF]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 36 36"
                  className="mr-2"
                >
                  <path
                    fill="currentColor"
                    d="M18 17a7 7 0 1 0-7-7a7 7 0 0 0 7 7m0-12a5 5 0 1 1-5 5a5 5 0 0 1 5-5"
                  />
                  <path
                    fill="currentColor"
                    d="M30.47 24.37a17.16 17.16 0 0 0-24.93 0A2 2 0 0 0 5 25.74V31a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-5.26a2 2 0 0 0-.53-1.37M29 31H7v-5.27a15.17 15.17 0 0 1 22 0Z"
                  />
                </svg>
                Thông tin tài khoản
              </a>
            </div>

            <div className="border-t border-gray-300 py-2">
              <a
                href="/UserAddress"
                className="flex items-center text-gray-700 hover:text-[#573CFF]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 1024 1024"
                  className="mr-2"
                >
                  <path
                    fill="currentColor"
                    d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544"
                  />
                </svg>
                Sổ địa chỉ
              </a>
            </div>

            <div className="border-t border-gray-300 py-2">
              <a
                href="/UserOrder"
                className="flex items-center text-gray-700 hover:text-[#573CFF]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 32 32"
                  className="mr-2"
                >
                  <path
                    fill="currentColor"
                    d="m29.482 8.624l-10-5.5a1 1 0 0 0-.964 0l-10 5.5a1 1 0 0 0 0 1.752L18 15.591V26.31l-3.036-1.67L14 26.391l4.518 2.485a1 1 0 0 0 .964 0l10-5.5A1 1 0 0 0 30 22.5v-13a1 1 0 0 0-.518-.876M19 5.142L26.925 9.5L19 13.858L11.075 9.5Zm9 16.767l-8 4.4V15.59l8-4.4Z"
                  />
                  <path
                    fill="currentColor"
                    d="M10 16H2v-2h8zm2 8H4v-2h8zm2-4H6v-2h8z"
                  />
                </svg>
                Quản lý đơn hàng
              </a>
            </div>

            <div className="border-t border-gray-300 py-2">
              <a
                href="/UserNotification"
                className="flex items-center text-gray-700 hover:text-[#573CFF]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 32 32"
                  className="mr-2"
                >
                  <path
                    fill="currentColor"
                    d="M28.707 19.293L26 16.586V13a10.014 10.014 0 0 0-9-9.95V1h-2v2.05A10.014 10.014 0 0 0 6 13v3.586l-2.707 2.707A1 1 0 0 0 3 20v3a1 1 0 0 0 1 1h7v.777a5.15 5.15 0 0 0 4.5 5.199A5.006 5.006 0 0 0 21 25v-1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707M19 25a3 3 0 0 1-6 0v-1h6Zm8-3H5v-1.586l2.707-2.707A1 1 0 0 0 8 17v-4a8 8 0 0 1 16 0v4a1 1 0 0 0 .293.707L27 20.414Z"
                  />
                </svg>
                Thông báo
              </a>
            </div>

            <div className="border-t border-gray-300 py-2">
              <a
                href="/UserDiscount"
                className="flex items-center text-gray-700 hover:text-[#573CFF]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  >
                    <path d="M7.729 15.286h5m-2.502-2.5h.01m-.008 5h.01M6.5 3.697C9.533 6.782 14.536.124 17.496 2.54C19.199 3.93 18.66 7 16.449 9" />
                    <path d="M18.664 6.578c.983.179 1.204.765 1.497 2.392c.265 1.466.339 3.225.339 3.974a1.3 1.3 0 0 1-.338.743c-2.057 2.035-6.137 5.878-8.196 7.787c-.808.681-2.028.696-2.886.07c-1.756-1.491-3.443-3.178-5.097-4.701c-.664-.808-.648-1.956.076-2.717c2.178-2.135 6.12-5.789 8.346-7.807c.223-.18.496-.294.79-.319c.498 0 1.355.063 2.19.109" />
                  </g>
                </svg>
                Mã giảm giá
              </a>
            </div>

            <div className="border-t border-gray-300 py-2">
              <a
                href="/"
                className="flex items-center text-gray-700 hover:text-[#573CFF]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <path
                    fill="currentColor"
                    d="M11.5 18c4 0 7.46-2.22 9.24-5.5C18.96 9.22 15.5 7 11.5 7s-7.46 2.22-9.24 5.5C4.04 15.78 7.5 18 11.5 18m0-12c4.56 0 8.5 2.65 10.36 6.5C20 16.35 16.06 19 11.5 19S3 16.35 1.14 12.5C3 8.65 6.94 6 11.5 6m0 2C14 8 16 10 16 12.5S14 17 11.5 17S7 15 7 12.5S9 8 11.5 8m0 1A3.5 3.5 0 0 0 8 12.5a3.5 3.5 0 0 0 3.5 3.5a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 11.5 9"
                  />
                </svg>
                Sản phẩm đã xem
              </a>
            </div>
          </div>
        </div>

        <div className="col-2 p-4 max-w-sm mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6">
            Thông Tin Tài Khoản
          </h1>
          <div>
            <h2 className="text-xl font-bold mb-4">Thông Tin Cá Nhân</h2>
            <div>
              <form>
                <div className="flex flex-col md:flex-row items-start mb-4">
                  <div className="mr-0 md:mr-4 mb-4 md:mb-0">
                    <img
                      src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-1/456665061_1225995405241232_8942598692084260272_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=pfJVr31iExsQ7kNvgFogMt9&_nc_zt=24&_nc_ht=scontent.fsgn4-1.fna&_nc_gid=AyyW_wZRM4I8Pd2_fTTIw9M&oh=00_AYAkelpHm51dh2TaEjE7RtNtbbbNQ_mX2RqQg-8e6qj70Q&oe=6712EF3D"
                      alt="anh"
                      className="w-[80px] h-auto rounded-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-4 flex justify-between items-center">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Họ_tên
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Nhập họ tên"
                        className="appearance-none border mx-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-4 flex justify-between items-center">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Nickname
                      </label>
                      <input
                        type="text"
                        id="nickname"
                        placeholder="Nhập Nickname"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4 flex flex-col">
                  <label className="block text-sm text-gray-700 mb-2 font-bold">
                    Ngày sinh
                  </label>
                  <div className="flex space-x-2">
                    <select className="block w-[100px] h-[35px] border border-gray-300 rounded-md px-2 py-1 text-sm text-center">
                      <option>Ngày</option>
                      {days.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                    <select className="block w-[100px] h-[35px] border border-gray-300 rounded-md px-2 py-1 text-sm text-center">
                      <option>Tháng</option>
                      {months.map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                    <select className="block w-[100px] h-[35px] border border-gray-300 rounded-md px-2 py-1 text-sm text-center">
                      <option>Năm</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mb-4 flex items-center">
                  <label className="block text-gray-700 text-sm font-bold mr-4">
                    Giới tính
                  </label>
                  <div className="flex items-center">
                    <div className="mr-4 flex items-center">
                      <label className="text-gray-700 text-sm font-bold mr-2">
                        Nam
                      </label>
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        className="w-5 h-5 text-yellow-500 bg-yellow-500 focus:ring-yellow-500 focus:outline-none"
                      />
                    </div>
                    <div className="mr-4 flex items-center">
                      <label className="text-gray-700 text-sm font-bold mr-2">
                        Nữ
                      </label>
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        className="w-5 h-5 text-yellow-500 bg-yellow-500 focus:ring-yellow-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex items-center">
                      <label className="text-gray-700 text-sm font-bold mr-2">
                        Khác
                      </label>
                      <input
                        type="radio"
                        id="other"
                        name="gender"
                        value="other"
                        className="w-5 h-5 text-yellow-500 bg-yellow-500 focus:ring-yellow-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4 flex flex-col">
                  <label className="text-gray-700 text-sm font-bold mb-2">
                    Quốc tịch
                  </label>
                  <select className="block w-full border border-gray-300 rounded-md">
                    <option>Chọn quốc tịch</option>
                  </select>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="mt-4 w-full md:w-[180px] bg-[#573CFF] text-white font-medium py-3 px-3 rounded-lg"
                  >
                    Lưu thay đổi
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-3  border-gray-700">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg">
            <div className="mb-6">
              <h3 className="font-semibold">Số điện thoại và Email</h3>
              <div className="flex items-center mb-4 justify-between">
                <div className="flex items-center">
                  <label className="mr-2">Số điện thoại</label>
                </div>
                <input
                  className="mt-1 block w-[150px] border border-gray-300 rounded-md p-2"
                  type="text"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <label className="mr-2">Địa chỉ email</label>
                </div>

                <input
                  className="mt-1 block w-[150px] border border-gray-300 rounded-md p-2"
                  type="email"
                />
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold">Bảo mật</h3>
              <div className="flex items-center mb-4 justify-between">
                <div className="flex items-center">
                  <label className="mr-2">Đổi mật khẩu</label>
                </div>
                <button className="ml-2 bg-[#573CFF] text-white  font-bold py-2 px-4 rounded">
                  Cập nhật
                </button>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold">Liên kết mạng xã hội</h3>
              <div className="flex items-center mb-4 justify-between">
                <div className="flex items-center">
                  <label className="mr-2">Facebook</label>
                </div>
                <button className="ml-2 bg-[#573CFF] text-white font-bold py-2 px-4 rounded">
                  Liên kết
                </button>
              </div>
              <h3 className="font-semibold border-t border-gray-300">
                Đã liên kết
              </h3>
              <div className="flex items-center mb-4 justify-between">
                <div className="flex items-center">
                  <label className="mr-2">Google</label>
                </div>
                <button className="ml-auto bg-red-500 text-white font-bold py-1 px-3 rounded">
                  Hủy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2 flex justify-center mt-6 mb-10 ">
        <table className="text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 text-2xl font-bold">
                Tổng quan thứ bậc
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 font-bold">Hạng thành viên</td>
              <td className="px-20 py-2">Gold</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-bold">Số điểm hiện tại</td>
              <td className="px-20 py-2">520 Điểm</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-bold">
                Số điểm cần tích lũy để tăng hạng
              </td>
              <td className="px-20 py-2">480 điểm nữa để tăng hạng</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
