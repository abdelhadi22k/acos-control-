import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const SoloBlog = ({ blog }) => {
  return (
    <div>
      <div className="blogContainers">
        {blog.length !== 0 ? (
          blog.map((Blog) => {
            return (
              <div key={Blog.id} className="mb-2 ">
                <div className="blogBox">
                  <Link to={`/Blog/${Blog.slug}`}>
                    <Image
                      className="blogImg"
                      src={Blog.image}
                      alt={Blog.title}
                      fluid
                    />
                  </Link> 

                  <div className="blogInfo">
                    <h6 className="mainTitle">{Blog.category}</h6>
                    <p className="mainTitle">{Blog.title}</p>
                    <span
                      className="mainBtn1"
                    >
                    {Blog.writer}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h3>No blogs</h3>
        )}
      </div>
    </div>
  );
};

export default SoloBlog;
