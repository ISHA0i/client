import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5004/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <Container className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center display-4 mb-5">My Projects</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project, index) => (
            <Col key={project._id}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-100 project-card">
                  <div className="card-img-container">
                    <Card.Img
                      variant="top"
                      src={project.imageUrl}
                      alt={project.title}
                      className="project-image"
                    />
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="text-primary">{project.title}</Card.Title>
                    <Card.Text className="text-secondary">{project.description}</Card.Text>
                    <div className="mt-auto">
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        {project.tags && project.tags.map((tag, i) => (
                          <span key={i} className="badge bg-primary">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="d-flex gap-2">
                        <Button
                          variant="outline-primary"
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </Button>
                        {project.liveLink && (
                          <Button
                            variant="primary"
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Demo
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </Container>
  );
};

export default Projects;