import { BLOG_POSTS } from '../config/Constants';
import '../styles/Home.css';

function Home() {
  return (
    <div className="page-container">
      <div className="info-card">
        <h2>Latest Blog Posts</h2>
        <p className="home-subtitle">Curated insights and technical reads from the software engineering community.</p>
        
        <div className="blog-list-wrapper">
          {BLOG_POSTS.map((blog) => (
            <div key={blog.id} className="blog-item">
              <h3>{blog.title}</h3>
              <span className="blog-meta">By {blog.author} • {blog.date}</span>
              <p>{blog.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;