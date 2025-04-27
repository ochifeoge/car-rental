import { FaArrowRight } from "react-icons/fa";
import { blogPosts, Blogpost } from "../components/details";

const Blogs = () => {
  return (
    <section className="container">
      <div className="flex flex-col items-center gap-8 mb-8">
        <h5>LATEST BLOG POSTS</h5>
        <h3 className="font-semibold text-2xl ">Auto World Blog</h3>
      </div>
      <div className="flex flex-wrap justify-center  gap-4">
        {blogPosts.map(
          ({ title, img, type, date, excerpt, link }: Blogpost, index) => (
            <div
              className="relative border  pb-16 basis-full sm:basis-[48%] lg:basis-[31%] cursor-pointer group"
              key={index}>
              <div className="h-76 overflow-hidden">
                <img
                  src={img}
                  className="object-fit w-full h-full transform transition-transform duration-300 group-hover:scale-120"
                  alt={title}
                />
              </div>
              <div className="p-2 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h5>{type}</h5>
                  <h5>{date}</h5>
                </div>

                <h4 className="font-semibold text-lg">{title}</h4>
                <p>{excerpt}</p>
              </div>
              <div className="absolute bottom-0 right-0 flex items-center justify-center w-12 h-12 border">
                <a href={link}>
                  <FaArrowRight
                    className="group-hover:scale-120 cursor-pointer transition-transform duration-300 "
                    size={10}
                  />
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Blogs;
