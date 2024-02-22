// import React from "react";
import Blog from "@/components/Blog";

export async function generateMetadata({ params }) {
  const blogMeta = await getBlogList(params.postId);
  return {
    title: blogMeta?.meta_title,
    description: blogMeta?.meta_description,
    openGraph: {
      images: [
        {
          url: `${url}/${blogMeta?.image}`,
          height: 600,
          width: 600,
        },
      ],
    },
  };
}
const url = process.env.url;

export async function getBlogList(slug) {
  const res = await fetch(`${url}/api/blog/${slug}`);
  const repo = await res.json();
  //console.log(repo, "---------------function check");
  return repo;
}

const page = async ({ params }) => {
  console.log(params, "params");
  const slug = params.postId;
  // console.log(slug, "slug//////////////");

  const blogList = await getBlogList(slug);
  //console.log(blogList, "+++++++++++++++++++");

  return <Blog blogList={blogList} />;
};

export default page;
