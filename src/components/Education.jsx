import { BsCalendar3, BsBuilding, BsGeoAlt } from 'react-icons/bs';

const educationData = [
  {
    degree: 'Bachelor of Computer Engineering',
    institution: 'Khwopa Engineering College',
    university: 'Purbanchal University',
    location: 'Bhaktapur, Nepal',
    from: 'Nov 2022',
    to: 'Present',
    description:
      'Currently pursuing a B.E. in Computer Engineering with coursework spanning Data Structures & Algorithms, Database Management Systems, Software Engineering, Object-Oriented Programming, and Python Programming. Building practical skills through semester projects and collaborative learning.',
    initials: 'KEC',
  },
  {
    degree: 'Higher Secondary Education (+2 Science)',
    institution: 'Khwopa Higher Secondary School',
    university: null,
    location: 'Bhaktapur, Nepal',
    from: 'Jul 2019',
    to: 'Sep 2021',
    description:
      'Completed Higher Secondary Education with a Science stream, developing strong foundations in Mathematics, Physics, and Computer Science. GPA: 2.72.',
    initials: 'KHS',
  },
  {
    degree: 'Secondary Education (SEE)',
    institution: 'Wiseland Secondary School',
    university: null,
    location: 'Bhaktapur, Nepal',
    from: '2008',
    to: 'Apr 2019',
    description:
      'Completed Grade 10 (SEE), building a solid academic foundation across core subjects. GPA: 3.65.',
    initials: 'WSS',
  },
];

const Education = () => {
  return (
    <section id="education" className="education section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Education</h2>
        <p>My academic background and the institutions that shaped my technical foundation.</p>
      </div>

      <div className="container">
        <div className="edu-timeline">
          {educationData.map((item, index) => (
            <div
              className="edu-timeline-item"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100 + 100}
            >
              {/* Icon node */}
              <div className="edu-icon-col">
                <div className="edu-icon-circle">
                  <span>{item.initials}</span>
                </div>
                {index < educationData.length - 1 && <div className="edu-connector" />}
              </div>

              {/* Card */}
              <div className="edu-card">
                <div className="edu-card-header">
                  <div className="edu-card-title-group">
                    <h4 className="edu-degree">{item.degree}</h4>
                    <div className="edu-meta">
                      <span className="edu-meta-item">
                        <BsBuilding className="edu-meta-icon" />
                        {item.institution}
                        {item.university && <span className="edu-university"> · {item.university}</span>}
                      </span>
                      <span className="edu-meta-item">
                        <BsGeoAlt className="edu-meta-icon" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                  <div className="edu-date-badge">
                    <BsCalendar3 className="edu-date-icon" />
                    <span>{item.from}</span>
                    <span className="edu-date-arrow">→</span>
                    <span className={item.to === 'Present' ? 'edu-date-present' : ''}>{item.to}</span>
                  </div>
                </div>
                <p className="edu-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
