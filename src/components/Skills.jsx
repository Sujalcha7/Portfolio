import {
  BsCodeSlash,
  BsGlobe2,
  BsDatabaseFill,
  BsTools,
  BsGpuCard,
  BsCodeSquare,
} from 'react-icons/bs';
import {
  SiPython, SiCplusplus, SiJavascript, SiReact, SiNodedotjs,
  SiPostgresql, SiMongodb, SiJupyter, SiGit, SiGithub,
  SiFlutter, SiFastapi, SiScikitlearn,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skillGroups = [
  {
    category: 'Programming Languages',
    icon: <BsCodeSlash />,
    skills: [
      { icon: <SiPython />, name: 'Python' },
      { icon: <SiCplusplus />, name: 'C / C++' },
      { icon: <FaJava />, name: 'Java' },
      { icon: <SiJavascript />, name: 'JavaScript' },
    ],
  },
  {
    category: 'Web Development',
    icon: <BsGlobe2 />,
    skills: [
      { icon: <SiReact />, name: 'React.js' },
      { icon: <SiNodedotjs />, name: 'Node.js' },
      { icon: <SiFastapi />, name: 'FastAPI' },
      { icon: <SiFlutter />, name: 'Flutter' },
    ],
  },
  {
    category: 'Data & Machine Learning',
    icon: <BsGpuCard />,
    skills: [
      { icon: <SiJupyter />, name: 'Jupyter' },
      { icon: <SiPython />, name: 'pandas' },
      { icon: <SiScikitlearn />, name: 'scikit-learn' },
    ],
  },
  {
    category: 'Databases',
    icon: <BsDatabaseFill />,
    skills: [
      { icon: <SiPostgresql />, name: 'PostgreSQL' },
      { icon: <SiMongodb />, name: 'MongoDB' },
    ],
  },
  {
    category: 'Tools & Practices',
    icon: <BsTools />,
    skills: [
      { icon: <SiGit />, name: 'Git' },
      { icon: <SiGithub />, name: 'GitHub' },
      { icon: <BsCodeSquare />, name: 'VS Code' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills section skills-section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Technologies and tools I work with, grouped by domain.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="skills-groups">
          {skillGroups.map((group, gi) => (
            <div className="skills-group" key={gi} data-aos="fade-up" data-aos-delay={gi * 80 + 100}>
              <div className="skills-group-header">
                <span className="skills-group-icon">{group.icon}</span>
                <h4 className="skills-group-title">{group.category}</h4>
              </div>
              <div className="skills-chips">
                {group.skills.map((skill, si) => (
                  <div className="skill-chip" key={si}>
                    <span className="skill-chip-icon">{skill.icon}</span>
                    <span className="skill-chip-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
