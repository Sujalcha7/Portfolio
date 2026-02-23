import { useState } from 'react';
import { BsGeoAlt, BsTelephone, BsEnvelope } from 'react-icons/bs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>For any futher queries and collaboration offers contact me.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div className="info-item" data-aos="fade-up" data-aos-delay="200">
                <div className="info-icon">
                  <BsGeoAlt />
                </div>
                <div>
                  <h3>Address</h3>
                  <p>Tumacho Street 6, Bhaktapur, 44800</p>
                </div>
              </div>

              <div className="info-item" data-aos="fade-up" data-aos-delay="300">
                <div className="info-icon">
                  <BsTelephone />
                </div>
                <div>
                  <h3>Call me</h3>
                  <p>+977 9843999851</p>
                </div>
              </div>

              <div className="info-item" data-aos="fade-up" data-aos-delay="400">
                <div className="info-icon">
                  <BsEnvelope />
                </div>
                <div>
                  <h3>Email me</h3>
                  <p>sujalkoju97@gmail.com</p>
                </div>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d884.5!2d85.43844!3d27.67550!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQwJzMxLjgiTiA4NcKwMjYnMTguNCI!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                frameBorder="0"
                style={{ border: 0, width: '100%', height: '270px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7">
            <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email-field">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email-field"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6" style={{ flex: '0 0 100%', maxWidth: '100%' }}>
                  <label htmlFor="subject-field">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject-field"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6" style={{ flex: '0 0 100%', maxWidth: '100%' }}>
                  <label htmlFor="message-field">Message</label>
                  <textarea
                    name="message"
                    rows="10"
                    id="message-field"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div style={{ flex: '0 0 100%', maxWidth: '100%', textAlign: 'center', padding: '0 15px' }}>
                  {status === 'loading' && <div style={{ marginBottom: 15 }}>Loading...</div>}
                  {status === 'error' && (
                    <div style={{ background: '#df1529', color: '#fff', padding: 15, marginBottom: 15, fontWeight: 600 }}>
                      An error occurred. Please try again.
                    </div>
                  )}
                  {status === 'success' && (
                    <div style={{ background: '#059652', color: '#fff', padding: 15, marginBottom: 15, fontWeight: 600 }}>
                      Your message has been sent. Thank you!
                    </div>
                  )}
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
