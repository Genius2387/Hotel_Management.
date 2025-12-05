function Testimonials() {
  const testimonials = [
    { id: 1, name: 'John Smith', review: 'Absolutely wonderful experience! The staff was amazing and the room was perfect.', rating: 5 },
    { id: 2, name: 'Sarah Johnson', review: 'Best hotel stay ever. Will definitely come back again!', rating: 5 },
    { id: 3, name: 'Michael Brown', review: 'Great location, excellent service, and beautiful rooms. Highly recommend!', rating: 5 }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center display-5 fw-bold mb-5">What Our Guests Say</h2>
        
        <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="card-body">
                  <div className="text-warning mb-3" style={{fontSize: '1.5rem'}}>
                    {'★'.repeat(testimonial.rating)}
                  </div>
                  <p className="fst-italic text-muted mb-3">"{testimonial.review}"</p>
                  <p className="fw-bold mb-0">- {testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;