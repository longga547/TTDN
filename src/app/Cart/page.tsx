import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  return (
    <div>
      <div className="text-center my-10">
        <span className="text-black text-4xl font-medium">GIỎ HÀNG</span>
      </div>
      <div className="flex flex-col sm:flex-row px-4 sm:px-[100px]">
        <div className="w-full sm:w-2/3 p-4">
          <div className="bg-gray-100 px-5 py-5 mb-10">
            <table className="w-full h-auto">
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
            </table>
          </div>
          <div>
            <div className="max-w-4xl mx-auto p-4">
              {/* 1 */}
              <div className="flex items-center justify-between border-b py-4">
                <div className="flex items-center">
                  <Image
                    alt=""
                    className="w-20 h-20 object-cover"
                    src="https://storage.googleapis.com/a1aa/image/eAbJk5KregiYlkgpebqSogv1ByLIVZe9rMEKSeg1OxspSG9cC.jpg"
                    width={100} // Set width to match the original
                    height={100} // Set height to match the original
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold">
                      Ba Chỉ Bò Nhập Khẩu Đông Lạnh Trust Farm (Khay 300g)
                    </h2>
                    <p className="text-gray-500">
                      Mô tả sản phẩm 1, Mô tả sản phẩm 2, Mô tả sản phẩm 3, Mô
                      tả sản phẩm 4.
                    </p>
                    <div className="flex items-center mt-2">
                      <button className="border border-gray-400 px-3 py-1 rounded-l-full">
                        -
                      </button>
                      <span className="border-t border-b border-gray-400 px-4 py-1">
                        01
                      </span>
                      <button className="border border-gray-400 px-3 py-1 rounded-r-full">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">499.000 đ</p>
                  <p className="text-red-500">- 49,000</p>
                  <p className="text-gray-500">đã giảm giá</p>
                  <button className="mt-2 text-gray-500 hover:text-black">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
              {/* 2 */}
              <div className="flex items-center justify-between border-b py-4">
                <div className="flex items-center">
                  <Image
                    alt=""
                    className="w-20 h-20 object-cover"
                    height={100}
                    src="https://storage.googleapis.com/a1aa/image/ERGhlqJSmFKkD9uKwyKKJpEYZArr0PkESFmpMZfTmBXLZ0zJA.jpg"
                    width={100}
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold">
                      S2 XÚC XÍCH DINH DƯỠNG - IQ NGON (MỚI) - 210G
                    </h2>
                    <p className="text-gray-500">
                      Mô tả sản phẩm 1, Mô tả sản phẩm 2, Mô tả sản phẩm 3, Mô
                      tả sản phẩm 4.
                    </p>
                    <div className="flex items-center mt-2">
                      <button className="border border-gray-400 px-3 py-1 rounded-l-full">
                        -
                      </button>
                      <span className="border-t border-b border-gray-400 px-4 py-1">
                        01
                      </span>
                      <button className="border border-gray-400 px-3 py-1 rounded-r-full">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">499.000 đ</p>
                  <p className="text-red-500">- 49,000</p>
                  <p className="text-gray-500">đã giảm giá</p>
                  <button className="mt-2 text-gray-500 hover:text-black">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <span className="font-semibold">
              Tổng Khối Lượng Giỏ Hàng: <span className="font-bold">0.5Kg</span>
            </span>
          </div>
        </div>

        {/*  */}
        {/*  */}
        <div className="w-full lg:w-1/3 p-4">
          <div className="bg-white p-6">
            <h2 className="text-2xl text-center font-semibold mb-6">
              Thanh toán
            </h2>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">Phương thức vận chuyển</span>
                <Link href="/" className="text-sm text-gray-500">
                  Lựa chọn khác
                </Link>
              </div>
              <div className="mb-2">GrabFood</div>
              <hr className="border-t-2 border-gray-500" />
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">Hình thức thanh toán</span>
                <Link href="/" className="text-sm text-gray-500">
                  Lựa chọn khác
                </Link>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>COD (Thanh toán khi nhận hàng)</span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <hr className="border-t-2 border-gray-500" />
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <input type="radio" id="store" name="option" className="mr-2" />
                <label>Nhận tại cửa hàng</label>
              </div>
              <hr className="border-t-2 border-gray-500" />
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="invoice"
                  name="option"
                  className="mr-2"
                />
                <label>Xuất hóa đơn công ty</label>
              </div>
              <hr className="border-t-2 border-gray-500" />
            </div>
            <div className="mt-6 border-b-2 border-gray-500 pb-5 flex item-center justify-between">
              <h3 className="text-lg font-semibold mb-2">Mã giảm giá</h3>
              <input
                type="text"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
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
              <button className="w-full bg-[#573CFF] text-white font-medium py-3 rounded-md hover:bg-[#715eed] transition-colors duration-300">
                Xác nhận đơn hàng
              </button>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Cart;
