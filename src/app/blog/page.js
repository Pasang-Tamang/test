import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const url = process.env.url;
  const res = await fetch(`${url}/api/blogs/list`);
  const repo = await res.json();

  return (
    <>
      HI JBLOG
      {/* {console.log(repo)} */}
      {repo.map((d) => {
        return (
          <div>
            <h1>{d.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: d.description }}></p>
            {/* <div dangerouslySetInnerHTML={{ __html: d.meta_title }} /> */}
            {/* <p>{d.description}</p> */}
            <Link href={"/" + d.slug}>
              <img
                src={"https://destination.missionsummittreks.com/" + d.image}
                width="200px"
                height="100px"
                alt="Picture of the author"
              />
            </Link>
          </div>
        );
      })}
    </>
  );
};

// export const getServerSideProps = async () => {
//   // Fetch data from external API
//   const res = await fetch(
//     "https://destination.missionsummittreks.com/api/blogs/list"
//   );
//   const repo = await res.json();
//   // Pass data to the page via props
//   //console.log(repo);
//   return {
//     props: { repo },
//   };
// };

export default Page;
