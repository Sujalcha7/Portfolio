import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs';

// Using existing placeholder images until real screenshots are added
import img1 from '../assets/img/portfolio/SiteX.jpg';
import img2 from '../assets/img/portfolio/product-1.jpg';
import img3 from '../assets/img/portfolio/app-2.jpg';
import img4 from '../assets/img/portfolio/branding-1.jpg';
import img6 from '../assets/img/portfolio/app-3.jpg';

const projects = [
  {
    img: img1,
    title: 'SiteX — Site Suitability Analysis',
    desc: 'A data-driven system that scores and maps optimal locations for retail businesses. Built as a final-year project with a case study on franchised cafés — combines spatial, demographic, and accessibility data into an interpretable suitability score.',
    tags: ['Python', 'Jupyter', 'pandas', 'scikit-learn', 'Geospatial'],
    github: 'https://github.com/Subekshyeah/SiteX',
    live: null,
    status: 'Ongoing',
  },
  {
    img: img2,
    title: 'Futsal — Booking & Management App',
    desc: 'A web-based futsal court booking and management system. Users can search, reserve, and manage court slots, while admins handle time-slot configuration. Focused on clean booking flows and modular components.',
    tags: ['React.js', 'FastAPI', 'Node.js', 'TypeScript'],
    github: 'https://github.com/Asymptoads/Futsal',
    live: null,
  },
  {
    img: img3,
    title: 'SpamOrHam — Email Spam Classifier',
    desc: 'An end-to-end ML app that classifies emails as spam or ham using a Support Vector Machine pipeline. Includes TF-IDF vectorization, model evaluation (precision/recall/confusion matrix), and a JavaScript web UI for live predictions.',
    tags: ['Python', 'scikit-learn', 'JavaScript', 'SVM', 'TF-IDF'],
    github: 'https://github.com/Sujalcha7/SpamOrHam',
    live: null,
  },
  {
    img: img4,
    title: 'GoalVeda — Pomodoro Productivity App',
    desc: 'A lightweight Pomodoro timer app built with Streamlit that helps enforce focused work intervals and short breaks. Tracks session history, displays daily/weekly session counts with charts, and requires zero setup — accessible from any browser.',
    tags: ['Python', 'Streamlit', 'Data Viz', 'Productivity'],
    github: 'https://github.com/Sujalcha7/Goalveda',
    live: null,
  },
  {
    img: img6,
    title: 'Expense Tracker — Flutter Finance App',
    desc: 'A cross-platform expense tracker built with Flutter for logging, categorising, and visualising personal spending. Features local data persistence, category filters, and simple spending charts.',
    tags: ['Flutter', 'Dart', 'Local Storage'],
    github: 'https://github.com/Sujalcha7/Expense-Tracker',
    live: null,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section portfolio-section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>A selection of projects I have built — from data-driven tools to mobile and web apps.</p>
      </div>

      <div className="container">
        {projects.map((project, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              className={`pf-featured-row${isEven ? ' pf-row-reverse' : ''}`}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80 + 100}
            >
              {/* Image */}
              <div className="pf-img-col">
                <div className="pf-img-frame">
                  <img src={project.img} alt={project.title} />
                </div>
              </div>

              {/* Content */}
              <div className="pf-content-col">
                <p className="pf-label">Featured Project</p>
                <h3 className="pf-title">{project.title}</h3>
                {project.status && <span className="pf-status-badge">{project.status}</span>}
                <div className="pf-desc-card">
                  <p>{project.desc}</p>
                </div>
                <div className="pf-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="pf-tag">{tag}</span>
                  ))}
                </div>
                <div className="pf-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <BsGithub />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live demo">
                      <BsBoxArrowUpRight />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        <p className="pf-footer-note" data-aos="fade-up">
          For more projects, visit my{' '}
          <a href="https://github.com/Sujalcha7" target="_blank" rel="noreferrer">
            GitHub page
          </a>{' '}
          where you can find all my repositories.
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
