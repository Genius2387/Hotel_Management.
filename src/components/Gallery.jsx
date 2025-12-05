function Gallery() {
  const images = [
    "/assets/g2.jpg",
    "/assets/g8.jpg",
    "/assets/g4.avif",
    "/assets/g5.avif",
    "/assets/g6.webp",
    "/assets/g7.avif",
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center display-5 fw-bold mb-5">Gallery</h2>
        
        <div className="row g-3">
          {images.map((img, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="overflow-hidden rounded-3" style={{height: '250px'}}>
                <img src={img} alt="" className="w-100 h-100" style={{objectFit: 'cover'}} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
