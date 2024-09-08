import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SoloBlog from "../components/blog/SoloBlog";
import axios from "axios";
import { domain } from "./../utils/stn";
import Loading from "../components/loading/LoadingBlog";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBlog() {
      try {
        const { data } = await axios.get(`${domain}/api/blog`);
        setBlog(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchBlog();
  }, []);

  return (
    <section id="blog" className="blog">
      <Container className="blogContainer">
        <div className="main_info">
          <h1 className="main_info_h1">- Blog</h1>
          <h5 className="main_info_h5">Form Opinions our customers my blog post</h5>
          <p className="main_info_p">
          See the latest developments in the world of website development and developments 
          in interface design and user experience (UIUX) exclusively on our blog.
          </p>

          <div className="main_btn">
            <Link to="/Blog" className="mainBtn1">
            Check out our blog
            </Link>
            <a href="#Contact" className="mainBtn2">
              Learn More
            </a>
          </div>
        </div>

        <div className="blogHolder">
          {loading ? (
            <Loading />
          ) : error ? (
            <h1>{error}</h1>
          ) : ( 
            <SoloBlog blog={blog.slice(0, 3)}></SoloBlog>
          )}
        </div>
      </Container>
    </section>
  );
};
export default Blog;
