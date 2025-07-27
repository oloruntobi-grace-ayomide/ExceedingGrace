import { useState } from "react";
import {FaMapMarkerAlt, FaPaperPlane, FaHeart } from "react-icons/fa";
import { LuMail, LuClock, LuPhoneCall, LuCalendarDays} from "react-icons/lu";
import Layout from "../components/Layout";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    message: "",
    tourDate: "",
    preferredTime: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <LuPhoneCall className="icon"/>,
      title: "Phone",
      info: "(555) 123-4567",
      description: "Call us during business hours",
    },
    {
      icon: <LuMail  className="icon"/>,
      title: "Email",
      info: "hello@exceedinggrace.com",
      description: "We respond within 24 hours",
    },
    {
      icon: <FaMapMarkerAlt  className="icon" />,
      title: "Address",
      info: "123 Sunshine Avenue\nHappy City, HC 12345",
      description: "Easy parking available",
    },
    {
      icon: <LuClock  className="icon"/>,
      title: "Hours",
      info: "Monday - Friday\n6:30 AM - 6:30 PM",
      description: "Closed on major holidays",
    },
  ];

  return (
    <Layout tile="Contact-Us - Exceeding Grace">

      <section className="pages-hero-section contact parent">
          <h1 data-aos='fade-right'>Get in Touch</h1>
          <p data-aos='fade-right'>
            Ready to give your child the Exceeding Grace experience? We'd love
            to hear from you!
          </p>
      </section>

      <section className="info-section parent">
        <div className="info-grid">
            {contactInfo.map((item, i) => (
            <div className="info-card" key={i} data-aos='fade-up'>
              <p className="info-icon">{item.icon}</p>
              <h3 className="info-title">{item.title}</h3>
              <p className="info">{item.info}</p>
              <p className="info-desc">{item.description}</p>
            </div>
            ))}
        </div>
      </section>

      <section className="form-section parent">
            <div className="form-container" data-aos='fade-right'>
              <h2><FaHeart className="form-icon soft-pink" /> Send Us a Message</h2>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div>
                    <label htmlFor="name" className="form-label">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"/>
                  </div>

                  <div>
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"/>
                  </div>
                </div>

                <div className="form-row">
                  <div>
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"/>
                  </div>

                  <div>
                    <label htmlFor="childAge" className="form-label">
                      Child's Age
                    </label>
                    <select
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}>

                      <option value=""  disabled>Select age range</option>
                      <option value="0-6months">0-6 months</option>
                      <option value="6-12months">6-12 months</option>
                      <option value="12-18months">12-18 months</option>
                      <option value="18months-2years">18 months - 2 years</option>
                      <option value="2-3years">2-3 years</option>
                      <option value="3-4years">3-4 years</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div>
                    <label htmlFor="tourDate" className="form-label">
                      Preferred Tour Date
                    </label>
                    <input
                      type="date"
                      id="tourDate"
                      name="tourDate"
                      value={formData.tourDate}
                      onChange={handleChange} />
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="form-label">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                    >
                      <option value="" disabled >Select time</option>
                      <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (1:00 PM - 4:00 PM)</option>
                      <option value="evening">Early Evening (4:00 PM - 6:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="form-textarea">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your child, any specific questions, or special needs we should know about..."></textarea>
                </div>

                <button type="submit">
                  Send Message
                </button>
              </form>
            </div>
            <div className="map-and-tour" data-aos='fade-left'>
                <div className="location-map">
                    <h2>Find Us</h2>
                    <div className="map-container"></div>
                    <p>• Convenient location with easy highway access</p>
                    <p>• Free parking available for parents</p>
                    <p>• Public transportation nearby</p>
                    <p>• Safe, family-friendly neighborhood</p>
                </div>
                <div className="tour-scheduling-time" data-aos='fade-up'>
                    <h2><LuCalendarDays/> Schedule a Tour</h2>
                    <p className="white-text">The best way to experience Little Sunshine is to visit us! Tours are available Monday through Friday
                    and give you a chance to meet our staff, see our facilities, and ask questions.</p>
                    <div className="thing-to-meet">
                        <p>• Meet our caring educators</p>
                        <p>• See our age-appropriate classrooms</p>
                        <p>• Experience our cultural activities</p>
                        <p>• Ask questions about our programs</p>
                    </div>
                    <p className="bottom-text">(555) 123-4567</p>
                    <p className="last-bottom-text">Call to schedule your personal tour</p>
                </div>
            </div>
      </section>
    </Layout>
  );
}
export default Contact