import { Link } from 'react-router-dom';
import { RxDownload } from "react-icons/rx";
import { FiCheckCircle } from "react-icons/fi";
import Layout from '../components/Layout';
const Admission = () => {
  const enrollmentSteps = [
    { step: 1, title: "Schedule a Tour", description: "Visit our facility and meet our caring staff", action: "Book your tour today" },
    { step: 2, title: "Complete Application", description: "Fill out our comprehensive enrollment application", action: "Download application form" },
    { step: 3, title: "Submit Documents", description: "Provide required health and emergency contact information", action: "Document checklist available" },
    { step: 4, title: "Meet & Greet", description: "Introduce your child to their new teachers and classmates", action: "Schedule orientation" },
    { step: 5, title: "Start Your Journey", description: "Begin your child's adventure at Little Sunshine", action: "Welcome to our family!" },
  ];

  const requirements = [
    "Completed enrollment application",
    "Child's birth certificate",
    "Current immunization records",
    "Physical examination form (within 6 months)",
    "Emergency contact information",
    "Signed parent handbook acknowledgment",
    "First month's tuition and registration fee",
  ];

  return (
    <Layout title='Admissions - Exceeding Grace'>

        <section className="pages-hero-section admission parent">
            <h1 data-aos='fade-right'>Join Our Exceeding Grace Family</h1>
            <p data-aos='fade-right'>
            We're excited to welcome your child into our nurturing, culturally rich environment. Start your enrollment journey today!
            </p>
        </section>

        <section className="enrollment-section parent" data-aos='fade-up'>
            <div className="section-header">
                <h2>Enrollment Process</h2>
                <p>Five simple steps to get your child started at Little Sunshine Daycare</p>
            </div>

            <div className="steps-list">
                {enrollmentSteps.map((step, index) => (
                    <div className="step-item" key={index} data-aos='fade-up'>
                        <div className="step-number">{step.step}</div>
                        <div className="step-info">
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                            <span>{step.action}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section className="requirements-section parent" data-aos='fade-up'>
            <div className='requirement-body-content' data-aos='fade-up'>
                <h2>Enrollment Requirements</h2>
                <p>To ensure the safety and well-being of all children, please prepare the following documents:</p>
                <ul>
                {requirements.map((req, index) => (
                    <li key={index}><FiCheckCircle className="soft-green" />{req}</li>
                ))}
                </ul>
            </div>

            <div className="form-downloads" data-aos='fade-up'>
                <h3>Download Forms</h3>
                <div className="form-list">
                <div><span>Enrollment Application</span> <RxDownload className="icon clickable" /></div>
                <div><span>Health Information Form</span> <RxDownload className="icon clickable" /></div>
                <div><span>Emergency Contact Form</span> <RxDownload className="icon clickable" /></div>
                <div><span>Parent Handbook</span> <RxDownload className="icon clickable" /></div>
                </div>
            </div>
        </section>

        <section className="cta-section parent" data-aos='fade-up'>
            <h2>Ready to Get Started?</h2>
            <p>Take the first step in your child's educational journey. Schedule a tour today and see why families love Little Sunshine Daycare.</p>
            <div className="cta-buttons">
                <Link to="/contact-us" className="btn-tour">Schedule a Tour</Link>
                <Link to="/contact-us" className="btn-question">Ask Questions</Link>
            </div>
        </section>
    </Layout>
  );
}
export default Admission