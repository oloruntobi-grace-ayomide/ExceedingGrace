import { Link } from "react-router-dom"
import Layout from "../components/Layout";
import Testimonials from "../datas/testimonials";
const Testimonial = () => {
    
    return (
        <Layout title="Testimonials - Exceeding Grace">
            
            <section className="pages-hero-section testimonial parent">
                <h1 data-aos='fade-right'>What Families Say</h1>
                <p data-aos='fade-right'>
                    Don't just take our word for it. Hear from the families who have made Exceeding Grace Daycare their second home.
                </p>
            </section>

            <section className="testimonial-section parent">
                <div className="testimonial-grid">
                    {Testimonials && Testimonials.length > 0 &&
                        Testimonials.map((testimonial, index) => (
                            <div className="testimonial-card" key={index} data-aos='fade-up'>
                                <p className="testimonial-comment">{testimonial.comment}.</p>
                                <p className="testimonial-author">— {testimonial.name}</p>
                                <p className="testimonial-role">parent of {testimonial.parent}</p>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className="cta-section parent" data-aos='fade-up'>
                <h2>Ready to Create Your Own Success Story?</h2>
                <p>Join the families who have found their perfect childcare solution at Exceeding Grace. Schedule a tour and see why parents consistently rate us 5 stars.</p>
                <div className="cta-buttons">
                    <Link to="/contact-us" className="btn-tour bouncy">Schedule a Tour</Link>
                    <Link to="/admissions" className="btn-question bouncy">Start Enrollment</Link>
                </div>
            </section>

            
        </Layout>
    )
}
export default Testimonial;