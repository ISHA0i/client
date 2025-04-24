import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'danger',
        message: 'Failed to send message. Please try again.'
      });
    }
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container className="py-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-center display-4 mb-4">Get In Touch</h2>
              <p className="text-center text-secondary mb-5">
                Have a question or want to work together? Feel free to reach out!
              </p>
              
              {status.message && (
                <Alert variant={status.type} className="mb-4">
                  {status.message}
                </Alert>
              )}

              <Form onSubmit={handleSubmit} className="contact-form">
                <Form.Group className="mb-4">
                  <Form.Label className="text-secondary">Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-control-dark"
                    placeholder="Enter your name"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="text-secondary">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-control-dark"
                    placeholder="Enter your email"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="text-secondary">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-control-dark"
                    placeholder="Your message"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </Form>

              <div className="text-center mt-5">
                <h5 className="text-secondary mb-3">Connect With Me</h5>
                <div className="d-flex justify-content-center gap-4">
                  <motion.a
                    href="https://github.com/ISHA0i?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/isha-chovatiya-4a6194289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default Contact;