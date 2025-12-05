function Booking() {
  const handleSubmit = () => {
    alert('Booking submitted! Thank you for choosing Grand Hotel.');
  };

  return (
    <section className="py-5 text-white" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div className="container">
        <h2 className="text-center display-5 fw-bold mb-5">Book Your Stay</h2>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="row g-3">
              <div className="col-md-6">
                <input type="text" className="form-control form-control-lg" placeholder="Full Name" />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control form-control-lg" placeholder="Email" />
              </div>
              <div className="col-md-6">
                <input type="date" className="form-control form-control-lg" placeholder="Check-in Date" />
              </div>
              <div className="col-md-6">
                <input type="date" className="form-control form-control-lg" placeholder="Check-out Date" />
              </div>
              <div className="col-md-6">
                <select className="form-select form-select-lg">
                  <option value="">Select Room Type</option>
                  <option value="luxury">Luxury Suite</option>
                  <option value="family">Family Room</option>
                  <option value="single">Single Room</option>
                  <option value="couple">Couple Room</option>
                  <option value="deluxe">Deluxe Room</option>
                  <option value="executive">Executive Suite</option>
                </select>
              </div>
              <div className="col-md-6">
                <input type="number" className="form-control form-control-lg" placeholder="Number of Guests" min="1" />
              </div>
              <div className="col-12">
                <textarea className="form-control form-control-lg" placeholder="Special Requests" rows="4"></textarea>
              </div>
              <div className="col-12">
                <button onClick={handleSubmit} className="btn btn-light btn-lg w-100 text-primary fw-bold">
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Booking;