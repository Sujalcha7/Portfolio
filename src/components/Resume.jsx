const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          A final-year Computer Engineering undergraduate, motivated and eager to learn.
          Interested in data and software engineering roles where I can apply analytical
          skills to real-world problems.
        </p>
      </div>

      <div className="container">
        <div className="row">
          {/* Left column: Summary + Education */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item" style={{ paddingBottom: 0 }}>
              <h4>Sujal Koju</h4>
              <p>
                <em>
                  Final-year Computer Engineering student at Khwopa Engineering College,
                  passionate about software and data engineering. Building real-world
                  skills through projects and hands-on learning.
                </em>
              </p>
              <ul>
                <li>Bhaktapur-8, Nepal</li>
                <li>+977 9843999851</li>
                <li>sujalkoju97@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Computer Engineering</h4>
              <h5>2022 &ndash; Present</h5>
              <p><em>Khwopa Engineering College, Purbanchal University</em></p>
              <p>
                Relevant coursework: Data Structures &amp; Algorithms, Database
                Management Systems, Software Engineering, Object-Oriented Programming,
                Python Programming.
              </p>
            </div>
            <div className="resume-item">
              <h4>Higher Secondary Education (+2)</h4>
              <h5>2019 &ndash; 2021</h5>
              <p><em>Khwopa High School &mdash; GPA: 2.72</em></p>
            </div>
            <div className="resume-item">
              <h4>Secondary Education (SEE)</h4>
              <h5>2019</h5>
              <p><em>Wiseland Secondary School &mdash; GPA: 3.65</em></p>
            </div>

            <h3 className="resume-title">Training &amp; Workshops</h3>
            <div className="resume-item">
              <h4>AI/ML Bootcamp &mdash; Hackademia 2.0</h4>
              <h5>Aug &ndash; Sep 2024</h5>
              <p><em>Kings College, Programiz &amp; Symbiosis Solutions</em></p>
              <ul>
                <li>46-hour intensive program covering Git, Docker, Python, NumPy/Pandas, supervised &amp; unsupervised ML, NLP, LLM prompting, and intelligent agents.</li>
                <li>Successfully completed all modules and assignments.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>AI/ML Workshop</h4>
              <h5>June 2024</h5>
              <p><em>Khwopa Engineering College, organized by Collablabyte</em></p>
              <ul>
                <li>Hands-on sessions on AI and ML concepts and applications.</li>
              </ul>
            </div>
          </div>

          {/* Right column: Projects */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Projects</h3>

            <div className="resume-item">
              <h4>SiteX &mdash; Site Suitability Analysis</h4>
              <h5>Aug 2025 &ndash; Present <span className="badge-ongoing">Ongoing</span></h5>
              <p><em>Final Year Project &mdash; Python, Jupyter Notebook, pandas, scikit-learn</em></p>
              <ul>
                <li>Data-driven system to identify optimal business locations for franchised caf&eacute;s using ML and geospatial analysis.</li>
                <li>Engineered data pipelines for collection, cleaning, and feature engineering to train predictive location scoring models.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Futsal &mdash; Booking &amp; Management Web App</h4>
              <h5>Jun 2024</h5>
              <p><em>5th Semester Project &mdash; FastAPI, React, Node.js</em></p>
              <ul>
                <li>Web-based futsal court booking system enabling users to search, reserve, and manage facilities.</li>
                <li>Focused on modular components, state management, and improved user experience.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>ERestaurant &mdash; Restaurant Management System</h4>
              <h5>2023</h5>
              <p><em>2nd Semester Project &mdash; C++</em></p>
              <ul>
                <li>Console-based system to streamline restaurant operations using object-oriented C++ design.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Other Projects</h4>
              <ul>
                <li>
                  <strong>SpamOrHam</strong> &mdash; Email spam classifier using SVM with a JavaScript frontend for live detection. <em>(Python, scikit-learn)</em>
                </li>
                <li>
                  <strong>GoalVeda</strong> &mdash; Pomodoro productivity app built with Streamlit. <em>(Python, Streamlit)</em>
                </li>
                <li>
                  <strong>AuctionSite</strong> &mdash; Online auction platform for buying and selling cars.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
