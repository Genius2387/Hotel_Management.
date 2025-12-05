function Contact() {
  const handleSend = () => {
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center display-5 fw-bold mb-5">Contact Us</h2>
        
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-4">
              <div>
                <h3 className="h5 text-primary mb-2">Address</h3>
                <p className="text-muted">123 Grand Avenue, City Center, Pune</p>
              </div>
              <div>
                <h3 className="h5 text-primary mb-2">Phone</h3>
                <p className="text-muted">+91 8805324590</p>
              </div>
              <div>
                <h3 className="h5 text-primary mb-2">Email</h3>
                <p className="text-muted">genius@grandhotel.com</p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-3">
              <input type="text" className="form-control form-control-lg" placeholder="Your Name" />
              <input type="email" className="form-control form-control-lg" placeholder="Your Email" />
              <textarea className="form-control form-control-lg" placeholder="Your Message" rows="5"></textarea>
              <button onClick={handleSend} className="btn btn-lg text-white" style={{
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                border: 'none'
              }}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;