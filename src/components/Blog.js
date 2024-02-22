"use client";
import { usePathname } from "next/navigation";
import {
  TwitterShareButton,
  WhatsappShareButton,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
const Blog = ({ blogList }) => {
  const url = process.env.url;
  const pathname = usePathname();
  console.log(pathname, "pathname");
  const shareURL = `${url}${pathname}`;
  return (
    <div>
      <h2>{blogList.title}</h2>
      <div>
        <TwitterShareButton url={shareURL} title={blogList?.title}>
          <TwitterIcon></TwitterIcon>
        </TwitterShareButton>

        <WhatsappShareButton url={shareURL} title={blogList?.title}>
          <WhatsappIcon></WhatsappIcon>
        </WhatsappShareButton>
      </div>
      <div dangerouslySetInnerHTML={{ __html: blogList?.description }} />
      <div dangerouslySetInnerHTML={{ __html: blogList?.meta_title }} />
      {/* <img
      src={"https://destination.missionsummittreks.com/" + repo.image}
      width={100}
      height={100}
    ></img> */}
    </div>
  );
};

export default Blog;
