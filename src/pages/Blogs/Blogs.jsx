import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../style/SalonBlog.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SalonBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const API_URL = "http://localhost:5000/api/blogs/get-all-blogs";
  const IMAGE_URL = "http://localhost:5000/uploads/";

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(API_URL);
      setBlogs(res.data.data);
    } catch (error) {
      console.error("Error fetching blogs", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="TopBanner">
        <img src="/image/blog.webp" alt="image1"/>
      </section>
      <section className={styles.heroSection}>
        <div className="container">
          <h1>Looks Academy Blog</h1>
          <p>Inspiring Beauty Professionals Worldwide</p>
        </div>
      </section>

      {/* BLOG LIST */}
      <section className={styles.blogSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Latest Blogs</h2>

          {loading ? (
            <p className="text-center my-5">Loading blogs...</p>
          ) : (
            <div className="row">
              {blogs.map((post) => (
                <div key={post._id} className="col-lg-4 col-md-6">
                  <div
                    className={styles.blogCard}
                    role="button"
                    onClick={() => navigate(`/blogs/${post._id}`)}
                  >
                    <img
                      src={
                        post.mainImage
                          ? IMAGE_URL + post.mainImage
                          : "https://via.placeholder.com/400x250"
                      }
                      alt={post.title}
                      className={styles.blogCardImg}
                    />

                    <div className={styles.blogCardBody}>
                      <h3 className={styles.blogTitle}>{post.title}</h3>

                      <p className={styles.blogExcerpt}>{post.shortPara}</p>

                      <div className={styles.blogMeta}>
                        <span>{new Date(post.createdAt).toDateString()}</span>

                        {/* Stop bubbling so button also works independently */}
                        <button
                          className={styles.readMoreBtn}
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/blogs/${post._id}`);
                          }}
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {blogs.length === 0 && (
                <p className="text-center">No blogs found</p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className="container">
          <h3>Stay Connected</h3>
          <p>Follow us for daily inspiration and beauty tips</p>
        </div>
      </footer>
    </>
  );
};

export default SalonBlog;
