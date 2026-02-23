import {
  BsCodeSlash,
  BsController,
  BsCameraFill,
  BsBookFill,
  BsMusicNoteBeamed,
  BsGlobe2,
  BsCpuFill,
  BsPenFill,
} from 'react-icons/bs';

const interestsData = [
  {
    icon: <BsCodeSlash />,
    label: 'Open Source',
    desc: 'Contributing to and exploring open source projects',
  },
  {
    icon: <BsCpuFill />,
    label: 'Emerging Tech',
    desc: 'AI, ML, and the latest in computer science research',
  },
  {
    icon: <BsController />,
    label: 'Gaming',
    desc: 'Strategy and indie games in my downtime',
  },
  {
    icon: <BsBookFill />,
    label: 'Reading',
    desc: 'Tech blogs, science fiction, and self-improvement',
  },
  {
    icon: <BsCameraFill />,
    label: 'Photography',
    desc: 'Capturing landscapes and everyday moments',
  },
  {
    icon: <BsMusicNoteBeamed />,
    label: 'Music',
    desc: 'Listening to everything from lo-fi to classic rock',
  },
  {
    icon: <BsGlobe2 />,
    label: 'Travel',
    desc: 'Exploring new places and cultures when I can',
  },
  {
    icon: <BsPenFill />,
    label: 'Writing',
    desc: 'Documenting ideas, notes, and occasional blog posts',
  },
];

const Interests = () => {
  return (
    <section id="interests" className="interests section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Interests</h2>
        <p>A few things I enjoy and care about beyond the code editor.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {interestsData.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-6" key={index}>
              <div className="interest-card">
                <span className="interest-icon">{item.icon}</span>
                <p className="interest-label">{item.label}</p>
                <p className="interest-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
