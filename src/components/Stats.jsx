import { BsEmojiSmile, BsJournalRichtext, BsHeadset, BsPeople } from 'react-icons/bs';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const statsData = [
  { icon: <BsEmojiSmile />, end: 232, label: 'Happy Clients', desc: 'consequuntur quae' },
  { icon: <BsJournalRichtext />, end: 521, label: 'Projects', desc: 'adipisci atque cum quia aut' },
  { icon: <BsHeadset />, end: 1453, label: 'Hours Of Support', desc: 'aut commodi quaerat' },
  { icon: <BsPeople />, end: 32, label: 'Hard Workers', desc: 'rerum asperiores dolor' },
];

const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100" ref={ref}>
        <div className="row gy-4">
          {statsData.map((stat, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="stats-item">
                <span className="stats-icon">{stat.icon}</span>
                <span className="counter">
                  {inView ? <CountUp end={stat.end} duration={1} /> : 0}
                </span>
                <p>
                  <strong>{stat.label}</strong> <span>{stat.desc}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
