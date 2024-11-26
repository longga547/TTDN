import React from 'react'
// interface User {
//   id: number;
//   name: string;
//   email: string;
//   // Thêm các trường khác nếu cần
// }
interface Blog {
  id:number;
  description: string;
  content:string

}

// interface UserData {
//   data: User[]; // `data` là một mảng chứa các `User`
// }
interface BlogData {
    data: Blog[]; 
  }

// async function getUserData(): Promise<UserData> {
//   const res = await fetch("https://api-core.dsp.one/user/api/auth/user", {
//     cache: "no-store",
//   });
//   return res.json();
// }
async function getBlogData(): Promise<BlogData> {
  const res = await fetch("https://api-core.dsp.one/api/auth/post", {
    cache: "no-store",
  });
  return res.json();
}
const Testnha = async () => {
  // const userData = await getUserData();
  // console.log(userData); // In toàn bộ userData để kiểm tra cấu trúc
    const blogData = await getBlogData();
  console.log(blogData); // In toàn bộ userData để kiểm tra cấu trúc
  return (
    <div>
          {/* {userData.data.length > 1 ? (
            userData.data.map((user) => (
              <div key={user.id}>
                <p>Name: {user.name }</p>
                <p>Email: {user.email}</p>
              </div>
            ))
          ) : (
            <p>No multiple users found</p> // Nếu mảng chỉ có 1 người dùng
          )} */}
          {blogData.data.length > 1 ? (
            blogData.data.map((blog) => (
              <div key={blog.id}>
                <p>id:{blog.id}</p>
                <p>Name: {blog.description }</p>
                <p>Email: {blog.content}</p>
              </div>
            ))
          ) : (
            <p>No multiple users found</p> // Nếu mảng chỉ có 1 người dùng
          )}
        </div>
  )
}

export default Testnha