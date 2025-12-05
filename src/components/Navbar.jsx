import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container-fluid px-4">
        <NavLink className="navbar-brand fw-bold fs-3" to="/" style={{
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          OceanView Hotel
        </NavLink>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/rooms">Rooms</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/testimonials">Testimonials</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
          
          <NavLink className="btn btn-primary rounded-pill px-4" to="/booking" style={{
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            border: 'none'
          }}>
            Book Now
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;