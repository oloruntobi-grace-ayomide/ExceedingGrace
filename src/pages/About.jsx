import Layout from "../components/Layout";
import { FaHeart, FaUsers, FaStar, FaAward } from "react-icons/fa";
import IMAGES from "../assets/images/images";
const About = () => {
    const values = [
        {
            icon: <FaHeart className="soft-pink" />,
            title: "Love & Nurturing",
            description: "Every child is treated with Christlike love, care, and attention.",
        },
        {
            icon: <FaUsers className="baby-blue" />,
            title: "Supportive Community",
            description: "Building strong relationships between children, families, and caregivers.",
        },
        {
            icon: <FaStar className="baby-purple" />,
            title: "Excellence in Learning",
            description: "Providing a strong early foundation through engaging, age-appropriate learning.",
        },
        {
            icon: <FaAward className="mint-green" />,
            title: "Trusted Professionals",
            description: "Qualified educators dedicated to nurturing every child's full potential.",
        },
    ];

    const team = [
        {
            name: "Folake Adebayo",
            role: "Founder & Director",
            image: "placeholder.svg",
            bio: "Driven by her love for children and a heart for service, Folake founded Exceeding Grace to provide a nurturing, faith-based environment where every child can flourish.",
        },
        {
            name: "Amara Thompson",
            role: "Lead Educator",
            image: "placeholder.svg",
            bio: "With over 10 years of experience in early childhood education, Amara is passionate about guiding little minds with patience, creativity, and care.",
        },
        {
            name: "David Martinez",
            role: "Program Coordinator",
            image: "placeholder.svg",
            bio: "David oversees our daily activities, ensuring a safe, joyful, and enriching experience for each child in our care.",
        },  
    ];


    return (
        <Layout title="About Us - Exceeding Grace">

            <section className="pages-hero-section about parent">
                <h1 data-aos='fade-right'>About Exceeding Grace</h1>
                <p data-aos='fade-right'>
                    Exceeding Grace Daycare provides a safe, loving space where every child is encouraged to grow and thrive emotionally, socially, and academically.
                </p>
            </section>

            <section className="mission-vision-section parent">
                <div className="mission-vision-content" data-aos='fade-right'>
                    <h2>Our Mission</h2>
                    <p>
                    To provide exceptional early childhood care and learning through love, structure, and grace. Nurturing each child's unique potential in a warm, faith-aligned environment.
                    </p>
                    <h2>Our Vision</h2>
                    <p>
                    To be a trusted partner for families, helping children build confidence, curiosity, and strong foundations for future learning and life.
                    </p>
                </div>
                <div className="mission-vision-img" data-aos='fade-left'>
                    <img src={IMAGES.babiesPlaying} alt="Children learning together" />
                </div>
            </section>

            <section className="values-section parent" data-aos='fade-up'>
                <h2 className="header">Our Core Values</h2>
                <p className="sub-header">
                    These values guide everything we do and shape the environment where your child will grow
                </p>
                <div className="values-grid">
                    {values.map((value, index) => (
                    <div key={index} className="value-card" data-aos='fade-up'>
                        <span>{value.icon}</span>
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                    </div>
                    ))}
                </div>
            </section>

            <section className="philosophy-section parent" data-aos='fade-up'>
                <h2 className="header">Our Educational Philosophy</h2>
                <div className="philosophy-grid">
                    <div className="philosophy-img" data-aos='fade-right'>
                         <img src={IMAGES.babiesLearning} alt="Baby learning activities"/>
                    </div>
                    <div data-aos='fade-left'>
                        <div className="text-block">
                            <h3>Play-Based Learning</h3>
                            <p>
                                We believe children thrive when they’re free to explore and imagine. Our program blends fun and discovery to encourage curiosity, creativity, and a love for learning.
                            </p>
                        </div>
                        <div className="text-block">
                            <h3>Faith-Guided Environment</h3>
                            <p>
                                Our nurturing atmosphere is grounded in values of kindness, patience, and grace. We support every child’s spiritual and emotional growth through gentle guidance and positive role modeling.
                            </p>
                        </div>
                        <div className="text-block">
                            <h3>Personalized Development</h3>
                            <p>
                                Each child is beautifully unique. We take time to understand their needs, interests, and pace - helping them grow in confidence and joy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section parent" data-aos='fade-up'>
                <h2>Meet Our Team</h2>
                <p className="team-subtitle">
                    Our dedicated educators bring passion, experience, and love to everything they do
                </p>
                <div className="team-grid">
                    {team.map((member, index) => (
                        <div key={index} className="grid-card" data-aos='fade-up'>
                            <img src={member.image} alt={member.name} className="avatar" />
                            <h3>{member.name}</h3>
                            <p className="highlight-role">{member.role}</p>
                            <p className="bio">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export default About;
