import { Link } from "react-router-dom";
import { MdLocationOn, MdCall, MdOutlineMail } from "react-icons/md";
import IMAGES from "../assets/images/images";
const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="container parent footer" data-aos="fade-up">

            <div className="footer-grid">

                <div className="footer-motto-logo footer-cards" data-aos="fade-up">
                    <div className="footer-logo-name">
                        <img src={IMAGES.logo} alt="Exceeding Grace Daycare" className="footer-logo"/>
                        <h4>Exceeding Grace Daycare</h4> 
                    </div>
                    <p className="footer-text">
                        Dedicated to providing a safe, loving, and inspiring environment where every child can grow, learn, and thrive.
                    </p>
                </div>
                <div className="footer-flex-container">

                    <div className="footer-cards" data-aos="fade-up">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-list">
                            <li><Link href="/about" className="footer-link">About Us</Link></li>
                            <li><Link href="/programs" className="footer-link">Programs</Link></li>
                            <li><Link href="/admissions" className="footer-link">Admissions</Link></li>
                            <li><Link href="/contact" className="footer-link">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-cards" data-aos="fade-up">
                        <h4 className="footer-heading">Contact Info</h4>
                        <p className="footer-text"><MdLocationOn/> 13 NNPC Housing Estate , Opposite field, Mosimi, Ogun-State</p>
                        <p className="footer-text"><MdCall/> +234 813 508 7130</p>
                        <p className="footer-text"><MdOutlineMail/> eunicebishop80@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {year} Exceeding Grace Daycare. All rights reserved. Made with 💕 for little ones.</p>
            </div>
        </footer>

    )
}

export default Footer