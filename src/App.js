import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const projects = [
    {
      id: 1,
      title: "Kalaa-1.0.0",
      description: "Kalaa 1.0.0 is a full-stack e-commerce platform designed for artists to showcase and sell their artwork online. Built with a React.js frontend and a Node.js/Express backend, it features a RESTful API, user authentication, and dynamic product management.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
      githubLink: "https://github.com/ISHA0i/Kalaa-1.0.0.git"
    }
  ];

  return (
    <div className="App dark-theme">
      <Navigation />
      <main className="flex-grow-1">
        {/* Hero Section */}
        <section id="home" className="hero-section min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="justify-content-center text-center">
              <Col md={8}>
                <h1 className="display-4 fw-bold mb-4">
                  Hi, I'm <span className="text-primary">ISHA</span>
                </h1>
                <p className="lead mb-4">
                  REACT Developer passionate about creating innovative web solutions and AI Enthusiast.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* About Section */}
        <section id="about" className="py-5">
          <Container>
            <h2 className="text-center mb-5">About Me</h2>
            <Row className="justify-content-center">
              <Col md={8}>
                <p>
                  I'm a passionate React developer with expertise in building modern web applications.
                  I love working with new technologies and solving complex problems.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-5 bg-light">
          <Container>
            <h2 className="text-center mb-5">My Projects</h2>
            <Row className="justify-content-center">
              {projects.map(project => (
                <Col md={8} key={project.id} className="mb-4">
                  <Card className="shadow-sm">
                    <Card.Body className="p-4">
                      <Card.Title className="h3 mb-3">{project.title}</Card.Title>
                      <Card.Text className="text-muted mb-4">{project.description}</Card.Text>
                      <div className="mb-3">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="badge bg-primary me-2 mb-2 p-2">{tech}</span>
                        ))}
                      </div>
                      <Card.Link 
                        href={project.githubLink} 
                        target="_blank" 
                        className="btn btn-outline-primary"
                      >
                        View on GitHub
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-5">
          <Container>
            <h2 className="text-center mb-5">Contact Me</h2>
            <Row className="justify-content-center">
              <Col md={6}>
                <div className="text-center">
                  <p>Email: your.email@example.com</p>
                  <p>LinkedIn: linkedin.com/in/yourprofile</p>
                  <p>GitHub: github.com/yourusername</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
