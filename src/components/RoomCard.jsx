function RoomCard({ image, title, price, description, amenities }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 shadow-sm">
        <img 
          src={image} 
          className="card-img-top" 
          alt={title}
          style={{ height: '250px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="text-primary fs-4 fw-bold">${price}/night</p>
          <p className="card-text text-muted">{description}</p>
          
          <div className="mb-3">
            {amenities.map((amenity, index) => (
              <span key={index} className="badge bg-light text-dark me-2 mb-2">
                {amenity}
              </span>
            ))}
          </div>
          
          <button className="btn btn-primary mt-auto w-100">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
  