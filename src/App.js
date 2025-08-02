import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './project.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const projects = [
    {
      id: 1,
      title: 'Kalaa-1.0.0',
      description:
        'Kalaa 1.0.0 is a full-stack e-commerce platform designed for artists to showcase and sell their artwork online. Built with a React.js frontend and a Node.js/Express backend, it features a RESTful API, user authentication, and dynamic product management.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
      githubLink: 'https://github.com/ISHA0i/Kalaa-1.0.0.git',
    },
    {
      title: 'Cybersecurity Audit Form Application',
      description:
        'A full-stack web application designed to facilitate the creation, submission, and management of cybersecurity audits. It features a multi-step form with validation, a submissions dashboard, and a RESTful API for CRUD operations.',
      technologies: ['React', 'Node.js', 'Express', 'MySQL', 'CSS', 'Vite'],
      githubLink: 'https://github.com/ISHA0i/Audit-Form.git',
    },
    {
      title: 'Random Schedule Generator',
      description:
        'A web-based tool that automatically generates optimal class schedules based on course selections. Users can input their chosen courses, and the application efficiently creates a conflict-free timetable tailored to their preferences.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
      live: 'https://random-schedule-generator.onrender.com',
    },
    {
      title: 'Google Cloud Skills Boost Profile',
      description:
        'A verified public profile showcasing completed hands-on labs and skill badges on Google Cloud Platform, covering topics like Compute Engine, Cloud Storage, BigQuery, and more.',
      technologies: [
        'Google Cloud Platform',
        'Compute Engine',
        'Cloud Storage',
        'BigQuery',
        'Cloud Functions',
      ],
      link: 'https://www.cloudskillsboost.google/public_profiles/8fc0f2f3-6883-437c-af42-91cef81f84cc',
    },
  ];

  return (
    <div className="App dark-theme">
      <Navigation />
      <main className="flex-grow-1">
        {/* Hero Section */}
        <section
          id="home"
          className="hero-section min-vh-100 d-flex align-items-center"
        >
          <Container>
            <Row className="justify-content-center text-center">
              <Col md={8}>
                <h1 className="display-4 fw-bold mb-4">
                  Hi, I'm <span className="text-primary">ISHA</span>
                </h1>
                <p className="lead mb-4">
                  {/* A passionate <strong>Full-Stack Web Developer</strong> skilled in building real-world,
  scalable applications using <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express</strong>, <strong>MongoDB</strong>, <strong>MySQL</strong>, and <strong>Bootstrap</strong>.<br /><br />
  I've developed production-ready projects like:<br />
  🎨 <a href="https://github.com/ISHA0i/Kalaa-1.0.0.git" target="_blank" rel="noopener noreferrer"><strong>Kalaa</strong></a> – an e-commerce platform for artists<br />
  🛡️ <a href="https://github.com/ISHA0i/Audit-Form.git" target="_blank" rel="noopener noreferrer"><strong>Audit Form App</strong></a> – a multi-step cybersecurity audit platform<br />
  📅 <a href="https://github.com/ISHA0i/Random-Schedule-Generator.git" target="_blank" rel="noopener noreferrer"><strong>Schedule Generator</strong></a> – a smart timetable planner<br /><br />
  I also hold hands-on experience with <strong>Google Cloud Platform</strong>, earning badges in <strong>Compute Engine</strong>, <strong>BigQuery</strong>, and more via real labs.<br /><br />
  Curious, consistent, and code-driven — I turn ideas into user-centric solutions. */}
                  I'm a passionate <strong>Full-Stack Web Developer</strong>{' '}
                  with expertise in <strong>React.js</strong>,{' '}
                  <strong>Node.js</strong>, <strong>MongoDB</strong>, 
                  <strong> MySql</strong>, and <strong>Google Cloud</strong>. I
                  specialize in building scalable, real-world applications that
                  provide efficient solutions for users. Some of the projects
                  I've worked on that's shown below. In addition to web
                  development, I have hands-on experience with{' '}
                  <strong>Google Cloud Platform</strong>, where I've earned
                  badges in areas like <strong>Compute Engine</strong> and{' '}
                  <strong>BigQuery</strong>, further enhancing my ability to
                  build cloud-native applications.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Container>
            <h2 className="text-center mb-5">My Projects</h2>
            <Row className="justify-content-center">
              {projects.map((project) => (
                <Col lg={6} key={project.id} className="mb-4">
                  <Card className={`project-card project-${getProjectTheme(project.title)}`}>
                    <Card.Body className="p-4">
                      <Card.Title className="h3 mb-3">
                        {project.title}
                      </Card.Title>
                      <Card.Text className="text-muted mb-4">
                        {project.description}
                      </Card.Text>
                      <div className="badge-container">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="badge me-2 mb-2"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.githubLink ? (
                        <div className="">
                          <Card.Link
                            href={project.githubLink}
                            target="_blank"
                            className="card-link"
                          >
                            View on GitHub
                          </Card.Link>
                          {project.live && (
                            <Card.Link
                              href={project.live}
                              target="_blank"
                              className="card-link"
                            >
                              Live Demo
                            </Card.Link>
                          )}
                        </div>
                      ) : project.live ? (
                        <Card.Link
                          href={project.live}
                          target="_blank"
                          className="card-link"
                        >
                          Live Demo
                        </Card.Link>
                      ) : (
                        <Card.Link
                          href={project.link}
                          target="_blank"
                          className="card-link"
                        >
                          View Achievement
                        </Card.Link>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function getProjectTheme(title) {
  const titleLower = title.toLowerCase();
  if (titleLower.includes('kalaa')) return 'kalaa';
  if (titleLower.includes('audit')) return 'audit';
  if (titleLower.includes('schedule')) return 'schedule';
  if (titleLower.includes('cloud')) return 'cloud';
  return 'default';
}

export default App;
