import React from 'react'


const About = () => {
  const features = [
    {
      icon: 'bi-diagram-3',
      title: 'Tech Stack Overview',
      description: 'Our Uni-Trade app is powered by the MERN stack: MongoDB, Express, React, and Node.js. This ensures high performance and scalability..',
      link: '#',
    },
    {
      icon: 'bi-github',
      title: 'Project Development',
      description: 'This project is developed and maintained by our team to provide a secure marketplace for students. You can explore our progress and contribute on GitHub.',
      link: '#',
    },
    {
      icon: 'bi-shield-lock',
      title: 'Security & User Experience',
      description: 'We prioritize user security by integrating authentication with LMS credentials and ensuring data privacy throughout the app.',
      link: '#',
    },
  ];
  const teamMembers = [
    {
      name: 'Shaik shivaji',
      photo: '../../public/team-photos/shaik.jpg', 
      location: 'India',
      daysAgo: '3d',
      background: '../team-photos/shaik.jpg', 
      title: 'Lead Developer & Project Manager',
    },
    {
      name: 'chamith kalyn',
      photo: '../../public/team-photos/shaik.jpg',
      location: 'India',
      daysAgo: '4d',
      background: '../team-photos/shaik.jpg',
      title: 'Backend Developer',
    },
    {
      name: 'sarat kumar',
      photo: '/team-photos/teammate3.jpg',
      location: 'California',
      daysAgo: '5d',
      background: '/backgrounds/bg3.jpg',
      title: 'Frontend Developer',
    },
    {
      name: 'srinath',
      photo: '/team-photos/teammate3.jpg',
      location: 'California',
      daysAgo: '5d',
      background: '/backgrounds/bg3.jpg',
      title: 'Testing',
    },
    {
      name: 'Nirikshan',
      photo: '/team-photos/teammate3.jpg',
      location: 'California',
      daysAgo: '5d',
      background: '/backgrounds/bg3.jpg',
      title: 'UI Designer',
    },
    {
      name: 'santosh 3',
      photo: '/team-photos/teammate3.jpg',
      location: 'California',
      daysAgo: '5d',
      background: '/backgrounds/bg3.jpg',
      title: 'Data Base managemrnt',
    },
  ];
  return (
    <div style={{overflow: 'auto', height: '100vh'}}>
      <section> <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">About uni-trade</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          {features.map((feature, index) => (
            <div className="feature col" key={index}>
              <div
                className="feature-icon d-inline-flex align-items-center justify-content-center 
              text-bg-primary bg-gradient fs-2 mb-3"
              >
                <i className={`bi ${feature.icon} d-flex justify-content-center p-1`} style={{ height: '40px', width: "40px" }}></i>
              </div>
              <h3 className="fs-2 text-body-emphasis">{feature.title}</h3>
              <p>{feature.description}</p>
              <a href={feature.link} className="icon-link">
                Call to action <i className="bi bi-chevron-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div></section>
     <section>
     <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Meet Our Team</h2>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {teamMembers.map((member, index) => (
          <div className="col" key={index}>
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{ backgroundImage: `url(${member.background})` }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  {member.title}
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={member.photo}
                      alt={member.name}
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <i className="bi bi-geo-fill me-2"></i>
                    <small>{member.location}</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-calendar3 me-2"></i>
                    <small>{member.daysAgo}</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
     </section>
    </div>
  )
}

export default About
