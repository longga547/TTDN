import React from "react";
// import Image from "next/image";

interface Blog {
  id: number;
  title: string;
  description: string;
  content: string;
}

interface BlogData {
  data: Blog[];
}

async function getBlogData(): Promise<BlogData> {
  const res = await fetch("https://api-core.dsp.one/api/auth/post", {
    cache: "no-store",
  });
  return res.json();
}
const Testnha = async () => {
  const blogData = await getBlogData();
  console.log(blogData);
  return (
    <div>
      {blogData.data.slice(0, 2).map((blog) => (
        <div key={blog.id}>
          <p>id:{blog.id}</p>
          <p>Name: {blog.description}</p>
          <p>Email: {blog.content}</p>
        </div>
      ))}

      
    </div>
  );
};

export default Testnha;
