import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { GoHeart, GoShieldCheck } from "react-icons/go";
import { HiOutlineUsers, HiOutlineClock } from "react-icons/hi2";
import { MdOutlineSmartphone } from "react-icons/md";
import { FiSmile,  } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import IMAGES from "../assets/images/images";
import Testimonials from "../datas/testimonials"
const Home = () => {
    const features = [
        {
            icon: <GoHeart className="feature-icon pink" />,
            title: "Loving Care",
            description: "Every child receives individual attention in our nurturing environment",
        },
        {
            icon: <MdOutlineSmartphone className="feature-icon blue" />,
            title: "Daily Updates",
            description: "Real-time photos, activities, and progress reports sent to parents throughout the day.",
        },
        {
            icon: <HiOutlineClock className="feature-icon green" />,
            title: "Flexible Hours",
            description: "Open 6:30 AM - 6:30 PM to accommodate working parents",
        },
        {
            icon: <GoShieldCheck className="feature-icon purple" />,
            title: "Safe Environment",
            description: "Secure facilities with trained staff and comprehensive safety protocols",
        },
    ];
    return (
        <Layout>
            <section className="home-banner parent">

                <div className="home-banner-content" data-aos="fade-right">
                    <h1>Where Little Hearts Grow Big Dreams 💕</h1>
                    <p>
                        A nurturing, safe, and joyful environment where your child's curiosity blooms and their potential flourishes
                        through play-based learning and loving care.
                    </p>
                    <div>
                       
                        <Link to="/admissions" className="enrol-link bouncy">
                            Enrol Now
                        </Link>
                        <Link to="/our-programs" className="programs-link bouncy">
                            Our Programs
                        </Link>
                    </div>
                </div>
                
                <div className="home-banner-img" data-aos="fade-left">
                    <img src={IMAGES.crawlingBaby} alt="baby crawling" />
                </div>

                <div className="hero-mobile-links">
                    
                    <Link to="/admissions" className="enrol-link bouncy">
                        Enrol Your Child
                    </Link>
                    <Link to="/our-programs" className="programs-link bouncy">
                    Explore Our Programs
                    </Link>
                </div>

            </section>

            <section className="features-section parent" data-aos="fade-up">

                <div className="features-header">
                    <h2 className="features-title">Why Families Choose Exceeding Grace</h2>
                    <p className="features-subtitle">
                        We provide more than childcare - we create a foundation for lifelong learning and happiness
                    </p>
                </div>

                <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card" data-aos="fade-up">
                    <p className="feature-icon">{feature.icon}</p>
                    <h3 className="feature-card-title">{feature.title}</h3>
                    <p className="feature-card-description">{feature.description}</p>
                    </div>
                ))}
                </div>

            </section>

            <section className="programs-section parent" data-aos="fade-up">
              
                <div className="programs-header">
                <h2 className="programs-title">Our Loving Programs</h2>
                <p className="programs-subtitle">
                    Age-appropriate programs designed to nurture development at every stage
                </p>
                </div>

                <div className="programs-grid">
                <div className="program-card" data-aos="fade-up">
                    <div className="program-icon baby-blue">
                    <FiSmile className="icon-white" />
                    </div>
                    <h3 className="program-name">Infants (0-18 months)</h3>
                    <p className="program-description">
                    Gentle care with feeding, diaper changes, and sensory play in a calm, loving environment.
                    </p>
                    <Link to="/our-programs#infant" className="program-link baby-blue-text">
                    Learn More →
                    </Link>
                </div>

                <div className="program-card" data-aos="fade-up">
                    <div className="program-icon soft-pink">
                    <HiOutlineUsers className="icon-white" />
                    </div>
                    <h3 className="program-name">Toddlers (18 months - 3 years)</h3>
                    <p className="program-description">
                    Interactive play, early learning activities, and social skill development through exploration.
                    </p>
                    <Link to="/our-programs#toddler" className="program-link soft-pink-text">
                    Learn More →
                    </Link>
                </div>

                <div className="program-card" data-aos="fade-up">
                    <div className="program-icon pale-yellow">
                    <FaRegStar className="icon-grey" />
                    </div>
                    <h3 className="program-name">Preschoolers (3-5 years)</h3>
                    <p className="program-description">
                    School readiness program with literacy, numeracy, and cultural learning activities.
                    </p>
                    <Link to="/our-programs#preschool" className="program-link soft-grey-text">
                    Learn More →
                    </Link>
                </div>
                </div>
        
            </section>
            
            <section className="testimonial-section parent" data-aos="fade-up">
                <div className="testimonials-header">
                    <h2 className="testimonials-title">What Parents Say</h2>
                    <p className="testimonials-subtitle">Hear from families who have made Exceeding Grace their second home</p>
                </div>

                <div className="testimonial-grid">
                    {Testimonials && Testimonials.length > 0 &&
                        Testimonials.slice(0, 2).map((testimonial, index) => (
                            <div className="testimonial-card" key={index} data-aos="fade-up">
                                <p className="testimonial-comment">{testimonial.comment}.</p>
                                <p className="testimonial-author">— {testimonial.name}</p>
                                <p className="testimonial-role">parent of {testimonial.parent}</p>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className="join-family-section" data-aos="fade-up">
                <h2 className="join-family-title">Ready to Join Our Family?</h2>
                <p className="join-family-description">
                Give your child the gift of a nurturing, faith-inspired early childhood experience. Schedule a tour today and discover why families trust Exceeding Grace Daycare for a strong start.
                </p>
                <div className="join-family-buttons">
                    <Link to="/contact-us" className="schedule-a-tour bouncy">Schedule a Tour</Link>
                    <Link to="/admissions" className="start-enrollment bouncy">Start Enrollment</Link>
                </div>
            </section>

        </Layout>
    )
}
export default Home




