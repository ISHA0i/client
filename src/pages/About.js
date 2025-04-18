import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Bootstrap', level: 85 }
  ];

  return (
    <Container className="py-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="display-4 mb-4">About Me</h2>
              <div className="position-relative mb-4">
                <img
                  src="/profile-placeholder.jpg"
                  alt="Profile"
                  className="rounded-circle"
                  style={{ 
                    width: '200px', 
                    height: '200px', 
                    objectFit: 'cover',
                    border: '3px solid var(--primary-color)'
                  }}
                />
              </div>
              <p className="lead text-secondary mb-4">
                I'm a passionate Full Stack Developer with experience in building web applications
                using modern technologies. I love turning complex problems into simple, beautiful,
                and intuitive solutions.
              </p>
              <Button
                variant="primary"
                href="/path-to-your-resume.pdf"
                target="_blank"
                className="mb-5"
              >
                <FontAwesomeIcon icon={faDownload} className="me-2" />
                Download Resume
              </Button>
            </motion.div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-center mb-4">Technical Skills</h3>
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="mb-4"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-secondary">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <ProgressBar
                      now={skill.level}
                      variant="primary"
                      style={{ height: '10px' }}
                      className="custom-progress"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default About;