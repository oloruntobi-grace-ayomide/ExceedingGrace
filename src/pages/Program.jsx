import { FaRegClock,FaUsers,FaStar,FaHeart,FaBook, FaMusic } from "react-icons/fa";
import Layout from "../components/Layout";
import IMAGES from "../assets/images/images";
const programs = [
  {
    title: "Infant Care (0-18 months)",
    src: `${IMAGES.infant}`,
    icon: <FaHeart className="icon soft-pink" />,
    color: "soft-pink",
    class:'infant',
    description:
      "Gentle, loving care for your precious little ones in their earliest months.",
    features: [
      "Individual feeding schedules",
      "Diaper changing and hygiene care",
      "Sensory play and exploration",
      "Tummy time and motor development",
      "Soothing music and lullabies",
      "Daily communication with parents",
    ],
    dailySchedule: [
      "7:00 AM - Arrival and free play",
      "8:00 AM - Breakfast/bottle feeding",
      "9:00 AM - Sensory activities",
      "10:00 AM - Outdoor time",
      "11:00 AM - Nap time",
      "12:00 PM - Lunch/bottle feeding",
      "1:00 PM - Quiet play",
      "2:00 PM - Afternoon nap",
      "3:30 PM - Snack time",
      "4:00 PM - Story time and songs",
      "5:00 PM - Free play until pickup",
    ],
  },
  {
    title: "Toddler Program (18 months - 3 years)",
    src: `${IMAGES.toddler}`,
    icon: <FaUsers className="icon baby-blue" />,
    color: "baby-blue",
    class:'toddler',
    description:
      "Active learning and social development for curious toddlers ready to explore.",
    features: [
      "Potty training support",
      "Language development activities",
      "Social skill building",
      "Creative arts and crafts",
      "Music and movement",
    ],
    dailySchedule: [
      "7:00 AM - Arrival and free play",
      "8:00 AM - Breakfast and circle time",
      "9:00 AM - Learning activities",
      "10:00 AM - Outdoor play",
      "11:00 AM - Snack and story time",
      "12:00 PM - Lunch",
      "1:00 PM - Nap time",
      "3:00 PM - Snack time",
      "3:30 PM - Arts and crafts",
      "4:30 PM - Music and movement",
      "5:00 PM - Free play until pickup",
    ],
  },
  {
    title: "Preschool Program (3-5 years)",
    src: `${IMAGES.preschool}`,
    icon: <FaStar className="icon soft-yellow" />,
    color: "soft-yellow",
    class:'preschool',
    description:
      "School readiness program preparing children for kindergarten and beyond.",
    features: [
      "Pre-literacy and numeracy skills",
      "Science exploration",
      "Advanced social skills",
      "Independence building",
      "Kindergarten preparation",
    ],
    dailySchedule: [
      "7:00 AM - Arrival and morning activities",
      "8:00 AM - Breakfast and morning meeting",
      "9:00 AM - Academic learning time",
      "10:00 AM - Outdoor exploration",
      "11:00 AM - Creative activities",
      "12:00 PM - Lunch",
      "1:00 PM - Quiet time/rest",
      "2:30 PM - Snack time",
      "3:00 PM - Creative expression",
      "4:00 PM - STEM activities",
      "5:00 PM - Free choice until pickup",
    ],
  },
];

const specialPrograms = [
  {
    icon: <FaMusic className="icon soft-pink" />,
    title: "Music & Movement",
    description:
      "Weekly music classes with instruments, singing, and dancing to develop rhythm, coordination, and self-expression.",
  },
  {
    icon: <FaBook className="icon soft-green" />,
    title: "Early Literacy",
    description:
      "Daily reading, phonics activities, and writing practice to build strong foundations for academic success.",
  },
  {
    icon: <FaUsers className="icon baby-blue" />,
    title: "Social-Emotional Learning",
    description:
      "Building emotional intelligence and social skills through guided activities",
  },
];

const Program = () => {
  return (
    <Layout title="Our Pragrams - Exceeding Grace">

        <section className="pages-hero-section program parent">
            <h1 data-aos='fade-right'>Our Programs</h1>
            <p data-aos='fade-right'>
            Age-appropriate programs designed to nurture your child's development
            at every stage, from infancy through preschool years.
            </p>
        </section>

        <section className="programs-overview parent">
            {programs.map((program, index) => (
                <div className={`program-item ${program.class} ${index % 2 ? "reverse" : ""}`} id={program.class} key={index} data-aos='fade-up'>
                    <div className="image-placeholder">
                        <img src={program.src} alt={`Image of ${program.title}`}/>
                    </div>
                    <div className="program-details">
                        <div className="program-header">
                            {program.icon}
                            <h2>{program.title}</h2>
                        </div>
                        <p className="program-desc">{program.description}</p>
                        <h3>Program Features:</h3>
                        <ul>
                            {program.features.map((feature, index) => (
                            <li key={index}>
                                <span className={`dot ${program.color}`}></span> {feature}
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </section>

        <section className="schedules parent" data-aos='fade-up'>
            <h2>Daily Schedules</h2>
            <div className="schedule-cards">
            {programs.map((program, index) => (
                <div className="schedule-card" key={index} data-aos='fade-up'>
                <div className="schedule-header">
                    {program.icon}
                    <h3>{program.title}</h3>
                </div>
                <ul>
                    {program.dailySchedule.map((item, idx) => (
                    <li key={idx}>
                        <FaRegClock className="clock-icon" /> {item}
                    </li>
                    ))}
                </ul>
                </div>
            ))}
            </div>
        </section>

        <section className="special-programs parent" data-aos='fade-up'>
            <h2 className="special-programs-header">Special Programs</h2>
            <div className="special-grid">
            {specialPrograms.map((item, index) => (
                <div className="special-card" key={index} data-aos='fade-up'>
                  {item.icon}
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
            ))}
            </div>
        </section>
      
    </Layout>
  );
}

export default Program