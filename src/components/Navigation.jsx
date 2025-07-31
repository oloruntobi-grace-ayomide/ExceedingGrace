import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation} from "react-router-dom"
import IMAGES from "../assets/images/images"
const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const nav = document.getElementById('navbar-container');
  
    const handleScroll = () => {
      if (window.scrollY > 60) {
        if (!nav.classList.contains('sticky')) {
          nav.classList.add('sticky');
        }
      } else {
        nav.classList.remove('sticky');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/our-programs", label: "Programs" },
    { href: "/admissions", label: "Admissions" },
    // { href: "/gallery", label: "Gallery" },
    // { href: "/testimonials", label: "Testimonials" },
    { href: "/faqs", label: "FAQ" },
    { href: "/contact-us", label: "Contact" },
  ];

  const isNavItemActive = (href) => {
    return location.pathname === href || location.pathname + location.hash === href;
  };

  return (
    <nav className="navbar-container parent" id='navbar-container'>
      
      <div className="logo-and-toggler">
          <Link to="/" className="logo">
            <img src={IMAGES.logo} alt='Exceeding Grace Logo' />
          </Link>

          <button
            className={`burger-toggler ${isOpen ?'active' : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}> 
                {isOpen ? "✖" : "☰"} 
          </button>
      </div>

      <ul className={`nav-links-container ${isOpen ? "nav-open" : ""}` }>
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.href}
                className={`nav-links ${isNavItemActive(item.href) ? "active" : ""}`}end
              >
                {item.label}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default Navigation 