import { NavLink } from 'react-router-dom';

function Blog() {
  const blogPosts = [
    { 
      id: 1, 
      title: 'Top 10 Tourist Attractions Nearby', 
      date: 'Dec 1, 2024', 
      excerpt: 'Discover the best places to visit during your stay...',
      image: './assets/blog1.jpg'
    },
    { 
      id: 2, 
      title: 'How to Make Your Stay Comfortable', 
      date: 'Nov 28, 2024', 
      excerpt: 'Tips and tricks for a perfect hotel experience...',
      image: './assets/blog2.webp'
    },
    { 
      id: 3, 
      title: 'Seasonal Offers and Packages', 
      date: 'Nov 25, 2024', 
      excerpt: 'Check out our special holiday season packages...',
      image: './assets/blog3.avif'
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center display-5 fw-bold mb-5">Latest From Our Blog</h2>
        
        <div className="row g-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm overflow-hidden">
                
                {/* Thumbnail Image */}
                <div
                  style={{
                    height: '200px',
                    backgroundImage: `url(${post.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                <div className="card-body">
                  <h3 className="h5 card-title">{post.title}</h3>
                  <p className="text-muted small mb-2">{post.date}</p>
                  <p className="card-text text-muted">{post.excerpt}</p>

                  <NavLink 
                    className="text-primary fw-bold text-decoration-none" 
                    to="/rooms"
                  >
                    Read More →
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Blog;
