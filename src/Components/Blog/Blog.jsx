import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog }) => {
  const {
    title,
    cover,
    author,
    author_image,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img
        className="w-full rounded-md mb-8"
        src={cover}
        alt={`Cover picture of the ${title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex gap-5">
          <img
            className="w-14 rounded-full"
            src={author_image}
            alt={`Picture of ${author}`}
          />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p className="">{posted_date}</p>
          </div>
        </div>
        <div>
          <span className="text-lg">{reading_time}</span>
          <button className="text-xl ml-2">
            <CiBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash) => (
          <span>
            {" "}
            <a href="">{hash}</a>{" "}
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
