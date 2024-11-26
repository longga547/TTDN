"use client"; // Đánh dấu component này là Client Component
import React, { useState } from "react";
import Link from "next/link";
const Header = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null); // Trạng thái cho menu đang mở
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false); // Trạng thái cho menu di động

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMenu = (menu: string) => {
    // Đặt kiểu cho menu
    setOpenMenu(openMenu === menu ? null : menu); // Đóng menu nếu đã mở, nếu không thì mở menu mới
  };

  const closeMenu = () => {
    setMobileMenuOpen(false); // Đặt lại trạng thái menu di động về false
  };
  return (
    <header className="md:px-[10px] py-6 lg:px-[150px] flex items-center justify-between bg-white shadow-md">
      {/* Logo or Title */}
      <div className="flex items-center text-[#022C5D] font-medium text-2xl mx-8 md:shrink-0">
        <Link href="/">Logo</Link>
      </div>

      {/* Menu Button for Mobile */}
      <button onClick={toggleMobileMenu} className="lg:hidden mx-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="#022C5D"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H15.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zM0 7.5A.5.5 0 0 1 .5 7H15.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zM0 13.5A.5.5 0 0 1 .5 13H15.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>
      <nav className="hidden lg:flex  gap-10 mx-auto items-center relative">
        <div className="">
          <Link
            href="/"
            className="text-[#022C5D] font-medium hover:text-blue-600 flex items-center"
          >
            Home
          </Link>
        </div>
        <div className="relative group">
          <Link
            href="#"
            className="text-[#022C5D] font-medium hover:text-blue-600 flex items-center"
          >
            Courses
          </Link>
          <div className="absolute w-[250px] p-2 z-20 hidden group-hover:block bg-white shadow-lg  rounded border-t-[2px] border-[#573CFF] transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
            <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
              <Link href="/Courses">Courses</Link>
              <span>&gt;&gt;</span>
            </div>
            <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
              <Link href="/CoursesDetail">Courses Detail</Link>
              <span>&gt;&gt;</span>
            </div>
          </div>
        </div>
        <div className="relative group">
          <Link
            href="#"
            className="text-[#022C5D] font-medium hover:text-blue-600 flex items-center"
          >
            Team
          </Link>
          <div className="absolute w-[250px] p-2 z-20 hidden group-hover:block bg-white shadow-lg  rounded border-t-[2px] border-[#573CFF] transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
            <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
              <Link href="/Team">Team</Link>
              <span>&gt;&gt;</span>
            </div>
            <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
              <Link href="/TeamDetail">Team Detail</Link>
              <span>&gt;&gt;</span>
            </div>
          </div>
        </div>
        <div className="relative group">
          <Link
            href="#"
            className="text-[#022C5D] font-medium hover:text-blue-600 flex items-center"
          >
            Pages
          </Link>
          <div className="absolute w-[250px] p-2 z-20 hidden group-hover:block bg-white shadow-lg  rounded border-t-[2px] border-[#573CFF] transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
            <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
              <Link href="/Gallery">Gallery</Link>
              <span>&gt;&gt;</span>
            </div>
            <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
              <Link href="/GalleryDetail">Gallery Detail</Link>
              <span>&gt;&gt;</span>
            </div>
            <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
              <Link href="/FAQ">FAQ</Link>
              <span>&gt;&gt;</span>
            </div>
            <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
              <Link href="/ErrorPage">Error Page</Link>
              <span>&gt;&gt;</span>
            </div>
          </div>
        </div>
        <div className="relative group">
          <Link
            href="#"
            className="text-[#022C5D] font-medium hover:text-blue-600 flex items-center"
          >
            Blog
          </Link>
          <div className="absolute w-[250px] p-2 z-20 hidden group-hover:block bg-white shadow-lg  rounded border-t-[2px] border-[#573CFF] transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
            <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
              <Link href="/Blog">Blog</Link>
              <span>&gt;&gt;</span>
            </div>
            <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
              <Link href="/BlogDetail">Blog Detail</Link>
              <span>&gt;&gt;</span>
            </div>
          </div>
        </div>
        <div className="">
          <Link
            href="/Contact"
            className="text-[#022C5D] font-medium hover:text-blue-600 flex items-center"
          >
            Contact
          </Link>
        </div>
        <span>
          <Link href="/Cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              className="cart"
              viewBox="0 0 16 16"
            >
              <path
                fill="#022C5D"
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607L1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4a2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2"
              />
            </svg>
          </Link>
        </span>
        <span>
          <div className="relative group">
            <Link href="/User">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                className="user"
                viewBox="0 0 256 256"
              >
                <path
                  fill="#022C5D"
                  d="M230.93 220a8 8 0 0 1-6.93 4H32a8 8 0 0 1-6.92-12c15.23-26.33 38.7-45.21 66.09-54.16a72 72 0 1 1 73.66 0c27.39 8.95 50.86 27.83 66.09 54.16a8 8 0 0 1 .01 8"
                />
              </svg>
            </Link>
            <div className="absolute w-[130px] p-2 z-20 hidden group-hover:block bg-white shadow-lg  rounded border-t-[2px] border-[#573CFF] transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
              <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
                <Link href="/SignIn">Đăng nhập</Link>
              </div>
              <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
                <Link href="/SignUp">Đăng ký</Link>
              </div>
            </div>
          </div>
        </span>
      </nav>
      <button className="hidden md:shrink-0 lg:flex px-8 py-3 ml-4 text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl ">
        Get Started
      </button>
      {/* menu respon */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[10px] right-[0px] w-3/4  py-4 px-4 bg-white z-50 ">
          <div className="flex justify-between px-2">
            <h3 className="text-xl text-[#4026e1] font-medium">LOGO</h3>
            <div
              onClick={closeMenu}
              className="text-red-500 cursor-pointer mx-2"
            >
              ✖
            </div>
          </div>

          {/* Home User */}
          <div
            onClick={() => toggleMenu("user")}
            className="flex justify-between w-full py-3 px-4 my-2 bg-[#4026e1] text-white font-medium "
          >
            <p>User</p>
            <p>▼</p>
          </div>
          {openMenu === "user" && (
            <div className="px-4 border-[1px] border-stone-200 border-t-0">
              <p className="py-2 border-b-[1px] border-stone-200 text-[#4026e1]">
                <Link href="/User">User</Link>
              </p>
              <p className="py-2 border-b-[1px] border-stone-200 text-[#4026e1]">
                <Link href="/SignIn">Đăng nhập</Link>
              </p>

              <p className="py-2 border-b-[1px] border-stone-200 text-[#4026e1]">
                <Link href="/SignUp">Đăng ký</Link>
              </p>
            </div>
          )}

          {/* Courses Menu */}
          <div
            onClick={() => toggleMenu("courses")}
            className="flex justify-between w-full py-3 px-4 my-2 bg-[#4026e1] text-white font-medium "
          >
            <p>Courses</p>
            <p>▼</p>
          </div>
          {openMenu === "courses" && (
            <div className="px-4 border-[1px] border-stone-200 border-t-0">
              <p className="py-2 border-b-[1px] border-stone-200 text-[#4026e1]">
                <Link href="/Courses">Courses</Link>
              </p>

              <p className="py-2 border-b-[1px] border-stone-200 text-[#4026e1]">
                <Link href="/CoursesDetail">Courses Detail</Link>
              </p>
            </div>
          )}

          {/* Team Menu */}
          <div
            onClick={() => toggleMenu("team")}
            className="flex justify-between w-full py-3 px-4 my-2 bg-[#4026e1] text-white font-medium "
          >
            <p>Team</p>
            <p>▼</p>
          </div>
          {openMenu === "team" && (
            <div className="px-4 border-[1px] border-stone-200 border-t-0">
              <p className="py-2 border-b-[1px] border-stone-200 text-[#4026e1]">
                <Link href="/Team">Team</Link>
              </p>
              <p className="py-2  text-[#4026e1]">
                <Link href="/TeamDetail">Team Detail</Link>
              </p>
            </div>
          )}

          {/* Pages Menu */}
          <div
            onClick={() => toggleMenu("pages")}
            className="flex justify-between w-full py-3 px-4 my-2 bg-[#4026e1] text-white font-medium "
          >
            <p>Pages</p>
            <p>▼</p>
          </div>
          {openMenu === "pages" && (
            <div className="px-4 border-[1px] border-stone-200 border-t-0">
              <p className="py-2 border-b-[1px] border-stone-200 text-[#4026e1]">
                <Link href="/Gallery">Gallery</Link>
              </p>
              <p className="py-2 border-b-[1px] border-stone-200 text-[#4026e1]">
                <Link href="/GalleryDetail">Gallery Detail</Link>
              </p>
              <p className="py-2 border-b-[1px] border-stone-200 text-[#4026e1]">
                <Link href="/FAQ">FAQ</Link>
              </p>
              <p className="py-2  text-[#4026e1]">
                <Link href="/ErrorPage">Error Page</Link>
              </p>
            </div>
          )}

          {/* Blog Menu */}
          <div
            onClick={() => toggleMenu("blog")}
            className="flex justify-between w-full py-3 px-4 my-2 bg-[#4026e1] text-white font-medium "
          >
            <p>Blog</p>
            <p>▼</p>
          </div>
          {openMenu === "blog" && (
            <div className="px-4 border-[1px] border-stone-200 border-t-0">
              <p className="py-2 border-b-[1px] border-stone-200 text-[#4026e1]">
                <Link href="/Blog">Blog</Link>
              </p>
              <p className="py-2  text-[#4026e1]">
                <Link href="/BlogDetail">Blog Detail</Link>
              </p>
            </div>
          )}

          {/* Contact Menu */}
          <div className="w-full py-3 px-4 my-2 bg-[#4026e1] text-white font-medium ">
            <p>
              <Link href="/Contact">Contact</Link>
            </p>
          </div>
          {/* Contact Info */}
          <div className="mt-[60px]">
            <h2 className="text-2xl font-bold mb-[15px]">Contact Info</h2>
            <ul className="text-[#002935] text-[18px] space-y-2">
              <li className="flex items-center gap-1">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#4026e1"
                      d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
                    />
                  </svg>
                </i>
                6391 Elgin St. Celina, Delaware
              </li>
              <li className="flex items-center gap-1">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="#4026e1"
                        d="M16.552 22.133c-1.44-.053-5.521-.617-9.795-4.89c-4.273-4.274-4.836-8.354-4.89-9.795c-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.6 1.166 2.704 2.93 3.652 4.317a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899s2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332c1.407.974 3.049 2.059 4.251 3.598a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535"
                      />
                    </g>
                  </svg>
                </i>
                (+001) 123-456-789
              </li>
              <li className="flex items-center gap-1">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                  >
                    <g fill="#4026e1">
                      <path d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066z" />
                      <path d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a3 3 0 0 1 2.354-1.42L5 4z" />
                    </g>
                  </svg>
                </i>
                info@example.com
              </li>
              <li className="flex items-center gap-1">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#4026e1"
                      fillRule="evenodd"
                      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-9-6a1 1 0 1 0-2 0v5H8a1 1 0 1 0 0 2h3.8a1.2 1.2 0 0 0 1.2-1.2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </i>
                Week Days: 08.00 to 10.00
              </li>
            </ul>
          </div>
          {/* icon team */}
          <div className="mt-[58px]">
            <ul className="w-full h-[35px] flex gap-3 ">
              <li className="flex items-center justify-center w-[35px] h-full bg-[#4026e1] rounded-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                  />
                </svg>
              </li>
              <li className="flex items-center justify-center w-[35px] h-full bg-[#4026e1] rounded-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      stroke="white"
                      strokeWidth="2"
                      d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z"
                    />
                    <circle cx="16.5" cy="7.5" r="1.5" fill="white" />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </li>
              <li className="flex items-center justify-center w-[35px] h-full bg-[#4026e1] rounded-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1231.051 1000"
                >
                  <path
                    fill="white"
                    d="M1231.051 118.453q-51.422 76.487-126.173 130.403q.738 14.46.738 32.687q0 101.273-29.53 202.791q-29.53 101.519-90.215 194.343T841.297 843.145T639.62 957.395t-252.474 42.606q-210.2 0-387.147-113.493q31.406 3.495 60.242 3.495q175.605 0 313.687-108.177q-81.877-1.501-146.654-50.409q-64.777-48.907-89.156-124.988q24.097 4.59 47.566 4.59q33.782 0 66.482-8.812q-87.378-17.5-144.975-87.04q-57.595-69.539-57.595-160.523v-3.126q53.633 29.696 114.416 31.592q-51.762-34.508-82.079-89.999q-30.319-55.491-30.319-120.102q0-68.143 34.151-126.908q95.022 116.607 230.278 186.392q135.258 69.786 290.212 77.514q-6.609-27.543-6.621-57.485q0-104.546 73.994-178.534Q747.623 0 852.169 0q109.456 0 184.392 79.711q85.618-16.959 160.333-61.349q-28.785 90.59-110.933 139.768q75.502-8.972 145.088-39.677z"
                  />
                </svg>
              </li>
              <li className="flex items-center justify-center w-[35px] h-full bg-[#4026e1] rounded-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="white"
                    d="M16.75.406C10.337.406 4 4.681 4 11.6c0 4.4 2.475 6.9 3.975 6.9c.619 0 .975-1.725.975-2.212c0-.581-1.481-1.819-1.481-4.238c0-5.025 3.825-8.588 8.775-8.588c4.256 0 7.406 2.419 7.406 6.863c0 3.319-1.331 9.544-5.644 9.544c-1.556 0-2.888-1.125-2.888-2.737c0-2.363 1.65-4.65 1.65-7.088c0-4.137-5.869-3.387-5.869 1.613c0 1.05.131 2.212.6 3.169c-.863 3.713-2.625 9.244-2.625 13.069c0 1.181.169 2.344.281 3.525c.212.238.106.213.431.094c3.15-4.313 3.038-5.156 4.463-10.8c.769 1.463 2.756 2.25 4.331 2.25c6.637 0 9.619-6.469 9.619-12.3c0-6.206-5.363-10.256-11.25-10.256z"
                  />
                </svg>
              </li>
              <li className="flex items-center justify-center w-[35px] h-full bg-[#4026e1] rounded-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.5px"
                  height="20px"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="white"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
