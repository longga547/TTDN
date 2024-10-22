import React from "react";

const UserAddress = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 px-4 py-[60px] sm:px-10 md:px-20 md:grid-cols-3">
        <div className="col-1 p-4 bg-white rounded-lg">
          <div className="flex items-center mb-4">
            <img
              className="w-16 h-16 rounded-full mr-4"
              src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-1/456665061_1225995405241232_8942598692084260272_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=pfJVr31iExsQ7kNvgFogMt9&_nc_zt=24&_nc_ht=scontent.fsgn4-1.fna&_nc_gid=AyyW_wZRM4I8Pd2_fTTIw9M&oh=00_AYAkelpHm51dh2TaEjE7RtNtbbbNQ_mX2RqQg-8e6qj70Q&oe=6712EF3D"
              alt="Ảnh đại diện"
            />
            <div>
              <p className="text-l">Tài khoản của</p>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
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
        <div className="col-span-2">
          <span className="text-4xl font-semibold text-center block">Sổ Địa Chỉ</span>
          <div className="shadow-lg h-[100px] flex flex-col items-center justify-center mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              className="mb-2"
            >
              <path
                fill="currentColor"
                d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6"
              />
              <path
                fill="currentColor"
                d="M8 11.5c-.28 0-.5-.22-.5-.5V5c0-.28.22-.5.5-.5s.5.22.5.5v6c0 .28-.22.5-.5.5"
              />
              <path
                fill="currentColor"
                d="M11 8.5H5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5"
              />
            </svg>
            <span className="font-semibold">Thêm địa chỉ</span>
          </div>
          <div className="shadow-lg flex  mb-10">
            <table className="w-full h-auto">
              <tr className="">
                <td className="flex justify-between items-center">
                  <div>
                    <span className="font-bold px-5 py-5 text-2xl">Họ Tên</span>
                    <span className="text-[#4026E1]">Địa chỉ mặc định</span>
                  </div>
                  <a href="/" className="text-right mr-3">
                    Chỉnh sửa
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pt-4">
                  <span className="font-semibold px-5 text-lg">Địa chỉ</span>
                  <span className="pl-10 text-sm sm:pl-20 sm:text-base whitespace-nowrap">
                    55/19, đường số 2, phường 3, Gò vấp
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-4">
                  <span className="font-semibold px-5 text-lg">
                    Số điện thoại
                  </span>
                  <span className="pl-10 text-sm sm:pl-5 sm:text-base whitespace-nowrap">+84 359 905 982</span>
                </td>
              </tr>
            </table>
          </div>
          <div className="shadow-lg flex  mb-10">
            <table className="w-full h-auto">
              <tr className="">
                <td className="flex justify-between items-center">
                  <div>
                    <span className="font-bold px-5 py-5 text-2xl">Họ Tên</span>
                    {/* <span className='text-[#4026E1]'>Địa chỉ mặc định</span> */}
                  </div>
                  <a href="/" className="text-right mr-3">
                    Chỉnh sửa
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pt-4">
                  <span className="font-semibold px-5 text-lg">Địa chỉ</span>
                  <span className="pl-10 text-sm sm:pl-20 sm:text-base whitespace-nowrap">
                    55/19, đường số 2, phường 3, Gò vấp
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-4">
                  <span className="font-semibold px-5 text-lg">
                    Số điện thoại
                  </span>
                  <span className="pl-10 text-sm sm:pl-5 sm:text-base whitespace-nowrap">+84 359 905 982</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAddress;
