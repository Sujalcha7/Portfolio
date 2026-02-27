import { BsChevronRight, BsGithub } from 'react-icons/bs';
import profileImg from '../assets/img/my-profile-img.jpg';

const skills = [
  'React.js', 'Node.js', 'Flutter', 'Python',
  'JavaScript', 'C / C++', 'Git & GitHub', 'Machine Learning',
];

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="about-card" data-aos="fade-up">
        <div className="container section-title">
        <h2>About</h2>
        <p>
          Hi, I&apos;m Sujal Koju &mdash; a final-year Computer Engineering student.I love building the logic and infrastructure that power applications—whether it’s designing APIs, optimizing databases, or creating intelligent features with machine learning. Diving into these areas keeps me curious and motivated, always eager to solve real problems and make an impact behind the scenes. Just another backend developer and AI/ML enthusiast in the block—here’s a little bit about myself.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 align-items-center">

          {/* Profile Image */}
          <div className="col-lg-4 text-center" data-aos="fade-right" data-aos-delay="150">
            <div className="about-img-wrapper">
              <img src={profileImg} className="img-fluid about-img" alt="Sujal Koju" />
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-8 content">
            <h2>Computer Engineering Student &amp; Developer</h2>
            <p className="about-lead">
              Most of my experience comes from academic learning and hands-on projects,
              where I&apos;ve been steadily building my fundamentals and exploring how concepts
              apply in real-world scenarios. I see myself as a learner first &mdash; curious, open
              to feedback, and always looking to improve.
            </p>

            <div className="row gy-2">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <BsChevronRight className="detail-icon" />
                    <strong>Degree:</strong> <span>Bachelor&apos;s (B.E.)</span>
                  </li>
                  <li>
                    <BsChevronRight className="detail-icon" />
                    <strong>City:</strong> <span>Bhaktapur - 8, Nepal</span>
                  </li>
                  <li>
                    <BsChevronRight className="detail-icon" />
                    <strong>Email:</strong> <span>sujalkoju97@gmail.com</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <BsChevronRight className="detail-icon" />
                    <strong>Field:</strong> <span>Computer Engineering</span>
                  </li>
                  <li>
                    <BsChevronRight className="detail-icon" />
                    <strong>GitHub:</strong>
                    <a href="https://github.com/Sujalcha7" target="_blank" rel="noreferrer" className="about-github-link">
                      <BsGithub className="about-github-icon" />
                      github.com/Sujalcha7
                    </a>
                  </li>
                  <li>
                    <BsChevronRight className="detail-icon" />
                    <strong>Status:</strong> <span className="badge-available">Open to Opportunities</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Skill tags */}
            <div className="about-skills-tags">
              {skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
};

export default About;