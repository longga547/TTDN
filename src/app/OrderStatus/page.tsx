import React from "react";
import Image from "next/image";
import Link from "next/link";
const OrderStatus = () => {
  return (
    <div>
      {/*  */}
      <div className="flex items-center space-x-4 my-10 px-[90px]">
        <Link href="/quanlydonhang">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="text-black"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <span className="text-black text-4xl font-medium">DH10000001</span>
      </div>
      {/*  */}
      <div className="flex px-[100px]">
        <div className="w-2/3 p-4">
          <div className="bg-gray-100 px-5 py-5 mb-10">
            <table className="w-full h-auto">
              <tbody>
                <tr>
                  <td className="flex justify-between items-center font-semibold text-lg">
                    <div>
                      <span className="">Thông Tin Nhận Hàng</span>
                    </div>
                    <svg
                      className="text-right mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="-2 -2 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m5.72 14.456l1.761-.508l10.603-10.73a.456.456 0 0 0-.003-.64l-.635-.642a.443.443 0 0 0-.632-.003L6.239 12.635zM18.703.664l.635.643c.876.887.884 2.318.016 3.196L8.428 15.561l-3.764 1.084a.9.9 0 0 1-1.11-.623a.9.9 0 0 1-.002-.506l1.095-3.84L15.544.647a2.215 2.215 0 0 1 3.159.016zM7.184 1.817c.496 0 .898.407.898.909a.903.903 0 0 1-.898.909H3.592c-.992 0-1.796.814-1.796 1.817v10.906c0 1.004.804 1.818 1.796 1.818h10.776c.992 0 1.797-.814 1.797-1.818v-3.635c0-.502.402-.909.898-.909s.898.407.898.91v3.634c0 2.008-1.609 3.636-3.593 3.636H3.592C1.608 19.994 0 18.366 0 16.358V5.452c0-2.007 1.608-3.635 3.592-3.635z"
                      />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="flex justify-between items-center text-1xl">
                    <div>
                      <span>Nguyễn Ngọc Trâm Anh | 0359 905 982</span>
                    </div>
                    <span className="text-right mr-3">
                      55/19, đường số 2, phường 3, Gò vấp
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*  */}
          <div className="bg-gray-100 px-5 py-5">
            <table className="w-full h-auto">
              <tbody>
                <tr>
                  <td className="flex justify-between items-center font-semibold text-lg">
                    <div>
                      <span className="">Hóa Đơn Điện Tử</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="flex justify-between items-center text-1xl py-[5px]">
                    <div>
                      <span className="">Tên công ty:</span>
                    </div>
                    <span className="text-right mr-3 font-semibold">
                      Công Ty trách nhiệm hữu hạn Hữu Tiến
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="flex justify-between items-center text-1xl pb-2">
                    <div>
                      <span className="">Mã số thuế:</span>
                    </div>
                    <span className="text-right mr-3 font-semibold">
                      001122445533
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="flex justify-between items-center text-1xl pb-2">
                    <div>
                      <span className="">Email:</span>
                    </div>
                    <span className="text-right mr-3 font-semibold">
                      Duybbps31947@fpt.edu.vn
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="flex justify-between items-center text-1xl pb-2">
                    <div>
                      <span className="">Tỉnh/Thành:</span>
                    </div>
                    <span className="text-right mr-3 font-semibold">
                      Bà Rịa - Vũng Tàu
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="flex justify-between items-center text-1xl pb-2">
                    <div>
                      <span className="">Quận/Huyện:</span>
                    </div>
                    <span className="text-right mr-3 font-semibold">
                      Châu Đức
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="flex justify-between items-center text-1xl pb-2">
                    <div>
                      <span className="">Phường/Xã:</span>
                    </div>
                    <span className="text-right mr-3 font-semibold">
                      Xuân Sơn
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="flex justify-between items-center text-1xl">
                    <div>
                      <span className="">Số nhà, đường:</span>
                    </div>
                    <span className="text-right mr-3 font-semibold">
                      tổ 5, thôn Quảng Giao
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*  */}
          <div>
            <div className="flex items-center justify-between bg-white px-10 py-5 mt-10">
              <div className="flex items-center space-x-4">
                <Image
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/testimonial/testi-shape2.png"
                  className="w-24 h-24"
                  alt=""
                  width={96} // Provide the actual width of the image
                  height={96} // Provide the actual height of the image
                  priority
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    Ba Chỉ Bò Nhập Khẩu Đông Lạnh Trust Farm (Khay 300g)
                  </h3>
                  <p className="text-gray-500 pt-2">
                    Mã tả sản phẩm 1, Mã tả sản phẩm 2, Mã tả sản phẩm 3, Mã tả
                    sản phẩm 4.
                  </p>
                  <p className="text-gray-500 py-5">Số lượng: 01</p>
                </div>
              </div>
              <div className="text-right mb-12">
                <p className="text-2xl font-semibold">499.000 đ</p>
                <p className="text-red-500">-49.000</p>
                <p className="text-gray-500">đã giảm giá</p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-white px-10 py-5 mt-10">
              <div className="flex items-center space-x-4">
                <Image
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Edu/education-learning-lms-html-template-estudy-2023-12-07-15-45-43-utc/estudy/assets/images/testimonial/testi-shape2.png"
                  className="w-24 h-24"
                  alt=""
                  width={96} // Provide the actual width of the image
                  height={96} // Provide the actual height of the image
                  priority
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    Ba Chỉ Bò Nhập Khẩu Đông Lạnh Trust Farm (Khay 300g)
                  </h3>
                  <p className="text-gray-500 pt-2">
                    Mã tả sản phẩm 1, Mã tả sản phẩm 2, Mã tả sản phẩm 3, Mã tả
                    sản phẩm 4.
                  </p>
                  <p className="text-gray-500 py-5">Số lượng: 01</p>
                </div>
              </div>
              <div className="text-right mb-12">
                <p className="text-2xl font-semibold">499.000 đ</p>
                <p className="text-red-500">-49.000</p>
                <p className="text-gray-500">đã giảm giá</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <span className="font-semibold">
              Tổng Khối Lượng Giỏ Hàng:<span className="font-bold">0.5Kg</span>
            </span>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="w-1/3 p-4">
          <div className="bg-white p-6">
            <h2 className="text-2xl text-center font-semibold mb-6">
              SHIPPING INFORMATION
            </h2>
            <h3 className="text-lg font-semibold mb-2">Tình trạng đơn hàng</h3>
            <div className="flex flex-col items-center justify-center bg-white border-b-2 border-gray-500">
              <div className="flex items-center space-x-8 pb-5">
                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-2 pr-7">
                    <svg
                      className="text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          d="M11.029 2.54a2 2 0 0 1 1.942 0l7.515 4.174a1 1 0 0 1 .514.874v8.235a2 2 0 0 1-1.029 1.749l-7 3.888a2 2 0 0 1-1.942 0l-7-3.889A2 2 0 0 1 3 15.824V7.588a1 1 0 0 1 .514-.874z"
                        />
                        <path
                          strokeLinecap="round"
                          d="m7.5 4.5l9 5V13M6 12.328L9 14"
                        />
                        <path d="m3 7l9 5m0 0l9-5m-9 5v9.5" />
                      </g>
                    </svg>
                    <div className="w-16 h-[1px] bg-yellow-400"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                      />
                    </svg>
                    <div className="w-16 h-[1px] bg-gray-200"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        color="currentColor"
                      >
                        <circle cx="17" cy="18" r="2" />
                        <circle cx="7" cy="18" r="2" />
                        <path d="M5 17.972c-1.097-.054-1.78-.217-2.268-.704s-.65-1.171-.704-2.268M9 18h6m4-.028c1.097-.054 1.78-.217 2.268-.704C22 16.535 22 15.357 22 13v-2h-4.7c-.745 0-1.117 0-1.418-.098a2 2 0 0 1-1.284-1.284C14.5 9.317 14.5 8.945 14.5 8.2c0-1.117 0-1.675-.147-2.127a3 3 0 0 0-1.926-1.926C11.975 4 11.417 4 10.3 4H2m0 4h6m-6 3h4" />
                        <path d="M14.5 6h1.821c1.456 0 2.183 0 2.775.354c.593.353.938.994 1.628 2.276L22 11" />
                      </g>
                    </svg>
                    <div className="w-16 h-[1px] bg-gray-200"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4zM3 6v9h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6zm2 4.5L6.5 9L8 10.5L11.5 7L13 8.5l-5 5z"
                      />
                    </svg>
                  </div>
                  <div className="flex justify-between w-full mt-4 text-[15px]">
                    <span className="text-yellow-400">Đã đặt</span>
                    <span className="text-gray-800 pl-[30px]">Đã duyệt</span>
                    <span className="text-gray-800 pl-[30px] pr-[]">
                      Đang giao
                    </span>
                    <span className="text-gray-800 pl-[15px]">
                      Giao thành công
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 border-b-2 border-gray-500 pb-5">
              <h3 className="text-lg font-semibold mb-2">
                Phương thức vận chuyển
              </h3>
              <p className="text-gray-500">GrabFood</p>
            </div>
            <div className="mt-6 border-b-2 border-gray-500 pb-5">
              <h3 className="text-lg font-semibold mb-2">
                Hình thức thanh toán
              </h3>
              <p className="text-gray-500">COD (Thanh toán khi nhận hàng)</p>
            </div>
            <div className="mt-6 border-b-2 border-gray-500 pb-5 flex item-center justify-between">
              <h3 className="text-lg font-semibold mb-2">Mã giảm giá</h3>
              <input
                type="text"
                className=" border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Giảm 50.000đ"
              />
            </div>
            <div className="mt-6 border-b-2 border-gray-500 pb-5">
              <h3 className="text-lg font-semibold mb-2">Ghi chú đơn hàng</h3>
              <input
                type="text"
                className="w-full h-[100px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Nhập ghi chú đơn hàng"
              />
            </div>
            <div className="mt-6 border-b-2 border-gray-500 pb-5">
              <h3 className="text-lg font-semibold mb-2">
                Thời gian giao hàng dự kiến
              </h3>
              <p className="text-gray-500">5 ngày làm việc</p>
            </div>
            <div className="mt-6 space-y-2 text-lg">
              <div className="flex justify-between">
                <span className="text-black font-semibold">Tổng tiền</span>
                <span>00,000,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black font-semibold">Khuyến mãi</span>
                <span>00,000,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black font-semibold">Phí vận chuyển</span>
                <span>00,000,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black font-semibold">
                  Số điểm tích lũy
                </span>
                <span>50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black font-semibold">
                  Tổng thanh toán
                </span>
                <span>00,000,000</span>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full bg-yellow-300 text-white font-medium py-3 rounded-md hover:bg-yellow-600 transition-colors duration-300">
                Đã nhận được hàng
              </button>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default OrderStatus;
