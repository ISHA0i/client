import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Container fluid className="hero-section min-vh-100 d-flex align-items-center">
      <Row className="justify-content-center text-center w-100">
        <Col md={8} lg={6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="profile-img-wrapper mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="/profile-placeholder.jpg"
                alt="Profile"
                className="rounded-circle profile-img"
                style={{ width: '200px', height: '200px', objectFit: 'cover', border: '3px solid var(--primary-color)' }}
              />
            </motion.div>
            
            <motion.h1
              className="display-4 fw-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm <span className="text-primary">ISHA CHOVATIYA</span>
            </motion.h1>
            
            <motion.p
              className="lead mb-4 text-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              REACT Developer passionate about creating innovative web solutions and AI Enthusiast.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="d-flex justify-content-center gap-3"
            >
              <Button
                as={Link}
                to="/contact"
                variant="primary"
                size="lg"
                className="px-4"
              >
                Hire Me
              </Button>
              <Button
                as={Link}
                to="/projects"
                variant="outline-primary"
                size="lg"
                className="px-4"
              >
                View Projects
              </Button>
            </motion.div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;