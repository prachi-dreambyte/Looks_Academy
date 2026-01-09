import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styles from "../../assets/styles/BlogDetails.module.css";

const BlogDetail = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ CHANGE HERE (ENV URL)
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const IMAGE_URL = `${API_BASE_URL}/uploads/`;

  useEffect(() => {
    fetchSingleBlog();
    fetchRecentBlogs();
  }, [id]);

  const fetchSingleBlog = async () => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/blogs/get-blog/${id}`
      );
      setBlog(res.data.data);
    } catch (error) {
      console.error("Error fetching blog", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecentBlogs = async () => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/blogs/get-all-blogs`
      );

      const filtered = res.data.data
        .filter((item) => item._id !== id)
        .slice(0, 5);

      setRecentBlogs(filtered);
    } catch (error) {
      console.error("Error fetching recent blogs", error);
    }
  };

  if (loading) return <p className="text-center my-5">Loading...</p>;
  if (!blog) return <p className="text-center my-5">Blog not found</p>;

  return (
    <section className={styles.blogDetailWrapper}>
      <div className="container py-5">
        <div className="row g-4">

          {/* MAIN BLOG */}
          <div className="col-lg-8">
            <article className={styles.blogContent}>
              <span className={styles.date}>
                {new Date(blog.createdAt).toDateString()}
              </span>

              <h1 className={styles.blogTitle}>{blog.title}</h1>
              <p className={styles.shortPara}>{blog.shortPara}</p>

              {blog.mainImage && (
                <img
                  src={IMAGE_URL + blog.mainImage}
                  alt={blog.title}
                  className={styles.blogImage}
                />
              )}

              <div
                className={styles.blogBody}
                dangerouslySetInnerHTML={{ __html: blog.content1 }}
              />

              <div
                className={styles.blogBody}
                dangerouslySetInnerHTML={{ __html: blog.content2 }}
              />

              {blog.gallery?.length > 0 && (
                <div className={styles.gallery}>
                  {blog.gallery.map((img, i) => (
                    <img
                      key={i}
                      src={IMAGE_URL + img}
                      alt="gallery"
                      className={styles.galleryImg}
                    />
                  ))}
                </div>
              )}
            </article>
          </div>

          {/* SIDEBAR */}
          <div className="col-lg-4">
            <aside className={styles.sidebar}>
              <h5 className={styles.sidebarTitle}>Recent Posts</h5>

              {recentBlogs.map((item) => (
                <Link
                  to={`/blogs/${item._id}`}
                  key={item._id}
                  className={styles.recentPostCard}
                >
                  <img
                    src={
                      item.mainImage
                        ? IMAGE_URL + item.mainImage
                        : "https://via.placeholder.com/100"
                    }
                    alt={item.title}
                  />

                  <div>
                    <h6>{item.title}</h6>
                    <span>
                      {new Date(item.createdAt).toDateString()}
                    </span>
                  </div>
                </Link>
              ))}
            </aside>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
