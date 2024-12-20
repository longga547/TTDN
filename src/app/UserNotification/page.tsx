import React from "react";
import Image from "next/image";
import anh from "./anh.png";
import Link from "next/link";

const UserNotification = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 px-4 py-[60px] sm:px-10 md:px-20 md:grid-cols-3">
        <div className="col-1 p-4 bg-white rounded-lg">
          <div className="flex items-center mb-4">
            <Image
              className="w-16 h-16 rounded-full mr-4"
              src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/testimonial/testi-shape2.png"
              alt="Ảnh đại diện"
              width={64}
              height={64}
            />
            <div>
              <p className="text-l">Tài khoản của</p>
              <p className="text-xl">Nguyễn Ngọc Trâm Anh</p>
            </div>
          </div>

          <div className="mt-4">
            <div className="py-2">
              <Link
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
              </Link>
            </div>
            <div className="border-t border-gray-300 py-2">
              <Link
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
              </Link>
            </div>
            <div className="border-t border-gray-300 py-2">
              <Link
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
              </Link>
            </div>
            <div className="border-t border-gray-300 py-2">
              <Link
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
              </Link>
            </div>
            <div className="border-t border-gray-300 py-2">
              <Link
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
              </Link>
            </div>
            <div className="border-t border-gray-300 py-2">
              <Link
                href="#"
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
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="text-4xl font-semibold mb-5 text-center block">
            <span>Thông Báo</span>
          </div>
          {/*  */}
          <div className="gap-10 md:flex block items-center py-3">
            <div className="flex  justify-start mb-2 sm:mb-0 max-w-[430px]:justify-start">
              <Link
                href="/khongthongbao"
                className="text-[#4026E1] hover:text-[#6854e9] transition-colors duration-300 flex items-center text-left"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 20 20"
                  className="mr-2"
                >
                  <g fill="currentColor">
                    <path d="M8 17a.5.5 0 0 1 1 0a1 1 0 1 0 2 0a.5.5 0 0 1 1 0a2 2 0 1 1-4 0" />
                    <path
                      fillRule="evenodd"
                      d="M17.5 14.5a2.96 2.96 0 0 0-1.5-2.575V9a5.5 5.5 0 0 0-5.5-5.5h-1A5.5 5.5 0 0 0 4 9v2.925A2.96 2.96 0 0 0 2.5 14.5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2M15 12.558l.295.133l.055.024A1.96 1.96 0 0 1 16.5 14.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1c0-.769.45-1.467 1.15-1.784l.055-.025l.295-.133V9a4.5 4.5 0 0 1 4.5-4.5h1A4.5 4.5 0 0 1 15 9z"
                      clipRule="evenodd"
                    />
                    <path d="M9.5 1.5a.5.5 0 0 1 1 0V4a.5.5 0 0 1-1 0z" />
                  </g>
                </svg>
                Thông báo chung
              </Link>
            </div>
            <div className="flex justify-start mb-2 sm:mb-0 max-w-[430px]:justify-start">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300 flex items-center text-left"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 11v4c0 3.3 0 4.95 1.025 5.975S7.7 22 11 22h2c3.3 0 4.95 0 5.975-1.025S20 18.3 20 15v-4M3 9c0-.748 0-1.122.201-1.4a1.4 1.4 0 0 1 .549-.44C4.098 7 4.565 7 5.5 7h13c.935 0 1.402 0 1.75.16c.228.106.417.258.549.44C21 7.878 21 8.252 21 9s0 1.121-.201 1.4a1.4 1.4 0 0 1-.549.44c-.348.16-.815.16-1.75.16h-13c-.935 0-1.402 0-1.75-.16a1.4 1.4 0 0 1-.549-.44C3 10.121 3 9.748 3 9m3-5.214C6 2.799 6.8 2 7.786 2h.357A3.857 3.857 0 0 1 12 5.857V7H9.214A3.214 3.214 0 0 1 6 3.786m12 0C18 2.799 17.2 2 16.214 2h-.357A3.857 3.857 0 0 0 12 5.857V7h2.786A3.214 3.214 0 0 0 18 3.786M12 11v11"
                    color="currentColor"
                  />
                </svg>
                Thông báo khuyến mãi
              </Link>
            </div>
            <div className="flex justify-start mb-2 sm:mb-0 max-w-[430px]:justify-start">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300 flex items-center text-left"
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
                Thông báo đơn hàng
              </Link>
            </div>
            <div className="flex justify-start mb-2 sm:mb-0 max-w-[430px]:justify-start">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300 flex items-center text-left"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M7.05 6.462a2 2 0 0 0 2.63-1.519l.32-1.72a9 9 0 0 1 3.998 0l.322 1.72a2 2 0 0 0 2.63 1.519l1.649-.58a9 9 0 0 1 2.001 3.46l-1.33 1.14a2 2 0 0 0 0 3.037l1.33 1.139a9 9 0 0 1-2.001 3.46l-1.65-.58a2 2 0 0 0-2.63 1.519L14 20.777a9 9 0 0 1-3.998 0l-.322-1.72a2 2 0 0 0-2.63-1.519l-1.649.58a9 9 0 0 1-2.001-3.46l1.33-1.14a2 2 0 0 0 0-3.036L3.4 9.342a9 9 0 0 1 2-3.46zM12 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6"
                    clipRule="evenodd"
                  />
                </svg>
                Thông báo hệ thống
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="text-center flex-col justify-center">
            <Image
              className="w-[400px] h-[400px] mx-auto"
              src={anh}
              alt=""
              width={400}
              height={400}
            />
            <span>Hiện tại bạn chưa có thông báo nào!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNotification;
