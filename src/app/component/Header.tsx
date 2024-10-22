"use client"; // Đánh dấu component này là Client Component
import React, { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null); // Trạng thái cho menu đang mở
    const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false); // Trạng thái cho menu di động

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleMenu = (menu: string) => { // Đặt kiểu cho menu
        setOpenMenu(openMenu === menu ? null : menu); // Đóng menu nếu đã mở, nếu không thì mở menu mới
    };

    const closeMenu = () => {
        setMobileMenuOpen(false); // Đặt lại trạng thái menu di động về false
    };
  return (
    <header className="md:px-[10px] py-6 lg:px-[150px] flex items-center justify-between bg-white shadow-md">
        {/* Logo or Title */}
        <div className="flex items-center text-[#022C5D] font-medium text-2xl mx-8 md:shrink-0">
          <a href="/">Logo</a>
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
            <a
              href="/"
              className="text-[#022C5D] font-medium hover:text-blue-600 flex items-center"
            >
              Home
            </a>
          </div>
          <div className="relative group">
            <a
              href="#"
              className="text-[#022C5D] font-medium hover:text-blue-600 flex items-center"
            >
              Courses
            </a>
            <div className="absolute w-[250px] p-2 z-20 hidden group-hover:block bg-white shadow-lg  rounded border-t-[2px] border-[#573CFF] transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
              <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
                <a href="/Courses">Courses</a>
                <span>&gt;&gt;</span>
              </div>
              <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
                <a href="/CoursesDetail">Courses Detail</a>
                <span>&gt;&gt;</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <a
              href="#"
              className="text-[#022C5D] font-medium hover:text-blue-600 flex items-center"
            >
              Team
            </a>
            <div className="absolute w-[250px] p-2 z-20 hidden group-hover:block bg-white shadow-lg  rounded border-t-[2px] border-[#573CFF] transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
              <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
                <a href="/Team">Team</a>
                <span>&gt;&gt;</span>
              </div>
              <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
                <a href="/TeamDetail">Team Detail</a>
                <span>&gt;&gt;</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <a
              href="#"
              className="text-[#022C5D] font-medium hover:text-blue-600 flex items-center"
            >
              Pages
            </a>
            <div className="absolute w-[250px] p-2 z-20 hidden group-hover:block bg-white shadow-lg  rounded border-t-[2px] border-[#573CFF] transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
              <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
                <a href="/Gallery">Gallery</a>
                <span>&gt;&gt;</span>
              </div>
              <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
                <a href="/GalleryDetail">Gallery Detail</a>
                <span>&gt;&gt;</span>
              </div>
              <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
                <a href="/FAQ">FAQ</a>
                <span>&gt;&gt;</span>
              </div>
              <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
                <a href="/ErrorPage">Error Page</a>
                <span>&gt;&gt;</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <a
              href="#"
              className="text-[#022C5D] font-medium hover:text-blue-600 flex items-center"
            >
              Blog
            </a>
            <div className="absolute w-[250px] p-2 z-20 hidden group-hover:block bg-white shadow-lg  rounded border-t-[2px] border-[#573CFF] transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
              <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
                <a href="/Blog">Blog</a>
                <span>&gt;&gt;</span>
              </div>
              <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
                <a href="/BlogDetail">Blog Detail</a>
                <span>&gt;&gt;</span>
              </div>
            </div>
          </div>
          <div className="">
            <a
              href="/Contact"
              className="text-[#022C5D] font-medium hover:text-blue-600 flex items-center"
            >
              Contact
            </a>
          </div>
          <span>
            <a href="/Cart">
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
            </a>
          </span>
          <span>
            <div className="relative group">
              <a href="/User">
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
              </a>
              <div className="absolute w-[130px] p-2 z-20 hidden group-hover:block bg-white shadow-lg  rounded border-t-[2px] border-[#573CFF] transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
                  <a href="/SignIn">Đăng nhập</a>
                </div>
                <div className="flex justify-between px-4 py-2 text-[#022C5D] font-medium hover:text-white hover:bg-[#573CFF]">
                  <a href="/SignUp">Đăng ký</a>
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
          <div className="lg:hidden absolute top-[10px] right-[0px] w-1/2 mx-2 py-4 px-2 bg-white z-50 ">
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
                  <a href="/User">User</a>
                </p>
                <p className="py-2 border-b-[1px] border-stone-200 text-[#4026e1]">
                  <a href="/SignIn">Đăng nhập</a>
                </p>

                <p className="py-2 border-b-[1px] border-stone-200 text-[#4026e1]">
                  <a href="/SignUp">Đăng ký</a>
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
                  <a href="/Courses">Courses</a>
                </p>

                <p className="py-2 border-b-[1px] border-stone-200 text-[#4026e1]">
                  <a href="/CoursesDetail">Courses Detail</a>
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
                  <a href="/Team">Team</a>
                </p>
                <p className="py-2  text-[#4026e1]">
                  <a href="/TeamDetail">Team Detail</a>
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
                  <a href="/Gallery">Gallery</a>
                </p>
                <p className="py-2 border-b-[1px] border-stone-200 text-[#4026e1]">
                  <a href="/GalleryDetail">Gallery Detail</a>
                </p>
                <p className="py-2 border-b-[1px] border-stone-200 text-[#4026e1]">
                  <a href="/FAQ">FAQ</a>
                </p>
                <p className="py-2  text-[#4026e1]"><a href="/ErrorPage">Error Page</a></p>
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
                  <a href="/Blog">Blog</a>
                </p>
                <p className="py-2  text-[#4026e1]"><a href="/BlogDetail">Blog Detail</a></p>
              </div>
            )}

            {/* Contact Menu */}
            <div className="w-full py-3 px-4 my-2 bg-[#4026e1] text-white font-medium ">
              <p><a href="/Contact">Contact</a></p>
            </div>
          </div>
        )}
      </header>
  );
};

export default Header;
