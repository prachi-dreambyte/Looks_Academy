import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/blogs.css';

const SalonBlog = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Hair Styling Trends for 2024",
      excerpt: "Discover the hottest hair styling trends that are taking the beauty world by storm this year. From bold colors to classic cuts reimagined.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
      date: "Dec 15, 2024",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Mastering the Art of Color Theory",
      excerpt: "Learn the fundamentals of color theory and how to apply them to create stunning hair transformations that complement every skin tone.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop",
      date: "Dec 10, 2024",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Building Your Salon Business",
      excerpt: "Essential tips and strategies for growing your salon business, from client retention to marketing techniques that actually work.",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop",
      date: "Dec 5, 2024",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Advanced Cutting Techniques",
      excerpt: "Master professional cutting techniques used by top stylists worldwide. Elevate your skills with these expert tips and tricks.",
      image: "https://images.unsplash.com/photo-1595475884562-073c30d45670?w=800&h=600&fit=crop",
      date: "Nov 28, 2024",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Natural Hair Care Revolution",
      excerpt: "Embrace the natural hair movement with our comprehensive guide to caring for and styling natural textures beautifully.",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=600&fit=crop",
      date: "Nov 20, 2024",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "Bridal Hair Mastery Workshop",
      excerpt: "Create unforgettable bridal looks with our step-by-step guide to elegant updos, romantic waves, and timeless wedding hairstyles.",
      image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&h=600&fit=crop",
      date: "Nov 15, 2024",
      readTime: "9 min read",
    }
  ];

  return (
    <>     
      <div className="hero-section">
        <div className="container">
          <h1>Looks Academy Blog</h1>
          <p>Inspiring Beauty Professionals Worldwide</p>
        </div>
      </div>

      <div className="blog-section">
        <div className="container">
          <h2 className="section-title">Latest Articles</h2>
          <div className="row">
            {blogPosts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <div 
                  className="blog-card"
                  onMouseEnter={() => setHoveredCard(post.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {post.featured && <div className="featured-badge">Featured</div>}
                  <img src={post.image} alt={post.title} className="blog-card-img" />
                  <div className="blog-card-body">
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <div className="blog-meta">
                      <span>{post.date} • {post.readTime}</span>
                      <button className="read-more-btn">Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <h3>Stay Connected</h3>
          <p>Follow us for daily inspiration and beauty tips</p>
          <div className="social-icons">
          </div>
        </div>
      </div>
    </>
  );
};

export default SalonBlog;