// FAQPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { LuShield, LuMail, LuClock, LuUsers, LuChevronUp, LuChevronDown, LuPhoneCall} from "react-icons/lu";
import Layout from "../components/Layout";
const Faq = () => {
    const [openFaqItem, setFaqOpenItems] = useState(null);
    const toggleFaq = (index) => {
        setFaqOpenItems((prev) => (prev === index ? null : index));
    };

    const faqCategories = [
        {
        title: "General Information",
        icon: <FaHeart className="icon soft-pink" />,
        questions: [
            {
            question: "What ages do you serve at Little Sunshine Daycare?",
            answer:
                "We provide care for children from 6 weeks old to 5 years old. Our programs are divided into three age groups: Infants (6 weeks - 18 months), Toddlers (18 months - 3 years), and Preschoolers (3-5 years).",
            },
            {
            question: "What are your operating hours?",
            answer:
                "We are open Monday through Friday from 6:30 AM to 6:30 PM. We are closed on major holidays and have limited hours during some holiday weeks. A full holiday schedule is provided to families at enrollment.",
            },
            {
            question: "How does Little Sunshine incorporate Yoruba culture?",
            answer:
                "We integrate Yoruba culture through daily activities including traditional songs, stories, basic language learning, cultural celebrations, and art projects. We also celebrate important Yoruba festivals and teach children about African heritage while respecting and celebrating all cultures represented in our community.",
            },
            {
            question: "What is your teacher-to-child ratio?",
            answer:
                "We maintain low ratios to ensure quality care: Infants (1:4), Toddlers (1:6), and Preschoolers (1:8). These ratios often exceed state requirements and allow for more individualized attention.",
            },
        ],
        },
        {
        title: "Daily Operations",
        icon: <LuClock className="icon baby-blue" />,
        questions: [
            {
            question: "Do you provide meals and snacks?",
            answer:
                "Yes! We provide nutritious breakfast, lunch, and two snacks daily. Our meals are prepared fresh and accommodate dietary restrictions and allergies. We follow USDA guidelines and incorporate foods from various cultures. Menus are posted weekly.",
            },
            {
            question: "What should my child bring to daycare?",
            answer:
                "Please bring: extra clothes, comfort items (for nap time), any special dietary items, diapers and wipes (for non-potty trained children), and any medications with proper forms. We provide all learning materials, art supplies, and outdoor equipment.",
            },
            {
            question: "How do you handle nap time?",
            answer:
                "All children have a designated rest period after lunch. Infants follow individual sleep schedules. Toddlers and preschoolers have structured nap time from 1:00-3:00 PM. Children who don't sleep engage in quiet activities. We provide cots and encourage comfort items from home.",
            },
            {
            question: "What is your sick child policy?",
            answer:
                "Children must be fever-free for 24 hours before returning. We cannot accept children with contagious illnesses, severe cold symptoms, vomiting, or diarrhea. We follow state health department guidelines and will contact parents if a child becomes ill during the day.",
            },
        ],
        },
        {
        title: "Safety & Security",
        icon: <LuShield className="icon mint-green" />,
        questions: [
            {
            question: "What safety measures do you have in place?",
            answer:
                "Our facility features secure entry systems, cameras in all areas, fenced playground, emergency evacuation plans, first aid trained staff, background-checked employees, and regular safety drills. We maintain current CPR and first aid certifications for all staff.",
            },
            {
            question: "How do you handle emergencies?",
            answer:
                "We have comprehensive emergency plans for various situations including medical emergencies, severe weather, and lockdown procedures. All staff are trained in emergency protocols. Parents are notified immediately of any incidents involving their child.",
            },
            {
            question: "Who can pick up my child?",
            answer:
                "Only authorized individuals listed on your child's enrollment forms can pick up your child. Photo ID is required for pickup. If someone new needs to pick up your child, written authorization and photo ID are required.",
            },
            {
            question: "Are your staff background checked?",
            answer:
                "Yes, all staff undergo comprehensive background checks including criminal history, child abuse registry checks, and reference verification. Our teachers hold relevant certifications in early childhood education and receive ongoing professional development.",
            },
        ],
        },
        {
        title: "Enrollment & Tuition",
        icon: <LuUsers className="icon baby-purple" />,
        questions: [
            {
            question: "How do I enroll my child?",
            answer:
                "Start by scheduling a tour, then complete our enrollment application, submit required documents (immunization records, physical exam, emergency contacts), pay registration fee and first month's tuition, and attend orientation. We'll guide you through each step.",
            },
            {
            question: "What are your tuition rates?",
            answer:
                "Tuition varies by age group and full-time vs. part-time enrollment. Infant care: $1,200/month (full-time), Toddler: $1,000/month, Preschool: $900/month. Part-time rates are also available. There's a one-time $100 registration fee and sibling discounts available.",
            },
            {
            question: "Do you offer part-time care?",
            answer:
                "Yes, we offer part-time options for all age groups. Part-time is defined as 3 days per week or less. Rates are prorated based on the number of days. Part-time spots are limited and subject to availability.",
            },
            {
            question: "What is your payment policy?",
            answer:
                "Tuition is due by the 1st of each month. We accept cash, check, or electronic payments. Late fees apply after the 5th. Two weeks' notice is required for withdrawal. Registration fees are non-refundable.",
            },
        ],
        },
    ];

    const quickInfo = [
    {
      icon: <LuClock className="icon baby-blue" />,
      title: "Hours",
      info: "6:30 AM - 6:30 PM\nMonday - Saturday",
    },
    {
      icon: <LuUsers className="icon soft-pink" />,
      title: "Ages Served",
      info: "6 weeks - 5 years\nInfants to Preschool",
    },
    {
      icon: <LuPhoneCall className="icon soft-yellow" />,
      title: "Contact",
      info: "(555) 123-4567\nhello@exceedinggrace.com",
    },
    ];

    return (
        <Layout title="FAQ - Exceeding Grace">
            <section className="pages-hero-section faq parent">
                <h1 data-aos='fade-right'>Frequently Asked Questions</h1>
                <p data-aos='fade-right'>
                    Find answers to common questions about Exceeding Grace Daycare...
                </p>
            </section>

            <section className="quick-info-section parent">
                <div className="quick-info-grid">
                {quickInfo.map((item, index) => (
                    <div key={index} className="quick-info-card" data-aos='fade-up'>
                        <p className="quick-info-icon">{item.icon}</p>
                        <h3 className="quick-info-title">{item.title}</h3>
                        <p className="quick-info-text">{item.info}</p>
                    </div>
                ))}
                </div>
            </section>
        
            {faqCategories.map((category, index) => (
                <section key={index} className={`faq-section ${index % 2 === 0 ? "faq-bg-white" : "faq-bg-alt"}`} data-aos='fade-up'>

                    <div className="faq-header">
                        {category.icon}
                        <h2>{category.title}</h2>
                    </div>

                    <div className="faq-accordion">
                        {category.questions.map((q, ind) => {
                            const id = index * 100 + ind;
                            const isOpen = openFaqItem === id;
                            return (
                                <div key={id} className="faq-item" data-aos='fade-up'>
                                    <button onClick={() => toggleFaq(id)} className="faq-question">
                                        <h3>{q.question}</h3>
                                        {isOpen ? <LuChevronUp className="faq-icon"/> : <LuChevronDown className="faq-icon"/>}
                                    </button>
                                    {isOpen && (
                                        <div className="faq-answer">
                                        <p>{q.answer}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
          
                </section>
            ))}

            <section className="faq-contact-section parent" data-aos='fade-up'>           
                <h2 className="faq-contact-heading">Still Have Questions?</h2>
                <p className="faq-contact-subheading">
                    We're here to help! Contact us directly or schedule a tour to get all your questions answered and see our
                    facility in person.
                </p>

                <div className="faq-contact-grid">
                    <div className="faq-contact-card">
                        <LuPhoneCall className="icon baby-blue" />
                        <h3 className="contact-title">Call Us</h3>
                        <p className="contact-description">Speak directly with our friendly staff</p>
                        <p className="contact-highlight blue">(555) 123-4567</p>
                    </div>

                    <div className="faq-contact-card">
                        <LuMail className="icon soft-green" />
                        <h3>Email Us</h3>
                        <p>Send us your questions anytime</p>
                        <p>hello@exceedinggrace.com</p>
                    </div>
                </div>

                <div className="contact-buttons">
                    <Link to="/contact-us" className="btn-tour bouncy">Schedule a Tour</Link>
                    <Link to="/contact-us" className="btn-question bouncy">Send a Message</Link>
                </div>     
            </section>


        </Layout>
    );
}

export default Faq;



