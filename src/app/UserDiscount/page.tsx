import React from "react";
import Image from "next/image";
import Link from "next/link";
const UserDiscount = () => {
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
          <div className="text-4xl font-semibold mb-5">
            <span>Mã Giảm Giá</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                Tất cả
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                Tiki
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                Nhà bán
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                Ưu đãi thanh toán
              </Link>
            </div>
            <div>
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                Hết hiệu lực
              </Link>
            </div>
          </div>
          <div className="bg-gray-100 flex justify-center items-center mt-10">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-300"></div>
                    <div>
                      <div className="font-bold text-lg">Giảm 100k</div>
                      <div className="text-gray-600">
                        Cho đơn hàng từ 1 triệu
                      </div>
                      <div className="text-gray-500">HSD 30/04/2022</div>
                    </div>
                  </div>
                  <button className="bg-[#4026E1] text-white px-16 py-2 ">
                    Lưu
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-300"></div>
                    <div>
                      <div className="font-bold text-lg">Giảm 100k</div>
                      <div className="text-gray-600">
                        Cho đơn hàng từ 1 triệu
                      </div>
                      <div className="text-gray-500">HSD 30/04/2022</div>
                    </div>
                  </div>
                  <button className="bg-[#4026E1] text-white px-16 py-2 ">
                    Lưu
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-300"></div>
                    <div>
                      <div className="font-bold text-lg">Giảm 100k</div>
                      <div className="text-gray-600">
                        Cho đơn hàng từ 1 triệu
                      </div>
                      <div className="text-gray-500">HSD 30/04/2022</div>
                    </div>
                  </div>
                  <button className="bg-[#4026E1] text-white px-16 py-2 ">
                    Lưu
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-300"></div>
                    <div>
                      <div className="font-bold text-lg">Giảm 100k</div>
                      <div className="text-gray-600">
                        Cho đơn hàng từ 1 triệu
                      </div>
                      <div className="text-gray-500">HSD 30/04/2022</div>
                    </div>
                  </div>
                  <button className="bg-[#4026E1] text-white px-16 py-2 ">
                    Lưu
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-300"></div>
                    <div>
                      <div className="font-bold text-lg">Giảm 100k</div>
                      <div className="text-gray-600">
                        Cho đơn hàng từ 1 triệu
                      </div>
                      <div className="text-gray-500">HSD 30/04/2022</div>
                    </div>
                  </div>
                  <button className="bg-[#4026E1] text-white px-16 py-2 ">
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDiscount;
