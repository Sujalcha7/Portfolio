import { BsBriefcase, BsCardChecklist, BsBarChart, BsBinoculars, BsBrightnessHigh, BsCalendar4Week } from 'react-icons/bs';

const servicesData = [
  {
    icon: <BsBriefcase />,
    title: 'Lorem Ipsum',
    description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
    delay: 100,
  },
  {
    icon: <BsCardChecklist />,
    title: 'Dolor Sitema',
    description: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata',
    delay: 200,
  },
  {
    icon: <BsBarChart />,
    title: 'Sed ut perspiciatis',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    delay: 300,
  },
  {
    icon: <BsBinoculars />,
    title: 'Magni Dolores',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    delay: 400,
  },
  {
    icon: <BsBrightnessHigh />,
    title: 'Nemo Enim',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
    delay: 500,
  },
  {
    icon: <BsCalendar4Week />,
    title: 'Eiusmod Tempor',
    description: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi',
    delay: 600,
  },
];

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
          in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {servicesData.map((service, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="service-item">
                <div className="icon">{service.icon}</div>
                <div>
                  <h4 className="title">
                    <a href="#">{service.title}</a>
                  </h4>
                  <p className="description">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
