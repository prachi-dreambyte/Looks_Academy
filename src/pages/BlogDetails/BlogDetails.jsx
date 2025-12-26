import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import '../../style/blog-details.css';

const BlogDetail = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blogPost = {
    title: "Blogs",
    date: "December 15, 2024",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop",

  };

  const recentBlogs = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      date: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox: When to Use Which",
      date: "Dec 8, 2024",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Building Responsive Websites",
      date: "Dec 5, 2024",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "JavaScript ES6+ Features You Should Know",
      date: "Dec 1, 2024",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop"
    }
  ];

  return (
    <>
    <section>
        <div className=''>
            <img src="/image/HomeBanners/1.webp" alt="banner"/>
        </div>
         <div className="blog-detail-wrapper">
      {/* <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div> */}
      
      <div className="container py-5">
        <div className="row">
          {/* Main Content */}
          <div className="col-lg-8">
            <article className="blog-content">
              <div className="blog-header">
                <div className="blog-meta">
                  <span className="date">{blogPost.date}</span>
                </div>
                <h1 className="blog-title">{blogPost.title}</h1>
                <p>Web development has evolved significantly over the past decade. The landscape of tools,
                 frameworks, and best practices continues to shift, requiring developers to stay updated with the latest trends and technologies.</p>
              </div>

              <div className="blog-image">
                <img src={blogPost.image} alt={blogPost.title} className="img-fluid" />
              </div>

              <div className="blog-body">
                <h3>The Rise of Modern Frameworks</h3>
      <p>Modern JavaScript frameworks like React, Vue, and Angular have revolutionized how we build web applications. These tools provide developers with powerful abstractions that make it easier to create complex, interactive user interfaces.</p>
      
      <p>React, in particular, has gained massive popularity due to its component-based architecture and virtual DOM implementation. This allows developers to build reusable UI components that can be composed together to create sophisticated applications.</p>
      
      <h3>Key Principles of Modern Web Development</h3>
      <p>Today's web development focuses on several core principles:</p>
      <ul>
        <li><strong>Performance:</strong> Optimizing load times and runtime performance</li>
        <li><strong>Accessibility:</strong> Ensuring applications are usable by everyone</li>
        <li><strong>Responsive Design:</strong> Creating layouts that work across all devices</li>
        <li><strong>Security:</strong> Protecting user data and preventing vulnerabilities</li>
      </ul>
      <div className='BlogImage'><img src="/image/2 (1).webp" className='BlogImg' alt="imge1"/><img src="/image/2 (1).webp" className='BlogImg' alt="imge2"/><img className='BlogImg' src="/image/2 (1).webp" alt="imge3"/></div>
      
      <h3>The Future of Web Development</h3>
      <p>As we look ahead, technologies like WebAssembly, Progressive Web Apps, and AI-powered tools are shaping the future of web development. The web platform continues to grow more capable, enabling experiences that were once only possible in native applications.</p>
      
      <p>Developers who embrace continuous learning and adapt to new technologies will find themselves well-positioned for success in this dynamic field. The key is to understand fundamental principles while remaining flexible enough to adopt new tools as they emerge.</p>
                </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <aside className="sidebar">
              <div className="sidebar-section">
                <h5 className="sidebar-title">Recent Posts</h5>
                <div className="recent-posts">
                  {recentBlogs.map((blog) => (
                    <div key={blog.id} className="recent-post-item">
                      <Link to="" className="nav-link"><img src={blog.image} alt={blog.title} className="recent-post-image" /></Link>
                      <div className="recent-post-content">
                        <Link to="" className="nav-link"><h6 className="recent-post-title">{blog.title}</h6></Link>
                        <span className="recent-post-date">{blog.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
    </section>
    
    </>
   
  );
};

export default BlogDetail;